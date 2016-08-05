/*
    misc.js <https://github.com/davidfig/misc>
    Released under MIT license <https://github.com/davidfig/misc/license>
    Author David Figatner
    Copyright YOPEY YOPEY LLC
*/

// return the difference between two numbers (greater - lesser)
function difference(a, b)
{
    return (a > b)? a - b : b - a;
}

// returns {most, least, all[]} about array grouped by value
function arrayCount(a)
{
    function addIndex(index)
    {
        for (var i = 0; i < result.length; i++)
        {
            if (result[i].index === index)
            {
                result[i].count++;
                return;
            }
        }
        result.push({index: index, count: 1});
    }

    var result = [];
    for (var i = 0; i < a.length; i++)
    {
        addToIndex(a[i]);
    }
    result.sort(function(a, b) {
        return a.count - b.count;
    });
    return {most: result[result.length - 1].index, least: result[0].index, all: result}
}

// finds the smallest number in an array
function arraySmallest(a)
{
    var smallest = -Infinity;
    for (var i = 0; i < a.length; i++)
    {
        if (a[i] > smallest) smallest = a[i];
    }
    return smallest;
}

function sign(x)
{
    return (x >= 0) ? 1 : -1;
}

// returns whether a and b have the same sign or both equal 0
function sameSign(a, b)
{
    return (a < 0 && b < 0) || (a > 0 && b > 0) || (a === 0 && b === 0);
}

// round number to certain number of decimals
function preciseRound(num, decimals)
{
    var t = Math.pow(10, decimals);
    return (Math.round((num * t) + (decimals > 0 ? 1 : 0) * (Math.sign(num) * (10 / Math.pow(100, decimals)))) / t).toFixed(decimals);
}

// adjusts font-size based on a maxWidth or maxHeight
var fontDummy;
function fontSize (text, maxWidth, maxHeight)
{
    if (!fontDummy)
    {
        fontDummy = document.createElement("div");
        fontDummy.style.position = "absolute";
        fontDummy.style.float = "left";
        fontDummy.style.whiteSpace = "no-wrap";
        fontDummy.style.visibility = "hidden";
        fontDummy.style.fontFamily = 'Open Sans';
        document.body.appendChild(fontDummy);
    }
    var size = 1;
    fontDummy.style.fontSize = size + "px";
    fontDummy.innerHTML = text;
    var count = 0;
    while (count < 1000 && (!maxWidth || fontDummy.offsetWidth < maxWidth) && (!maxHeight || fontDummy.offsetHeight < maxHeight))
    {
        size++;
        fontDummy.style.fontSize = size + "px";
        count++;
    }
    if (count === 1000)
    {
        debug('Misc.fontSize not found.');
    }
    return size - 1;
}

// from: http://stackoverflow.com/questions/6543917/count-number-of-words-in-string-using-javascript
function wordCount(text)
{
    var result = text.match(/(\w+)/g);
    return result ? result.length : 0;
}

function aboutEqual(test, value, percent)
{
    var delta = value * percent;
    return (test === value) || (test > value && test - delta <= value) || (test - delta >= value && test <= value);
}

// Removes duplicates from array and returns new array
// from http://stackoverflow.com/questions/9229645/remove-duplicates-from-javascript-array
function uniqueArray(a)
{
    var seen = {};
    var out = [];
    var len = a.length;
    var j = 0;
    for (var i = 0; i < len; i++)
    {
        var item = a[i];
        if (seen[item] !== 1)
        {
            seen[item] = 1;
            out[j++] = item;
        }
    }
    return out;
}

function clamp(n, min, max)
{
	return Math.min(Math.max(n, min), max);
}

// blend the percent of color2 into color1
function blend(percent, color1, color2)
{
    if (percent === 0)
    {
        return color1;
    }
    if (percent === 1)
    {
        return color2;
    }
    var r1 = color1 >> 16;
    var g1 = color1 >> 8 & 0x0000ff;
    var b1 = color1 & 0x0000ff;
    var r2 = color2 >> 16;
    var g2 = color2 >> 8 & 0x0000ff;
    var b2 = color2 & 0x0000ff;
    var percent1 = 1 - percent;
    var r = percent1 * r1 + percent * r2;
    var g = percent1 * g1 + percent * g2;
    var b = percent1 * b1 + percent * b2;
    return r << 16 | g << 8 | b;
}

var Misc = {
    difference: difference,
    arraySmallest: arraySmallest,
    arrayCount: arrayCount,
    sign: sign,
    sameSign: sameSign,
    preciseRound: preciseRound,
    fontSize: fontSize,
    wordCount: wordCount,
    aboutEqual: aboutEqual,
    uniqueArray: uniqueArray,
    clamp: clamp,
    blend: blend
};

// add support for AMD (Asynchronous Module Definition) libraries such as require.js.
if (typeof define === 'function' && define.amd)
{
    define(function()
    {
        return {
            Misc: Misc
        };
    });
}

// add support for CommonJS libraries such as browserify.
if (typeof exports !== 'undefined')
{
    module.exports = Misc;
}

// define globally in case AMD is not available or available but not used
if (typeof window !== 'undefined')
{
    window.Misc = Misc;
}
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

var Misc = {
    difference: difference,
    arraySmallest: arraySmallest,
    sign: sign,
    preciseRound: preciseRound,
    fontSize: fontSize,
    wordCount: wordCount,
    aboutEqual: aboutEqual,
    uniqueArray: uniqueArray,
    clamp: clamp
};

// add support for AMD (Asynchronous Module Definition) libraries such as require.js.
if (typeof define === 'function' && define.amd)
{
    define(function()
    {
        return {
            Angle: Angle
        };
    });
}

// add support for CommonJS libraries such as browserify.
if (typeof exports !== 'undefined')
{
    module.exports = Angle;
}

// define globally in case AMD is not available or available but not used
if (typeof window !== 'undefined')
{
    window.Angle = Angle;
}
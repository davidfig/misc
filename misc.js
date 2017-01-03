/*
    misc.js <https://github.com/davidfig/misc>
    Released under MIT license <https://github.com/davidfig/misc/license>
    Author David Figatner
    Copyright YOPEY YOPEY LLC
*/

/** @class */
class Misc
{
    /**
     * return the difference between two numbers (greater - lesser)
     * @param {number} a
     * @param {number} b
     * @return {number}
     */
    difference(a, b)
    {
        return (a > b)? a - b : b - a;
    }

    /**
     * returns {most, least, all[]} array grouped by value
     * @param {Array} a
     * @return {object} {most: most, least: least, all: Array}
     */
    arrayCount(a)
    {
        function addIndex(index)
        {
            for (let i = 0; i < result.length; i++)
            {
                if (result[i].index === index)
                {
                    result[i].count++;
                    return;
                }
            }
            result.push({index: index, count: 1});
        }

        const result = [];
        for (let i = 0; i < a.length; i++)
        {
            addIndex(a[i]);
        }
        result.sort(
            function(a, b)
            {
                return a.count - b.count;
            }
        );
        return {most: result[result.length - 1].index, least: result[0].index, all: result};
    }

    /**
     * finds the smallest number in an array
     * @param {Array} a
     * @return {number}
     */
    arraySmallest(a)
    {
        var smallest = -Infinity;
        for (var i = 0; i < a.length; i++)
        {
            if (a[i] > smallest) smallest = a[i];
        }
        return smallest;
    }

    /**
     * returns whether a and b have the same sign or both equal 0
     * @param {number} a
     * @param {number} b
     * @param {boolean}
     */
    sameSign(a, b)
    {
        return (a < 0 && b < 0) || (a > 0 && b > 0) || (a === 0 && b === 0);
    }

    /**
     * round number to certain number of decimals
     * @param {number} num
     * @param {number} decimals
     * @return {number}
     */
    preciseRound(num, decimals)
    {
        var t = Math.pow(10, decimals);
        return (Math.round((num * t) + (decimals > 0 ? 1 : 0) * (Math.sign(num) * (10 / Math.pow(100, decimals)))) / t).toFixed(decimals);
    }

    /**
     * calculate ideal font size
     * @param {string} text (use maximum-sized text)
     * @param {number} maxWidth
     * @param {number} [maxHeight]
     * @param {string} [fontFamily]
     */
    fontSize(text, maxWidth, maxHeight, fontFamily)
    {
        if (!this.fontDummy)
        {
            this.fontDummy = document.createElement('div');
            this.fontDummy.style.position = 'absolute';
            this.fontDummy.style.float = 'left';
            this.fontDummy.style.whiteSpace = 'no-wrap';
            this.fontDummy.style.visibility = 'hidden';
            this.fontDummy.style.fontFamily = fontFamily || 'Open Sans';
            document.body.appendChild(this.fontDummy);
        }
        var size = 1;
        this.fontDummy.style.fontSize = size + 'px';
        this.fontDummy.innerHTML = text;
        var count = 0;
        while (count < 1000 && (!maxWidth || this.fontDummy.offsetWidth < maxWidth) && (!maxHeight || this.fontDummy.offsetHeight < maxHeight))
        {
            size++;
            this.fontDummy.style.fontSize = size + 'px';
            count++;
        }
        if (count === 1000)
        {
            console.error('Misc.fontSize not found.');
        }
        return size - 1;
    }

    /**
     * from: http://stackoverflow.com/questions/6543917/count-number-of-words-in-string-using-javascript
     * @param {string} text
     * @return {number}
     */
    wordCount(text)
    {
        var result = text.match(/(\w+)/g);
        return result ? result.length : 0;
    }

    /**
     * returns whether the test value is about equal to the value (i.e., within the given percentage)
     * @param {number} test
     * @param {number} value
     * @param {number} percent
     * @return {boolean}
     */
    aboutEqual(test, value, percent)
    {
        var delta = value * percent;
        return (test === value) || (test > value && test - delta <= value) || (test - delta >= value && test <= value);
    }

    /**
     * Removes duplicates from array and returns new array
     * from http://stackoverflow.com/questions/9229645/remove-duplicates-from-javascript-array
     * @param {Array} a
     * @return {Array}
     */
    uniqueArray(a)
    {
        const seen = {};
        const out = [];
        const len = a.length;
        let j = 0;
        for (let i = 0; i < len; i++)
        {
            const item = a[i];
            if (seen[item] !== 1)
            {
                seen[item] = 1;
                out[j++] = item;
            }
        }
        return out;
    }

    /**
     * clamps a number
     * @param {number} n to clamp
     * @param {number} min
     * @param {number} max
     * @return {number}
     */
    clamp(n, min, max)
    {
        return Math.min(Math.max(n, min), max);
    }
}

module.exports = new Misc();

// for eslint
/* globals document, console */
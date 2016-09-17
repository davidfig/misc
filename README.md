## misc.js
miscellaneous javascript functions

## Installation
include misc.js in your project or add to your workflow

    npm install yy-misc

# API Reference
**Kind**: global class  

* [Misc](#Misc)
    * [.difference(a, b)](#Misc+difference) ⇒ <code>number</code>
    * [.arrayCount(a)](#Misc+arrayCount) ⇒ <code>object</code>
    * [.arraySmallest(a)](#Misc+arraySmallest) ⇒ <code>number</code>
    * [.sameSign(a, b)](#Misc+sameSign)
    * [.preciseRound(num, decimals)](#Misc+preciseRound) ⇒ <code>number</code>
    * [.wordCount(text)](#Misc+wordCount) ⇒ <code>number</code>
    * [.aboutEqual(test, value, percent)](#Misc+aboutEqual) ⇒ <code>boolean</code>
    * [.uniqueArray(a)](#Misc+uniqueArray) ⇒ <code>Array</code>
    * [.clamp(n, min, max)](#Misc+clamp) ⇒ <code>number</code>

<a name="Misc+difference"></a>

### misc.difference(a, b) ⇒ <code>number</code>
return the difference between two numbers (greater - lesser)

**Kind**: instance method of <code>[Misc](#Misc)</code>  

| Param | Type |
| --- | --- |
| a | <code>number</code> | 
| b | <code>number</code> | 

<a name="Misc+arrayCount"></a>

### misc.arrayCount(a) ⇒ <code>object</code>
returns {most, least, all[]} array grouped by value

**Kind**: instance method of <code>[Misc](#Misc)</code>  
**Returns**: <code>object</code> - {most: most, least: least, all: Array}  

| Param | Type |
| --- | --- |
| a | <code>Array</code> | 

<a name="Misc+arraySmallest"></a>

### misc.arraySmallest(a) ⇒ <code>number</code>
finds the smallest number in an array

**Kind**: instance method of <code>[Misc](#Misc)</code>  

| Param | Type |
| --- | --- |
| a | <code>Array</code> | 

<a name="Misc+sameSign"></a>

### misc.sameSign(a, b)
returns whether a and b have the same sign or both equal 0

**Kind**: instance method of <code>[Misc](#Misc)</code>  

| Param | Type |
| --- | --- |
| a | <code>number</code> | 
| b | <code>number</code> | 
|  | <code>boolean</code> | 

<a name="Misc+preciseRound"></a>

### misc.preciseRound(num, decimals) ⇒ <code>number</code>
round number to certain number of decimals

**Kind**: instance method of <code>[Misc](#Misc)</code>  

| Param | Type |
| --- | --- |
| num | <code>number</code> | 
| decimals | <code>number</code> | 

<a name="Misc+wordCount"></a>

### misc.wordCount(text) ⇒ <code>number</code>
from: http://stackoverflow.com/questions/6543917/count-number-of-words-in-string-using-javascript

**Kind**: instance method of <code>[Misc](#Misc)</code>  

| Param | Type |
| --- | --- |
| text | <code>string</code> | 

<a name="Misc+aboutEqual"></a>

### misc.aboutEqual(test, value, percent) ⇒ <code>boolean</code>
returns whether the test value is about equal to the value (i.e., within the given percentage)

**Kind**: instance method of <code>[Misc](#Misc)</code>  

| Param | Type |
| --- | --- |
| test | <code>number</code> | 
| value | <code>number</code> | 
| percent | <code>number</code> | 

<a name="Misc+uniqueArray"></a>

### misc.uniqueArray(a) ⇒ <code>Array</code>
Removes duplicates from array and returns new array
from http://stackoverflow.com/questions/9229645/remove-duplicates-from-javascript-array

**Kind**: instance method of <code>[Misc](#Misc)</code>  

| Param | Type |
| --- | --- |
| a | <code>Array</code> | 

<a name="Misc+clamp"></a>

### misc.clamp(n, min, max) ⇒ <code>number</code>
clamps a number

**Kind**: instance method of <code>[Misc](#Misc)</code>  

| Param | Type | Description |
| --- | --- | --- |
| n | <code>number</code> | to clamp |
| min | <code>number</code> |  |
| max | <code>number</code> |  |


* * *

Copyright (c) 2016 YOPEY YOPEY LLC - MIT License - Documented by [jsdoc-to-markdown](https://github.com/75lb/jsdoc-to-markdown)
## Overview

A simple nodejs web api

## Requirements

Create a nodejs API with the following endpoints:

#### Bubble Sort

This endpoint shall take an array of unsorted numbers, sort it using the bubble sort algorithm and return the sorted array.

#### Merge Sort

This endpoint shall take an array of unsorted numbers, sort it using the merge sort algorithm and return the sorted array.

## Implementation Details

#### Should have

* both endpoints should take only one parameter: an array of numbers called “unsortedNumbers”.
* take into account API design, error handling, and any other best practices.
* handle any edge cases of both time and space complexity .

## Development

We will be using express.js


**Errors**

Errors will be handled by a custom error handler, which will simply create a response with the propagated error and the corresponding return status.


**Edge cases**

The *length* of the array is an obvious constraint, which might hinder the performance of our application. Our goal is to find a number, which can provide decent performance (e.g. ~1 sec) without compromising functionality. We can find that number by trial and error.

Passing an array that has one or more non-numeric members will result in an error.

## Installation

Application was tested on node v8.x

```bash
git clone git@github.com:gsuntres/simple-api-nodejs.git
cd simple-api-nodejs
npm install
npm start
```

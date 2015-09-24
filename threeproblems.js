/**
 * Solves the first 3 problems of five that every SE should solve.
 * Created by Clint on 9/24/2015.
 */

//Problem 1: Write four functions that return the sum of the numbers in a given list using a for-loop, a while-loop, recursion, and underscore.
    //Call them sumFor, sumWhile, sumRecursion, and sumTheSimpleWay.
var testnums = [1, 2, 3, 4];

/*
// uses for loop:
function sumFor(nums) {
    var total = 0;
    for (var i = 0; i < nums.length; i++) {
        total += nums[i];
    }
    return total;
}

console.log("sumFor: " + sumFor(testnums));


// uses recursion:
function sumRecursion(nums) {
    if (nums.length === 0) {
        return 0;
    } else {
        return nums[0] + sumRecursion( nums.slice(1, nums.length));
    }
}

console.log("sumRecursion: " + sumRecursion(testnums));

//console.log("Hello!!!");


function add(memo, num) {
    return memo + num;
}

function sumTheSimpleWay(nums) {
    return _.reduce(nums, add, 0);
}

console.log("sumTheSimpleWay: " + sumTheSimpleWay(testnums));
    */


// Problem 2: Write a function called zipList that accepts two lists of EQUAL length and returns the result of alternatingly taking elements.
// For example: given the two lists [a, b, c] and [1, 2, 3], the function should return [a, 1, b, 2, c, 3]. zipList should not use
// underscore. Now write a function called zipListTheSimpleWay that does the same thing using underscore.
var testList1 = [1, 2, 3];
var testList2 = ["a", "b", "c"];

function zipList(list1, list2) {
    var resultList = [];
    for (var i = 0; i < list1.length; i++) {
        resultList.push(list1[i], list2[i]);
    }
    return resultList;
}

console.log( zipList(testList1, testList2) );


function zipListTheSimpleWay(list1, list2) {
    return _.flatten(_.zip(list1, list2));
}

console.log( zipListTheSimpleWay(testList1, testList2) );


// Problem 3: Write a function called fib that returns a list of the first 100 Fibonacci numbers. By definition, the first two numbers in
// the Fibonacci sequence are 0 and 1, and each subsequent number is the sum of the previous two. As an example, here are the first 10
// Fibonnaci numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, and 34.

function fib() {
    var tail = 0;
    var head = 1;
    var fibList = [tail, head];
    for (var i = 0; i < 98; i++) {
        var tempHead = head;
        head = head + tail;
        tail = tempHead;
        fibList.push(head);
    }
    return fibList;
}

console.log ("fib through 100 numbers: " + fib());
console.log(fib().length);








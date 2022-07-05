// 1) Make an array of numbers that are doubles of the first array
function doubleNumbers(arr) {
    return arr.map(item => item * 2)
}
console.log(doubleNumbers([2, 5, 100]));


// 2) Take an array of numbers and make them strings

function stringItUp(arr) {
    return arr.map(item => item + '')
}

console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]


// 3) Capitalize each of an array of names

function capitalizeNames(arr) {
    return arr.map(item => item[0].toUpperCase() + item.slice(1)
        .toLowerCase())
}

console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]



// 4) Make an array of strings of the names

function namesOnly(arr) {
    let result = []
    arr.map(obj => {
        result.push(obj.name)
    })
    return result
}

console.log(namesOnly([{
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));

// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"];


// 5) Make an array of strings of the names saying whether or not they can go to The Matrix


function makeStrings(arr) {
    let result = []
    arr.map(obj => {
        let txt = obj.age >= 18 ? ' can go to The Matrix' : ' is under age!!'
        result.push(obj.name + txt)
    })
    return result
}

console.log(makeStrings([{
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));
// ["Angelina Jolie can go to The Matrix",
// "Eric Jones is under age!!",
// "Paris Hilton is under age!!",
// "Kayne West is under age!!",
// "Bob Ziroll can go to The Matrix"]

// under age means not 18 +;


// 6)  If the given input is an array of numbers, return the sum of all the positives ones. If the array is empty or there aren't any positive numbers, return 0.
function sumPositives(arr) {
    if (arr.length) {
        let positive = arr.filter(a => a >= 0)
        return positive.reduce((a, b) => a + b, 0)

    }
    return 0
}

const input = [1, -4, 12, 0, -3, 29, -150]; // -> //   42
console.log(sumPositives(input))


// 7) Find the difference in age between the oldest and youngest family members, and return their respective ages and the age difference.

function difference(arr) {
    let min = +Infinity
    let max = -Infinity
    arr.map(obj => {
        if (obj.age < min)
            return min = obj.age
        if (obj.age > max)
            return max = obj.age
    })
    return [min, max, max - min]
}

const input = [{
        name: 'John',
        age: 13
    },
    {
        name: 'Mark',
        age: 56,
    },
    {
        name: 'Rachel',
        age: 45,
    },
    {
        name: 'Nate',
        age: 67,
    },
    {
        name: 'Jeniffer',
        age: 65,
    }
];
console.log(difference(input))
// Output ->  [13, 67, 54];

//Count the occurrences of distinct elements in the given 2D array. The given input is an array,
// the elements of which are arrays of strings. The result is an object whose
// property names are the values from the arrays and their value is the number of their occurrences.

function count(input8) {
    let obj = {}
    input8.map(row => row.map(el => obj[el] ? obj[el] += 1 : obj[el] = 1))
    return obj
}

const input8 = [
    ['a', 'b', 'c'],
    ['c', 'd', 'f'],
    ['d', 'f', 'g'],
];
console.log(count(input8))
// const output8 =   {
//     a: 1,
//     b: 1,
//     c: 2,
//     d: 2,
//     f: 2,
//     g: 1,
// }

// 9)

// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times.
// You may assume that the majority element always exists in the array.

function majority(arr) {
    let obj = {}
    arr.map(el => obj[el] ? obj[el] += 1 : obj[el] = 1)
    for (key in obj) {
        if (obj[key] > arr.length / 2)
            return key
    }
}
console.log(majority([2, 2, 1, 1, 1, 2, 2]))
// Input: nums = [3,2,3]
// Output: 3

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

// NOTE if the n / 2 is for example 3.5 you can assume that the majority elements appears not 3.5 times but 4 times

// 10) gtnel trvats array i miji 3rd amenashate krknvox tive;

function repeat(arr) {
    let obj = {}
    arr.map(el => obj[el] ? obj[el] += 1 : obj[el] = 1)
    arrCount = Object.entries(obj)
    arrCount.sort((a, b) => b[1] - a[1])
    return arrCount[2][0]
}
console.log(repeat([1, 1, 1, 2, 2, 2, 2, 3, 4, 5, 5]))


// 11) Given a string s and an array of strings words, determine whether s is a prefix string of words.
//
// A string s is a prefix string of words if s can be made by concatenating the first k strings in words for some positive k no larger than words.length.
//
// Return true if s is a prefix string of words, or false otherwise.

function prefix(s, words) {
    return words.join('')
        .includes(s)
}
console.log(prefix('iloveleetcode', ["i", "love", "leetcode", "apples"]))

// Input: s = "iloveleetcode", words = ["i","love","leetcode","apples"]
// Output: true
// Explanation:
// s can be made by concatenating "i", "love", and "leetcode" together.


// 12) Given an array of objects where objects have the following structure return an array of objects also containing
//     a field country, for example if phone number starts with +374 the field country will be Armenia, you can assume that
// first 4characters of phoneNumber represent the country, so you can just query them ,the country codes are given below,
// you will need to make the names uppercase,
// also there may or may not be a field relation which will be a string representing the name of one of the objects in the array
// you will need to replace that string with a reference to that actual object

///
function reStructure(phoneCountryCodes, arr) {

    arr.map((obj, i) => {
        obj.name = obj.name.toUpperCase()
        obj.country = phoneCountryCodes[obj.phoneNumber.slice(0, 4)]
        obj.relation = arr[i]
    })
    return arr
}
const phoneCountryCodes = {
    '+374': 'Armenia',
    '+375': 'Somali',
    '+376': 'Russia',
    '+377': 'Hoktemberyan',
}

const arrOfObjects = [

    {
        name: 'sarah',
        age: 32,
        phoneNumber: '+374000000',
        relation: 'nelly'
    },
    {
        name: 'nelly',
        age: 11,
        phoneNumber: '+3750020000',
        relation: 'sarah'
    }
];

const referancetoSarahObject = arrOfObjects[0];
const referanceToNellyObject = arrOfObjects[1];
console.log(reStructure(phoneCountryCodes, arrOfObjects, referancetoSarahObject, referanceToNellyObject))

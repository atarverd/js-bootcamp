// 1. Write a function that checks if the number is palindrome(121, 23432), don't use strings, and work with numbers.
function isPalindrome(number) {
    let tempReversed = 0
    let tempNumber = number
    while (number) {
        tempReversed += (number % 10)
        tempReversed *= 10
        number = Math.floor(number / 10)
    }
    tempReversed /= 10
    return tempReversed === tempNumber
}
isPalindrome(121)


// 2. Write a function that finds the first 3 "Happy" numbers (p.s  number is happy if the sum of the dividers(not including the number itself) is equal to the number itself i.e 6 = 1 + 2 + 3,  28 = 1 + 2 + 4 + 7 + 14).

function happyNumbers() {
    let count = 0
    let i = 2
    while (count < 3) {
        let sum = 0;
        for (let j = 1; j < i; j++) {
            if (i % j === 0)
                sum += j
        }
        if (sum === i) {
            console.log(sum)
            count++
        }
        i++
    }
}
happyNumbers()


// 1. Fill. Write a function that creates a new array with given values

function fillArray(length, value) {
    let newArray = []
    for (let i = 0; i < length; i++) {
        newArray[i] = value
    }
    return newArray
}

fillArray(3, 'a')


// 2. Reverse. Write a function that reverts the input array.

function reverseArray(array) {
    let reversedArray = []
    for (let i = 0; i < array.length; i++) {
        reversedArray[i] = array[array.length - 1 - i]
    }
    console.log(reversedArray)
}

reverseArray([1, 2, 3, 4])


// 3. Compact. Write a method that clears array from all unnecessary elements, like false, undefined, empty strings, zero, null

function compact(array) {
    let compactedArray = []
    for (let i = 0; i < array.length; i++) {
        if (array[i])
            compactedArray[compactedArray.length] = array[i]
    }
    console.log(compactedArray)
}

compact([0, 1, false, 2, undefined, '', 3, null])

// 4. From Pairs. Write a method that returns an object composed of key-value pairs.

function fromParis(array) {
    let object = {}
    for (let i = 0; i < array.length; i++) {
        object[array[i][0]] = array[i][1]
    }
    console.log(object)
}

fromParis([
    ['a', 1],
    ['b', 2]
])

// 5. Without. The method should return an array without listed values. Let’s try to find a solution when input data only primitive data types.

function without(array, ...args) {
    let newArray = []
    for (let i = 0; i < args.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j] === args[i])
                array[j] = null
        }
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i])
            newArray[newArray.length] = array[i]
    }
    console.log(newArray)
}

without([1, 2, 3, 1, 2], 1, 2)

// 6. Unique. Write a method that returns a duplicate-free array

function unique(array) {
    let uniqueArray = []
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] === array[j]) {
                array[j] = null
            }
        }
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i])
            uniqueArray[uniqueArray.length] = array[i]
    }
    console.log(uniqueArray)
}

unique([1, 2, 1, 2, 3])

// 7. IsEqual. Write a function that compares two arrays and returns true if they are identical.

function IsEqual(arr1, arr2) {
    if (arr1.length !== arr2.length)
        return false
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i])
            return false
    }
    return true
}

console.log(IsEqual([1, 2, 3, 5], [1, 2, 3, 4]))

// 8. Flatten. Write a function that turns a deep array into a plain array. Please, do not use array.flat(); to make this task more enjoyable.

let flattenArray = []

function flatten(array) {

    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i]))
            flatten(array[i])
        else
            flattenArray[flattenArray.length] = array[i]
    }
    return flattenArray
}

flattenArray = flatten([1, 2, [3, 4, [5, 6, 7]]])
console.log(flattenArray)

// 9. Chunk. Write a method that splits an array into parts of determined size

function chunk(array, size) {
    let splitCount = Math.floor(array.length / size)
    let chunkArray = []
    for (let i = 0; i <= array.length; i++) {
        let tempArray = []
        for (let j = 0; j < size; j++) {
            if (array[i + j])
                tempArray[tempArray.length] = array[i + j]
        }
        chunkArray[chunkArray.length] = tempArray
        i += size - 1
    }
    console.log(chunkArray)
}

chunk([1, 2, 3, 4, 5, 6, 7], 4)

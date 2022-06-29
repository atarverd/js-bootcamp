// 1) Write a function named makeQuestion, that takes three arguments: two operands and an operator, and returns a string with the question "What is [oprd1] [opr] [oprd2]?".
function makeQuestion(oprd1, oprd2, opr) {
    return `What is ${oprd1} ${opr} ${oprd2}`
}
makeQuestion('a', 'b', '+')

// // 2) Make an object assign 3 different keys to it by 3 different ways that we have learned;
let obj = {
    key: '12qwtf'
}
obj.name = 'name'
obj['age'] = 20


// 3) Find the odd one out in the provided array. All array elements are equal, except one. Your function must return this odd one out. ->   ["a", "a", "b", "a"] -> // 'b';

//same as 6

// 4) Deduce the smallest and the largest number from the supplied numeric array. Return an array containing these numbers, smallest number first.   [14, 28, 3, 8, 2] -> [2, 28];

function minMax(arr) {
    let max = arr[0]
    let min = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i])
            max = arr[i]
        if (min > arr[i])
            min = arr[i]
    }
    return [min, max]
}

console.log(minMax([13, 14, 10, 20]))

// 5) Write a function to separate a single array in to two separate arrays. The supplied array will only contain numeric values. Your function should output two arrays:one containing odd numbers, the other containing even numbers.

function separate(arr) {
    let oddArr = []
    let evenArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2)
            oddArr[oddArr.length] = arr[i]
        else
            evenArr[evenArr.length] = arr[i]
    }
    console.log(oddArr, evenArr)
}
separate([1, 2, 3, 4, 5, 6])

// 6) In this JavaScript array exercise, the supplied array may contain duplicate values. Write a function to return only unique values — values that only occur exactly one time within the provided array. [1, 1, 2, 3, 3, 4, 4, 5] -> [2, 5];

function unique(arr) {
    let arr1 = []
    for (let i = 0; i < arr.length; i++) {
        let count = 0
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] == arr[j])
                count++
        }
        if (count == 1)
            arr1[arr1.length] = arr[i]
    }
    console.log(arr1)
}
unique([1, 1, 2, 3, 3, 4, 4, 5])

// 7) Your function must accept 2 arrays, then return the common words from each.   arr1 ["dog", "cat", "parrot"] arr2 ["lizard", "rat", "cat"] -> ["cat"]

function commonWords(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++)
        for (let j = 0; j < arr2.length; j++)
            if (arr1[i] == arr2[j])
                console.log(arr1[i])
}

commonWords(["dog", "cat", "parrot"], ["lizard", "rat", "cat"])

// 8) Write a function to accept two arrays. Does the first array contain all elements represented in the second array? arr1 ["monday", "tuesday"], arr2 ["tuesday"] -> false;


function contain(arr1, arr2) {
    let bool = false
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++)
            if (arr1[i] == arr2[j])
                bool = true
        if (!bool)
            return bool
    }
    return bool
}
console.log(contain(["monday", "tuesday"], ["tuesday"]))

// 9) The supplied array will contain both numeric and non-numeric characters.   Return a new array where all numeric values are positioned at the beginning of the array,  ["b", 6, "a", "q", 7, 2] -> [2, 6, 7, "a", "b", "q"]


function sort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++)
            if (String(arr[j])
                .charCodeAt(0) > String(arr[j + 1])
                .charCodeAt(0)) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
    }
    console.log(arr)
}
sort(["b", 6, "a", "q", 7, 2])


// 10) From the first array, construct a new array based on the indexes supplied.   ["mon", "tue", "wed", "thur", "fri"] -> [1, 3, 4];


function construct(arr1, arr2) {
    let newArr = []
    for (let i = 0; i < arr2.length; i++) {
        if (arr2[i])
            newArr[newArr.length] = arr1[arr2[i]]
    }
    console.log(newArr)
}

construct(["mon", "tue", "wed", "thur", "fri"], [1, 3, 4])

// // 11) This one is a classic. Simply reverse the string without using reverse(). 'abcd' -> 'dcba';

function reverse(str) {
    let reversedStr = ''
    for (let i = str.length - 1; i >= 0; i--)
        reversedStr += str[i]
    console.log(reversedStr)
}
reverse('asdf')


// // grel funkciya vore vorpes argument stanum e erku zangvats, zangvatsneric meke kochvum e strings myuse lookups vore kveradardzni array vorum nerarvats klnien te lookup arrayi miji andamneric amen meke qani angam ka strings array um

function find(lookup, strings) {
    let count = []
    for (let i = 0; i < lookup.length; i++) {
        count[i] = 0
        for (let j = 0; j < strings.length; j++) {
            if (lookup[i] == strings[j])
                count[i] += 1
        }
    }
    console.log(count)
}

const lookup = ['i', 'love', 'sadakhlo', 'esminich']
const strings = ['i', 'i', 'sadakhlo', 'i'];

find(lookup, strings)


// // grel funkcia vore kstana vorpes argument array kazmvac 4 hat tvic orinak [1,2,3,4] kveradardzni object vore kunena erku hat key voronq klinen hamapatasxanabar  arrayum gtnvox tveric 4 ic 3 i amenapoqr gumare ev nayev amenamec gumare



function foo(arr) {
    let obj = {
        max: 0,
        min: 0
    }
    let minId = 0;
    let maxId = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[minId] > arr[i])
            minId = i
        if (arr[maxId] < arr[i])
            maxId = i
    }
    for (let i = 0; i < arr.length; i++) {
        if (minId != i)
            obj.min += arr[i]
        if (maxId != i)
            obj.max += arr[i]
    }
    console.log(obj)

}
foo([1, 2, 3, 4])

// trvats e qarakusi maric vore baxkacac e tveric petk e aj ankyunagcov hamapatasxanabar tvere gumarel irar

function foo(arr) {
    let sum = 0;
    let i = 0;
    while (i < arr.length) {
        sum += arr[i]
        i += Math.sqrt(arr.length) + 1
    }
    return sum
}
console.log(foo([1, 2, 3, 4, 5, 6, 7, 8, 9]))

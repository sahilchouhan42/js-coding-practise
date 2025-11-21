//spread operator

// const array1 = [1, 2, 3]
// const array2 = [4, 5, 6]

// const newArray = [...array1, ...array2]
// console.log(newArray)

//spread operator in objects

const obj1 = {
    key1: 'valu1',
    key2: 'valu2',
    key3: 'valu3',
}

const obj2 = {
    key4: 'value4',
    key5: 'value5',
    key6: 'value6',
}

const newObj = {...obj1, ...obj2}
console.log(newObj)

const newObj2 = {...['item1', 'item2']}
console.log(newObj2)

const abcObj = {...'abcdefghijklmnopqrstuvwxyz'}
console.log(abcObj)


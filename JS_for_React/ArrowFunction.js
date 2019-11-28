// ex 1)
function plusTwo(s) {
    return s + 2
}

console.log(plusTwo(10))

// ex 2)
plusTwo = (s) => {
    return s + 2
}

console.log(plusTwo(10))



// ex 3) ArrowFunction
// {}가 없을 땐 return 이 없는 것이 문법적으로 맞음.
plusTwo = (s) => s + 2
console.log(plusTwo(10))

//ex 4) 파라미터가 하나일 때는 ()또한 생략 가능.
plusTwo = s => s + 2
console.log(plusTwo(10))


//ex 5) 배열(리스트)를 잘 조작하고 싶다. 값들에 +-*/, 필터링 ...

// map
arr = [1,2,3,4,5,6,7,8,13,4526,7,232,567]

// [i*2 for i in arr] = map
// value = v, 알아서 적어도 됨
arr_map = arr.map(function(value) {return value*2})
console.log(arr_map)

arr_map = arr.map(v =>  v*2)
console.log(arr_map)


// filter, 10이상인 value들만 출력
arr = [1,2,3,4,5,6,7,8,13,4526,7,232,567]
arr_filter = arr.filter(v => v > 10)
console.log(arr_filter)
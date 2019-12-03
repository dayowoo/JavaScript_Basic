function sayHello(name, byCallback) {
    setTimer(()=>{
        console.log(name+"님 안녕하세요")
        byCallback()
    }, 2000);
}

sayHello("Mike", function() {
    console.log("안녕히 가세요")
})

function sayHello2(name) {
    return new Promise((resolve, reject) => {
         setTimeout(()=>{
            console.log(name+"님 안녕하세요")
            // 
            resolve()
         }, 3000)
    }
    )
}

sayHello2("Frank")
    .than(()=> console.log("안녕히 가세요"))
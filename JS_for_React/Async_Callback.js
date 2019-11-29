// Asynchronous

//이 함수를 2초 뒤에 실행시켜주는 어떤것 -2
setTimeout(()=>{console.log("안녕하세요")}, 2000)

// -1
console.log("안녕히 가세요")




// Callback
function doSomethingElseAsync(callback) {
    console.log('doSomethingElseAsync: Wait for half a sec');
    setTimeout(function() { callback(); }, 500);
}



// sayGoodbye = callback
function sayHello(sayGoodbye) {
    setTimeout(()=>{
        console.log("안녕하세요")
        sayGoodbye()
    }, 2000);
}

sayHello(()=>console.log("안녕히 가세요"));


// Mike님 안녕하세요 -> 안녕히 가세요 

function sayHello(name, byCallback) {
    setTimer(()=>{
        console.log(name+"님 안녕하세요")
        byCallback()
    }, 2000);
}

sayHello("Mike", function() {
    console.log("안녕히 가세요")
})
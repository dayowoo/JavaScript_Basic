function sayHello(name, byCallback) {
    setTimer(()=>{
        console.log(name+"님 안녕하세요")
        byCallback()
    }, 2000);
}

sayHello("Mike", function() {
    console.log("안녕히 가세요")
})

// sayHello2 함수 자체가 promise
function sayHello2(name) {
    // 두 개의 input을 받는다 (resolve-정상실행, reject-정상실행 실패시 대비)
    return new Promise((resolve, reject) => {
         setTimeout(()=>{
            console.log(name+"님 안녕하세요")
            resolve("서울")
         }, 3000)
    }
    )
}

/*
sayHello2("Frank")
    .then((seoul)=> console.log(seoul+"안녕히 가세요"))
*/

// Mike님 안녕하세요
// 안녕히 가세요
// Frank님 안녕하세요
// 서울 안녕히 가세요

async function sayHelloBye(name) {
    loc = await sayHello2(name)
    console.log(loc + "로 안녕히 가세요")
}

sayHelloBye("Dayoung")

// Mike님 안녕하세요
// 안녕히 가세요
// Dayoung님 안녕하세요
// 서울로 안녕히 가세요
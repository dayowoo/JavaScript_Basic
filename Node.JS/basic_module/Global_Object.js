// console object
// 콘솔 로그에 메세지 출력

console.log();

// ex)
console.log('%d + %d = %d', 1, 2, 1+2);
console.log('%d + %d = %d', 1, 2, 1+2, 4);
console.log('%d + %d = %d', 1, 2 );

console.time(label);
console.timeEnd(label);

// ex)
console.time('time');
console.timeEnd('time');


// Process 객체

// 컴퓨터 환경 관련 정보
console.log('progress env property:', process.env);

// 현재 프로그램이 실행된 시간
console.log('uptime method: ', process.uptime());



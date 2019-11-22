// ex) readfile
// text.txt 와 main.js 생성
/*
var fs = require('fs');

// 비동기적 읽기
fs.readFile('text.txt', 'utf8', function(err, data) {
    console.log('비동기적 읽기 ' + data);
});

// 동기적 읽기
var text = fs.readFileSync('text.txt', 'utf8');
console.log('동기적 읽기 ' + text);
*/


// ex) writefile

var fs = require('fs');

var data = 'fs.writeFile test';

toString.writefile('text1.txt', data, 'utf8', function(err) {
    console.log('비동기적 파일 쓰기 완료');
});

fs.writeFileSync('text2.txt', data, 'utf8');
console.log('동기적 파일 쓰기 완료');


// ex) 동기적방식 예외처리

var util = require('util');
var data = util.format('%d, %s, %j', 6, 'chapter', {cotent: 'module'});

console.log(data);
util.log('message');






// ex) 비동기적 방식 예외처리
// main.js
var fs = require('fs');
 
// 파일 읽기
fs.readFile('notexist.txt', 'utf8', function(err, data) { // 존재하지 않는 파일 읽기
    if (err) {
        console.log(err); // 읽기 실패
    }
    else {
        console.log(data); // 읽기 성공
    }
});
// ex 1 | 기본 문법

/*
var a = 1;
b = 2;

console.log("a:" + a);  //a:1
console.log("b:" + b);  //b:1

var c = 3, d = 10;
var str1 = "Hello";
var str2 = "World!";
var str3 = null;

console.log("c:" + c);  //c:3
console.log("d:"  + d); //d:10
console.log(str1);      //Hello
console.log(str2);      //World!
console.log(str3);      //null

console.log(c);         //3
*/

// --------------------------------------------------------

// ex 2 | 연산자

// ex 2-1 | 산술연산자
/*
var a = 1, b = 2, c = 3, d = 10;

a = b + 1;          //3
a = b - 1;          //1
a = b * d;          //20
a = a / 10;         //2 (20/10)

a++;                //2
a;                  //3 (2+1)
a--;                //3
a;                  //2
*/

// ex 2-2 | 문자열연산자
/*
var str1 = "Hello";
var str2 = "World!";
var str3 = null;

str3 = str1 + " ";
console.log(str3);      //Hello 

str3 = str3 + str2;
console.log(str3);      //Hello World!
*/

// ex 2-3 | 할당연산자
/*
var a = 1, b = 2, c = 3, d = 4;

a += 1;     // a = a + 1;
b -= 2;     // b = b - 2;
c *= 3;     // c = c * 3;
d /= 2;     // d = d / 2;
*/

// ex 2-4 | 비교연산자 (true/false 반환)
/*
var a = 2, b = 1, c = 6, d = 8;

console.log(a > b);     //true
console.log(b >= c);    //false
console.log(c <= 10);   //true
console.log(d < 10);    //true
*/

// ex 2-5 | 논리연산자 (true/false)
/*
var a = 2, b = 1, c = 6;

console.log(a == 1);            //false
console.log(b != c);            //true
console.log(true && false);     //false
console.log(false || true);     //ture
console.log(!false);            //true
*/

// ex 2-6 | 조건연산자 : (조건)?A:B
/*
var a = 2, b = 1;
(a>b)? (console.log("a is bigger than b")):(console.log("a is smaller than b"));
// a is bigger than b
(a>b)? console.log("a is bigger than b"):console.log("a is smaller than b");
// a is bigger than b
*/

// ex 3 | 데이터 타입

// ex 3-1 | Number
/*
// Number() : 문자열을 숫자형으로 변환하는 함수
var int_data = 1;
var float_data1 = Number('1.0');            //1
var float_data2 = new Number('4.1254');     //4.1254
typeof int_data             // Number

// typeof : 변수의 데이터타입을 변환하는 연산자
// typeof variable | typeof(variable)
typeof float_data1;         // Number
typeof float_data2;         // object

console.log((255).toString(10));    //10진수:255
console.log((255).toString(16));    //16진수:ff
console.log((255),toString(8));     //8진수:377
console.log((255).toString(2));     //2진수:1111111
*/

// ex 3-2 | String
/*
var char1 = 'a';
var char2 = "b";
var str1 = "Double Quotations";
var str2 = 'Single Quotations Anyway';
var str3 = new String("String Object");

typeof str1;            //string
typeof str3;            //object
str2[4];                //l

// "str".charAt(정수) : 정수번째 문자를 읽어냄 -> 문자형 반환
// "str".indexOf('인수') : 인수가 들어있는 위치를 알려줌 -> 숫자형 반환
console.log(str2.charAt(4));    //l
console.log(str3[1]);           //t
console.log(str1.length);        //17
console.log(str1.toUpperCase());    // DOUBLE QUOATIONS
console.log(str2.toLowerCase());    // single quotation anyway
console.log(str3.indexOf('g'));     //5
console.log(str3.indexOf('x'));     //-1
*/

// ex 3-3 | Boolean
/*
var result1 = new Boolean();
var result2 = true;

//valueOf : 객체의 원시값 반환
typeof result1;                     // "object"
typeof result1.valueOf();           // "boolean"

console.log(Boolean("test"));       // true
console.log(Boolean(""));           // false
console.log(Boolean({}));           // true
*/

// ex 3-4 | Array

/*
var array1 = [1, 2, 3];
var array2 = new Array(1, 2);

// push : 베열의 끝에 element를 추가하고 배열의 변경된 길이(length)를 출력
array2.push(3);                     // 3

var array3 = new Array(3); 
array3;                             // [undefined × 3]

typeof array1;                      // "object"

array1.toString();                  // "1,2,3"

array1.valueOf();
// [1, 2, 3]

array1.length;          // 3
array1[1];              // 2
array1.length = 5;      // 5

array1;                 // [1, 2, 3, undefined × 2]

console.log(array2.push("new1"));   // 4
console.log(array2.push("new2"));   // 5

array2;                 // [1, 2, 3, "new1", "new2"]

// pop: 배열에서 마지막 요소를 제거하고 그 요소를 반환
array2.pop();           // "new2"
console.log(array2);    // [1, 2, 3, "new1"]

array3 = new Array(4, 2, 1, 3, 0);
// [4, 2, 1, 3, 0]

console.log(array3.sort());
// [0, 1, 2, 3, 4]
*/



//--------------------------------------------------
// ex 4 | 조건문

// ex 4-1 | 조건문 - if, else
/*
var a = 3;
var result = '';

if(a > 2){
    result = 'a is greater than2';
}
else if(a == 2){
    result = 'a is 2';
}
else{
    result = 'a is smaller than 2 ';
}

console.log(result);
*/



// ex 4-2 | 조건문 - switch
// 논리연산이 아닌 값의 동일 여부로 분기를 나눔
/*
var a = 1;
var result = '';

switch(a) { 
    case 1:
        result = 'Numver 1';
        break;
    case 2:
        result = 'Number 2';
        break;
    default:
        result = 'i dont know what number';
    break;
}

console.log(result);
*/


// ex 5 | 반복문

// ex 5-1 | 반복문 - for
/*
var array = new Array();

// 초기화 조건 연산
for (var i = 0; i < 10; i++) {
    // 배열에 1~9 추가
	array.push(i);
}

console.log(array.toString());          // "0,1,2,3,4,5,6,7,8,9"
*/


// ex 5-2 | for -in
/*
var a = ['a', 'b', 'c', 'x', 'y', 'z'];
var result = '';

for (var i in a) {
	result += 'index:'+ i + ', value:'+ a[i] + '\n'; 
}

console.log(result);

// "index:0, value:a
// index:1, value:b
// index:2, value:c
// index:3, value:x
// index:4, value:y
// index:5, value:z"
*/


// ex 5-3 | while
/*
//초기값
var i = 0;
//조건식
while(i < 10) {
    //증감식
    i++;
}

console.log(i);
*/

// ex 5-4 | do-while
// 최소한 do는 실행
/*
var i = 0; 

do {
  i++;
} while (i < 10)
  
console.log(i)      // 10
*/



// ex 6 | 함수


// ex 6-1 | 데이터로써의 함수 - 함수가 하나의 데이터로서 취급된다.
/*
function sum(a,b){
    var c = a + b;
    return 0;
}
console.log((sum(2,3)));        //5
*/

// ex 6-1 | delete
/*
function sum(a, b) {
    var c = a + b;
    return 0;
}

var add = sum;
typeof add;             //function

add(1,2);               //3

var student = {
    name : 'goorm',
    age : 20
}

console.log(student.name);      //goorm
delete student.name;            //true -> 객체 속성(name)삭제 

console.log(student.name);      //undifened

delete student;                 //false : 객체 자체 삭제불가
delete not_exist;               //true : 아예 없는 속성 삭제

console.log(student.age);       //20
*/


// ex 6-3 | 익명함수(Anonymous Funtion)
/*
var f = function (a) {
    return "This is anonymous function!"; 
  };
  
console.log(f());         // "This is anonymous function!"
*/


// ex 6-4 | 콜백 함수(Callback Function)
/*
function one() {
     return 1;
}

var two = function() {
    return 2;
}
function invoke_and_add(a, b){
    return a() + b();
}
console.log(invoke_and_add(one, two));      //3
*/

/*
function one() {
    return 1;
}
function invoke_and_add(a,b){
    return a() + b();
}
invoke_and_add(one, function(){
    return 2;
})              //3
*/


// ex 7 | 객체지향 자바스크립트

// ex 7-1 | 객체의 속성 (Property)
/*
var park_ji_sung = { 
	name: "Park Ji Sung",
	height: 178,
	weight: 70,
	position: "RW",
	team : "Queen’s Park Rangers"
};

console.log(park_ji_sung.team);
// "Queen’s Park Rangers"
*/


// ex 7-2 | 클래스
/*
var SoccerPlayer = function () { };

SoccerPlayer.prototype = {
    name: String,
    age: Number,
    height: Number,
    weight: Number,
    position: String,
    team: String
};

var park_ji_sung = new SoccerPlayer();

park_ji_sung.name = "Park Ji Sung";
park_ji_sung.age = 31;
park_ji_sung.height = 178;
park_ji_sung = 70;

console.log(park_ji_sung);
// { name: 'Park Ji Sung', age:31, height: 178, weight: 70}
*/


// ex 7-3 | 캡슐화
// public, private, protected

// ex 7-4 | 집합 (Aggreagation)
// 구성(Composition)


// ex 7-5 | 상속
/*
function Man() {
    this.name = "Anonymous";
    this.gender = "Man";
    this.Run = function () {
        return this.name + " is running!";
    }
    this.Sleep = function () {
        return this.name + " is sleeping!";
    }
}

function SoccerPlayer () {
    this.base = new Man();
    this.name = "Anonymous Soccer Player";
    this.Run = function () {
        return this.base.Run();
    }
    this.Pass = function () {
        return this.name + "is passing to other player!";
    }
}

SoccerPlayer.prototype = new Man();
var player = new SoccerPlayer ();

console.log(player.name);
console.log(player.gender);

console.log(player.Run());
console.log(player.Pass());
console.log(player.Sleep());
*/


// ex 8 | 컨스트럭터 (생성자)

// ex 8-1 | 생성자 함수(Constructor Function)

// 객체 생성하는 방법
/*
function SoccerPlayer() { 
    this.position = "Forward";
  }
  var VanPersie = new SoccerPlayer();
  VanPersie.position;
  // "Forward"
*/

// 초기값을 전달하여 생성가능
/*
function SoccerPlayer(name, position) { 
    this.name = name;                           //속성1
    this.position = position;                   //속성2
    this.whatIsYourName = function () {         //메소드1
      return "My name is " + this.name;
    };
    this.whatIsYourPosition = function () {     //메소드2
      return "My position is " + this.position;
  }; }
*/

// ex 8-1 | 새로운 객체를 생성하고 메소드 실행하기
/*
var player = new SoccerPlayer("Park Ji Sung", "Wing Forward");

player.whatIsYourName();
// "My name is Park Ji Sung"

player.whatIsYourPosition();
// "My position is Wing Forward"

player.constructor;
// Function: SoccerPlayer

function SoccerPlayer(name, position) { 
  this.name = name;
  this.position = position; 
  this.whatIsYourName = function () {
    return 'My name is ' + this.name;
  };
  this.wahtIsYourPosition = function () { 
	return 'My position is ' + this.position;
  }; 
}

var player2 = new player.constructor("Koo Ja Cheol");
player2.name;
// "Koo Ja Cheol"
*/


// ex 9 | 스코프와 호이스팅

// ex 9-1 | 전역스코프와 지역스코프
// 전역스코프에 변수 선언 하지 않는 것이 좋다. -> 충돌할 가능성이 있기 때문.

/*
var global_scope = 'global';  // 전역 스코프

var local_function = function() {
    var local_scope = 'goorm';  // 지역 스코프
    console.log(global_scope);  // 전역 스코프 참조 가능. global 출력
    console.log(local_scope);  // 함수 내이기 때문에 지역 스코프 참조 가능. goorm 출력
};

console.log(local_scope);  // name은 지역스코프이기 때문에 에러 발생.
*/

// ex 9-2 | 유효 범위 체인 (Scope Chain)
/*
var a = 1;

function outer() {
	var b = 2;
	console.log(a); // 1
	
	function inner() {
		var c = 3;
		console.log(b);
		console.log(a); 
	}
	
	inner();  // 2 1
}
outer();

console.log(c);  // c is not defined
*/

// ex 9-3 | 정적 범위 (Lexical scope)
/*
var text = 'global';

function foo() {
	console.log(text);
}

function bar() {
	var text = 'bar';
	foo();
}

bar(); // 무엇이 출력될까요? -> global
*/

/*
var text = 'global';

function foo() {
    console.log(text);
}

function bar() {
    text = 'bar';
    foo();
}

bar(); // bar
*/


// ex 9-5 | 호이스팅(hoisiting)
/*
function foo() {
	console.log(a);  // undefined
	var a = 100;
	console.log(a);  // 100
}

foo();
*/

// ==같은 코드
/*
function foo() {
	var a;
	console.log(a);  // undefined
	var a = 100;
	console.log(a);  // 100
}

foo();
*/

// ex 10 | 클로저

/*
var num = 1;

function foo() {
	var num = 2;
	
	function bar() {
		console.log(num);
	}
	return bar;
}

var baz = foo();
baz();      //2
*/

/*
function f(arg) {
	var n = function() {
		return arg; 
	}
	arg++;
	return n; 
}

var m = f(123); 
console.log(m());           //124
*/

/*
function f(arg) {
	var n = function() {
		return arg; 
	}
	arg++;
	return n; 
}

var m = f(123); 
console.log(m());       //124
*/

/*
function f() {
    var a = [];
    var i;
	
    for(i = 0; i < 3; i++){
      a[i] = function() {
        return i;
        }
    }
    return a;
  }
  
  var b = f();

  console.log( b[0]() );        //3
  console.log( b[1]() );        //3
  console.log( b[2]() );        //3
*/

/*
function f() {
    var a = [];
    var i;
	
    for(i = 0; i < 3; i++){
      a[i] = (function(x) { 
        return function() {
          return x;
        }
      })(i);
    }
    return a;
  }
  
  var b = f();

  console.log( b[0]() );        //0
  console.log( b[1]() );        //1
  console.log( b[2]() );        //2
*/

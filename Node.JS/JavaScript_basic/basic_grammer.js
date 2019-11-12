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
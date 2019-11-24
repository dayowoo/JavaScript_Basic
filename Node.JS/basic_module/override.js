// bar() 메소드를 가진 Foo 객체를 생성하는 코드

function Foo() {
    // 코드
}

Foo.prototype = {
    bar: function() {
        console.log('Foo_bar 실행');
    }
};

// Foo 를 상속받아 Bar 객체를 생성하는 코드

function Bar() {
}

Bar.prototype = Object.create(Foo.prototype);

Bar.prototype.baz = function() {
    console.log('Bar_baz 실행');
};

Foo.prototype.bar();
Bar.prototype.bar();
Bar.prototype.baz();



// util.inherits() 메소드를 이용한 상속
// 코드의 양이 조금 줄어들고 Bar가 Foo를 상속받았다는 것을 명확하게 보이게 해줌.
var util = require('util');

function Bar() {
}

util.inherits(Bar, Foo);

Bar.prototype.baz = function() {
	console.log('Bar_baz 실행');
};

Foo.prototype.bar();
Bar.prototype.bar();
Bar.prototype.baz();
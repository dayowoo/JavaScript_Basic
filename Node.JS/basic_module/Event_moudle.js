// 이벤트 생성 (이벤트 핸들러 연결)
var EventEmitter = require('events');

var custom_event = new EventEmitter();

custom_event.on('call', function() {
	console.log('이벤트 콜');
});

custom_event.emit('call');


// 이벤트 제거
var EventEmitter = require('events');

var custom_event = new EventEmitter();

custom_event.on('call', function() {
	console.log('이벤트 콜');
});

custom_event.removeAllListeners();

custom_event.emit('call');
var util = require('util');
var data = util.format('%d, %s, %j', 6, 'chapter', {cotent: 'module'});

console.log(data);
util.log('message');

// 6, chapter, {"content": "module"}
// 10 Sep 07:03:36 - message
/**
 * Created by menzhongxin on 16/6/13.
 */
var util = require('../lib/commonUtil').util;
var errors = require('../json/ErrorCode');
var err = new Error('dddd');
console.log(err.message);

console.log(errors["0002"]||3);

console.log(String("3"));
function test(key){
  console.log(arguments[1]);
}
test(1);
console.log('0000000000');
console.log(util.getErrByCode(1002,'name'));

console.log(util.hasValue('dd'));

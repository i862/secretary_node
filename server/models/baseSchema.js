/**
 * Created by menzhongxin on 16/3/23.
 */
  var commonUtil = require('../lib/commonUtil'),
  modelUtil = require('../lib/modelUtil');
var baseSchema = function(schema,options){
  schema.add({
    isDeleted:{type:Boolean,default:false},
    createdAt:{type:Number,default:Date.now,get:modelUtil.dateFormat},
    updatedAt:{type:Number,default:Date.now}
  });
  schema.set('toJSON',{getters:true})
    .set('toObject',{getters:true});
};
module.exports = exports = baseSchema;
/**
 * Created by menzhongxin on 16/6/13.
 */
var db = require('../config/db'),
  modelUtil = require('../lib/modelUtil'),
  Schema = db.mongoose.Schema;

var userSchema = new Schema({
  id:{type:String,required:true},
  name:{type:String,required:true}
});
var projectSchema = new Schema({
  id:{type:String,required:true},
  title:{type:String,required:true}
});

var attachmentSchema = new Schema({
  title:{type:String,required:true},
  owner:userSchema,
  project:projectSchema,
  suffix:{type:String,default:'doc'},/*文档类型,doc,pdf,ppt,zip,jpg,txt*/
  url:{type:String,required:true}
},{
  collection:'attachments'
});
var Attachment = db.mongoose.model('Attachment', attachmentSchema);


module.exports = Attachment;

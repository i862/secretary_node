/**
 * Created by menzhongxin on 16/3/22.
 */
var db = require('../config/db'),
  modelUtil = require('../lib/modelUtil'),
  Schema = db.mongoose.Schema;

var contactSchema = new Schema({
  phoneNum:{type:String,required:true},
  email:{type:String,default:''},
  name:{type:String,default:''},
  industry:{type:Array,set:modelUtil.str2Array}, /*行业*/
  company:{type:String,default:''},
  skilledAt:{type:Array,set:modelUtil.str2Array},
  rank:{type:String,default:''},
  case:{type:Array,set:modelUtil.str2Array}, /*案例*/
  qualifications:{type:Array,set:modelUtil.str2Array}
},{
  collection:'contact'
});
var Contact = db.mongoose.model('Contact', contactSchema);
Contact.add = function(collection){
  return new Contact(collection).save();
};

module.exports = Contact;

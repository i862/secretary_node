/**
 * Created by menzhongxin on 16/6/13.
 */
var db = require('../config/db')
  ,Schema = db.mongoose.Schema
  ,modleUtil = require('../lib/modelUtil');

var groupSchema = new Schema({
  name:{type:String,required:true}
});
var userSchema = new Schema({
  name:{type:String,required:true},
  password:{type:String,required:true},
  nickName:{type:String,default:''},
  phoneNum:{type:String,required:true},
  group:groupSchema
},{
  collection:'users'
});

var Users = db.mongoose.model('users',userSchema);

Users.add = function(collection){
  return new Users(collection).save();
};

model.exports = Users;
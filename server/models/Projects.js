/**
 * Created by menzhongxin on 16/6/13.
 */
var db = require('../config/db')
  ,Schema = db.mongoose.Schema
  ,modleUtil = require('../lib/modelUtil');

var addressSchema = new Schema({
  provinceId:{type:String,required:true},
  provinceName:{type:String,required:true},
  cityId:{type:String,required:true},
  cityName:{type:String,required:true}
});
var userSchema = new Schema({
  id:{type:String,required:true},
  name:{type:String,required:true}
});
var optionSchema = new Schema({
  title:{type:String,required:true},
  value:{type:Number,required:true},
  isChecked:{type:Boolean,default:false},
  remarks:{type:String,default:''}
});
var propertySchema = new Schema({
  title:{type:String,required:true},
  options:[optionSchema],
  remarks:{type:String,default:''}
});

var projectSchema = new Schema({
  title:{type:String,required:true},
  type:{type:Number,required:true},
  partyB:{type:String,required:''},
  address:addressSchema,
  directors:[userSchema],
  property:[propertySchema],
  reviewer:[userSchema],
  status:{type:Number,default:0}, /*状态:0-未完成,1-待审核,2-已审核*/
  counts:{type:Number,default:0}
},{
  collection:'projects'
});

var Projects = db.mongoose.model('projects',projectSchema);

Projects.add = function(collection){
  return new Projects(collection).save();
};

model.exports = Projects;
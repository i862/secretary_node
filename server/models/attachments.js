/**
 * Created by menzhongxin on 16/6/13.
 */
var db = require('../config/db'),
  modelUtil = require('../lib/modelUtil'),
  Schema = db.mongoose.Schema;

var contactSchema = new Schema({

},{
  collection:'attachments'
});
var Contact = db.mongoose.model('Contact', contactSchema);
Contact.add = function(collection){
  return new Contact(collection).save();
};

module.exports = Contact;

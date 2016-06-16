/**
 * Created by menzhongxin on 16/3/28.
 */
var
  myRouter  = require('../lib/RouterUtil')
  ,VERSION = require('../config/server').config.VERSION
  ,ContactController = require('../controllers/ContactController');
// 13001 用户身份验证
myRouter.get(VERSION + "/contact/group",ContactController.aggregate);
myRouter.get(VERSION + "/contact/list", ContactController.listByGroup);

module.exports = myRouter.router;
/**
 * Created by menzhongxin on 16/3/28.
 */
var
  myRouter  = require('../lib/RouterUtil')
  ,VERSION = require('../config/server').config.VERSION
  ,UserController = require('../controllers/UserController');

/**
 * 用户登录
 * @param phoneNum <must>
 * @param password <must>
 */
myRouter.post(VERSION + '/auth',UserController.auth,true);

/**
 * @param phoneNum <must>
 * @param password <must>
 * @param name <must>
 * @param nickName <optional>
 */
myRouter.post(VERSION + '/user',UserController.register);

/**
 * @param id user._id <must>
 * @param password <must>
 * @param nPassword <must>
 */
myRouter.put(VERSION + '/user/password',UserController.modifyPassword);

/**
 * @param id user._id <must>
 * @param name <optional>
 * @param nickName <optional>
 */
myRouter.put(VERSION + '/user/:id',UserController.updateBaseInfo);



module.exports = myRouter.router;
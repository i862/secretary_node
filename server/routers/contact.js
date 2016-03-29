/**
 * Created by menzhongxin on 16/3/28.
 */
var
  router  = require('express').Router(),
  ContactController = require('../controllers/ContactController')
// 13001 用户身份验证
router.get("/contact/group", ContactController.aggregate);
router.get("/contact/list", ContactController.listByGroup);
module.exports = router;
var express = require('express')
var router = express.Router()

/* GET users listing. */
router.get('/', function (req, res, next) {
  // Here we can check the req.user.scope array contains the scope relevant for the REST API operation being invoked
  res.send('Successfully verified JWT token. Extracted information: ' + JSON.stringify(req.user))
})

module.exports = router

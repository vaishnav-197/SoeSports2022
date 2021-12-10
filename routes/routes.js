const router = require('express').Router()
const footballActions = require('../controllers/football')

router.get('/',footballActions.table)


module.exports = router
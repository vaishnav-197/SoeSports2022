const router = require('express').Router()


const football = require('../controllers/football')
const cricket = require('../controllers/cricket')
const badminton  = require('../controllers/badminton')
const tt = require('../controllers/tt')
const volley = require('../controllers/volleyball')
const chess = require('../controllers/chess')
const basketball = require('../controllers/basketball')
const throwball = require('../controllers/throwball')




// // admin routes
// const footballupdate = require('../updateController/updateFootball')



router.get('/',football.table)
router.get('/cricket',cricket.table)
router.get('/volley',volley.table)
router.get('/badminton',badminton.table)
router.get('/chess',chess.table)
router.get('/basketball',basketball.table)
router.get('/tt',tt.table)
router.get('/throwball',throwball.table)



// //! admin
// router.post('/admin/football', footballupdate.updateScore);
module.exports = router
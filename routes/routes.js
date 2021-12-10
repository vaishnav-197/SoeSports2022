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

router.get('/' , (req,res) => {
    res.render('layout')
})

router.get('/footballTable',football.table)
router.get('/cricketTable',cricket.table)
router.get('/volleyTable',volley.table)
router.get('/badmintonTable',badminton.table)
router.get('/chessTable',chess.table)
router.get('/basketballTable',basketball.table)
router.get('/ttTable',tt.table)
router.get('/throwTable',throwball.table)



// //! admin
// router.post('/admin/football', footballupdate.updateScore);
module.exports = router
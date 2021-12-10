const badminton = require('../models/table/badminton.json')
const bschedule = require('../models/schedule/badminton.json')



const badmintonActions = {
    table: async function (req,res){
        const table = badminton
        const schedule = bschedule
        res.render("football",{
            table:table,
            schedule:schedule

        })
    }
}

module.exports = badmintonActions
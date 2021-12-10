const football = require('../models/table/football.json')
const bschedule = require('../models/schedule/football.json')



const footballActions = {
    table: async function (req,res){
        const table = football
        const schedule = bschedule
        res.render("football",{
            table:table,
            schedule:schedule

        })
    }
}

module.exports = footballActions
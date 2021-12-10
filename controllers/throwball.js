const throwball = require('../models/table/throwball.json')
const bschedule = require('../models/schedule/throwball.json')




const throwActions = {
    table: async function (req,res){
        const table = throwball
        const schedule = bschedule
        res.send({
            table:table,
            schedule:schedule

        })
    }
}

module.exports = throwActions

const tt = require('../models/table/badminton.json')
const bschedule = require('../models/schedule/tt.json')




const ttActions = {
    table: async function (req,res){
        const table = tt
        const schedule = bschedule
        res.send({
            table:table,
            schedule:schedule

        })
    }
}

module.exports = ttActions
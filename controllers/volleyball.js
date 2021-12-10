const volley = require('../models/table/volleyball.json')
const bschedule = require('../models/schedule/volley.json')




const volleyActions = {
    table: async function (req,res){
        const table = volley
        const schedule = bschedule
        res.render("football",{
            table:table,
            schedule:schedule

        })
    }
}

module.exports = volleyActions
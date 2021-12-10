const football = require('../models/table/football.json')




const footballActions = {
    table: async function (req,res){
        const table = football
        

        console.log(table)
        res.send({
            table:table
        })
    }
}

module.exports = footballActions
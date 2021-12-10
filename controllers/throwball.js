const throwball = require('../models/table/throwball.json')




const throwActions = {
    table: async function (req,res){
        const table = throwball
        

        console.log(table)
        res.send({
            table:table
        })
    }
}

module.exports = throwActions

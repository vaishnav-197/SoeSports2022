const tt = require('../models/table/badminton.json')




const ttActions = {
    table: async function (req,res){
        const table = tt
        

        console.log(table)
        res.send({
            table:table
        })
    }
}

module.exports = ttActions
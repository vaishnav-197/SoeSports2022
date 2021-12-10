const cricket = require('../models/table/badminton.json')




const cricketActions = {
    table: async function (req,res){
        const table = cricket
        

        console.log(table)
        res.send({
            table:table
        })
    }
}

module.exports = cricketActions
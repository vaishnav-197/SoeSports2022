const badminton = require('../models/table/badminton.json')




const badmintonActions = {
    table: async function (req,res){
        const table = badminton
        

        console.log(table)
        res.send({
            table:table
        })
    }
}

module.exports = badmintonActions
const volley = require('../models/table/badminton.json')




const volleyActions = {
    table: async function (req,res){
        const table = volley
        

        console.log(table)
        res.send({
            table:table
        })
    }
}

module.exports = volleyActions
const chess = require('../models/table/badminton.json')




const chessActions = {
    table: async function (req,res){
        const table = chess
        

        console.log(table)
        res.send({
            table:table
        })
    }
}

module.exports = chessActions
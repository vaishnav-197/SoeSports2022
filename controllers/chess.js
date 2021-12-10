const chess = require('../models/table/chess.json')
const bschedule = require('../models/schedule/chess.json')



const chessActions = {
    table: async function (req,res){
        const table = chess
        const schedule = bschedule
        res.send({
            table:table,
            schedule:schedule

        })
    }
}

module.exports = chessActions
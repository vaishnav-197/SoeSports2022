const football = require('../models/football')




const footballActions = {
    table: async function (req,res){
        const table = []
        football.find({})
            .then(data => {
                console.log(data)
                data.map((d)=> {
                    table.push(d)
                })
            })
        console.log(table)
        res.send({
            table:table
        })
    }
}

module.exports = footballActions
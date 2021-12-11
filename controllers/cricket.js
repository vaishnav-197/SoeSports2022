const cricket = require("../models/table/cricket.json");
const bschedule = require("../models/schedule/cricket.json");

const cricketActions = {
  table: async function (req, res) {
    const table = cricket;
    const schedule = bschedule;
    res.render("cricket", {
      table: table,
      schedule: schedule,
    });
  },
};

module.exports = cricketActions;

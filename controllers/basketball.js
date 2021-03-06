const badminton = require("../models/table/basketball.json");
const bschedule = require("../models/schedule/basketball.json");

const badmintonActions = {
  table: async function (req, res) {
    const table = badminton;
    const schedule = bschedule;
    res.render("basketball", {
      table: table,
      schedule: schedule,
    });
  },
};

module.exports = badmintonActions;

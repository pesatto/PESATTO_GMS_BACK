var express = require('express');
var router = express.Router();
const models = require("../db/models")
const { units } = require("../db/units")
const histo = require("../db/historic")
const commands = require('../db/commands')
const moment = require('moment');

/* GET home page. */

router.get("/models", (req, res, next) => {
  models.find().then((data) => res.json({ error: false, data })).catch(e => res.json({ error: true, message: e.message }))
})
router.post("/models", (req, res, next) => {
  if ([5].includes(req.user.user_type)) {
    models.create(req.body).then((data) => res.json({ error: false, data })).catch(e => res.json({ error: true, message: e.message }))
  } else {
    res.status(200).json({ error: true, message: "This User cannot create Models" })
  }
})

router.get("", (req, res, next) => {
  if ([0, 1, 2].includes(req.user.user_type)) {
    units.find({ company: req.user.company._id }).populate("model").then((data) => res.json({ error: false, data })).catch(e => res.json({ error: true, message: e.message }))
  } else {
    units.find().populate("model").then((data) => res.json({ error: false, data })).catch(e => res.json({ error: true, message: e.message }))
  }
})

router.post("/command/set", (req, res, next) => {
  if ([1, 2, 4, 5].includes(req.user.user_type)) {
    commands.create(req.body).then((data) => res.json({ error: false, data })).catch(e => res.json({ error: true, message: e.message }))
  } else {
    res.status(200).json({ error: true, message: "This User cannot send commands" })
  }
})
router.get("/historic/:unitid/:date", (req, res, next) => {
  const day = moment(req.params.date, 'DD-MM-YYYY').toDate();
  const startOfDay = new Date(day.setHours(0, 0, 0, 0));
  const endOfDay = new Date(day.setHours(23, 59, 59, 999));

  histo.find({
    unit: req.params.unitid,
    createdAt: {
      $gte: startOfDay,
      $lt: endOfDay
    }
  }).then(data => {
    res.json({
      data: data,
      error: false
    })
  })


});
router.get("/:unitid", (req, res, next) => {
  units.find({ _id: req.params.unitid }).populate("model").then((data) => res.json({ error: false, data: data[0] })).catch(e => res.json({ error: true, message: e.message }))
})



router.post("", (req, res, next) => {
  if ([2, 4, 5].includes(req.user.user_type)) {
    units.create(req.body).then((data) => res.json({ error: false, data })).catch(e => res.json({ error: true, message: e.message }))
  } else {
    res.status(200).json({ error: true, message: "This User cannot Create Units" })
  }
})

router.put("", (req, res, next) => {
  if ([2, 4, 5].includes(req.user.user_type)) {
    units.updateOne({ _id: req.body.id }, { $set: req.body.data }).then((data) => res.json({ error: false, data })).catch(e => res.json({ error: true, message: e.message }))
  } else {
    res.status(200).json({ error: true, message: "This User cannot Edit Units" })
  }
})

router.get('/list', (req, res, next) => {

})

module.exports = router;

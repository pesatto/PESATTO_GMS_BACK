const express = require('express');
const router = express.Router();
const users = require("../db/users")
const companies = require("../db/companies")
const jwt = require("jsonwebtoken");
const secretKey = "+iPZslzvZ$tyr+9v";
const secured = require("./util")
const logger = require("../logger")

/* GET users listing. */
router.get('', secured, function (req, res, next) {
  if ([3, 4, 5].includes(req.user.user_type)) {
    users.find().populate("company").then((data) => res.json({ error: false, data })).catch(e => res.json({ error: true, message: e.message }))
  }
  else if ([2].includes(req.user.user_type)) {
    users.find({ company: req.user.company._id }).populate("company").then((data) => res.json({ error: false, data })).catch(e => res.json({ error: true, message: e.message }))
  } else {
    res.status(200).json({ error: false, message: "", data: [] })
  }
});

router.post('', secured, function (req, res, next) {

  if ([2, 4, 5].includes(req.user.user_type)) {

     users.create(req.body).then((data) => {
       
       res.json({ error: false, data })
     }).catch(e => res.json({ error: true, message: e.message }))
  } else {
    res.status(200).json({ error: true, message: "This User cannot create Users" })
  }
});

router.put('', secured, function (req, res, next) {
  let id = req.body.id
  delete req.body._id

  users.updateOne({ _id: id }, { $set: req.body }).then((data) => res.json({ error: false, data })).catch(e => res.json({ error: true, message: e.message }))
});

router.post("/auth", (req, res, next) => {
  users.findOne({ email: req.body.email }).populate("company").then(user => {
    if (user) {
      user.validatePassword(req.body.password).then(isvalid => {
        if (isvalid) {
          user.userpassword = ""
          try {
            let token = jwt.sign({ data: JSON.stringify(user) }, secretKey, { expiresIn: '10d' });
            res.json({ error: false, data: user, token: token })
          } catch (e) {
            logger.error("Error on userjs", e)
            res.json({ error: true, message: "Their was an error generating the token, try again" })
          }
        } else {
          res.json({ error: true, message: "Email or Password Incorrect" })
        }
      })
    } else {
      res.json({ error: true, message: "Email or Password Incorrect" })

    }


  })
})

router.get('/company', secured, function (req, res, next) {
  if ([3, 4, 5].includes(req.user.user_type)) {
    companies.find().then((data) => res.json({ error: false, data })).catch(e => res.json({ error: true, message: e.message }))
  } else {
    companies.find({ _id: req.user.company._id }).then((data) => res.json({ error: false, data })).catch(e => res.json({ error: true, message: e.message }))
  }
});

router.post('/company', secured, function (req, res, next) {
  if ([4, 5].includes(req.user.user_type)) {
    companies.create(req.body).then((data) => res.json({ error: false, data })).catch(e => res.json({ error: true, message: e.message }))
  } else {
    res.status(200).json({ error: true, message: "This User cannot create Companies" })
  }
});


module.exports = router;

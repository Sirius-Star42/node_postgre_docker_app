var express = require('express');
var router = express.Router();
var db = require('../database');

router.get("/all", function(req, res) {
  db.User.findAll()
      .then( users => {
          res.status(200).send(JSON.stringify(users));
      })
      .catch( err => {
          res.status(500).send(JSON.stringify(err));
      });
});

router.get("/:id", function(req, res) {
  db.User.findByPk(req.params.id)
      .then( user => {
          res.status(200).send(JSON.stringify(user));
      })
      .catch( err => {
          res.status(500).send(JSON.stringify(err));
      });
});

router.put("/", function(req, res) {
  db.User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      id: req.body.id
      })
      .then( user => {
          res.status(200).send(JSON.stringify(user));
      })
      .catch( err => {
          res.status(500).send(JSON.stringify(err));
      });
});

router.delete("/:id", function(req, res) {
  db.User.destroy({
      where: {
          id: req.params.id
      }
      })
      .then( () => {
          res.status(200).send();
      })
      .catch( err => {
          res.status(500).send(JSON.stringify(err));
      });
});


module.exports = router;

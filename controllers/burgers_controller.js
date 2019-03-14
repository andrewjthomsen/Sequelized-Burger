var express = require('express');
var db = require('../models')
var router = express.Router();

router.get("/", function (req, res) {
  res.redirect("/burgers");
});
//
router.get("/burgers", function (req, res) {
  db.Burger.findAll()
    .then(function (dbBurger) {
      console.log(dbBurger);
      var hbsObject = {
        burger: dbBurger
      };
      return res.render("index",
        hbsObject);
    });
});
//
router.post("/burgers/create", function (req, res) {
  console.log(req.body)
  db.Burger.create({
    burger_name: req.body.burger_name
  }).then(function (dbBurger) {

  });
});
//Capital C refers to customer table, whereas lowercase refers to the user (referencing customer)
router.put("/burgers/:id", function (req, res) {
  if (req.body.customer) {
    db.Customer.create({
      customer: req.body.customer,
      Burger_id: req.body.burger_id
    }).then(function (dbCustomer) {
      return db.Burger.update({
        devoured: true
      }, {
        where: {
          id: req.params.id
        }
      }).then(function (dbBurger) {
        res.json("/")
      });
    })
  } else {
    db.Burger.update({
      devoured: true
    }, {
      where: {
        id: req.params.id
      }
    }).then(function (dbBurger) {
      res.json("/")
    });

  }


});

module.exports = router;
var express = require('express');
var router = express.Router();
var models = require('../models')
/* GET home page. */

// name: DataTypes.STRING,
// brand: DataTypes.STRING,
// codeitem: DataTypes.STRING

router.get('/', (req, res) =>{
  models.items.findAll()
  .then(rows =>{
    res.render('items', {data: rows})
  })
  .catch(err =>{
    res.send(err)
  })
})

router.get('/add', (req, res) => {
  models.items.findAll()
  .then(data => {
    res.render('add_items', {data: rows})
  }).catch(err => {
    res.render('add_items')
  })
})

router.post('/add', (req, res) => {
  models.items.build({
    name: `${req.body.name}`,
    brand: `${req.body.brand}`,
    codeitem: `${req.body.codeitem}`,
    createdAt: new Date(),
    updatedAt: new Date()
  })
  .save()
  .then(data => {
    res.redirect('/items')
  })
})

router.get('/delete/:id', (req, res) => {
  models.items.destroy({
    where: {
      id: req.params.id
    }
  }).then(() => {
    res.redirect('/items')
  })
})

router.get('/edit/:id', (req, res) => {
  models.items.findById(req.params.id)
  .then(data => {
      res.render('edit_items', {data: data})
  })
  .catch(err => {
    res.send(err)
  })
})

router.post('/edit/:id', (req, res) => {
  models.items.update({
    nama: `${req.body.nama}`,
    brand: `${req.body.brand}`,
    codeitem: `${req.body.codeitem}`,
  }, {
    where: {
      id: `${req.params.id}`
    }
  }).then(data => {
    res.redirect('/items');
  })
})

module.exports = router;

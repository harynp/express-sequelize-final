var express = require('express');
var router = express.Router();
var models = require('../models')
/* GET home page. */
router.get('/', (req, res) =>{
  models.suppliers.findAll({
    include: [{ model: models.items }],
  })
  .then(rows =>{
    // console.log(rows);
    res.render('suppliers', {data: rows})
  })
  .catch(err =>{
    res.send(err)
  })
})

// router.get('/', (req, res) => {
//   models.Teachers.findAll({
//     order : [['id','ASC']],
//     include: [{ model: models.Subjects  }]
//   })
//   .then(data => {
//     res.render('teachers', {
//       data: data,
//       tittle: 'Halaman Teachers'
//     })
//   }).catch(err => {
//     res.send(err)
//   })
// })



router.get('/add', (req, res) => {
  models.suppliers.findAll()
  .then(data => {
    res.render('add_suppliers', {data: rows})
  }).catch(err => {
    res.render('add_suppliers')
  })
})

router.post('/add', (req, res) => {
  models.suppliers.build({
    nama: `${req.body.nama}`,
    kota: `${req.body.kota}`,
    createdAt: new Date(),
    updatedAt: new Date()
  })
  .save()
  .then(data => {
    res.redirect('/suppliers')
  })
})

router.get('/delete/:id', (req, res) => {
  models.suppliers.destroy({
    where: {
      id: req.params.id
    }
  }).then(() => {
    res.redirect('/suppliers')
  })
})

router.get('/edit/:id', (req, res) => {
  models.suppliers.findById(req.params.id)
  .then(data => {
      res.render('edit_suppliers', {data: data})
  })
  .catch(err => {
    res.send(err)
  })
})

router.post('/edit/:id', (req, res) => {
  models.suppliers.update({
    nama: `${req.body.nama}`,
    kota: `${req.body.kota}`
  }, {
    where: {
      id: `${req.params.id}`
    }
  }).then(data => {
    res.redirect('/suppliers');
  })
})

module.exports = router;

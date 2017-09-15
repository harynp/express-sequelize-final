var express = require('express');
var router = express.Router();
var models = require('../models')
/* GET home page. */
router.get('/', (req, res) =>{
  models.suppliers.findAll()
  .then(rows =>{
    res.render('suppliers', {data: rows})
  })
  .catch(err =>{
    res.send(err)
  })
})

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

// router.get('/edit/:id', (req, res) => {
//   models.Teachers.findById(req.params.id).then(teachers => {
//     models.Subjects.findAll().then(subjects => {
//       res.render('teachersedit', {
//         data: teachers,
//         subject: subjects,
//         tittle: 'Halaman Edit Teachers'
//       })
//     })
//   }).catch(err => {
//     res.send(err)
//   })
// })
//
// router.post('/edit/:id', (req, res) => {
//   models.Teachers.update({
//
//     first_name: `${req.body.first_name}`,
//     last_name: `${req.body.last_name}`,
//     email: `${req.body.email}`,
//     subjectsId: `${req.body.subjectsId}`
//   }, {
//     where: {
//       id: `${req.params.id}`
//     }
//   }).then(dataTeachers => {
//     res.redirect('/teachers');
//   })
// })

module.exports = router;

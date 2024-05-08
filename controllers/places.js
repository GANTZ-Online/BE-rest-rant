const router = require('express').Router()

// // GET /places
// router.get('/', (req, res) => {
//     res.render('places/index');
// });



router.get('/new', (req, res) => {
  res.render('places/new')
    let places = [{
      name: 'H-Thai-ML',
      city: 'Seattle',
      state: 'WA',
      cuisines: 'Thai, Pan-Asian',
      pic: 'http://placekitten.com/200/300'
    }, {
      name: 'Coding Cat Cafe',
      city: 'Phoenix',
      state: 'AZ',
      cuisines: 'Coffee, Bakery',
      pic: 'http://placekitten.com/200/300'
    }]
      res.render('places/index.jsx',{places})
  })

  module.exports = router

 
    

  
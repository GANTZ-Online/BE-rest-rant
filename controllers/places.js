const router = require('express').Router()

router.get('/', (req, res) => {
    res.sender('GET /places')
})
// GET /places
app.get('/', (req, res) => {
    res.render('places/index')
  })
  
module.exports = router

const express = require('express')
const router = express.Router()
const { bubbleSort } = require('../lib')

router.post('/', (req, res) => {
  res.json(bubbleSort(req.body))
})

module.exports = router

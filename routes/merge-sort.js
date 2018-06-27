const express = require('express')
const router = express.Router()
const { mergeSort } = require('../lib')

router.post('/', (req, res) => {
  res.json(mergeSort(req.body))
})

module.exports = router

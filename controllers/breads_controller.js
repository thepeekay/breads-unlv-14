const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')

breads.get('/', (req, res)=> {
    res.send(Bread)
})

// http://localhost:3003/breads/1
breads.get('/:arrayIndex', (req, res)=> {
    // Bread[1]
    res.send(Bread[req.params.arrayIndex])
})

module.exports = breads
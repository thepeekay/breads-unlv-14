const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')

breads.get('/', (req, res) => {
    res.render('Index', {
        breads: Bread
    })
})

// http://localhost:3003/breads/1
breads.get('/:arrayIndex', (req, res) => {
    if (Bread[req.params.arrayIndex]) {
        res.render('Show', {
            bread: Bread[req.params.arrayIndex]
        })
    }
    else {
        res.send('Breads 404')
    }
})

breads.get('*', (req, res) => {
    res.send('Breads 404')
})

module.exports = breads
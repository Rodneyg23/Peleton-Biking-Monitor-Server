const express = require('express')
const router =  express.Router()
const Biker = require('../models/biker')
const app = require('../server')

router.post('/bikers', (req, res, next) => {
    Biker.create(req.body.biker)
        .then((biker) => {
            res.status(201).json({ biker: biker })
        })
        .catch(next)
})

router.get('/bikers', (req, res, next) => {
    Biker.find()
            .then((bikers) => {
                return bikers.map((biker) => biker)
            })
            .then((bikers) => res.status(200).json({ bikers: bikers }))
            .catch(next)
})

router.get('/bikers/:id', (req, res, next) => {
    Biker.findById(req.params.id)
        .then((biker) => res.status(200).json({ biker: biker }))
        .catch(next)
})


module.exports = router
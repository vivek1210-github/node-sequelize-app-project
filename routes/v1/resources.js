const express = require('express')

const router = express.Router()

let db = require('../../models')

let Resource = db.resources
let Project = db.projects

router.post('/', async (req, res) => {
  console.log('here')
  try {
    let resource = await Resource.create(req.body)
    res.status(200).json(resource)
  } catch (error) {
    res.status(500).json(error)
  }
})

router.get('/', async (req, res) => {
  try {
    console.log(req.query)
    let queryFilter = ''
    console.log(typeof Boolean(req.query.deleted))
    if (req.query.deleted == 'true') {
      queryFilter = { paranoid: false }
    }
    let resource = await Resource.findAll({
      // ...queryFilter,
      include: {
        model: Project,
      },
    })
    res.status(200).json(resource)
  } catch (error) {
    res.status(500).json(error)
  }
})

router.get('/:id', async (req, res) => {
  try {
    let resource = await Resource.findByPk(req.params.id)
    res.status(200).json(resource)
  } catch (error) {
    res.status(500).json(error)
  }
})

router.put('/:id', async (req, res) => {
  try {
    let resource = await Resource.findByPk(req.params.id)
    resource.update(req.body)
    res.status(200).json(resource)
  } catch (error) {
    res.status(500).json(error)
  }
})

router.delete('/:id', async (req, res) => {
  try {
    let resource = await Resource.findByPk(req.params.id)
    resource.destroy(req.body)
    res.status(200).json(resource)
  } catch (error) {
    res.status(500).json(error)
  }
})

router.delete('/:id/forceDelete', async (req, res) => {
  try {
    let resource = await Resource.findByPk(req.params.id)
    resource.destroy(req.body, { force: true })
    res.status(200).json(resource)
  } catch (error) {
    res.status(500).json(error)
  }
})

module.exports = router

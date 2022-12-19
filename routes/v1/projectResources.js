const express = require('express')

const router = express.Router()

let db = require('../../models')

let ProjectResources = db.projectResources

router.post('/', async (req, res) => {
  console.log('here')
  try {
    let project = await ProjectResources.create(req.body)
    res.status(200).json(project)
  } catch (error) {
    res.status(500).json(error)
  }
})

router.put('/:id', async (req, res) => {
  try {
    let project = await ProjectResources.findByPk(req.params.id)
    project.update(req.body)
    res.status(200).json(project)
  } catch (error) {
    res.status(500).json(error)
  }
})

router.delete('/:id', async (req, res) => {
  try {
    let project = await ProjectResources.findByPk(req.params.id)
    project.destroy(req.body)
    res.status(200).json(project)
  } catch (error) {
    res.status(500).json(error)
  }
})

module.exports = router

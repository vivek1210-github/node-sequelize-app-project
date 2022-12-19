const express = require('express')

const router = express.Router()

let db = require('../../models')

let Project = db.projects
let Resources = db.resources

router.post('/', async (req, res) => {
  console.log('here')
  try {
    let project = await Project.create(req.body)
    res.status(200).json(project)
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
    let project = await Project.findAll({
      // ...queryFilter,
      include: {
        model: Resources,
      },
    })
    res.status(200).json(project)
  } catch (error) {
    res.status(500).json(error)
  }
})

router.get('/:id', async (req, res) => {
  try {
    let project = await Project.findByPk(req.params.id)
    res.status(200).json(project)
  } catch (error) {
    res.status(500).json(error)
  }
})

router.put('/:id', async (req, res) => {
  try {
    let project = await Project.findByPk(req.params.id)
    project.update(req.body)
    res.status(200).json(project)
  } catch (error) {
    res.status(500).json(error)
  }
})

router.delete('/:id', async (req, res) => {
  try {
    let project = await Project.findByPk(req.params.id)
    project.destroy(req.body)
    res.status(200).json(project)
  } catch (error) {
    res.status(500).json(error)
  }
})

module.exports = router

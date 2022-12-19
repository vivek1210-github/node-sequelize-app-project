const { Sequelize, DataTypes } = require('sequelize')
let environment = process.env.NODE_ENV || 'development'
let { username, password, database, host, dialect, pool, logging } =
  require('../config/config')[environment]

const sequelize = new Sequelize(database, username, password, {
  host,
  dialect,
  logging,
  pool,
})

console.log(sequelize)

sequelize
  .authenticate()
  .then(() => {
    console.log(`Connected to database`)
  })
  .catch((error) => {
    console.log(`error :`, error)
  })

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.projects = require('./projects')(sequelize, DataTypes)
db.resources = require('./resources')(sequelize, DataTypes)
db.projectResources = require('./projectResources')(sequelize, DataTypes)

db.projects.belongsToMany(db.resources, { through: 'project_resources' })
db.resources.belongsToMany(db.projects, { through: 'project_resources' })

module.exports = db

// resources
// projects
//project_resources

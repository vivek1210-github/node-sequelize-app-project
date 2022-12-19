module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    'project_resources',
    {
      projectId: DataTypes.INTEGER,
      resourceId: DataTypes.INTEGER,
    },
    { paranoid: true }
  )
}

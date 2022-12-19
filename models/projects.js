module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    'projects',
    {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
    },
    {
      paranoid: true,
    }
  )
}

module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    'resources',
    {
      name: DataTypes.STRING,
      employeeId: DataTypes.STRING,
    },
    {
      paranoid: true,
    }
  )
}

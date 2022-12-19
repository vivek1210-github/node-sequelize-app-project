module.exports = {
  development: {
    username: 'root',
    password: null,
    database: 'test_rms',
    host: '127.0.0.1',
    dialect: 'mysql',
    logging: true,
    pool: {
      max: 10,
      min: 0,
      idle: 10000,
    },
  },
  production: {
    username: 'root',
    password: '',
    database: 'prod_test',
    host: '127.0.0.1',
    logging: false,
    dialect: 'mysql',
    pool: {
      max: 10,
      min: 0,
      idle: 10000,
    },
  },
}

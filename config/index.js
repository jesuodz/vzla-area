require('dotenv').config();

module.exports = {
  app: {
    port: process.env.APP_PORT || 3000
  },
  db: {
    port: process.env.DB_PORT || 3306,
    database: process.env.DB_NAME || 'area-api',
    password: process.env.DB_PASSWORD || 'password',
    user: process.env.DB_USERNAME || 'admin',
    host: process.env.DB_HOST || '127.0.0.1'
  }
}

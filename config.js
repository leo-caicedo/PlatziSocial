module.exports = {
  api: {
    port: process.env.API_PORT || 3000,
  },
  jwt: {
    secret: process.env.JWT_SECRET || "SECRET",
  },
  mysql: {
    host: process.env.MYSQL_HOST || "remotemysql.com",
    user: process.env.MYSQL_USER || "1HPo3y0Ryu",
    password: process.env.MYSQL_PASS || "xU7qPKAhx6",
    database: process.env.MYSQL_DB || "1HPo3y0Ryu",
  },
};

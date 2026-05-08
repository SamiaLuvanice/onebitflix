const { prototype } = require("node:events");

module.exports = {
    development: {
        dialect: 'postgres',
        host: 'localhost',
        port: 5433,
        database: 'onebitflix',
        username: 'onebitflix',
        password: 'onebitflix',
    }
}
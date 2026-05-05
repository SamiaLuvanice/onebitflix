const { prototype } = require("node:events");
const { hostname } = require("node:os");

module.exports = {
    development: {
        dialect: 'postgres',
        host: hostname(),
        port: 5433,
        database: 'onebitflix_development',
        username: 'onebitflix',
        password: 'onebitflix',
    }
}
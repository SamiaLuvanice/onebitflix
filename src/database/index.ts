import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    port: 5433,
    database: 'onebitflix',
    username: 'onebitflix',
    password: 'onebitflix',
    define: {
        underscored: true, // Use snake_case for column names
    },
});
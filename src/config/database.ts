import { Sequelize } from 'sequelize';

export const db: Sequelize = new Sequelize('TestNode', 'postgres', 'password', {
    host: 'localhost',
    dialect: 'postgres'
});
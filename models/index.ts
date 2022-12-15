import Config from '../config/config.json';
import { Sequelize } from 'sequelize-typescript';

const sequelize = new Sequelize({
  database: 'nodejs',
  dialect: 'mysql',
  username: 'root',
  password: '123456',
  storage: ':memory:',
  host: 'mysql',
  models: [__dirname + '/models'], // or [Player, Team],
});

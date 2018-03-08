const Express = require('express')
const Cors = require('cors');
const Sequelize = require('sequelize');
require('dotenv').config();

const DataCriteria1 = process.env.DataCriteria1;
const DataCriteria2 = process.env.DataCriteria2;
const DataCriteria3 = process.env.DataCriteria3;

const Sequelize = new Sequelize( DataCriteria1, DataCriteria2, DataCriteria3, {
    dialect: 'postgres',
    port:5432
  })
const router = Express.Router();
const app = express()
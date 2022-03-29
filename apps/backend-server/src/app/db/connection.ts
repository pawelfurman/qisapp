import { Sequelize } from "sequelize";

export const sequelize = new Sequelize('testdb', 'root', 'rootroot', {
    host: 'localhost',
    dialect: 'mysql'
  });
  
  
  

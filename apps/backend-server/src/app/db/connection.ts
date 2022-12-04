import { Sequelize } from "sequelize";


// export const sequelize = new Sequelize('qisappdb', 'root', 'ufxU]hNM3ntk"<2^', {
//   host: '34.79.11.97',
//   dialect: 'mysql',
//   port: 3306
// });


/**
 * DB_NAME=qisappdb
 * DB_USER=root
 * DB_PASSWORD=ufxU]hNM3ntk"<2^
 * DB_HOST=34.79.11.97
 * DB_PORT=3306
 */



// export const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
//   host: process.env.DB_HOST,
//   dialect: 'mysql',
//   port: Number(process.env.DB_PORT)
// });

export const sequelize = new Sequelize('testdb', 'root', 'rootroot', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  });
  
  
  // export const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  //   host: process.env.DB_HOST,
  //   dialect: 'mysql',
  //   port: Number(process.env.DB_PORT)
  // });
  


  //GCP
  //
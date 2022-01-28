import { Sequelize } from "sequelize";
import dotenv from "dotenv";
import { User } from "../model/user";

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: "localhost",
    dialect: "postgres",
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("\nConnection has been established successfully.\n");
  })
  .catch((err) => {
    console.error(`\nUnable to connect to the database: ${err}\n`);
  });

export default sequelize;

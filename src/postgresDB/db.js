const pgp = require("pg-promise")();
const db = pgp({
  host: "localhost",
  port: 5432,
  database: "myestatemanager",
  user: "postgres",
  password: "farid.G1382",
});
export default db;

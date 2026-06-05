const Database = require('better-sqlite3');
const db = new Database('school.db');
module.exports = db;
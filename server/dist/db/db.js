"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const pg_1 = require("pg");
const pool = new pg_1.Pool({
    user: 'postgres',
    host: 'localhost',
    password: 'root',
    database: 'yelp',
    port: 5432
});
const db = {
    query: (text, params) => pool.query(text, params)
};
exports.db = db;
//# sourceMappingURL=db.js.map
import mysqlConnection from 'mysql2/promise';

const proporties = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'rest_api'
};

export const pool = mysqlConnection.createPool(proporties);

import sqlite3 from 'sqlite3';
import { open, Database } from 'sqlite';

const dbPath = "/Users/nero/Desktop/CommunityHub/database/db_communityhub";

const initDB = async (): Promise<Database> => {
    return open({
        filename: dbPath,
        driver: sqlite3.Database
    });
};

export default initDB;

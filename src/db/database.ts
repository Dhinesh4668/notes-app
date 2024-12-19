import SQLite from 'react-native-sqlite-storage';
// import {openDatabase} from 'react-native-sqlite-storage';

// Enable debugging (optional, useful for development)
SQLite.DEBUG(true);
SQLite.enablePromise(true);

const databaseName = 'notesApp.db';

export const getDatabaseConnection = async () => {
  return await SQLite.openDatabase({
    name: databaseName,
    location: 'default', // use default location
    dblocation: 'default', // set to default or adjust path as needed
  });
};

export const createTables = async () => {
  const db = await getDatabaseConnection();
  await db.executeSql(`
        CREATE TABLE IF NOT EXISTS notes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        content TEXT NOT NULL,
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
        );
    `);
};

export const closeDatabaseConnection = async (db: SQLite.SQLiteDatabase) => {
  if (db) {
    await db.close();
    console.log('Database closed.');
  }
};

import type { DB } from "./db";

// Creating tables
export const createTables = async (db: DB) => {

  db.exec(`
  CREATE TABLE IF NOT EXISTS projects (
    id UUID NOT NULL PRIMARY KEY,
    title TEXT NOT NULL,
    category TEXT NOT NULL,
    description TEXT NOT NULL,
    url TEXT,
    is_public BOOLEAN NOT NULL,
    created_at DATETIME NOT NULL
  );
`);
};

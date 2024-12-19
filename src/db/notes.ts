import {getDatabaseConnection} from './database';

export interface Note {
  id?: number;
  title: string;
  content: string;
  createdAt?: string;
}

export const getNotes = async (): Promise<Note[]> => {
  const db = await getDatabaseConnection();
  const results = await db.executeSql(
    'SELECT * FROM notes ORDER BY createdAt DESC;',
  );
  const rows = results[0].rows;
  const notes: Note[] = [];
  for (let i = 0; i < rows.length; i++) {
    notes.push(rows.item(i));
  }
  return notes;
};

export const addNote = async (note: Note): Promise<void> => {
  const db = await getDatabaseConnection();
  await db.executeSql('INSERT INTO notes (title, content) VALUES (?, ?);', [
    note.title,
    note.content,
  ]);
};

export const updateNote = async (note: Note): Promise<void> => {
  const db = await getDatabaseConnection();
  await db.executeSql('UPDATE notes SET title = ?, content = ? WHERE id = ?;', [
    note.title,
    note.content,
    note.id,
  ]);
};

export const deleteNote = async (id: number): Promise<void> => {
  const db = await getDatabaseConnection();
  await db.executeSql('DELETE FROM notes WHERE id = ?;', [id]);
};

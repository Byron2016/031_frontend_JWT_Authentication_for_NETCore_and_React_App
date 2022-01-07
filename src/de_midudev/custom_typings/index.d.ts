export type NoteType = {
  id: number;
  content: string;
  date: string;
  important: boolean
};

export type NoteTypeDB = {
  userId: number;
  id: number;
  title: string;
  body: string
};

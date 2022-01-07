import {useState, SyntheticEvent} from "react";
import {NoteListMock as Note } from '../../components/Notes/NoteListMock'
import {NoteType } from '../../../../custom_typings/index'
import "./ListElements.css"

// export default function AlternDos(props : NoteType []) {
export const AlternDos = (props : {notes: Array<NoteType> }) => {

  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState('');
  const [showAll, setShowAll] = useState(true);

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    // debugger; // eslint-disable-line no-debugger
    const noteToAddToState : NoteType  = {
      id:  notes.length + 1,
      content: newNote, 
      date: new Date().toISOString(),
      important: Math.random() < 0.5
    }

    setNotes(notes.concat(noteToAddToState))
    // otra forma
    // setNotes([...notes, noteToAddToState])

    setNewNote('')
  }
  
  const handleChange = (event: SyntheticEvent) => {
    const input = event.target as HTMLInputElement
    setNewNote(input.value)
  }

  const handleClick = (event: SyntheticEvent) => {
    setShowAll(!showAll)
  }

  return (
    <div>
      <h1>Notes</h1>
      <button onClick={handleClick}>{showAll ? 'Show important' : 'Show all'}</button>
      <ol>
        {
          notes
          .filter(note => {
            if(showAll === true) return note
            return note.important === true
          })
          .map((note: NoteType) => {
            return <Note key={note.id} {...note} />
          })
        }
      </ol>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value = {newNote} />
        <button>Add Note</button>
      </form>
    </div>
  )
}


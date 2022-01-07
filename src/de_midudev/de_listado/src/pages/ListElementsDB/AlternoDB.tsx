import {useEffect, useState, SyntheticEvent} from "react";
import {NoteListDB as Note } from '../../components/Notes/NoteListDB'
import {NoteTypeDB } from '../../../../custom_typings/index'
import {getRandomText} from '../../util/randomText'
import {getRndInteger} from '../../util/randomNumber'
import "./ListElements.css"

// export default function AlternDos(props : NoteType []) {
export const AlternoDB = () => {

  const [notes, setNotes] = useState([] as NoteTypeDB[]);
  const [newNote, setNewNote] = useState('');
  const [showAll, setShowAll] = useState(true);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    console.log('useEffect')
    setLoading(true)
    setTimeout(() => {
      console.log('ahora!')
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => {
          console.log('seteando las notas')
          setNotes(json)
          setLoading(false)
        })

    },5000)
  }, [])

  // console.log('notes: ', {notes})
  // debugger; // eslint-disable-line no-debugger

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    // console.log('notes: ', {notes})
    const noteToAddToState : NoteTypeDB  = {
      userId: notes.length + 1,
      id:  notes.length + 1,
      title: newNote, 
      body: getRandomText(getRndInteger(20,120))
    }

    // setNotes(notes.concat(noteToAddToState))
    // otra forma
    setNotes([...notes, noteToAddToState])

    setNewNote('')
  }
  
  const handleChange = (event: SyntheticEvent) => {
    const input = event.target as HTMLInputElement
    setNewNote(input.value)
  }

  const handleClick = (event: SyntheticEvent) => {
    setShowAll(!showAll)
  }

  console.log('render')
  // debugger // eslint-disable-line no-debugger
  // if(notes.length === 0) return (<strong>There are not notes to display</strong>)

  return (
    <div>
      <h1>Notes</h1>
      {loading ? <strong>Cargando</strong> : <>
      <button onClick={handleClick}>{showAll ? 'Show important' : 'Show all'}</button>
      <ol>
        {
          notes.map(note => {
            return <Note key={note.id} noteparam={note} />
          })
        }
      </ol>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value = {newNote} />
        <button>Add Note</button>
      </form>
      </>
      }


    </div>
  )
}


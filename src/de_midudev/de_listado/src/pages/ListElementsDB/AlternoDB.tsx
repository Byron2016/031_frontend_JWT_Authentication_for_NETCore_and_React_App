import {useEffect, useState, SyntheticEvent} from "react";
import {NoteListDB as Note } from '../../components/Notes/NoteListDB'
import {NoteTypeDB } from '../../../../custom_typings/index'
import {getRandomText} from '../../util/randomText'
import {getRndInteger} from '../../util/randomNumber'
import axios from "axios";

import "./ListElements.css"

// export default function AlternDos(props : NoteType []) {
export const AlternoDB = () => {

  const [notes, setNotes] = useState([] as NoteTypeDB[]);
  const [newNote, setNewNote] = useState('');
  const [showAll, setShowAll] = useState(true);
  const [loading, setLoading] = useState(false)

  // con fetch
  // useEffect(() => {
  //   console.log('useEffect')
  //   setLoading(true)
  //   setTimeout(() => {
  //     console.log('ahora!')
  //     fetch('https://jsonplaceholder.typicode.com/posts')
  //       .then(response => response.json())
  //       .then(json => {
  //         console.log('seteando las notas')
  //         setNotes(json)
  //         setLoading(false)
  //       })

  //   },5000)
  // }, [])

  // con axios
  useEffect(() => {
    console.log('useEffect')
    setLoading(true)
    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
          // console.log('seteando las notas')
          const {data} = response
          // console.log(data)
          setNotes(data)
          setLoading(false)
        })
  }, [])

  

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    // console.log('notes: ', {notes})
    const noteToAddToState : NoteTypeDB  = {
      userId: 1,
      id:  0,
      title: newNote, 
      body: getRandomText(getRndInteger(20,120))
    }

    axios
      .post('https://jsonplaceholder.typicode.com/posts', noteToAddToState)
      .then(response => {
        const {data} = response
        // console.log(data)
        // debugger; // eslint-disable-line no-debugger
        setNotes([...notes, data])
      })

    // setNotes(notes.concat(noteToAddToState))
    // otra forma
    // setNotes([...notes, noteToAddToState])

  // console.log('notes: ', {notes})
  // debugger; // eslint-disable-line no-debugger

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


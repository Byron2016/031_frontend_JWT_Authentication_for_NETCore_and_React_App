// import {useState, SyntheticEvent}  from "react";
// import { Navigate } from 'react-router-dom';
// import { nodeModuleNameResolver } from "typescript";
import "./ListElements.css"
import { NoteListMockDos, notesList, NoteListMock as Note } from '../../components/Notes/NoteListMock'
import { AlternDos } from './AlternDos'

export const ListElements = () => {
  if(typeof notesList === "undefined" || notesList === null || notesList.length === 0){
    return <p><strong>No tenemos notas que mostrar</strong></p> 
  }

  return (
    <ul>
      {
        notesList.map((note) =>  {
          return <Note key={note.id}
              id={note.id} 
              content={note.content} 
              important={note.important} 
              date={note.date} />
          }
        )
      }
    </ul>
  )
}

export const ListElementsDos = () => {
  if(typeof notesList === "undefined" || notesList === null || notesList.length === 0){
    return <p><strong>No tenemos notas que mostrar</strong></p> 
  }

  return (
    <ul>
      {
        notesList.map((note) =>  {
          return <NoteListMockDos key={note.id}
            noteparam = {note}  />
          }
        )
      }
    </ul>
  )
}

export const ListElementsTres = () => {
  if(typeof notesList === "undefined" || notesList === null || notesList.length === 0){
    return <p><strong>No tenemos notas que mostrar</strong></p> 
  }

  return (
    <AlternDos notes={notesList} />
  )
}

// export default ListElements;


  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [redirect, setRedirect] = useState(false);

  // const handleChangeEmail = (evt: SyntheticEvent)  => {
  //   const target = evt.target as HTMLInputElement;
  //   setEmail(target.value)
  // }

  // const handleChangePassword = (evt: SyntheticEvent) => {
  //   const target = evt.target as HTMLInputElement;
  //   setPassword(target.value)
  // }

  // const handleSubmit = async (evt: SyntheticEvent) => {
  //   evt.preventDefault()
  //   console.log({
  //     email,
  //     password
  //   })

  //   const response = await fetch(
  //     'http://localhost:8000/api/login',
  //     {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type':'application/json'
  //       },
  //       credentials: 'include',
  //       body:JSON.stringify({
  //         email,
  //         password
  //       })
  //     }
  //   );

  //   const content = await response.json();
  //   console.log(content);

  //   setRedirect(true);

  // }

  // if(redirect){
  //   return <Navigate to = "/" />
  // }
import axios from "axios";
import {NoteTypeDB } from '../../../../custom_typings/index'

export const createNote = (noteToAddToState : NoteTypeDB) => {
  return axios
    .post('https://jsonplaceholder.typicode.com/posts', noteToAddToState)
    .then(response => {
      const {data} = response
      return data
  })
}


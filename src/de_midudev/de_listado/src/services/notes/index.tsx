import axios from "axios"
import { NoteTypeDB } from "../../../../custom_typings/index"

export const create = (noteToAddToState: NoteTypeDB) => {
  return axios
    .post("https://jsonplaceholder.typicode.com/posts", noteToAddToState)
    .then((response) => {
      const { data } = response
      return data
    })
}

export const getAll = () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      const { data } = response
      return data
    })
}

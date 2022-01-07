import axios from "axios";

export const getAllNotes = () => {
  return axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    // console.log('seteando las notas')
    const {data} = response
    return data
  })
}
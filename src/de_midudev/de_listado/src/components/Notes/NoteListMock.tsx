import { NoteType } from '../../../../custom_typings/index'

export const NoteListMock = (props: {id:number, content:string, important: boolean , date:string}) => {
  // console.log('props', props)
  
  // debugger; // eslint-disable-line no-debugger
  return(
    <li>
      <p><strong> id: {props.id}</strong></p>
      <p>{props.content}</p>
      <p>{props.important}</p>
      <small><time>{props.date}</time></small>
    </li>
  )
}

export const NoteListMockDos = (props: {noteparam:NoteType}) => {
  return(
    <li>
      <p><strong> id: {props.noteparam.id}</strong></p>
      <p>{props.noteparam.content}</p>
      <p>{props.noteparam.important}</p>
      <small><time>{props.noteparam.date}</time></small>
    </li>
  )
}
// NoteType []
export const notesList : Array<NoteType> = [
  {
    id:1,
    content: 'Html is easy',
    date: '2019-05-30T17:30:31.0982',
    important: true
  },
  {
    id:2,
    content: 'b Html is easy',
    date: '2019-06-30T18:39:31.0982',
    important: false
  },
  {
    id:3,
    content: 'c Html is easy',
    date: '2019-07-30T19:20:31.0982',
    important: true
  },
  {
    id:4,
    content: 'de Html is easy',
    date: '2019-08-30T19:20:31.0982',
    important: true
  }
]
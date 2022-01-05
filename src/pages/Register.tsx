import {useState, SyntheticEvent}  from "react";
import { Navigate } from 'react-router-dom';

const Register = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);

  const handleChangeName = (evt: SyntheticEvent) => {
    const target = evt.target as HTMLInputElement;
    setName(target.value)
  }

  const handleChangeEmail = (evt: SyntheticEvent)  => {
    const target = evt.target as HTMLInputElement;
    setEmail(target.value)
    // setEmail(evt.target.value)
  }

  const handleChangePassword = (evt: SyntheticEvent) => {
    const target = evt.target as HTMLInputElement;
    setPassword(target.value)
  }

  const handleSubmit = async (evt: SyntheticEvent) => {
    evt.preventDefault()
    // console.log({
    //   name,
    //   email,
    //   password
    // })

    const response = await fetch(
      'http://localhost:8000/api/register',
      {
        method: 'POST',
        headers: {
          'Content-Type':'application/json'
        },
        body:JSON.stringify({
          name,
          email,
          password
        })
      }
    );

    const content = await response.json();
    console.log(content);

    setRedirect(true);

  }

  if(redirect){
    return <Navigate to = "/login" />
  }

  

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="h3 mb-3 fw-normal">Please register</h1>
      <input className="form-control" onChange={handleChangeName} value={name} placeholder="Name" />

      <input type="email" className="form-control" onChange={handleChangeEmail} value={email}  placeholder="Email address" />

      <input type="password" className="form-control" onChange={handleChangePassword} value={password}  placeholder="Password" />
      
      <button className="w-100 btn btn-lg btn-primary">Submit</button>
      
    </form>
  )
}

export default Register;
import {useState, SyntheticEvent}  from "react";
import { Navigate } from 'react-router-dom';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);

  const handleChangeEmail = (evt: SyntheticEvent)  => {
    const target = evt.target as HTMLInputElement;
    setEmail(target.value)
  }

  const handleChangePassword = (evt: SyntheticEvent) => {
    const target = evt.target as HTMLInputElement;
    setPassword(target.value)
  }

  const handleSubmit = async (evt: SyntheticEvent) => {
    evt.preventDefault()
    console.log({
      email,
      password
    })

    const response = await fetch(
      'http://localhost:8000/api/login',
      {
        method: 'POST',
        headers: {
          'Content-Type':'application/json'
        },
        credentials: 'include',
        body:JSON.stringify({
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
    return <Navigate to = "/" />
  }

  return (
    <form onSubmit={handleSubmit}>
    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>


      <input type="email" className="form-control" onChange={handleChangeEmail} value={email} placeholder="Email" />

      <input type="password" className="form-control" onChange={handleChangePassword} value={password} placeholder="Password" />

    <button className="w-100 btn btn-lg btn-primary" >Sign in</button>
  </form>
  )
}

export default Login;
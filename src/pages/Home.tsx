import  { useState, useEffect }  from "react";

const Home = () => {

  // const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  

  useEffect(() => {
    (
      async() => {
        const response =await fetch(
          'http://localhost:8000/api/user',
          {
            headers: {
              'Content-Type':'application/json'
            },
            credentials: 'include',
          }
        );

        const content = await response.json();
        setName(content.name);
        setEmail(content.email);

      }
    )();
  })

  return (
    <div>
      {name ? 'Hi ' + name + ' ( ' + email + ')'  : 'You are not logged in'}
      {/* Hi {name } you have been registered with your email:  {email} */}
    </div>
  )
}

export default Home;
import React from "react";

const Home = (props: {name: string, email: string}) => {
  return (
    <div>
      {props.name ? 'Hi ' + props.name + ' ( ' + props.email + ')'  : 'You are not logged in'}
      {/* Hi {name } you have been registered with your email:  {email} */}
    </div>
  )
}

export default Home;

// import React from "react";
// const Home = (props: {name: string , email: string}) => {
//   console.log({
//     'lugar':'bbbc',
//     'name': props.name,
//   })
  

//   return (
//     <div>
//       {props.name ? 'Hi ' + props.name + ' ( ' + props.email + ')'  : 'You are not logged in'}
//     </div>
//   )
// }

// export default Home;
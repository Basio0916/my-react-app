import React from 'react';

// // クラスコンポーネント
// class App extends Component{
//   render(){
//     return <div>Hi!</div>
//   }
// }

// 関数コンポーネント
function App(){
  const profiles = [
    {
      name: "Taro",
      age: 20
    },
    {
      name: "Makoto",
      age: 28
    },
    {
      name: "Basio",
    }
  ]
  return(
    <div>
      {
        profiles.map((profile, index)=>{
          return <User name={profile.name} age={profile.age} key={index}/>
        })
      }
    </div>
  )
}

function User(props){
  return <div>Hi! I am {props.name}, and {props.age} years old!</div>
}

User.defaultProps ={
  age: 1
}

export default App;

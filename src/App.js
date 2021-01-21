import React from 'react';
import PropTypes from 'prop-types'

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
      age: "21" // ←型が違うのでワーニングが出る （一応表示は変わる）
    },
    {
      name: "Makoto",
      age: 28
    },
    {
      name: "Basio" // ←　ageが無いのでワーニングが出る??何かおかしい
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

// 型チェックをPropTypesを用いて行う
User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired // isRequiredは必須要素
}

export default App;

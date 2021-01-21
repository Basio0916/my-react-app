import React from 'react';

// // クラスコンポーネント
// class App extends Component{
//   render(){
//     return <div>Hi!</div>
//   }
// }

// 関数コンポーネント
function App(){
  return(
    <div>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </div>
  )
}

function Cat(){
  return <div>Meow!</div>
}

export default App;

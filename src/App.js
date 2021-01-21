import React, {Component} from 'react';

// // クラスの場合
// class App extends Component{
//   render(){
//     return <h1>Hello world!</h1>;
//   }
// }

function App() {
  return (  // 関数コンポーネントの場合はdivで括る必要がある→React.Fragmentで余計なdivを作らないことができる
    <React.Fragment>
      <label htmlFor="bar">Label: </label>
      <input type="text" name="bar" onChange={()=>{console.log("I am clicked.")}}/>
    </React.Fragment>
  )
}

// 下記のようにトランスファイルされる
// function App(){
//   return React.createElement('div', null, 'Hello W orld!!!');
// }

export default App;

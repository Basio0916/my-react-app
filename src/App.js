// import {Component} from 'react';


// // クラスの場合
// class App extends Component{
//   render(){
//     return <h1>Hello world!</h1>;
//   }
// }

// 関数コンポーネントの場合
function App() {
  // 1 関数を宣言する場合
  // function clicked(){
  //   console.log("I am clicked!");
  // }
  // return <input type="text" onClick={clicked}></input>

  //　2 無名関数を使う場合
  return <input type="text" onClick={()=>{console.log("I am clicked!")}}/>
}

// 下記のようにトランスファイルされる
// function App(){
//   return React.createElement('div', null, 'Hello W orld!!!');
// }

export default App;

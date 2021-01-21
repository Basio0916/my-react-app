// import {Component} from 'react';


// // クラスの場合
// class App extends Component{
//   render(){
//     return <h1>Hello world!</h1>;
//   }
// }

// 関数コンポーネントの場合
function App() {
  const child = "Basio";
  const dom = <h1 className="App"/* classNameはHTML上のclassに変更される */>Hi, {child}</h1> // {}を使うことで変数を使える
  return dom;
}

// 下記のようにトランスファイルされる
// function App(){
//   return React.createElement('div', null, 'Hello W orld!!!');
// }

export default App;

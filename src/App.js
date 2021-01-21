import React, {Component} from 'react';

function App() {
  return (  // 関数コンポーネントの場合はdivで括る必要がある→React.Fragmentで余計なdivを作らないことができる
    <React.Fragment>
      <label htmlFor="bar">Label: </label>
      <input type="text" name="bar" onChange={()=>{console.log("I am clicked.")}}/>
    </React.Fragment>
  )
}

export default App;

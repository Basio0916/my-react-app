import React, {Component} from 'react'; // {}はNamed Exportを呼び出す

// Stateはクラスコンポーネントで利用できる

function App(){
  return <Counter />
}

class Counter extends Component{  // Component = React.Component
  constructor(props){
    super(props)
    this.state = {count : 0}
  }

  handlePlusButton(){
    console.log("handlePlusButton");
    // this.state.count++; // これじゃレンダリングされない 直接Stateを更新するのは禁止されている
    this.setState({count: this.state.count + 1});    // このようにして更新する　render()も実行される
  }

  handleMinusButton(){
    this.setState({count: this.state.count - 1});    // このようにして更新する
  }

  render(){
    console.log(this.state)
    return (
      <React.Fragment>
        <p>counter: {this.state.count}</p>
        {/* <input type="button" onClick={this.handlePlusButton.bind(this)} value="+"/>
        <input type="button" onClick={this.handleMinusButton.bind(this)} value="-"/> */}
        <input type="button" onClick={()=>this.handlePlusButton()} value="+"/>
        <input type="button" onClick={()=>this.handleMinusButton()} value="-"/>
        
      </React.Fragment>
    )
  }
}

export default App;

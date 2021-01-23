import React, {Component} from 'react'; // {}はNamed Exportを呼び出す
import {connect} from 'react-redux';
// Stateはクラスコンポーネントで利用できる

import {increment, decrement} from '../actions'

class App extends Component{  // Component = React.Component
  render(){
    const props = this.props;

    return (
      <React.Fragment>
        <p>value: {props.value}</p>
        {/* <input type="button" onClick={this.handlePlusButton.bind(this)} value="+"/>
        <input type="button" onClick={this.handleMinusButton.bind(this)} value="-"/> */}
        <input type="button" onClick={props.increment} value="+"/>
        <input type="button" onClick={props.decrement} value="-"/>
        
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({value: state.count.value});
// const mapDispatchToProps = dispatch => ({
//   increment: ()=>dispatch(increment()),
//   decrement: ()=>dispatch(decrement())
// });
const mapDispatchToProps = ({
  increment, decrement
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
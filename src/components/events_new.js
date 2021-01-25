import React, {Component} from 'react'; // {}はNamed Exportを呼び出す
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'

// import {postEvent} from '../actions'

class EventsNew extends Component{  // Component = React.Component
  render(){
    return (
      <React.Fragment>
        
        <Link to='/events/new'>New Event</Link>
    </React.Fragment>
    )
  }
}

// const mapDispatchToProps = ({
//   postEvent
// })

export default connect(null, null)(EventsNew)
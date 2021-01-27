import React, {Component} from 'react'; // {}はNamed Exportを呼び出す
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form'
import {Link} from 'react-router-dom'

import {getEvent, deleteEvent, putEvent} from '../actions'

class EventsShow extends Component{  // Component = React.Component
  constructor(props){
    super(props);
    //this.onSubmit = this.onSubmit.bind(this); // thisをバインドする
  }

  componentDidMount(){
    const {id} = this.props.match.params;
    if(id){
      this.props.getEvent(id);
    }
  }

  renderField(field){
    const {input, label, type, meta: {touched, error}} = field;
    
    return (
      <div>
        <input {...input} placeholder={label} type={type}/>
        {touched && error && <span>{error}</span>}
      </div>
    )
  }

  async onSubmit(values){
    //await this.props.postEvent(values);
    this.props.history.push('/'); // 初期ページに移動する
  }

  async onDeleteClick(){
    const {id} = this.props.match.params;
    await this.props.deleteEvent(id);
    this.props.history.push('/'); // 初期ページに移動する
  }

  render(){
    const {handleSubmit, pristine, submitting} = this.props;
    return (
      <React.Fragment>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <div><Field label="Title" name="title" type="text" component={this.renderField}/></div>
          <div><Field label="Body" name="body" type="text" component={this.renderField}/></div>

          <div>
            <input type="submit" value="Submit" disabled={pristine || submitting}/>
            <Link to="/">Cancel</Link>
            <Link to="/" onClick={this.onDeleteClick.bind(this)}>Delete</Link>
          </div>

        </form>
      </React.Fragment>
    )
  }
}
const validate = values => {
  const errors = {};
  if(!values.title){
    errors.title = "Enter a title, please.";
  }
  if(!values.body){
    errors.body = "Enter a body, please";
  }
  return errors;
};
const mapDispatchToProps = {
  deleteEvent, getEvent
};

const mapStateToProps = (state, ownProps)=>{
  const event = state.events[ownProps.match.params.id];
  return {initialValues: event, state};
}

export default connect(mapStateToProps, mapDispatchToProps)(
  reduxForm({validate, form: 'eventShowForm', enableReinitialize: true})(EventsShow)
)
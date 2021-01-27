import React, {Component} from 'react'; // {}はNamed Exportを呼び出す
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form'
import {Link} from 'react-router-dom'

import {postEvent} from '../actions'
import { SourceMapConsumer } from 'source-map';

class EventsNew extends Component{  // Component = React.Component
  constructor(props){
    super(props);
    //this.onSubmit = this.onSubmit.bind(this); // thisをバインドする
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
    await this.props.postEvent(values);
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
const mapDispatchToProps = ({
  postEvent
});

export default connect(null, mapDispatchToProps)(
  reduxForm({validate, form: 'eventNewForm'})(EventsNew)
)
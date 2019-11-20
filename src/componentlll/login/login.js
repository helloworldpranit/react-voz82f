
import React from 'react';


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      pwd: ''
    };

    this.handleChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });

  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.history.push('/comments')
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} >
          <div className="form-group">
            <label htmlfor="nameInput">Sign In</label>
           </div>
          <div className="form-group col-md-8">
            <label htmlfor="nameInput">User Name</label>
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} className="form-control" id="nameInput" placeholder="Name" />
          </div>
          <div className="form-group col-md-8">
            <label htmlfor="password">Password</label>
            <input name="pwd" type="password" value={this.state.pwd} onChange={this.handleChange} className="form-control" id="pwdInput" />
          </div>
          <div className="form-group col-md-8">
          <input type="submit" value="Submit" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}

export default Login;

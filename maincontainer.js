import React, { Component } from "react";
import axios from 'axios';

/* Import Components */
import CheckBox from "../src/common/CheckBox";
import Input from "../src/common/Input";
import Select from "../src/common/Select";
import Button from "../src/common/Button";

class MainContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newUser: {
        name: "",
        age: "",
        gender: "",
        skills: [],
        about: ""
      },

      genderOptions: ["Male", "Female", "Others"],
      skillOptions: ["Programming", "Development", "Design", "Testing"]
    };

    this.handleAge = this.handleAge.bind(this);
    this.handleFullName = this.handleFullName.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleCheckBox = this.handleCheckBox.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  /* This lifecycle hook gets executed when the component mounts */

  handleFullName(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          name: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }

  handleAge(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          age: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }

  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          [name]: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }

  // componentDidMount() {
  //   fetch('http:localhost:5000')
  //     .then(data => console.log(data));
  // }


  handleCheckBox(e) {
    const newSelection = e.target.value;
    let newSelectionArray;

    if (this.state.newUser.skills.indexOf(newSelection) > -1) {
      newSelectionArray = this.state.newUser.skills.filter(
        s => s !== newSelection
      );
    } else {
      newSelectionArray = [...this.state.newUser.skills, newSelection];
    }

    this.setState(prevState => ({
      newUser: { ...prevState.newUser, skills: newSelectionArray }
    }));
  }

  handleFormSubmit(e) {
    e.preventDefault()
    const input = { body: this.state.newUser  };

    axios.post("http://httpbin.org/post", this.state.newUser);
       
    
    // fetch('http://localhost:5000/post', {
      
    //   method: 'post',
    //   headers: {
    //     "Access-Control-Allow-Origin ":" *",
    //     "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
    //   },
    //   body: input
    // })
    
    // .then(function (data) {
    //   console.log('Request succeeded with JSON response', data);
    // })
    // .catch(function (error) {
    //   console.log('Request failed', error);
    // });

  }

handleClearForm(e) {
  e.preventDefault();
  this.setState({
    newUser: {
      name: "",
      age: "",
      gender: "",
      skills: [],
      about: ""
    }
  });
}

render() {
  return (
    <form className="container-fluid" onSubmit={this.handleFormSubmit}>
      <Input
        inputtype={"text"}
        title={"Full Name"}
        name={"name"}
        value={this.state.newUser.name}
        placeholder={"Enter your name"}
        onChange={this.handleInput}
      />{" "}
      {/* Name of the user */}
      <Input
        inputtype={"number"}
        name={"age"}
        title={"Age"}
        value={this.state.newUser.age}
        placeholder={"Enter your age"}
        onChange={this.handleAge}
      />{" "}
      {/* Age */}
      <Select
        title={"Gender"}
        name={"gender"}
        options={this.state.genderOptions}
        value={this.state.newUser.gender}
        placeholder={"Select Gender"}
        onChange={this.handleInput}
      />{" "}
      {/* Age Selection */}
      <CheckBox
        title={"Skills"}
        name={"skills"}
        options={this.state.skillOptions}
        selectedOptions={this.state.newUser.skills}
        onChange={this.handleCheckBox}
      />{" "}
      {/* Skill */}

      {/* About you */}
      <Button
        action={this.handleFormSubmit}
        type={"primary"}
        title={"Submit"}
        style={buttonStyle}
      />{" "}
      {/*Submit */}
      <Button
        action={this.handleClearForm}
        type={"secondary"}
        title={"Clear"}
        style={buttonStyle}
      />{" "}
      {/* Clear the form */}
    </form>
  );
}
}

const buttonStyle = {
  margin: "10px 10px 10px 10px"
};

export default MainContainer;

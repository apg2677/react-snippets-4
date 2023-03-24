// React is loaded and is available as React and ReactDOM
// imports should NOT be used
import React from "react";

const App = () => {
  return <ContactForm />;
};
class ContactForm extends React.Component {
  state = {
    // Fill in appropriate state properties
    firstName: "",
    age: 0,
    email: "",
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    console.log(value);
  };
  render() {
    return (
      <div>
        <div>
          {" "}
          <span>First Name:</span>
          <input
            onChange={this.handleChange}
            type="text"
            value={this.state.firstName}
            name="firstName"
          />
        </div>
        <div>
          <span>age:</span>
          <input
            onChange={this.handleChange}
            type="number"
            value={this.state.age}
            name="age"
          />
        </div>
        {this.state.age >= 14 && (
          <div>
            <span>Email:</span>
            <input
              onChange={this.handleChange}
              type="text"
              value={this.state.email}
              name="email"
            />
          </div>
        )}
      </div>
    );
  }
}

export default App;

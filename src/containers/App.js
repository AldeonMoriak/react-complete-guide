import React from "react";
import classes from "./App.css";
import Person from "../components/Persons/Person/Person";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        { id: "asd2", name: "Adonel", age: 28 },
        { id: "sde2", name: "Aldeon", age: 27 },
        { id: "gr5f", name: "Mehran", age: 29 }
      ],
      showPersons: false
    };
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(el => {
      return el.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  };

  render() {
    let persons = null;
    let btnClass = "";

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((el, index) => {
            return (
              <ErrorBoundary key={el.id}>
                <Person
                  click={() => this.deletePersonHandler(index)}
                  name={el.name}
                  age={el.age}
                  changed={event => this.nameChangedHandler(event, el.id)}
                />
              </ErrorBoundary>
            );
          })}
        </div>
      );

      btnClass = classes.Red;
    }
    const assignedClasses = [];

    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red); // classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I am a React App</h1>
        <p className={assignedClasses.join(" ")}>This is realy working!</p>
        <button className={btnClass} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;

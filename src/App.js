import React from "react";
import "./App.css";
import Person from "./Person/Person";

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
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((el, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={el.name}
                age={el.age}
                key={el.id}
                changed={event => this.nameChangedHandler(event, el.id)}
              />
            );
          })}
        </div>
      );

      style.backgroundColor = "red";
    }
    const classes = [];

    if (this.state.persons.length <= 2) {
      classes.push("red"); // classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold"); // classes = ['red', 'bold']
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1>Hi, I am a React App</h1>
          <p className={classes.join(" ")}>This is realy working!</p>
        </header>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;

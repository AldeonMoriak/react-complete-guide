import React, { Component } from "react";
import Person from "./Person/Person";
import Aux from "../../hoc/Auxiliary";

class Persons extends React.Component {
  // static getDerivedStateFromProps(props, state) {
  //   console.log("[Persons.js] getDerivedStateFromProps", props);
  //   return state;
  // }

  shouldComponentUpdate(nextProps, nextState) {
    // console.log("[Persons.js] shouldComponentUpdate");
    // if (nextProps.persons !== this.props.persons) {
    //   return true;
    // } else {
    //   return false;
    // }
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[Persons.js] getSnapshotBeforeUpdate");
    return { message: "snapshot!" };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[Persons.js] componentDidUpdate");
    console.log(snapshot);
  }

  componentWillUnmount() {
    console.log("[Persons.js] componentWillUnmount");
  }

  render() {
    console.log("[Persons.js] rendering...");
    return this.props.persons.map((el, index) => {
      return (
        <Aux key={el.id}>
          <Person
            click={() => this.props.clicked(index)}
            name={el.name}
            age={el.age}
            changed={event => this.props.changed(event, el.id)}
            isAuth={this.props.isAuthenticated}
          />
          {console.log(this.props.isAuthenticated + " LET'S SEE")}
        </Aux>
      );
    });
  }
}

export default Persons;

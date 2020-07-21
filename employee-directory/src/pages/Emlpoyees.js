import React, { Component } from "react";
import Api from "../components/utils/Api";
import Card from "../components/Card";
import Row from "../components/Row";
import Container from "../components/Container";
import Column from "../components/Column";
// import "./styles.css";

class Employees extends Component {
  state = {
    allResults: [],
    allResultsParsed: [],
    results: [],
  };

  componentDidMount() {
    Api.findPeople().then((res) => {
      this.setState({
        allResults: res.data.results,
        allResultsParsed: res.data.results,
        results: res.data.result,
      });
    });
  }

  handleSearchFN = (e) => {
    const queryFirstName = e.target.value;
    this.sortPeopleFN(queryFirstName);
  };
  handleSearchLN = (e) => {
    const queryLastName = e.target.value;
    this.sortPeopleLN(queryLastName);
  };
  //Sorting employees by first name
  sortPeopleFN = (value) => {
    let searchResults = this.state.allResults.filter((x) => {
      return x.name.first.toLowerCase().includes(value);
    });
    this.setState({
      allResultsParsed: searchResults,
    });
  };
  //Sorting employees by last name
  sortPeopleLN = (value) => {
    let searchResults = this.state.allResults.filter((x) => {
      return x.name.last.toLowerCase().includes(value);
    });
    this.setState({
      allResultsParsed: searchResults,
    });
  };

  render() {
    const results = this.state.allResultsParsed;
    return (
      <div>
        <h1 className="text-center">Corporation</h1>
        <form className="search-form form-inline">
          <div>
            <input
              className="employeeSearch"
              placeholder="Search by first name"
              onChange={this.handleSearchFN}
            />
            <input
              className="employeeSearch"
              placeholder="Search by last name"
              onChange={this.handleSearchLN}
            />
          </div>
        </form>
        <Container>
          <Row>
            {results.map((employees, i) => (
              <Column key={i}>
                <Card
                  fullName={employees.name.first + employees.name.last}
                  firstName={employees.name.first}
                  lastName={employees.name.last}
                  image={employees.picture.large}
                  age={employees.dob.age}
                  DOB={employees.dob.date}
                  ssn={employees.id.value}
                  email={employees.email}
                  phoneNumber={employees.phone}
                />
              </Column>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}

export default Employees;

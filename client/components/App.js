import React from "react";
import Nav from "./Nav";
import Routes from "./Routes";
import { TwentyOne } from "./Modals/TwentyOne";
import { Redirect } from "react-router-dom";
import Footer from "./Footer"

class App extends React.Component {
  constructor() {
    super();
    this.myRef = React.createRef();
    this.state = {
      show: true,
      month: "",
      day: "",
      year: "",
      error: "",
      loading: true
    };
  }
  scrollToRef = () => window.scrollTo(0, this.myRef.current.offsetTop);
  submitAge = e => {
    e.preventDefault();
    //regex to check for letters/special chars
    let numbers = /^[0-9]+$/;
    let { month, day, year } = this.state;
    if (!month.match(numbers) || !day.match(numbers) || !year.match(numbers)) {
      this.setState({ error: "not valid date" });
      return;
    }

    // - 1 because of 0 indexing
    month = Number(month) - 1;
    day = Number(day);
    year = Number(year);
    let dateToCheck = new Date(year, month, day);
    let dateNow = Date.now() - dateToCheck.getTime();
    let diff = new Date(dateNow);
    let yearDiff = Math.abs(diff.getFullYear() - 1970);

    if (yearDiff < 21) {
      this.setState({ error: "You are not 21" });
      return;
    } else {
      this.setState({ show: false, error: "" });
      localStorage.setItem("+21", "true");
    }
  };

  handleChange = async e => {
    await this.setState({ [e.target.name]: e.target.value });
  };

  componentDidMount() {
    console.log(location.pathname);
    //checks if this has been set. msotly for refresh
    if (localStorage.getItem("+21")) {
      this.setState({ show: false });
    }
    setTimeout(() => {
      //to fix flash of screen
      this.setState({ loading: false });
    }, 100);
  }

  render() {
    const { show, error } = this.state;
    if (this.state.loading) {
      return <div></div>;
    } else {
      return (
        <div>
          {!show && !error && (
            <div>
              <Nav />
              <Routes />
              <Footer />
            </div>
          )}
          {show && (
            <TwentyOne
              submitAge={this.submitAge}
              {...this.state}
              onChange={this.handleChange}
            />
          )}
        </div>
      );
    }
  }
}

export default App;

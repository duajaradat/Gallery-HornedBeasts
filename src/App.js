import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import "bootstrap/dist/css/bootstrap.min.css";
import Imgdata from "./components/Imgdata.json";
import SelectedBeast from "./components/SelectedBeast.js";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Imgdata: Imgdata,
      show: false,
      theSelectedOne: {},
    };
  }

  showPopUp = (title) => {
    let selectedArr = [];
    Imgdata.forEach((element) => {
      if (element.title === title) {
        selectedArr = element;
      }
    });
    this.setState({
      show: true,
      theSelectedOne: selectedArr,
    });
  };

  handleClose = () => {
    this.setState({
      show: false,
    });
  };
  render() {
    return (
      <div>
        <Header />
        <Main
          Imgdata={this.state.Imgdata}
          showPopUp={this.showPopUp}
        />
        <SelectedBeast
          Imgdata={this.state.theSelectedOne}
          show={this.state.show}
          handleClose={this.handleClose}
        />
        <Footer />
      </div>
    );
  }
}

export default App;

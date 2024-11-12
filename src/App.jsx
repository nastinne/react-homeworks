import React, { Component } from 'react';
import Header from './components/Header';
import MainSection from './components/MainSection';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemCount: 0,
    };
  }

  incrementItemCount = (quantity) => {
    this.setState((prevState) => ({
      itemCount: prevState.itemCount + quantity,
    }));
  };

  render() {
    return (
      <div className="App">
        <Header itemCount={this.state.itemCount} />
        <MainSection incrementItemCount={this.incrementItemCount} />
        <Footer />
      </div>
    );
  }
}

export default App;

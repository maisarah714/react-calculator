import './App.css';
import React, { Component } from "react";
import { Button } from './components/Button';
import { Input } from './components/Input';
import { ClearButton } from './components/ClearButton';
import * as math from 'mathjs';

class App extends Component {

  constructor(props){
    // call superclass component
    super(props);

    // state has variable input which is set to "" as default
    this.state={
      input: ""
    };
  }

  addToInput = val => {
    this.setState({input: this.state.input + val});
  };

  handleEqual = () =>{
    this.setState({input: math.evaluate(this.state.input)});
  }


  render(){
  return (
    <div className="app">
      <div className="calc-wrapper">
        <Input input={this.state.input}></Input>
        <div className="row">
          <Button clickNumber={this.addToInput}>7</Button>
          <Button clickNumber={this.addToInput}>8</Button>
          <Button clickNumber={this.addToInput}>9</Button>
          <Button clickNumber={this.addToInput}>/</Button>
        </div>
        <div className="row">
          <Button clickNumber={this.addToInput}>4</Button>
          <Button clickNumber={this.addToInput}>5</Button>
          <Button clickNumber={this.addToInput}>6</Button>
          <Button clickNumber={this.addToInput}>*</Button>
        </div>
        <div className="row">
          <Button clickNumber={this.addToInput}>1</Button>
          <Button clickNumber={this.addToInput}>2</Button>
          <Button clickNumber={this.addToInput}>3</Button>
          <Button clickNumber={this.addToInput}>+</Button>
        </div>
        <div className="row">
          <Button clickNumber={this.addToInput}>.</Button>
          <Button clickNumber={this.addToInput}>0</Button>
          <Button clickNumber={this.handleEqual}>=</Button>
          <Button clickNumber={this.addToInput}>-</Button>
        </div>
        <div className="row">
          <ClearButton handleClear={() => this.setState({input: ""})}>Clear</ClearButton>
        </div>
      </div>
    </div>
  );
  }
}

export default App;

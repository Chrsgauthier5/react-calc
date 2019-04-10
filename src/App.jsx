import React, { Component } from 'react';
import './App.css';
import Button from './Components/Button';
import Input from './Components/Input';
import ClearButton from './Components/ClearButton';
import OperatorButton from './Components/OperatorButton';



class App extends Component {

  state = {
    input: '',
    operand: '',
    input2: ''
  }

  addToInput = val => {
    (!this.state.operand) ?
      this.setState({ input: this.state.input + val })
      : this.setState({ input2: this.state.input2 + val })
  }

  handleOperation = operator => {
    const { input, operand, input2 } = this.state;
    if (input && operand && input2) {
      this.doMath(input, input2, operand);
    }
    else this.setState({ operand: operator })
  }

  doMath(a, b, sign) {
    a = parseFloat(a);
    b = parseFloat(b);
    switch (sign) {
      case '+':
        this.setState({ input: a + b, operand: '', input2: '' })
        break;
      case '-':
        this.setState({ input: a - b, operand: '', input2: '' })
        break;
      case 'x':
        this.setState({ input: a * b, operand: '', input2: '' })
        break;
      case '/':
        this.setState({ input: a / b, operand: '', input2: '' })
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <div className='app'>
        <div className='calc-wrapper'>
          <Input input={this.state.input}>0</Input>
          <div className='row'>
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <OperatorButton handleOperation={this.handleOperation}>/</OperatorButton>
          </div>
          <div className='row'>
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <OperatorButton handleOperation={this.handleOperation}>x</OperatorButton>
          </div>
          <div className='row'>
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <OperatorButton handleOperation={this.handleOperation}>+</OperatorButton>
          </div>
          <div className='row'>
            <Button handleClick={this.addToInput}>.</Button>
            <Button handleClick={this.addToInput}>0</Button>
            <OperatorButton handleOperation={this.handleOperation}>=</OperatorButton>
            <OperatorButton handleOperation={this.handleOperation}>-</OperatorButton>
          </div>
          <div className='row'>
            <ClearButton
              handleClear={() => this.setState({ input: '', operand: '', input2: '' })}
            >Clear</ClearButton>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

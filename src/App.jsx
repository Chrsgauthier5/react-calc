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

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress)
  }
  handleKeyPress = event => {
    console.log(event)
    const regex = /^\d+$/;
    if (regex.test(event.key)) this.addToInput(event.key)
    if (event.key === '+' || event.key === '-' || event.key === '*' || event.key === '/' || event.code === 'Equal' || event.key === 'Enter') this.handleOperation(event.key)
    if (event.code === 'Period') this.handleDecimal(event.key);
    if (event.code === 'KeyC') this.setState({ input: "", operand: "", input2: "" })
  }

  handleDecimal = val => {
    const { input, operand, input2 } = this.state;
    if (!operand) {
      if (input.indexOf(val) === -1) this.setState({ input: this.state.input + val })
    }
    else if (operand) {
      if (input2.indexOf(val) === -1) this.setState({ input2: this.state.input2 + val })
    }
  }

  addToInput = val => {
    const { input, operand, input2 } = this.state;
    (!operand) ? this.setState({ input: input + val }) : this.setState({ input2: input2 + val })
  };

  handleOperation = operator => {
    if(operator === "Enter") operator = '=';

    const { input, operand, input2 } = this.state;

    (input && operand && input2)
      ? this.doMath(input, input2, operand, operator)
      : this.setState({ operand: operator });

    if (!input) this.setState({ input: 0 });
    if (operator === '=' && input2 === '') {
      this.setState({ input: this.state.input, operand: '' })
      return
    }



  };

  doMath(a, b, sign, operator) {
    a = parseFloat(a);
    b = parseFloat(b);
    switch (sign) {
      case "+":
        operator === "="
          ? this.setState({ input: a + b, operand: "", input2: "" })
          : this.setState({ input: a + b, operand: operator, input2: "" });
        break;
      case "-":
        operator === "="
          ? this.setState({ input: a - b, operand: "", input2: "" })
          : this.setState({ input: a - b, operand: operator, input2: "" });
        break;
      case "*":
        operator === "="
          ? this.setState({ input: a * b, operand: "", input2: "" })
          : this.setState({ input: a * b, operand: operator, input2: "" });
        break;
      case "/":
        operator === "="
          ? this.setState({ input: a / b, operand: "", input2: "" })
          : this.setState({ input: a / b, operand: operator, input2: "" });
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <div className="app">
        <div className="calc-wrapper">
          <Input
            input={this.state.input}
            operand={this.state.operand}
            input2={this.state.input2}
          >
            0
          </Input>
          <div className="row">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <OperatorButton handleOperation={this.handleOperation}>
              /
            </OperatorButton>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <OperatorButton handleOperation={this.handleOperation}>
              *
            </OperatorButton>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <OperatorButton handleOperation={this.handleOperation}>
              +
            </OperatorButton>
          </div>
          <div className="row">
            <Button handleClick={this.handleDecimal}>.</Button>
            <Button handleClick={this.addToInput}>0</Button>
            <OperatorButton handleOperation={this.handleOperation}>
              =
            </OperatorButton>
            <OperatorButton handleOperation={this.handleOperation}>
              -
            </OperatorButton>
          </div>
          <div className="row">
            <ClearButton
              handleClear={() =>
                this.setState({ input: "", operand: "", input2: "" })
              }
            >
              Clear (c)
            </ClearButton>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

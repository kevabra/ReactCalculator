import logo from './logo.svg';
import './App.css';
import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      numbers: [],
      operations: [],
      currentNumber: "0"
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClick);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClick);
  }

  handleClick(event) {
    // hitting equals means getting the result of the chain of numbers
    // have to figure out when to push a new number into the numbers list
    // when a number is pushed into the list
    // the value of currentNumber is reset to zero
    // shall occur when an operation button is clicked

    // after an operation is clicked and a digit is entered, remove the operation from the display as long as it is not a negative sign

    // if we enter a negative sign and then a digit, but there is no chain of numbers, meaning that the numbers list is empty, then we would interpret that negative as a negative sign rather than an operation
    let condition = this.state.currentNumber == "+" || this.state.currentNumber == "-" || this.state.currentNumber == "/" || this.state.currentNumber == "*" || this.state.currentNumber == "0";

    if (event.target.id == "decimal") {
      if (this.state.currentNumber.indexOf(".") == -1) {
        let curr = this.state.currentNumber + ".";
        this.setState({
          numbers: this.state.numbers,
          operations: this.state.operations,
          currentNumber: curr
        });
      }
    }

    if (event.target.id == "clear") {
      // if clear is hit, then set both the numbers and operations lists to empty and set currentNumber to zero
      this.setState({
        numbers: [],
        operations: [],
        currentNumber: "0"
      });
    }

    if (event.target.id == "zero") {
      // if zero is entered but the current number is not a zero or any of those operations, then simply append the zero to the current value of the currentNumber
      // else, simply set the currentNumber to zero
      let curr = (!condition) ? this.state.currentNumber + "0" : "0";
      this.setState({
        numbers: this.state.numbers,
        operations: this.state.operations,
        currentNumber: curr
      });
    }
    if (event.target.id == "one") {
      // if chain of numbers doesn't exist interpret as negative as a sign
      if (this.state.numbers.length == 0 && this.state.currentNumber == "-") {
        let curr = this.state.currentNumber + "1";
        this.setState({
          numbers: this.state.numbers,
          operations: this.state.operations,
          currentNumber: curr
        });
        return;
      }
      // if a chain of numbers exist then interpret as operation
      
        let curr = (condition) ? "1" : this.state.currentNumber + "1";
        this.setState({
          numbers: this.state.numbers,
          operations: this.state.operations,
          currentNumber: curr
        });
        console.log(curr);
      
    }

    else if (event.target.id == 'two') {
      // if chain of numbers doesn't exist interpret as negative as a sign
      if (this.state.numbers.length == 0 && this.state.currentNumber == "-") {
        let curr = this.state.currentNumber + "2";
        this.setState({
          numbers: this.state.numbers,
          operations: this.state.operations,
          currentNumber: curr
        });
        return;
      }
      // if a chain of numbers exist then interpret as operation
      
        let curr = (condition) ? "2" : this.state.currentNumber + "2";
        this.setState({
          numbers: this.state.numbers,
          operations: this.state.operations,
          currentNumber: curr
        });
        console.log(curr);
    }

    else if (event.target.id == 'three') {
      // if chain of numbers doesn't exist interpret as negative as a sign
      if (this.state.numbers.length == 0 && this.state.currentNumber == "-") {
        let curr = this.state.currentNumber + "3";
        this.setState({
          numbers: this.state.numbers,
          operations: this.state.operations,
          currentNumber: curr
        });
        return;
      }
      // if a chain of numbers exist then interpret as operation
      
        let curr = (condition) ? "3" : this.state.currentNumber + "3";
        this.setState({
          numbers: this.state.numbers,
          operations: this.state.operations,
          currentNumber: curr
        });
        console.log(curr);
    }
    else if (event.target.id == 'four') {
      // if chain of numbers doesn't exist interpret as negative as a sign
      if (this.state.numbers.length == 0 && this.state.currentNumber == "-") {
        let curr = this.state.currentNumber + "4";
        this.setState({
          numbers: this.state.numbers,
          operations: this.state.operations,
          currentNumber: curr
        });
        return;
      }
      // if a chain of numbers exist then interpret as operation
      
        let curr = (condition) ? "4" : this.state.currentNumber + "4";
        this.setState({
          numbers: this.state.numbers,
          operations: this.state.operations,
          currentNumber: curr
        });
        console.log(curr);
    }
    else if (event.target.id == 'five') {
      // if chain of numbers doesn't exist interpret as negative as a sign
      if (this.state.numbers.length == 0 && this.state.currentNumber == "-") {
        let curr = this.state.currentNumber + "5";
        this.setState({
          numbers: this.state.numbers,
          operations: this.state.operations,
          currentNumber: curr
        });
        return;
      }
      // if a chain of numbers exist then interpret as operation
      
        let curr = (condition) ? "5" : this.state.currentNumber + "5";
        this.setState({
          numbers: this.state.numbers,
          operations: this.state.operations,
          currentNumber: curr
        });
        console.log(curr);
    }
    else if (event.target.id == 'six') {
      // if chain of numbers doesn't exist interpret as negative as a sign
      if (this.state.numbers.length == 0 && this.state.currentNumber == "-") {
        let curr = this.state.currentNumber + "6";
        this.setState({
          numbers: this.state.numbers,
          operations: this.state.operations,
          currentNumber: curr
        });
        return;
      }
      // if a chain of numbers exist then interpret as operation
      
        let curr = (condition) ? "6" : this.state.currentNumber + "6";
        this.setState({
          numbers: this.state.numbers,
          operations: this.state.operations,
          currentNumber: curr
        });
        console.log(curr);
    }
    else if (event.target.id == 'seven') {
      // if chain of numbers doesn't exist interpret as negative as a sign
      if (this.state.numbers.length == 0 && this.state.currentNumber == "-") {
        let curr = this.state.currentNumber + "7";
        this.setState({
          numbers: this.state.numbers,
          operations: this.state.operations,
          currentNumber: curr
        });
        return;
      }
      // if a chain of numbers exist then interpret as operation
      
        let curr = (condition) ? "7" : this.state.currentNumber + "7";
        this.setState({
          numbers: this.state.numbers,
          operations: this.state.operations,
          currentNumber: curr
        });
        console.log(curr);
    }
    else if (event.target.id == 'eight') {
      // if chain of numbers doesn't exist interpret as negative as a sign
      if (this.state.numbers.length == 0 && this.state.currentNumber == "-") {
        let curr = this.state.currentNumber + "8";
        this.setState({
          numbers: this.state.numbers,
          operations: this.state.operations,
          currentNumber: curr
        });
        return;
      }
      // if a chain of numbers exist then interpret as operation
      
        let curr = (condition) ? "8" : this.state.currentNumber + "8";
        this.setState({
          numbers: this.state.numbers,
          operations: this.state.operations,
          currentNumber: curr
        });
        console.log(curr);
    }
    else if (event.target.id == 'nine') {
      // if chain of numbers doesn't exist interpret as negative as a sign
      if (this.state.numbers.length == 0 && this.state.currentNumber == "-") {
        let curr = this.state.currentNumber + "9";
        this.setState({
          numbers: this.state.numbers,
          operations: this.state.operations,
          currentNumber: curr
        });
        return;
      }
      // if a chain of numbers exist then interpret as operation
      
        let curr = (condition) ? "9" : this.state.currentNumber + "9";
        this.setState({
          numbers: this.state.numbers,
          operations: this.state.operations,
          currentNumber: curr
        });
        console.log(curr);
    }
    else if (event.target.id == 'equals') {

      // have to first push in the current number if it is not a operation
      let curr = this.state.currentNumber;
      if (curr != '+' && curr != '-' && curr != '/' & curr != '*') {
        let newNumbers = [...this.state.numbers, curr];
        this.setState({
          numbers: newNumbers,
          operations: this.state.operations,
          currentNumber: this.state.currentNumber
        });
      }
      let result = 0;
      for (let i = 0; i < this.state.numbers.length; i++) {
        
        let num1 = (i == 0) ? this.state.numbers[i] : result;
        let num2 = this.state.numbers[i+1];
        if (isNaN(num2))
          num2 = 0;

        let decimalNum1 = parseFloat(num1);
        num1 = parseInt(num1);
        
        if (decimalNum1 != num1)
          num1 = decimalNum1;
        
        let decimalNum2 = parseFloat(num2);
        num2 = parseInt(num2);

        if (decimalNum2 != num2)
          num2 = decimalNum2;
        console.log("num1: " + num1);
        console.log("num2: " + num2);
        if (i < this.state.operations.length) {
          let oper = this.state.operations[i];
          if (oper == "+") {
            result = num1 + num2;
            console.log(result);
          }
          else if (oper == '-')
            result = num1 - num2;
          else if (oper == '*')
            result = num1 * num2;
          else if (oper == '/') {
            result = (isNaN(num2)) ?num1 / 1 : num1 / num2;
            
          }
        }
      }
      this.setState({
        numbers: [],
        operations: [],
        currentNumber: result
      });
    }

    // when an operation is clicked, that is when we push the value of current number to the numbers list and then reset current number 0
    // also be sure to push the operation to the operations list
    else if (event.target.id == "add") {
      let newOperations = [...this.state.operations, "+"];
      let curr = this.state.currentNumber;
      let newNumbers = [...this.state.numbers, curr];

      this.setState({
        numbers: newNumbers,
        operations: newOperations,
        currentNumber: "+"
      });
    }
    else if (event.target.id == "subtract") {
      // if a chain of numbers does exist, then that negative will be interpreted as an operation
      if (this.state.currentNumber != 0) {
        let newOperations = [...this.state.operations, "-"];
        let curr = this.state.currentNumber;
        let newNumbers = [...this.state.numbers, curr];

        this.setState({
          numbers: newNumbers,
          operations: newOperations,
          currentNumber: "-"
        });
      }
      // however, if a chain of numbers does not exist, then that negative will be interpreted as a negative sign rather than an operation
      else if (this.state.numbers.length == 0) {
        let curr = '-';
        this.setState({
          numbers: this.state.numbers,
          operations: this.state.operations,
          currentNumber: curr
        });
      }
    }
    else if (event.target.id == "divide") {
      let newOperations = [...this.state.operations, "/"];
      let curr = this.state.currentNumber;
      let newNumbers = [...this.state.numbers, curr];

      this.setState({
        numbers: newNumbers,
        operations: newOperations,
        currentNumber: "/"
      });
    }
    else if (event.target.id == "multiply") {
      let newOperations = [...this.state.operations, "*"];
      let curr = this.state.currentNumber;
      let newNumbers = [...this.state.numbers, curr];

      this.setState({
        numbers: newNumbers,
        operations: newOperations,
        currentNumber: "*"
      });
    }
  }

  render() {
    return (
      <div>
        <div id="calculator">
          <div id="display">{this.state.currentNumber}</div>
          <button id="clear">AC</button>
          <button id="equals">
            =
          </button>
          <button id="zero">
            0
          </button>
          <button id="one">
            1
          </button>
          <button id="two">
            2
          </button>
          <button id="three">
            3
          </button>
          <button id="four">
            4
          </button>
          <button id="five">
            5
          </button>
          <button id="six">
            6
          </button>
          <button id='seven'>
            7
          </button>
          <button id="eight">
            8
          </button>
          <button id="nine">
            9
          </button>
          <button id="add">
            +
          </button>
          <button id="subtract">
            -
          </button>
          <button id="multiply">
            *
          </button>
          <button id='divide'>
            /
          </button>
          <button id='decimal'>
            .
          </button>
        </div>
      </div>
    );
  }
}

export default Calculator;
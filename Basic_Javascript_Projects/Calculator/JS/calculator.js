// creates an object to keep track of values
const Calculator = {
    //this is displays 0 on the screen
    Display_Value: '0',
    //This will hold the first operant for any expressions, we set it to null for now
    First_Operand: null,
    //This checks whether or not the second operand has been input
    Wait_Second_Operand: false,
    operator: null
};

//This modifies values each time a button is clicked
function Input_Digit(digit) {
    const { Display_Value, Wait_Second_Operand } = Calculator;
    if (Wait_Second_Operand === true) {
        Calculator.Display_Value = digit; 
        Calculator.Wait_Second_Operand = false;
    } else {
        Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;
    }
}

//This section handles decimal points
function Input_Decimal(dot) {
    if (Calculator.Wait_second_Operand === true) return;
    if (!Calculator.Display_Value.includes(dot)) {
        //we are saying that if the Display_value doe snot contain a decimal point, we will add one
        Calculator.Display_Value += dot;
    }
}

//This sectin handles operators
function Handle_Operator(Next_Operator) {
    const { First_Operand, Display_Value, operator } = Calculator
    //when an operator key is pressed, we convert the current number
    //displayed on the screen to a number and then store the result in 
    //Calculator.First_Operant if it doesn't already exist. 
    const Value_of_Input = parseFloat(Display_Value);
    //checks if an operator already exists and if Wait_second operatnd is true,
    //then updates the operator and exits fromt the function.
    if (operator && Calculator.Wait_Second_Operator) {
        Calculator.operator = Nest_Operator;
        return;
    }
    if (First_Operand == null) {
        Calculator.First_Operand = Value_of_Input;
    } else if (operator) {//checks if an oprator already exists}
        const Value_Now = First_Operand |  0;
        //if operator exists, properly lookup is performed for the operator
      
        //in the pertorm_calculatoion object is performed for the operator
        //operator is executed
        let result = Perform_Calculation[operator] (Value_Now, Value_of_Input);
        //here we add a fixed amount of number after the decimal.
        result = Number(result).toFixed(9)
        //this will remove any trailing 0's
        result = Number(result * 1).toString()
        Calculator.Display_Value = parseFloat(result);
        Calculator.First_Operand = parseFloat(result);
        }
    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
}

const Perform_Calculation = {
    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    '=': (First_Operand, Second_Operand) => Second_Operand,
};

function Calculator_Reset() {
    Calculator.Display_Value = '0';
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}

//this function updates the screen with the contents of Display_Value
function Update_Display() {
    const display = document.querySelector('.calculator-screen');
    display.value = Calculator.Display_Value;
}

Update_Display();
//This section monitors button clicks
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
    //the target variable is an object that represents the elemtns
    //thjat was clicked
    const { target } = event;
    //if the element that was clicked on is not a button, exit the function
    if (!target.matches('button')) {
        return;
    }

    if (target.classList.contains('operator')) {
        Handle_Operator(target.value);
        Update_Display();
        return;
    }

    if ( target.classList.contains('decimal')) {
        Input_Decimal(target.value);
        Update_Display();
        return;
    }

    //ensures that ac clears the numbers from the Calculator
    if (target.classList.contains('all-clear')) {
        Calculator_Reset();
        Update_Display();
        return;
    }

    Input_Digit(target.value);
    Update_Display();
})
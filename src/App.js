import { useReducer } from 'react';
import './style.css'
import DigitButton from './digitButton.js';
import OperationButton from './operationButton.js';
import { calculator } from './calculateFunctionality';

export const ACTIONS = {
  ADD_DIGIT : "add-digit",
  DELETE_DIGIT : "delete-digit",
  CLEAR : "clear",
  CHOOSE_OPERATION : "choose-operation",
  EVALUATE : "evaluate"
}


function App() {

  const [{currentOperand, previousOperand, operation}, dispatch] = useReducer(calculator, {});

  return (
    <div className='calculator-grid'>
      <div className='output'>
        <div className='previous-operand'>{previousOperand}{operation}</div>
        <div className='current-operand'>{currentOperand}</div>
      </div>
      <button onClick={()=>dispatch({type : ACTIONS.CLEAR})} 
        className='span-two'>
        AC
      </button>
      <button onClick={()=>dispatch({type : ACTIONS.DELETE_DIGIT})}>
        DEL
      </button>
      <OperationButton operand="/" dispatch={dispatch}/>
      <DigitButton digit="1" dispatch={dispatch}/>
      <DigitButton digit="2" dispatch={dispatch}/>
      <DigitButton digit="3" dispatch={dispatch}/>
      <OperationButton operand="*" dispatch={dispatch}/>
      <DigitButton digit="4" dispatch={dispatch}/>
      <DigitButton digit="5" dispatch={dispatch}/>
      <DigitButton digit="6" dispatch={dispatch}/>
      <OperationButton operand="+" dispatch={dispatch}/>
      <DigitButton digit="7" dispatch={dispatch}/>
      <DigitButton digit="8" dispatch={dispatch}/>
      <DigitButton digit="9" dispatch={dispatch}/>
      <OperationButton operand="-" dispatch={dispatch}/>
      <DigitButton digit="." dispatch={dispatch}/>
      <DigitButton digit="0" dispatch={dispatch}/>
      <button onClick={()=> dispatch({type : ACTIONS.EVALUATE})}
      className='span-two'> 
      = 
      </button>
    </div>
  );
}

export default App;

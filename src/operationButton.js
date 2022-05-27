import { ACTIONS } from './App.js'

export default function OperationButton({operand, dispatch})
{
    return(
        <button onClick={()=>dispatch({type: ACTIONS.CHOOSE_OPERATION , payload: {operand}})}>
            {operand}
        </button>
    )
}
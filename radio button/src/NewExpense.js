
 import './NewExpense.css'
 import ExpenseForm from './ExpenseForm'
import ToggleForm from './ToggleForm';

 const NewExpense =(props)=>{

    return (
        <div className='new-expense'>
            <ToggleForm expense={props.expense}/>
        </div>
    )
 }

 export default NewExpense;
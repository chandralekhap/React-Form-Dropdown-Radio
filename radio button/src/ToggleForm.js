import './ExpenseForm.css'
import {useState} from 'react'
import ExpenseForm from './ExpenseForm';
const ToggleForm = (props)=>{

    const [hide, setHide]= useState(true);

    const onClickHandler= ()=>{

        setHide(!hide)
    }
    return (
        <div>
            
            <div >
                <button type='button' onClick= {onClickHandler} >Add expenses</button>
                {hide && <ExpenseForm expense={props.expense}/>}
            </div>

        </div>
    )
}

export default ToggleForm;
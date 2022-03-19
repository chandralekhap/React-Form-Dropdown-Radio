import './ExpenseForm.css'
import {useState } from 'react'
import expenses from './App';
import ExpenseItem from './ExpenseItem'

const ExpenseForm =(props)=>{
 
    const [Title, setTitle]= useState(''); 
    const [Amount, setAmount]= useState(''); 
    const [Date1, setDate1]= useState('');  
    
    const onChange1=(event)=>{
        setTitle(event.target.value);
     
    }
    const onChange2=(event)=>{
        setAmount(event.target.value);
        
    }
    const onChange3=(event)=>{
        setDate1(event.target.value);
     
    }

   

    const onSubmitHandler = (event)=>{
        console.log(Date1, Title, Amount);
        props.expense.push({
            id: Math.random().toString(),
            title: Title,
            amount: Amount,
            date:new Date( Date1)
        })
        event.preventDefault();
        }
        console.log(props.expense)
    return (

        <div>
    <form onSubmit = {onSubmitHandler}>
        <div className= 'new-expense__control'>
           
            <div className= 'new-expense__control'>
           <label>Tittle</label>
           <input type='text' 
           onChange= {onChange1}
           value= {Title} />
            </div>
            <div className= 'new-expense__control'>
            <label>Amount</label>
           <input type='number'
            min='0.01'
            max='5.0' 
             onChange= {onChange2}
             value ={Amount} />
            </div>

            <div className= 'new-expense__control'>
            <label>Date</label>
           <input type='date'
            min = '1990-12-01'
             max = '2021-12-01'
              onChange= {onChange3} 
              value = {Date1}/>
            </div>

            <div className= 'new-expense__actions'>
                <button type='submit' >Add </button>
            </div>
        </div>
        </form>
        <ExpenseItem
    ExpenseData = {props.expense}/>
        </div>
    )
}

export default ExpenseForm;
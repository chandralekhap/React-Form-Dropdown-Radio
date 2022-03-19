import  './ExpenseItem.css'
import './ExpenseDate.css'
import {useState} from 'react'
import DisplayExpense from './DisplayExpense'

function ExpenseItem(props)
{

    
    const [year, setYear]= useState('2021');

    const ChangeHandler =(event) => {
        setYear(event.target.value)
    
    }
 //   console.log(year, '', props.ExpenseData[0].date.getFullYear());
    return (

       <div>
           <div className={'expense-item'}>
             <label className={'expense-item__title'}>Filter by year</label>
        <select className='expense-item__price' value={year} onChange={ChangeHandler}>
          <option className='expense-item__price' value='2022'>2022</option>
          <option className='expense-item__price'  value='2021'>2021</option>
          <option  className='expense-item__price' value='2020'>2020</option>
          <option className='expense-item__price' value='2019'>2019</option>
        </select>
        </div>

          {
              props.ExpenseData.filter((expense)=> expense.date.getFullYear() == year).map(
                  (expenseDate)=>(
            <DisplayExpense title ={expenseDate.title} 
            amount= {expenseDate.amount}
            date ={expenseDate.date}/>
        ))
            }
        </div>
    )
}

export default ExpenseItem;
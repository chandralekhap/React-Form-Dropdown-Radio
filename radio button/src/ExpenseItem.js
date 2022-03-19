import  './ExpenseItem.css'
import './ExpenseDate.css'
import {useState} from 'react'
import DisplayExpense from './DisplayExpense'

function ExpenseItem(props)
{

    
    const [year, setYear]= useState('2021');
    const[gender, setGender] = useState('male');
    const ChangeHandler =(event) => {
        setYear(event.target.value)
    
    }
 //   console.log(year, '', props.ExpenseData[0].date.getFullYear());

 const  onChangeHandler = (e)=>{

    setGender(e.target.value)
    console.log(gender)
 }
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

            <label>
                <input
                  type="radio"
                  value="male"
                   checked={gender === 'male'}
                    onChange = {onChangeHandler}
                />
                <span>male</span>
              </label>
              <label>
                <input
                  type="radio"
                  value="female"
                  checked={gender === 'female'}
                  onChange = {onChangeHandler}
                />
                <span>female</span>
              </label>
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
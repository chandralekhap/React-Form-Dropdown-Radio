import ExpenseItem from './ExpenseItem'
import NewExpense from './NewExpense'

function App() {
   const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },

    {
      id: 'e5',
      title: 'New chair (Wooden)',
      amount: 123.45,
      date: new Date(2019, 5, 12),
    },
    {
      id: 'e6',
      title: 'Washing Machin',
      amount: 2000,
      date: new Date(2022, 5, 12),
    },
    {
      id: 'e7',
      title: 'Samsung Frige',
      amount: 410,
      date: new Date(2019, 5, 12),
    },
    {
      id: 'e8',
      title: 'kitchen appliances',
      amount: 2000,
      date: new Date(2019, 5, 12),
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense expense ={expenses}/>
    
  />
    </div>
  );
}

export default App;

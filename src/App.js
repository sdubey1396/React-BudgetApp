import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/Budget';
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import background from "./images/pic3.jpeg";
import AddExpenseForm from './components/AddExpenseForm';


const App = () => {
  return (

    <div style={{backgroundImage: `url(${background})`,
                 backgroundPosition: 'center',
                 backgroundSize: 'cover',
                 backgroundRepeat: 'no-repeat',
                 width: '100vw',
                 height: '100vh'}}>
    <div className='container'>
      <div style={{ display: 'flex', justifyContent: 'center'}}>
        <div><h1 className='mt-3'>BUDGET TRACKER</h1></div>
      </div>
        <div className='row mt-3'>
          <div className='col=sm'>
            <Budget />
          </div>
          <div className='col-sm'>
            <Remaining />
          </div>
          <div className='col-sm'>
            <ExpenseTotal />
          </div> 
        </div>
        <h3 className='mt-3'>Expenses</h3>
        <div className='row mt-3'>
          <div className='col-sm'>
            <ExpenseList />
          </div>
        </div>
        <p><br></br></p>
        <h3 className='mt-3'>Add Expense</h3>
        <div className='row mt-3'>
          <div className='col-sm'>
            <AddExpenseForm />
          </div>
        </div>
        </div> 
    </div>  

  );
};

export default App;
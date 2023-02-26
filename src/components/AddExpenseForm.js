
import React from 'react';

const AddExpenseForm = () => {
    return(
        <form>
            <div className='row'>
                    <label for='name'>Name</label>
                    <input 
                    required='required' 
                    type='text' 
                    className='form-control'
                    id='name' 
                    />
                </div>
                <div className='row'>
                    <label for='cost'>Cost</label>
                    <input
                    required='required'
                    type='text'
                    className='form-control'
                    id='cost'
                    />
                </div>
                <div className='row'>
                    <p><br></br></p>
                    <button type='submit' className='btn btn-primary'>Save</button>
            </div>
        </form>
    )
}


export default AddExpenseForm;
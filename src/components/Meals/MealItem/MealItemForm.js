import React, { useRef, useState } from 'react';

import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';


const MealItemForm = (props) => {

   const [amountIsValid, setAmountIsValid]  = useState(true);

    /**
     * Refs make it possible to access DOM nodes directly within React. 
     * This comes in handy in situations where, just as one example, 
     * you want to change the child of a component.
     * 
     */
    const amountInputRef = useRef();

    const submitHandler = event => {
        event.preventDefault();

        const enteredAmount = amountInputRef.current.value; // always string value
        // type cast from str to int 
        const enteredAmountNumber = +enteredAmount;

        if (
            enteredAmount.trim().length === 0 || 
            enteredAmountNumber < 1 || 
            enteredAmountNumber > 5
            ){
                setAmountIsValid(false);
                return;
            
        } // validation func ends

        props.onAddToCart(enteredAmountNumber);

        
    };

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input label="Amount" 
            ref= {amountInputRef} 
            input={{
                id: 'amount_' + props.id, // this changed!
                type: 'number',
                min: '1',
                'max': 5,
                'step': 1,
                'defaultValue': '1'
            }}/>
            <button>+ Add</button>
            {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
    );
};


export default MealItemForm;





















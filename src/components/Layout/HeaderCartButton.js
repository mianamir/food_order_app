import React, { useContext, useEffect, useState } from 'react';

import CartContext from '../../store/cart-context';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';


const HeaderCartButton = (props) => {

    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

    // when CartContext will be updated this component will be re-evaluated 
    const cartCtx = useContext(CartContext); // established the connection with context

    const { items } = cartCtx;
    
    // calculate the cart items total from context cart items
    const numberOfCartItems = items.reduce( (currentNum, item) => {
        return currentNum + item.amount;
    }, 0);

    const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump: ''}`;

    useEffect(() => {
        if( items.length === 0 ){
            return;
        }
        setBtnIsHighlighted(true);

        const timer = setTimeout(() => {
            setBtnIsHighlighted(false);
        }, 300);

        // cleanup function
        return () => {
            clearTimeout(timer);
        }
 
    }, [items]);


    return <button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon />
            
        </span>
        <span>Your Cart: </span>
        <span classNam={classes.badge}> {numberOfCartItems} </span>
    </button>
}; 


export default HeaderCartButton;
import React, { useContext } from 'react';

import CartContext from '../../store/cart-context';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';


const HeaderCartButton = (props) => {


    // when CartContext will be updated this component will be re-evaluated 
    const cartCtx = useContext(CartContext); // established the connection with context

    
    // calculate the cart items total from context cart items
    const numberOfCartItems = cartCtx.items.reduce( (currentNum, item) => {
        return currentNum + item.amount;
    }, 0);


    return <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon />
            
        </span>
        <span>Your Cart: </span>
        <span classNam={classes.badge}> {numberOfCartItems} </span>
    </button>
}; 


export default HeaderCartButton;
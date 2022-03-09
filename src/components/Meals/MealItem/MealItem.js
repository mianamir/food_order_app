import { useContext } from 'react';

import React from 'react';

import MealItemForm from './MealItemForm';

import classes from './MealItem.module.css';

import CartContext from '../../../store/cart-context';


const MealItem = (props) => {

    const cartCtx = useContext(CartContext);

    const price = `$${props.price.toFixed(2)}`;

    const onAddToCartHandler = amount => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        });
    };

    return <li className={classes.meal}>
        <div>
            <h2>{props.name}</h2>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{price}</div>
            
        </div>


        <div>
            <MealItemForm onAddToCart={onAddToCartHandler} />
        </div>
    </li>
};



export default MealItem;

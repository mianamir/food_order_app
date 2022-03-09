import { useContext } from 'react';

import Modal from '../UI/Modal';

import classes from './Cart.module.css';

import CartContext from '../../store/cart-context';

import { formatAmount } from '../utils/CommonHelpers';


const Cart = (props) => {

    const cartCtx = useContext(CartContext);

    const totalAmount = formatAmount(cartCtx.totalAmount);

    const cartItems = (
        <ul className={classes['cart-items']}>
        {cartCtx.items.map((item) => <li>{item.name}</li>)}
    </ul>
    );

    return (
        <Modal onClose={props.onClose}>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>23.45</span>
        </div>
        <div className={classes.actions}>
            <button 
            className={classes['button--all']} 
            onClick={props.onClose}>Close</button>

            <button className={classes.button}>Order</button>

        </div>
    </Modal>
    );
};


export default Cart;


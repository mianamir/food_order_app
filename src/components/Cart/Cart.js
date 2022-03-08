import Modal from '../UI/Modal';

import classes from './Cart.module.css';


const Cart = (props) => {

    const cartItems = (
        <ul className={classes['cart-items']}>
        {[
        {
            id: 'c1',
            'name': 'Sushi',
            'price': '$12.99'
        }
    ].map((item) => <li>{item.name}</li>)}
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

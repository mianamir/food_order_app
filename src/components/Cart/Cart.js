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
        <Modal>
        {cartItems}
        <id className={classes.total}>
            <span>Total Amount</span>
            <span>23.45</span>
        </id>
        <id className={classes.actions}>
            <button className={classes['button--all']}>Close</button>
            <button className={classes.button}>Order</button>

        </id>
    </Modal>
    );
};


export default Cart;


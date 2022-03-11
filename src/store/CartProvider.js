import { useReducer } from "react"; // due to complex state using this
import CartContext from "./cart-context";


const defaultCartState = {
    items: [],
    totalAmount: 0
};

const cartReducer = (state, action) => {

    if (action.type === 'ADD'){

        const updatedTotalAmount = 
        state.totalAmount + action.item.price * action.item.amount;
        

        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.item.id
        );

        const existingCartItem = state.items[existingCartItemIndex];

        let updatedItems;

        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount,
            };

            updatedItems = [...state.items];

            updatedItems[existingCartItemIndex] = updatedItem;

        } else {
            updatedItems = state.items.concat(action.item);
        }

        
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        };
    } // ADD item if ends

    if (action.type === 'REMOVE') {
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.id
        );
        const existingItem = state.items[existingCartItemIndex];

        const updatedTotalAmount = state.totalAmount - existingItem.price;

        let updatedItems;

        if (existingItem.amount === 1) {
            // means last item in the cart and we have to clean the cart array
            updatedItems = state.items.filter(item => item.id !== action.id); // filter give new array
        } else {
            // bigger than 1 item in the cart array
            const updatedItem = {...existingItem, amount: existingItem.amount - 1};

            updatedItems = [...state.items];

            // override the existing items with new item
            updatedItems[existingCartItemIndex] = updatedItem;

        }
        
        // return the new state object
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };

    }; // REMOVE item if ends

    return defaultCartState;
};

const CartProvider = (props) => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);



    const addItemToCartHandler = item => {
        dispatchCartAction({
            type: 'ADD', 
            item: item
        });
    };

    const removeItemFromCartHandler = id => {
        dispatchCartAction({
            type: 'REMOVE',
            id: id
        });
    };



    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem:addItemToCartHandler,
        removeItem:removeItemFromCartHandler
    };

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>;
};


export default CartProvider;


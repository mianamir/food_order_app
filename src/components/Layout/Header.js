import React, {Fragment} from 'react';

import headerMealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';


const Header = (props) => {
    return <Fragment>
        <header className={classes.header}>
            <h1>FOODSIA</h1>
        </header>

        <button>Cart</button>

        <div className={classes['main-image']}>
            <img src={headerMealsImage} alt="Delicious foods on the table!" />
        </div>
    </Fragment>
};


export default Header;

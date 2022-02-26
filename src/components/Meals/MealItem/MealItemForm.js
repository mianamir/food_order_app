import React from 'react';

import classes from './MealItemForm.module.css';


const MealItemForm = (props) => {
    return (
        <form className={classes.form}>
            <input/>
            <button>+ Add</button>
    </form>
    );
};


export default MealItemForm;




function getSelectedRole(item: any, profile: any){
    return item.cardlink?.split('roles')[0] + "roles=" + profile?.roleName.toLowerCase();

} // getSelectedRole ends





















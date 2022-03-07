import classes from './Input.module.css';


const Input = (props) => {
    return <div className={classes.input}>
        <label htmlFor={props.input.id}>{props.label}</label>
        { /*use spread operator to make the element highly configurable */}
        <input {...props.input}/> 
    </div>
};


export default Input;
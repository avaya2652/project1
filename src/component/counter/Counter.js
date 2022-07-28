import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';


const Counter = () =>{
    const statePart = useSelector(state=>state.counter);
    const isToggle = useSelector(state=>state.toggle);

    const dispatch = useDispatch();

    const incrementHandler = () =>{
        dispatch({type: 'INC', payload:3})
    }
    const decrementHandler = () =>{
        dispatch({type: 'DESC',  payload:3})
    }
    const toggleHandler = () =>{
        dispatch({type:'TOGGLE'})
    }

    return (
        <div className={classes.wrapper}>
            {isToggle && <h3>{statePart}</h3>}
            <button onClick={incrementHandler}>Increment</button>
            <button onClick={decrementHandler}>Decrement</button>
            <button onClick={toggleHandler}>Toggle</button>
        </div>
    )
}
export default Counter
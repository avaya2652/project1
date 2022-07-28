import { Component } from "react";
import {connect} from 'react-redux'
import classes from './Counter.module.css';
class CounterClass extends Component{
    constructor(){
        super();
    }

    render(){
        const incrementHandler = ()=>{
            console.log(11)
            this.props.increment(5);
        }
        const decrementHandler = ()=>{
            console.log(22);
            this.props.decrement(5);

        }
        return(
            <>
            <h1>Class based component</h1>
            <div className={classes.wrapper}>
                {this.props.isToggle && <h3>{this.props.counter}</h3>}
                <button onClick={incrementHandler}>Increment</button>
                <button onClick={decrementHandler}>Decrement</button>
                <button onClick={this.props.toggleHandler}>Toggle</button>
            </div>
            </>
            
        )
    }
}
const mapStateToProps = state =>{
    return{
        counter: state.counter,
        isToggle: state.toggle
    }
}
const mapDispatchToProps = dispatch=>{
    return{
        increment:(n)=>dispatch({type:'INC', payload: +n}),
        decrement:(n)=>dispatch({type:'DESC', payload: +n}),
        toggleHandler:()=>dispatch({type:'TOGGLEFROMCLASS'})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CounterClass);
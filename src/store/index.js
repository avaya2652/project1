import { createStore } from 'redux';

const counterReducer = (state = { counter: 0, toggle: false }, action) => {
    console.log(action)
  if (action.type === 'INC') {
    return {
        ...state,
      counter: state.counter + action.payload,
    //   toggle: state.toggle
    };
  }

  if (action.type === 'DESC') {
    return {
        ...state,
      counter: state.counter - action.payload,
    //   toggle: state.toggle
    };
  }
  if(action.type='TOGGLE'){
    return{
        ...state,
        toggle: !state.toggle
    }
  }
 
  return state;
};

const store = createStore(counterReducer);

export default store;
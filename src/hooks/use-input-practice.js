import {useReducer, useState} from "react";

const inputReducer = (state,action) =>{
    switch(action.type){
        case 'BLUR':{
            console.log(action);
            let msg = '';
            if(!action.payLoad.isValidationPassed){
                msg = action.payLoad.message;
            }
            return{
                ...state,
                errorMessage:msg
            }
        }
        case 'CHANGE':{
            console.log(action)
             return{
                ...state,
                inputValue:action.payLoad.value,
                isInputTouched:true,
                errorMessage:''
                
            }
        }
        case 'RESET':{
            return{
                ...state,
                inputValue: ''
            }
        }
    }

}

const useInputPractice = (validation) =>{

    let initialState = {
        inputValue:'',
        isInputTouched:false,
        errorMessage:''
    }
    const [state, dispatch] = useReducer(inputReducer, initialState)

    const {isValidationPassed, message} = validation(state.inputValue);

    const onBlurHandler = ()=>{
        dispatch({type:'BLUR', payLoad:{isValidationPassed:isValidationPassed, message:message}})
    }

    const onChangeHandler = (e) =>{
        dispatch({type:'CHANGE', payLoad:
                            {isValidationPassed:isValidationPassed, 
                                message:message, 
                                value: e.target.value
                            }})

    }
    const reset = () =>{
        dispatch({type:'RESET'})
    }
    return{
        errorMessage: state.errorMessage,
        inputValue: state.inputValue,
        isInputTouched: state.isInputTouched,
        isInputValid: isValidationPassed,
        onBlurHandler,
        onChangeHandler,
        reset

    }
}
export default useInputPractice;
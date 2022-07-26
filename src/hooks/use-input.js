import {useState} from "react";

const useInput = (validation)=>{
    const [inputValue, setInputValue] = useState('');
    // const [isInputValid, setIsInputValid] = useState(false);
    const [isInputFieldTouched, setIsInputFieldTouched] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    

    const {isValidationPassed, message} = validation(inputValue);

    const onBlurHandler = (event)=>{
        setIsInputFieldTouched(true);
        // setIsInputValid(isValidationPassed);
        setErrorMessage(message);

    }
    const onchangeHandler=(event)=>{
        
        setInputValue(event.target.value);
        setIsInputFieldTouched(true);

        // setIsInputValid(isValidationPassed);
            setErrorMessage('');
    }
    const reset = ()=>{
        setInputValue('');
    }

    return{
        inputValue,
        isInputValid: isValidationPassed,
        errorMessage,
        isInputFieldTouched,
        onBlurHandler,
        onchangeHandler,
        reset
    }

}

export default useInput;
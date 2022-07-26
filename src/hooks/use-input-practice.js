import {useState} from "react";

const useInputPractice = (validation) =>{
    const [inputValue, setInputValue] = useState('');
    // const [isInputValid, setIsInputValid] = useState(false);
    const [isInputTouched, setIsInputTouched] = useState(false);
    const [errorMessage, setErrorMessage] = useState('')

    const {isValidationPassed, message} = validation(inputValue);

    const onBlurHandler = ()=>{
        if(!isValidationPassed){
            setErrorMessage(message);
        }
    }

    const onChangeHandler = (e) =>{
        setInputValue(e.target.value);
        setIsInputTouched(true);
        setErrorMessage('');

    }
    const reset = () =>{
        setInputValue('');

    }
    console.log(isValidationPassed);
    return{
        errorMessage,
        inputValue,
        isInputTouched,
        isInputValid: isValidationPassed,
        onBlurHandler,
        onChangeHandler,
        reset

    }
}
export default useInputPractice;
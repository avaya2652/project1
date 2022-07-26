import React from "react";
import classes from './Form.module.css';
import useInput from "../../hooks/use-input";

const Form =()=>{
    const validateName = (name) =>{
        if(name.trim().length<=3){
            return{
                isValidationPassed: false,
                message: 'name should be more than 3'
            }
        }else{
           return  {
            isValidationPassed: true,
            message: ''
        }
        }
    }

    const { 
        inputValue: nameFieldValue,
        isInputValid: isNameValid,
        errorMessage:nameErrorMessage,
        onBlurHandler: onNameBlueHandler,
        onchangeHandler: onNameChangeHandler,
    reset:resetName} = useInput(validateName);


const validateEmail = (email)=>{
    if(email.trim().length === 0){
        return{
            isValidationPassed: false,
            message: 'Email can not be empty'
        }
    }else if(email.trim().length <5){
        return{
            isValidationPassed: false,
            message: 'Email should be more than 5 letters'
        }
    }else if (!( /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))){
        return{
            isValidationPassed: false,
            message: 'Not a valid Email address'
        }
    }else{
        return{
            isValidationPassed: true,
            message: ''
        }
    }
}

const { inputValue: emailFieldValue,
    isInputValid: isEmailValid,
    errorMessage:emailErrorMessage,
    onBlurHandler: onEmailBlueHandler,
    onchangeHandler: onEmailChangeHandler,
    reset:resetEmail} = useInput(validateEmail);



    const validateRadio =(name)=>{
        if(name.length ===0){
            return{
                isValidationPassed: false,
                message: 'Please select a season'
            }
        } return{
            isValidationPassed: true,
            message: ''
        }
        
    }

    const { 
        inputValue: seasonValue,
        isInputValid: isSeasonValid,
        errorMessage:seasonErrorMessage,
        // onBlurHandler: onSeasonBlueHandler,
        onchangeHandler: onSeasonChangeHandler,
        reset:resetSeason} = useInput(validateRadio)


    let isFormValid = false;

    if(isNameValid && isEmailValid && isSeasonValid){
        // console.log(isNameValid, isEmailValid)
        isFormValid = true;
    }


    const onSubmitHandler = (event) =>{
        event.preventDefault();
        console.log(nameFieldValue, emailFieldValue, seasonValue)
        resetEmail();
        resetName();
        resetSeason();
    }
    return(
        <div className={classes['form_wrapper']}>
            <form onSubmit={onSubmitHandler}>
                <div className={classes['form_control']}>
                    <input type="text" name="name" 
                        value={nameFieldValue} 
                        onChange = {onNameChangeHandler}
                        onBlur={onNameBlueHandler} />
                       <p>{nameErrorMessage}</p>
                </div>
                <div className={classes['form_control']}>
                    <input type="text" name="email" 
                        value={emailFieldValue} 
                        onChange = {onEmailChangeHandler}
                        onBlur={onEmailBlueHandler} />
                       <p>{emailErrorMessage}</p>
                </div>
                <div className={classes['form_control']}>
                    <p>{seasonErrorMessage}</p>
                    <label>Favourite season:</label>
                    <p><label>Summer:</label>
                        <input type="radio" name="season" value="Summer" onChange={onSeasonChangeHandler}/>
                    </p>
                    <p><label>Spring:</label>
                        <input type="radio" name="season" value="Spring" onChange={onSeasonChangeHandler}/>
                    </p>
                    <p><label>Winter:</label>
                        <input type="radio" name="season" value="Winter" onChange={onSeasonChangeHandler}/>
                    </p>
                    <p><label>Autum:</label>
                        <input type="radio" name="season" value="Autum" onChange={onSeasonChangeHandler}/>
                    </p>
                </div>
                

                <button type="submit" disabled={!isFormValid}>Submit</button>
            </form>
        </div>
    )
}

export default Form;
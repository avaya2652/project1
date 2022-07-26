import useInputPractice from "../hooks/use-input-practice";
import classes from './Form/Form.module.css';
const BasicForm = (props) => {
    let isFormValid = false;
    const fNameValidation = (fname)=>{
        if(fname.length === 0){
            return {
                isValidationPassed:false,
                message:'First name can not mb empty'
            }
        }else if(fname.length <=3){
            return {
                isValidationPassed:false,
                message:'First should be more than 3 letters'
            }
        }else{
            return {
                isValidationPassed:true,
                message:''
            }
        }
    }
    const lNameValidation = (lname)=>{
        if(lname.length === 0){
            return {
                isValidationPassed:false,
                message:'Last name can not me empty'
            }
        }else if(lname.length <=3){
            return {
                isValidationPassed:false,
                message:'Last should be more than 3 letters'
            }
        }else{
            return {
                isValidationPassed:true,
                message:''
            }
        }
    }
    const emailValidation = (email)=>{
        if(email.length === 0){
            return {
                isValidationPassed: false,
                message:'Email can not be empty'
            }
        }else if(!( /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))){
            return{
                isValidationPassed:false,
                message:'Not a valid email'
            }
        }else{
            return{
                isValidationPassed:true,
                message:''
            }
        }
    }

    const { 
        errorMessage:fNameError,
        inputValue:fNameValue,
        isInputValid:isFNameValid,
        reset: fNameReset,
        onBlurHandler:fNameBlueHandler,
        onChangeHandler:fNameChangeHandler}= useInputPractice(fNameValidation)
    const { 
        errorMessage:lNameError,
        inputValue:lNameValue,
        isInputValid:isLNameValid,
        reset: lNameReset,
        onBlurHandler:lNameBlueHandler,
        onChangeHandler:lNameChangeHandler}= useInputPractice(lNameValidation)
    const { 
        errorMessage:emailError,
        inputValue:emailValue,
        isInputValid:isEmailValid,
        reset: emailReset,
        onBlurHandler:emailBlueHandler,
        onChangeHandler:emailChangeHandler}= useInputPractice(emailValidation);

       
       
        if(isFNameValid && isLNameValid && isEmailValid){
            isFormValid = true;
        }
    
    const besicFormSubmitHandler = (event) =>{
        event.preventDefault();

        console.log(fNameValue, lNameValue,emailValue);
        fNameReset()
        lNameReset()
        emailReset()


    }
    return (
      <form onSubmit={besicFormSubmitHandler} >
        <h1>Basic form</h1>
        <div className='control-group'>
          <div className='form-control'>
            <p className={classes.error}>{fNameError}</p>
            <label htmlFor='name'>First Name</label>
            <input type='text' id='name' 
                value={fNameValue}
                onBlur={fNameBlueHandler}
                onChange={fNameChangeHandler} />
          </div>
          <div className='form-control'>
            <p className={classes.error}>{lNameError}</p>
            <label htmlFor='name'>Last Name</label>
            <input type='text' id='name' 
                value={lNameValue}
                onBlur={lNameBlueHandler}
                onChange={lNameChangeHandler} />
          </div>
        </div>
        <div className='form-control'>
            <p className={classes.error}>{emailError}</p>
            <label htmlFor='name'>E-Mail Address</label>
            <input type='text' id='name' 
                value={emailValue}
                onBlur={emailBlueHandler}
                onChange={emailChangeHandler} />
        </div>
        <div className='form-actions'>
          <button disabled={!isFormValid}>Submit</button>
        </div>
      </form>
    );
  };
  
  export default BasicForm;
  
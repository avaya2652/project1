import  {useEffect, useState} from 'react';
// import CheckoutValidation from './CheckoutValidation';

const useForm = (callBack, value, setValue, error, setError, CheckoutValidation) =>{
    // const [value, setValue] = useState({"name":"", "email":"", "address":"", "phone":"","password":""});
    // const [error, setError] = useState({"name":"", "email":"", "address":"", "phone":"","password":""});

    const [submiting, setSubmiting] = useState(false);

    useEffect(()=>{
        // Checking if all error objects are empty
        const isEmpty = Object.values(error).every(x => x === '');
        if(isEmpty && submiting){
            callBack()

        }
    },[error, submiting])

    const onChangeHandler = (event) =>{
        let name = event.target.name;
        let value1 =  event.target.value;
        
        setValue({
            ...value,
            [name]: value1
        })
    }

    const onBlurHandler = (event) =>{

        let name = event.target.name;
        
        let validationResult = CheckoutValidation(name, value);
        let f = Object.keys(validationResult)[0];
        setError({
            ...error,
           [f]: Object.values(validationResult)[0]
        })

    }

    const onFormSubmitHandler = (event) =>{

        event.preventDefault();
        setSubmiting(true);
        
        let validationResult = [];

        for(let key in value){
            validationResult.push(CheckoutValidation(key, value))
        }
        
       // Converting validationResult aray to object to set in error state

        let obj = {};
        for (const key of validationResult) {
            obj[Object.keys(key)[0]]= Object.values(key)[0];
       }
        setError(obj);

    }


    return {onChangeHandler,onBlurHandler, onFormSubmitHandler}
}

export default useForm;
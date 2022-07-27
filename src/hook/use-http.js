import { useState, useCallback } from "react";

const useHttp = (manageData) =>{
    // const [responseData, setResponseData] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const sendRequest=useCallback(async(config)=>{
        setIsLoading(true);
        try{
            const response = await fetch(config.URL,{
                method: config.method?config.method :'GET',
                headers:{
                    'Content-Type':config.headers? config.headers :'application/json'
                },
                body:config.body? JSON.stringify(config.body):null
            })
            if(response.status !== 200){
                throw new Error('Something went wrong!')
            }
            const data = await response.json();
            setErrorMessage('')

            manageData(data);
            
        }
        catch(error){
            console.log(error.message)
            setErrorMessage(error.message)
        }
        setIsLoading(false);
    },[manageData])
    // console.log(responseData);
    return{
        errorMessage,
        isLoading,
        sendRequest
    }
}

export default useHttp;
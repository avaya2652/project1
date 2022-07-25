import  { useState, useCallback } from "react";
/**
 * config:{
 * url, method, data}
 * 
 * return:{
 * isLoading,
 * errorMsg
 * }
 */

const useHttp = ( manageData) =>{
    const [isLoading, setIsLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');


    const sendRequest = useCallback(async(config)=>{
        // console.log(config);
        try{
            let apiConfig = {
                method:config.method? config.method: 'GET',
                headers:config.headers? config.headers:{},
                body:config.body? JSON.stringify(config.body) : null
            }
            
            setIsLoading(true);
            let response = await fetch(config.URL, apiConfig)
            if(!response.ok){
                throw new Error('Something went wrong!')
            }
            let data = await response.json();
            manageData(data)
            console.log('from hook', data)

        }
        catch(err){
            setErrorMsg(err.message);

        }
        setIsLoading(false);
},[ manageData])
    return{isLoading, errorMsg,sendRequest}
}

export default useHttp;
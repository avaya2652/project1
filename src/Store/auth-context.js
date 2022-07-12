import React, {useState, useEffect} from "react";

const AuthContext = React.createContext({
    isLogin: false,
    logoutHandler: ()=>{},
    loginHandler: ()=>{},
    userDetails:{}
})


export const AuthContextProvider = (props) =>{
  const [user, setUser] = useState({email:'', password:''});
  useEffect(()=>{
    const userDetails = JSON.parse(localStorage.getItem('user'));
      if(!userDetails){
        setUser({email:'', password:''})
      }else{
        setUser(userDetails);
      }
  },[])

  const loginHandler = (flag) =>{
    if(flag){

      const userDetails = JSON.parse(localStorage.getItem('user'));
      setUser(userDetails);
    }
  }

  const logoutHandler = ()=>{
   localStorage.removeItem('user');
   setUser({email:'', password:''});
  }

    return(
        <AuthContext.Provider value={
            {isLogin: user.email !== ''?true: false,
            loginHandler:loginHandler, 
            logoutHandler:logoutHandler,
            userDetails: user}
            }>
            {props.children}
        </AuthContext.Provider>
    )
}
// export default AuthContextProvider;
export default AuthContext;
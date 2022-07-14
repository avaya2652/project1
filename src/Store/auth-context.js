import React, {
  useState,
  useEffect
} from "react";

const AuthContext = React.createContext({
  isLogin: false,
  logoutHandler: () => {},
  loginHandler: (email) => {},
  userDetails: {}
})


export const AuthContextProvider = (props) => {
  const [user, setUser] = useState({
    email: ''
  });
  useEffect(() => {
    const userDetails = localStorage.getItem('email');
    if (!userDetails) {
      setUser({
        email: ''
      })
    } else {
      setUser({email: userDetails});
    }
  }, [])

  const loginHandler = (email) => {
      localStorage.setItem('email', email)  ;
      setUser({'email': email});
  }

  const logoutHandler = () => {
    localStorage.removeItem('email');
    setUser({
      email: ''
    });
  }

  return ( <AuthContext.Provider value = {
      {
        isLogin: user.email !== '' ? true : false,
        loginHandler: loginHandler,
        logoutHandler: logoutHandler,
        userDetails: user
      }
    } > {
      props.children
    } </AuthContext.Provider>
  )
}
// export default AuthContextProvider;
export default AuthContext;
import { useContext } from 'react';
import './App.css';
import Header from './Components/Layout/Header/Header';
import Menu from './Components/Menu/Menu';
import UserLogin from './Components/UserLogin/UserLogin';
import Welcome from './Components/Welcome/Welcome';
import AuthContext from './Store/auth-context';


function App() {
  
  const contx = useContext(AuthContext);
  return (
    <div className="App">
        <Header>
          <p>Section 10 Lesson</p>
          <Menu ></Menu>
        </Header>
        <div>
          {!contx.isLogin && <UserLogin onSubmit={contx.loginHandler}></UserLogin>}
          {contx.isLogin && <Welcome user = {contx.userDetails.email} ></Welcome>}
        </div>
    </div>
  );
}

export default App;

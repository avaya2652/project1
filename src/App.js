import { useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Layout/Header/Header';
import UserLogin from './Components/UserLogin/UserLogin';
import Welcome from './Components/Welcome/Welcome';

function App() {
  const [user, setUser] = useState({})
  const formSubmitHandler = (e) =>{
    const userDetails = JSON.parse(localStorage.getItem('user'));
    setUser(userDetails);
  }
  useEffect(()=>{
    const userDetails = JSON.parse(localStorage.getItem('user'));
      console.log(userDetails);
      setUser(userDetails);
  },[])
  
  return (
    <div className="App">
      <Header>
        Section 10 Lesson
      </Header>
      <div>
        {!user && <UserLogin onSubmit={formSubmitHandler}></UserLogin>}
        {user && <Welcome user = {user.email}></Welcome>}
      </div>
    </div>
  );
}

export default App;

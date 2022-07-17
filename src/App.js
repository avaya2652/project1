import './App.css';
import Banner from './components/Layout/Banner/Banner';
import Header from './components/Layout/Header/Header';
import Layout from './components/Layout/Layout';
import Meal from './components/Meal/Meal';

function App() {
  return (
    <div className="App">
      <Layout>
        <header>
          <Header></Header>
        </header>
        <Banner></Banner>
      </Layout>
      <main>
        <Meal></Meal>
      </main>
    </div>
  );
}

export default App;

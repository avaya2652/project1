import './App.css';
import Counter from './component/counter/Counter';
import CounterClass from './component/counter/CounterClass';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        React app
      </header>
      <Counter></Counter>
      <hr />
      <CounterClass></CounterClass>
    </div>
  );
}

export default App;

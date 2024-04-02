import './App.css';
import Header from './component/Header';
import Request from './component/Request';

function App() {
  return (
    <div className="App">
      <Header />
      <Request />
      <header className="App-header">
        <p>this is header</p>
        <p>
          greenfrog
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

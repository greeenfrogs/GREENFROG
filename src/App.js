import './App.css';
import Header from './component/Header';
import Request from './component/Request';
import Free from './component/Free';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Request />
    </div>
  );
}

export default App;

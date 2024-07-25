import './App.css';
import {Route, Routes} from 'react-router-dom';
import { Form } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      </header>
    </div>
  );
}


export default App;

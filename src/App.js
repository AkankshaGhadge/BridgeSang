import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
// import Index from './website/maincomp/Index';
import Master from './website/Master';
import Index from './website/maincomp/Index';
import About from './website/maincomp/About';
import Course from './website/maincomp/Course';

function App() {
  return (
    <div className="App">
  <BrowserRouter>
      <Routes>
        <Route path='/'element={<Master Rcf={Index}/>}/>
        <Route path='/about' element={<Master Rcf={About}/>}/>
        <Route path='/course' element={<Master Rcf={Course}/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

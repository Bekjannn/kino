import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './screens/Home';
import About from './screens/About';
import Menu from './components/Menu';

function App() {
  return (
    <div className="div">
     
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App;

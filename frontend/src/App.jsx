import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import LandingLayout from '../src/layout/LandingLayout';
import Landing from './paginas/Landing';
import Institucional from './paginas/Institucional';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<LandingLayout />}>
              <Route index element={<Landing />} />
              <Route path='/institucional' element={<Institucional />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

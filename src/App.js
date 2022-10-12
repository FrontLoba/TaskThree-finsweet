import { Routes, Route } from 'react-router-dom';
import './App.css';
import Contact from './Components/Contact/Contact';
import Pricing from './Pages/Pricing';

import Product from './Pages/Product';

function App() {
  return (
    <div>

    <Routes>
    <Route path='/' element={<Product/>}></Route>
    <Route path='/Pricing' element={<Pricing/>}></Route>
    <Route path='/Contact' element={<Contact/>}></Route>
      
    </Routes>
    </div>
  );
}

export default App;

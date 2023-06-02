import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUpHeader from './signin/SignUpHeader';
import SignUpHome from './signin/SignUpHome';
import LogIn from './signin/LogIn';
import { Routes, Route } from 'react-router-dom'
import Checkout from './cart/Checkout';
import Cart from './cart/Cart';


function App() {
  return (
    <>
      <SignUpHeader />
      <Routes>
        <Route path='/' element={<SignUpHome />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
    </>
  );
}

export default App;

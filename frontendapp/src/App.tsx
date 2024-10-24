
import { ReactDOM } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import { Login } from './pages/login';
import { Signup } from './pages/signup';
import { Maincomponent } from './pages/maincomponent';
import { UserInfoPage } from './components/userinfo';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/mainpage' element={<Maincomponent/>} />
        <Route path='/userinfopage' element={<UserInfoPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

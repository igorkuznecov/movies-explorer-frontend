import './App.css';
import { Routes, Route } from 'react-router-dom';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Main from './Main/Main';
import Movies from './Movies/Movies';
import Profile from './Profile/Profile';
import Login from './Login/Login';
import Register from './Register/Register';
import { useEffect, useState } from 'react';
import NotFound from './NotFound/NotFound';
import { useLocation } from 'react-router-dom';
import SavedMovies from './SavedMovies/SavedMovies';
import BurgerMenu from './BurgerMenu/BurgerMenu';

function App() {
  const location = useLocation();
  const [isLogged, setIsLogged] = useState(true);
  const [headerIsOn, setHeaderIsOn] = useState(false);
  const [footerIsOn, setFooterIsOn] = useState(false);
  const [isBurgerMenuOpened, setIsBurgerMenuOpened] = useState(false);

  function closeBurgerMenu() {
    setIsBurgerMenuOpened(false);
  }

  function openBurgerMenu() {
    setIsBurgerMenuOpened(true);
  }

  useEffect(() => {
    const loc = location.pathname;
    closeBurgerMenu()
    if (
      loc === '/movies' ||
      loc === '/saved' ||
      loc === '/profile' ||
      loc === '/'
    ) {
      setHeaderIsOn(true);
    } else {
      setHeaderIsOn(false);
    }
  }, [location]);

  useEffect(() => {
    const loc = location.pathname;
    closeBurgerMenu()
    if (
      loc === '/movies' ||
      loc === '/saved' ||
      loc === '/'
    ) {
      setFooterIsOn(true);
    } else {
      setFooterIsOn(false);
    }
  }, [location]);

  return (
    <div className='App'>
      <Header
        isOn={headerIsOn}
        authorized={isLogged}
        openBurgerMenu={openBurgerMenu}
      ></Header>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/saved' element={<SavedMovies />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer isOn={footerIsOn}></Footer>
      <BurgerMenu
        isOpen={isBurgerMenuOpened}
        onClose={closeBurgerMenu}
      ></BurgerMenu>
    </div>
  );
}

export default App;

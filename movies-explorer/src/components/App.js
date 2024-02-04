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
import { checkToken } from '../utils/MainApi';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { setUserInfo } from '../utils/MainApi';
import { useNavigate } from 'react-router-dom';
import { authorize } from '../utils/MainApi';
import { register } from '../utils/MainApi';
import { CurrentServerErrorContext } from '../contexts/CurrentServerErrorContext';
import { readError } from '../utils/Errors';
import ProtectedRouteElement from './ProtectedRoute/ProtectedRoute';
import { SavedMoviesContext } from '../contexts/SavedMoviesContext';
import { getMovies } from '../utils/MoviesApi';
import { getSavedMovies } from '../utils/MainApi';
import InfoPopup from './InfoPopup/InfoPopup';

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLogged, setIsLogged] = useState(false);
  const [headerIsOn, setHeaderIsOn] = useState(false);
  const [footerIsOn, setFooterIsOn] = useState(false);
  const [isBurgerMenuOpened, setIsBurgerMenuOpened] = useState(false);
  const [isInited, setIsInited] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [currentError, setCurrentError] = useState({});

  const [allMovies, setAllMovies] = useState([]);
  const [allMoviesLoaded, setAllMoviesLoaded] = useState(false);

  const [savedMovies, setSavedMovies] = useState([]);
  const [savedMoviesLoaded, setSavedMoviesLoaded] = useState(false);

  const [infoPopupIsOpen, setInfoPopupIsOpen] = useState(false);
  const [infoPopupMessage, setInfoPopupMessage] = useState('');
  const [infoPopupIsError, setInfoPopupIsError] = useState(false);

  useEffect(() => {
    if (isLogged) {
      getMovies()
        .then((res) => {
          setAllMovies(res);
        })
        .then(() => setAllMoviesLoaded(true))
        .catch((res) => {
          console.log(`catch err ${res}`);
        });

      getSavedMovies()
        .then((res) => setSavedMovies(res))
        .then(() => setSavedMoviesLoaded(true))
        .catch((res) => {
          console.log(`catch err ${res}`);
        });
    }
  }, [isLogged]);

  function handleServerError(error) {
    setCurrentError({ name: readError(error), visibility: true });
    setTimeout(() => {
      setCurrentError({ name: readError(error), visibility: false });
    }, 1500);
  }

  function closeBurgerMenu() {
    setIsBurgerMenuOpened(false);
  }

  function openBurgerMenu() {
    setIsBurgerMenuOpened(true);
  }

  useEffect(() => {
    const loc = location.pathname;
    closeBurgerMenu();
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
    closeBurgerMenu();
    if (loc === '/movies' || loc === '/saved' || loc === '/') {
      setFooterIsOn(true);
    } else {
      setFooterIsOn(false);
    }
  }, [location]);

  useEffect(() => {
    const savedToken = localStorage.getItem('jwt');
    if (savedToken) {
      checkToken(savedToken)
        .then((res) => {
          if (res._id) {
            setCurrentUser(res);
            setIsLogged(true);
          }
          return;
        })
        .catch((res) => {
          handleServerError(res);
          console.log(`catch err ${res}`);
        })
        .finally(() => {
          setIsInited(true);
        });
    } else {
      setIsInited(true);
    }
  }, [isLogged]);

  function handleProfileEdit(name, email) {
    setUserInfo(name, email)
      .then((res) => {
        setCurrentUser(res);
        setInfoPopupIsError(false);
        setInfoPopupMessage('Ваши данные успешно обновлены');
        setInfoPopupIsOpen(true);
        setTimeout(() => {
          setInfoPopupIsOpen(false);
        }, 1500);
      })
      .catch((res) => {
        handleServerError(res);
        console.log(`catch err ${res}`);
      });
  }

  function handleProfileExit() {
    setIsLogged(false);
    localStorage.clear();
    navigate('/', { replace: false });
  }

  function handleLogin(password, email) {
    authorize(password, email)
      .then((res) => {
        if (res.token) {
          localStorage.setItem('jwt', res.token);
        }
      })
      .then(() => setIsLogged(true))
      .then(() => navigate('/movies', { replace: false }))
      .catch((res) => {
        handleServerError(res);
        console.log(`catch err ${res}`);
      });
  }

  function handleRegister(password, email, name) {
    register(password, email, name)
      .then((res) => {
        if (res._id) {
          handleLogin(password, email);
        }
      })
      .catch((res) => {
        handleServerError(res);
        console.log(`catch err ${res}`);
      });
  }

  if (!isInited) {
    return null;
  }

  return (
    <CurrentServerErrorContext.Provider value={currentError}>
      <CurrentUserContext.Provider value={currentUser}>
        <SavedMoviesContext.Provider value={2}>
          <div className='App'>
            <Header
              isOn={headerIsOn}
              authorized={isLogged}
              openBurgerMenu={openBurgerMenu}
            ></Header>
            <Routes>
              <Route path='/' element={<Main />} />

              <Route
                path='/movies'
                element={
                  <ProtectedRouteElement
                    element={Movies}
                    allMovies={allMovies}
                    savedMovies={savedMovies}
                    setSavedMovies={setSavedMovies}
                    isLogged={isLogged}
                    moviesLoaded={allMoviesLoaded}
                  />
                }
              />
              <Route
                path='/saved'
                element={
                  <ProtectedRouteElement
                    element={SavedMovies}
                    allMovies={allMovies}
                    setSavedMovies={setSavedMovies}
                    isLogged={isLogged}
                    savedMovies={savedMovies}
                    savedMoviesLoaded={savedMoviesLoaded}
                  />
                }
              />
              <Route
                path='/profile'
                element={
                  <ProtectedRouteElement
                    isLogged={isLogged}
                    element={Profile}
                    handleProfileEdit={handleProfileEdit}
                    handleProfileExit={handleProfileExit}
                  />
                }
              />
              <Route
                path='/signin'
                element={
                  <Login handleLogin={handleLogin} isLogged={isLogged} />
                }
              />
              <Route
                path='/signup'
                element={
                  <Register
                    handleRegister={handleRegister}
                    isLogged={isLogged}
                  />
                }
              />

              <Route path='*' element={<NotFound />} />
            </Routes>
            <Footer isOn={footerIsOn}></Footer>
            <InfoPopup
              isOpen={infoPopupIsOpen}
              message={infoPopupMessage}
              type={infoPopupIsError}
            ></InfoPopup>
            <BurgerMenu
              isOpen={isBurgerMenuOpened}
              onClose={closeBurgerMenu}
            ></BurgerMenu>
          </div>
        </SavedMoviesContext.Provider>
      </CurrentUserContext.Provider>
    </CurrentServerErrorContext.Provider>
  );
}

export default App;

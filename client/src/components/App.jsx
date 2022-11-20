import React, { useEffect, useState } from 'react';
import { Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import '@fortawesome/fontawesome-free/css/all.min.css';
import UploadForm from './UploadForm.jsx';
import SelectScreen from './SelectScreen.jsx';
import Share from './Share.jsx';
import Downloads from './Downloads.jsx';
import Verification from './Verification.jsx';
import Err404 from './Err404.jsx';
import Login from './Auth/Login.jsx';
import Signup from './Auth/Signup.jsx';
import useStorage from '../Hooks/useStorage';
import BlackLogo from '../assets/BlackLogo.png';
import WhiteLogo from '../assets/WhiteLogo.png';
import NavLink from './NavLink.jsx';
import PrivateRoute from './Auth/PrivateRoute.jsx';
import Profile from './Profile.jsx';
import { ButtonContainer } from './CommonStyles/Styles.jsx';
import { useAuth } from '../Hooks/useAuth.js';

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { currentUser } = useAuth();
  const [firstLoad, setFirstLoad] = useState(true);

  let {
    uploadToStorage,
    getFromStorage,
    queryFromStorage,
    progress,
    firestoreId,
    idCode,
    err
  } = useStorage();

  useEffect(() => {
    if(progress === 100 && firestoreId) {
      let timer = setTimeout(()=> {
        navigate(`/share/${firestoreId}`);
      }, 750)
      return ()=>clearTimeout(timer);
    }
  }, [firestoreId]);

  useEffect(() => {
    if(location.pathname !== '/') {
      setFirstLoad(false);
    } else {
      let timer = setTimeout(() => {
        setFirstLoad(false);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const returnHome = () => {
    navigate('/');
  }

  return(
    <HomePage>
      <GlobalStyle />
      <Navbar>
        <HeaderLink to="/">
          <Logo
            src={location.pathname === '/' ? BlackLogo : WhiteLogo}
            initial={location.pathname === '/' ? true : false}
            animate={{
              opacity: [0, 1],
              transition: {
                duration: 0,
                delay: 1
              }
            }}
          />
        </HeaderLink>
        <NavButtonContainer>
          <NavLink title="Home" destination="/" ></NavLink>
          <NavLink title="Profile" destination="/profile" ></NavLink>
          {currentUser
          ? <NavLink title="Logout" destination='/'></NavLink>
          : <NavLink title="Login" destination="/login" ></NavLink>}
        </NavButtonContainer>
      </Navbar>
      <AnimatePresence>
        <Routes>
          <Route path='/'element={<SelectScreen key="select" firstLoad={firstLoad} />}/>
          <Route path='/profile' element={<PrivateRoute navigate={navigate} />} >
            <Route path='/profile/:id' element={<Profile />} />
          </Route>
          <Route path='/login' element={<Login navigate={navigate} />}/>
          <Route path='/signup' element={<Signup navigate={navigate} />}/>
          <Route path='/upload' element={<UploadForm key="upload" uploadToStorage={uploadToStorage} progress={progress} returnHome={returnHome} />} />
          <Route path='/share/:id' element={<Share key="share" getFromStorage={getFromStorage} navigate={navigate} />} />
          <Route path="/download" element={<Verification key="verify" queryFromStorage={queryFromStorage} navigate={navigate} returnHome={returnHome} />} />
          <Route path='/download/:id' element={<Downloads key="download" getFromStorage={getFromStorage} returnHome={returnHome} />} />
          <Route path='/:uid/downloads' element={<div>hi</div>} />
          <Route path='/:uid/uploads' element={<div>hi</div>} />
          <Route path='/*' element={<Err404 key="fourohfour" />} />
        </Routes>
      </AnimatePresence>
    </HomePage>
  );
}

const GlobalStyle = createGlobalStyle`
  body, html{
    margin: 0;
    padding: 0;
    background-color: #042A2B;
    color: white;
    font-family: 'Sono', sans-serif;
    overflow: hidden;
  }
  #root {
    height: 100vh;
    margin:0;
    padding: 0;
  }
`
const HomePage = styled.div`
  height: 100%;
`
const Logo = styled(motion.img)`
  width: 300px;
  height: auto;
  margin: 0;
`

const HeaderLink = styled(Link)`
  margin: 0;
  padding: 10px 25px;
`

const Navbar = styled.nav`
  position:sticky;
  top:0;
  left: 0;
  width: 100vw;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #A3BAC3;
  padding: 0;
  z-index: 5;
`
const NavButtonContainer = styled(ButtonContainer)`
  height: 100%;
  margin: 0;
`
export default App;
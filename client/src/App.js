import React, { useContext } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './components/Navbar'
import Home from './pages/Home'
import Register from './pages/Register'
import Profile from './pages/Profile'
import Registered from './pages/Registered'
import Play from './pages/Play'
import LeaderBoard from './pages/LeaderBoard'
import LoggedOut from './pages/LoggedOut'
import NotFound404 from './pages/NotFound404'
import { myContext } from './Context';

function App() {

  const user = useContext(myContext);
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          {user ?
            <>
              {user.username === "" ?
                <Route path="*" element={<Register />} />
                :
                <>
                  <Route path="/register" element={<Registered />} />
                  <Route path='/leaderboard' element={<LeaderBoard />} />
                  <Route path='/play' element={<Play />} />
                  <Route path='/profile' element={<Profile />} />
                </>
              }
            </>
            :
            <>
              <Route path='/profile' element={<LoggedOut />} />
              <Route path='/leaderboard' element={<LoggedOut />} />
              <Route path='/play' element={<LoggedOut />} />
              <Route path='/register' element={<LoggedOut />} />
            </>
          }
          <Route path='*' element={<NotFound404 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

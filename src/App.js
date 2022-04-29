import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Original from './pages/Original';
import CapsuleDetails from './pages/CapsuleDetails';
import Vertuo from './pages/Vertuo';
import './styles/App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/capsule/:id" element={ <CapsuleDetails /> } />
      <Route path="/capsules/original" element={ <Original /> } />
      <Route path="/capsules/vertuo" element={ <Vertuo /> } />
      {/* <Route path="/login" element={ <Login /> } /> */}
      {/* <Route path="/profile" element={ <Profile /> } /> */}
      {/* <Route path="/profile/edit" element={ <EditProfileInfo /> } /> */}
      {/* <Route path="/serverError" element={ <ServerError /> } /> */}
      {/* <Route path="*" element={ <NotFound /> } /> */}
    </Routes>
  );
}

export default App;

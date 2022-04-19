import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './styles/App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      {/* <Route path="/register" element={ <Register /> } /> */}
      {/* <Route path="/register/success" element={ <RegisterSuccess /> } /> */}
      {/* <Route path="/login" element={ <Login /> } /> */}
      {/* <Route path="/profile" element={ <Profile /> } /> */}
      {/* <Route path="/profile/edit" element={ <EditProfileInfo /> } /> */}
      {/* <Route path="/serverError" element={ <ServerError /> } /> */}
      {/* <Route path="*" element={ <NotFound /> } /> */}
    </Routes>
  );
}

export default App;

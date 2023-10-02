import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';


function App() {

  return (
      <div className='App'>
        <BrowserRouter>
          <Routes>
            < Route path='/' element={<HomePage />} />
            < Route path='/login' element={<LoginPage />} />
          </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App;

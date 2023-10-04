import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import SignUp from './pages/SignUp';


function App() {

  return (
      <div className='App'>
        <BrowserRouter>
          <Routes>
            < Route path='/' element={<HomePage />} />
            < Route path='/login' element={<LoginPage />} />
            < Route path='/signup' element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App;

import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';


function App() {
let [posts, setPosts] = useState([])

useEffect(() => {
  fetchPosts()
}, [])

let fetchPosts = async() => {
  let res = await fetch('/blog/')
  let data = await res.json()
  setPosts(data)
}
  return (
      <div className='App'>
        <BrowserRouter>
          <Routes>
            < Route path='/' element={<HomePage posts={posts} />} />
            < Route path='/login' element={<LoginPage />} />
          </Routes>
        </BrowserRouter>
      </div>
  )
          



}

export default App;

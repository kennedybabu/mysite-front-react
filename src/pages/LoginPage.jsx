import React, {useState} from 'react'
import Lg from "../../src/assets/lg.svg"
import axios from "axios";
import {BsLaptop, BsBriefcase,BsBasket} from "react-icons/bs"
import {BiUser} from "react-icons/bi"
import {FiKey} from "react-icons/fi"
import { Link } from 'react-router-dom';
// import Video from "../../src/assets/bg-video"
import Video from "../assets/videos/bgvideo.mp4"


const LoginPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const submit = async (e) => {
    e.preventDefault()

    const user = {
      username:username,
      password:password
    }

    const {data} = await axios.post('/token/', user, { headers: {'Conntent-Type':'application/json'}, withCredentials: true})
    console.log(data)
    localStorage.setItem('access_token', data?.access)
    localStorage.setItem('refresh_token', data?.refresh)
    axios.defaults.headers.common['Authorization'] = `Bearer ${data['access']}`
    window.location.href = '/'
  }

  return (
    <div className='w-full h-screen flex items-center justify-center relative items-center justify-center bg'>    
      <video  src={Video} autoPlay loop muted/>  
      <div className="overlay"></div>    
    
     
      <div className="content z-40 mx-auto h-[520px] flex">
        <div id='padd' className="w-[375px] bg-opacity-60  bg-[#8224E3] text-stone-100 h-full flex flex-col">
          <h3 className='text-[22px] font-bold'>Join the club</h3>
          <p className='font-medium text-[14px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi.</p>

          <div>   

            <div className='flex my-3 gap-4'>
              <div className='outline outline-white outline-1 flex items-center justify-center rounded-md w-[47px] aspect-square'>
                <BsLaptop />
              </div>
              <div>
                <p className='text-[19px] font-bold'>Community</p>
                <small className='text-[14px]'>At vero eros et accusamus et.</small>
              </div>
            </div>

            <div className='flex my-3 gap-4'>
              <div className='outline outline-white outline-1 flex items-center justify-center rounded-md w-[47px] aspect-square'>
                <BsBasket className='text-stone-100'/>
              </div>
              <div>
                <p className='text-[19px] font-bold'>Onlibe Shop</p>
                <small className='text-[14px]'>At vero eros et accusamus et.</small>
              </div>
            </div>  

            <div className='flex my-3 gap-4'>
              <div className='outline outline-white outline-1 flex items-center justify-center rounded-md w-[47px] aspect-square'>
                <BsBriefcase />
              </div>
              <div>
                <p className='text-[19px] font-bold'>Job search</p>
                <small className='text-[14px]'>At vero eros et accusamus et.</small>
              </div>
            </div>
          </div>
        </div>

        <div id="padd" className='bg-white flex w-[375px] flex-col text-center'>
            <img src={Lg} alt="logo" className='mx-auto h-[60px] my-4 aspect-square' />
           <h3 className='font-bold text-[22px]'>welcome</h3>
           <small className='text-[14px] my-3 text[#626c72]'>Join gazillions of people online</small>
           <div className='flex flex-col'>
              <form onSubmit={submit}>
                <div className='flex items-center my-2 w-full p-2 bg-gray-100 rounded-3xl'>
                  <div className='w-[30px] p-2 flex items-center justify-center bg-white rounded-full aspect-square outline outline-gray-100 z-30'>
                    <BiUser />
                  </div>
                  <input type="text" required onChange={(e) => setUsername(e.target.value)}  className='input-padding w-full border-none rounded-r-3xl -rounded-l-xl outline-none p-1' placeholder='Email or username' />
                </div>

                <div className='flex my-2 w-full p-2 bg-gray-100 rounded-3xl'>
                  <div className='w-[30px] p-2 flex items-center justify-center bg-white rounded-full aspect-square outline outline-gray-100 z-30'>
                    <FiKey />
                  </div>
                  <input type="password" required onChange={(e) => setPassword(e.target.value)}  className='input-padding w-full border-none bg-gray-100 rounded-r-3xl rounded-l-xl outline-none p-1' placeholder='password' />
                </div>
                <button type='submit' className='px-[32px] shadow py-[8px] w-full bg-[#8224e3] my-2 rounded-3xl text-[14px] text-white'>Login to  your account</button>
                <small className='text-center text-[#8224E3]'>Don't have an account? <Link to={"/signup"}>signup</Link></small>
              </form>
           </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
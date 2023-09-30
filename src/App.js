import './App.css';
import Header from './components/Header';
import Logo from '../src/assets/logo.svg'
import {BsTextParagraph} from "react-icons/bs"
import {HiOutlinePhotograph} from "react-icons/hi"
import {CiPlay1} from "react-icons/ci"
import {GoPerson, GoPeople} from "react-icons/go"
import {PiTelevisionLight} from "react-icons/pi"
import {FiShoppingCart} from "react-icons/fi"
import {BiBriefcaseAlt2} from "react-icons/bi"
import {LuMessagesSquare} from "react-icons/lu"
import {PiNewspaperLight} from "react-icons/pi"
import Post from './components/Post';
import MemberWidget from './components/MemberWidget';
import { useEffect, useState } from 'react';


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
    <div className="App">
        <div className="container flex flex-row">

          <div className="sidebar min-w-[350px] h-full fixed left-0 top-0">
            <div className="flex flex-col w-full h-full">
              <div className="top grow-0 text-center h-[400px] pt-[50px] bg-[#383a45] relative w-full">
                  {/* <h2 className='text-2xl text-center header'>beehive</h2> */}
                  <img src={Logo} alt="logo" className='mx-auto h-[100px]'/>

                  <div className="absolute py-8 px-4 text-center text-black inset-x-0 shadow-xl -bottom-[20%] h-[250px] aspect-square bg-stone-100 rounded-md w-[70%] mx-auto">
                      <div className='h-[50px] my-3 outline outline-offset-3 outline-red-100 bg-red-200 mx-auto rounded-full aspect-square'>

                      </div>
                      <h4 className='font-bold'>Rahmi Cooper</h4>
                      <small>Member</small>
                      <hr />
                      <div className='flex flex-row gap-5 mt-3 items-center justify-center'>
                        <div>
                            <p>0</p>
                            <small>Friends</small>
                        </div>

                        <div>
                            <p>2</p>
                            <small>Groups</small>
                        </div>
                      </div>
                  </div>
              </div>

              <div className="bottom grow pt-[95px] pb-4 bg-[#f8f9fb]">
                <div className='grid px-14 gap-8 grid-cols-2 items-center'>
                    <div className='flex items-center flex-col cursor-pointer hover:text-[#8224e3]'>
                        <BsTextParagraph  className='text-xl'/> 
                        <small className='text-[12px]'>Activity</small>
                    </div>

                    <div className='flex items-center flex-col cursor-pointer hover:text-[#8224e3]'>
                        <HiOutlinePhotograph  className='text-xl'/> 
                        <small className='text-[12px]'>Photos</small>
                    </div>

                    <div className='flex items-center flex-col cursor-pointer hover:text-[#8224e3]'>
                        <CiPlay1  className='text-xl'/> 
                        <small className='text-[12px]'>Watch</small>
                    </div>

                    <div className='flex items-center flex-col cursor-pointer hover:text-[#8224e3]'>
                        <GoPerson  className='text-xl'/> 
                        <small className='text-[12px]'>People</small>
                    </div>


                    <div className='flex items-center flex-col cursor-pointer hover:text-[#8224e3]'>
                        <GoPeople  className='text-xl'/> 
                        <small className='text-[12px]'>Groups</small>
                    </div>

                    <div className='flex items-center flex-col cursor-pointer hover:text-[#8224e3]'>
                        <PiTelevisionLight  className='text-xl'/> 
                        <small className='text-[12px]'>Adverts</small>
                    </div>

                    <div className='flex items-center flex-col cursor-pointer hover:text-[#8224e3]'>
                        <FiShoppingCart  className='text-xl'/> 
                        <small className='text-[12px]'>Shop</small>
                    </div>

                    <div className='flex items-center flex-col cursor-pointer hover:text-[#8224e3]'>
                        <BiBriefcaseAlt2  className='text-xl'/> 
                        <small className='text-[12px]'>Jobs</small>
                    </div>


                    <div className='flex items-center flex-col cursor-pointer hover:text-[#8224e3]'>
                        <LuMessagesSquare  className='text-xl'/> 
                        <small className='text-[12px]'>Forums</small>
                    </div>

                    <div className='flex items-center flex-col cursor-pointer hover:text-[#8224e3]'>
                        <PiNewspaperLight  className='text-xl'/> 
                        <small className='text-[12px]'>Blog</small>
                    </div>

                </div>  
              </div>
            </div>
          </div>

          <div className="main-content w-full ml-[350px] min-w-[1235px]">
              <Header /> 
              <div className='flex flex-row h-screen mt-[80px]'>
                  <div className="basis-3/4 pt-[60px] h-full h-full border-r border-gray-100">

                      <div className='flex flex-row items-center max-w-[650px] mx-auto p-8 shadow-xl rounded-2xl'>
                          <div className='h-[35px] aspect-square bg-red-100 rounded-full'>
                              
                          </div>
                          <input type="text" className='border border-gray-100 mx-2 p-1 rounded-2xl w-full outline-none px-4' placeholder="What's new, Rahmi?" />
                      </div>

                      {/* post-lists */}
                      <div className="mt-5 pt-5">
                        {posts.map((post, index) => (
                            <Post key={index} post={post}/>
                        ))}
                        {/* <Post /> */}
                        {/* <Post /> 
                        <Post /> 
                        <Post /> 
                        <Post />
                        <Post /> */}
                      </div>
                  </div>

                  <div className="basis-1/4 p-[30px] fixed top-[80px] right-0">
                    <MemberWidget />

                    <div className='flex gap-2 text-[12px] items-center justify-between text-gray-400 my-7 child-hover:text-red-200'>
                      <a href="#">Home</a>
                      <a href="#">About Us</a>
                      <a href="#">FAQs</a>
                      <a href="#">Blog</a>
                      <a href="#">Contact</a>
                    </div>
                  </div>
              </div>
          </div>
        </div>
    </div>
  );
}

export default App;

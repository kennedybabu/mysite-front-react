import './App.css';
import Header from './components/Header';
import {AiOutlineMore} from "react-icons/ai"
import {BiLike} from "react-icons/bi"
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


function App() {
  return (
    <div className="App">
        <div className="container flex flex-row">

          <div className="sidebar min-w-[350px] h-full pb-5">
            <div className="flex flex-col w-full h-full">
              <div className="top grow-0 text-center h-[400px] pt-[50px] bg-[#383a45] relative w-full">
                  {/* <h2 className='text-2xl text-center header'>beehive</h2> */}
                  <img src={Logo} alt="logo" className='mx-auto h-[120px]'/>
                  <div className="absolute py-8 px-4 text-center text-black inset-x-0 shadow-xl -bottom-[20%] h-[250px] aspect-square bg-stone-100 rounded-md w-[70%] mx-auto">
                      <div className='h-[50px] outline outline-offset-3 outline-red-100 bg-red-200 mx-auto rounded-full aspect-square'>

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

              <div className="bottom grow pt-[95px] bg-[#f8f9fb]">
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

          <div className="main-content w-full">
              <Header /> 
              <div className='flex flex-row h-screen mt-[80px]'>
                  <div className="basis-3/4 pt-[60px] h-full h-full border-r border-gray-100">

                      <div className='flex flex-row items-center max-w-[650px] mx-auto p-8 shadow-xl rounded-2xl'>
                          <div className='h-[35px] aspect-square bg-red-100 rounded-full'>
                              
                          </div>
                          <input type="text" className='border border-gray-100 mx-2 p-1 rounded-2xl w-full' placeholder="What's new, Rahmi?" />
                      </div>

                      {/* post-lists */}
                      <div className="mt-5">
                        <div className='max-w-[650px] mx-auto'>
                          <div className='flex flex-row justify-between items-center'>
                              <div className="flex items-center">
                                <div className='h-[35px] cursor-pointer aspect-square bg-red-100 rounded-full'>                             
                                </div>
                                <p className='mx-2 text-gray-400 text-[14px]'><span className='text-black font-bold'>Rahmi Cooper</span> posted an update</p>
                              </div>
                              <AiOutlineMore  className='text-gray-400 cursor-pointer'/>
                          </div>
                          <small className='text-[12px] text-gray-400'>23 hours, 48 minutes ago</small>
                          <div className='post-body py-2'>
                            <p className='text-[14px] max-w-[90%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima reprehenderit consequatur aliquam sequi ut suscipit cum quam accusantium ducimus molestiae.</p>
                          </div>
                          <div className='h-[50px] my-2 border-t border-b border-gray-100'>
                            <div className="flex flex-row items-center h-full">                              
                              <p className='text-[14px] mr-4 flex items-center cursor-pointer text-[#8224E3]'><BiLike /> Like</p>
                              <p className='text-[14px] mx-4 text-[#838daa] cursor-pointer'>Comments <span>3</span></p>
                              <p className='text-[14px] mx-4 text-[#838daa] cursor-pointer'>Share +</p>
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>

                  <div className="basis-1/4">
                    sidebar
                  </div>
              </div>
          </div>
        </div>
    </div>
  );
}

export default App;

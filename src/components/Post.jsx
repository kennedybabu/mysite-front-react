import React, { useState } from 'react'
import {AiOutlineMore} from "react-icons/ai"
import {BiLike} from "react-icons/bi"

const Post = () => {
    let [isCommenting, setIsCommenting] = useState(false)

    let commenting = () => {
        setIsCommenting(!isCommenting)
    }

  return (
    <div>
        <div className='max-w-[650px] mx-auto'>
            <div className='flex flex-row justify-between items-center'>
                <div className="flex relative items-center">
                    <div className='absolute top-0 -left-11 h-[35px] cursor-pointer aspect-square bg-red-100 rounded-full'>                             
                    </div>
                    <p className='text-gray-400 text-[14px]'><span className='text-black font-bold'>Rahmi Cooper</span> posted an update</p>
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
                <p className='text-[14px] mx-4 text-[#838daa] cursor-pointer' onClick={commenting}>Comments <span>3</span></p>
                <p className='text-[14px] mx-4 text-[#838daa] cursor-pointer'>Share +</p>
            </div>
            </div>

            { isCommenting ? 
               ( <div className='flex w-full my-[16px]'>
                    <div className='flex w-full flex-row items-start max-w-[650px] mx-auto rounded-2xl'>
                        <div className='h-[35px] aspect-square bg-red-100 rounded-full'>
                            
                        </div>
                        <div className='w-full'>
                            <input type="text" className='border border-gray-100 mx-2 p-1 rounded-2xl w-full' />
                            <div className='my-2 px-4'>
                                <button className='w-[89px] h-[26px] bg-[#8224e3] text-stone-100 rounded-xl'>post</button> 
                                <a href="#" onClick={commenting} className='text-[#8224e3] mx-3 hover:underline'>cancel</a>
                            </div>
                        </div>
                    </div>
                </div>) : null
            }
            
        </div>
    </div>
  )
}

export default Post
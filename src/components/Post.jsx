import React from 'react'
import {AiOutlineMore} from "react-icons/ai"
import {BiLike} from "react-icons/bi"

const Post = () => {
  return (
    <div>
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
  )
}

export default Post
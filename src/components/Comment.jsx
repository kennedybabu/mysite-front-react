import React from 'react'

const Comment = () => {
  return (
    <div>
        <div className='flex my-2 flex-row items-start max-w-[90%] mr-auto'>
            <div className='h-[30px] aspect-square bg-red-100 rounded-full'>
                
            </div>
            <div>
                <div className='border bg-gray-100 border-gray-100 mx-2 p-2 px-4 rounded-3xl w-full' >
                    <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, id!</small>
                </div>
                <div className='flex text-[12px] font-bold gap-4 my-1 pl-[15px]'>
                    <a href="#">Reply</a> <a href="#">Delete</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Comment
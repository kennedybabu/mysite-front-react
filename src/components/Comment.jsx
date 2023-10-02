import React from 'react'

const Comment = ({comment}) => {

    let deleteComment = async() => {
        fetch(`/blog/comments/${comment.id}/delete/`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        window.location.reload()        
    }


  return (
    <div>
        <div className='flex my-2 flex-row items-start max-w-[90%] mr-auto'>
            <div className='h-[30px] aspect-square bg-red-100 rounded-full'>
                
            </div>
            <div>
                <div className='border bg-gray-100 border-gray-100 mx-2 p-2 px-4 rounded-3xl w-full' >
                    <small>{comment?.body}</small>
                </div>
                <div className='flex text-[12px] font-bold gap-4 my-1 pl-[15px]'>
                    <a>Reply</a> <a className='cursor-pointer' onClick={deleteComment}>Delete</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Comment
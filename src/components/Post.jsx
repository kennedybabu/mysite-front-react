import React, { useState } from 'react'
import {AiOutlineMore, AiOutlineDelete} from "react-icons/ai"
import {BiLike} from "react-icons/bi"
import { formatDistanceToNow } from 'date-fns'
import Comment from './Comment'
import {CiEdit} from "react-icons/ci"
import { useJwt } from 'react-jwt'



const Post = ({post, userId, onDelete}) => {     

    let [isCommenting, setIsCommenting] = useState(false)
    let [options, setOptions] = useState(false)
    let currentUser = useJwt(localStorage.getItem('access_token'))
    let currentUserId = currentUser?.decodedToken?.user_id

    let commenting = () => {
        setIsCommenting(!isCommenting)
    }

    let formattedDate = formatDistanceToNow(new Date(post.created), {
        addSuffix: true
    })

    let viewOptions = () => {
        setOptions(!options)
    }


    let deletePost = async () => {
        console.log(post)
        fetch(`/blog/posts/${post.id}/delete/`, {
            method: 'DELETE',
            headers: {
                'Content-Type' : 'application/json'
            }
        }).then(() => {
            onDelete()
            setOptions(!options)
        }).catch((error) => {
            console.log(error)
        })
        
    }

    const [comment, setComment] = useState('')

    let createComment = async () => {
        let body = {
            "body": comment,
            "author": userId,
            "post": post.id,

        }
        fetch('/blog/comments/create/', {
            method:'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body : JSON.stringify(body)
        })
        window.location.href='/'
    }


  return (
    <div>
        <div className='max-w-[650px] mx-auto'>
            <div className='flex flex-row justify-between items-center'>
                <div className="flex relative items-center">
                    <div className='absolute top-0 -left-11 h-[35px] cursor-pointer aspect-square bg-red-100 rounded-full'>                             
                    </div>
                    <p className='text-gray-400 text-[14px]'><span className='text-black font-bold'>{post.author_username}</span> posted an update</p>
                </div>
                <div className='relative'>
                    {currentUserId === post.author ? <AiOutlineMore onClick={viewOptions}  className='relative text-gray-400 cursor-pointer'/> : null
 }
                    {
                        options ? (
                            <div className='w-44 bg-stone-100 rounded-lg transition border border-gray-100 shadow z-30 absolute -bottom-13 right-1'>
                                <ul className='py-2 text-sm'>
                                    <li><span className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-300 dark:hover:text-black flex items-center justify-between'>Edit <CiEdit /></span></li>
                                    <li onClick={deletePost}><span className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-300 dark:hover:text-black flex items-center justify-between'>Delete <AiOutlineDelete /></span></li>
                                </ul>
                            </div>
                        ): null
                    }
                </div>
            </div>
            <small className='text-[12px] text-gray-400'>{formattedDate}</small>
            <div className='post-body py-2'>
                <p className='text-[14px] max-w-[90%]'>{post.body}</p>
            </div>
            <div className='h-[50px] my-2 border-t border-b border-gray-100'>
            <div className="flex flex-row items-center h-full">                              
                <p className='text-[14px] mr-4 flex items-center cursor-pointer text-[#8224E3]'><BiLike /> Like</p>
                <p className='text-[14px] mx-4 text-[#838daa] cursor-pointer' onClick={commenting}>Comments <span className='p-1 border border-gray-200 rounded-full aspect-square px-[10px]'>{post?.comments.length}</span></p>
                <p className='text-[14px] mx-4 text-[#838daa] cursor-pointer'>Share +</p>
            </div>
            </div>
            
            <div className="py-4">
                {
                    post.comments.map((comment, index) => (
                        <Comment key={index} comment={comment}/>
                    ))
                }
            </div>

            <div>
                { isCommenting ? 
                    ( 
                    <div className='flex w-full my-[16px]'>
                        <div className='flex w-full flex-row items-start max-w-[650px] mx-auto rounded-2xl'>
                            <div className='h-[35px] aspect-square bg-red-100 rounded-full'>
                                
                            </div>
                            <div className='w-full'>
                                <input type="text" onChange={(e) => setComment(e.target.value)} className='border outline-none px-4 border-gray-100 mx-2 p-1 rounded-2xl w-full px-4 text-[13px] py-2' />
                                <div className='my-2 px-4'>
                                    <button onClick={createComment} className='w-[89px] h-[26px] bg-[#8224e3] text-stone-100 rounded-xl'>post</button> 
                                    <a onClick={commenting} className='text-[#8224e3] mx-3 hover:underline'>cancel</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    ) : null
                }
            </div>
            
        </div>
    </div>
  )
}

export default Post
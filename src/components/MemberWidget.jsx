import React from 'react'

const MemberWidget = () => {
  return (
    <div className='w-[259px] flex flex-col h-[377px] mx-auto bg-[#7c82c305] rounded-md shadow-sm p-[1.5rem]'>
        <h4 className='font-bold text-[16px] text-[#4f515b]'>Members</h4>
        <hr />
        <div className='flex justify-between my-1'>
            <small className='cursor-pointer'>Newest</small> | <small className='cursor-pointer'>Active</small> | <small className='cursor-pointer'>Popular</small>
        </div>
        <div className='grow'>
            <div className='member-widget flex w-full'>
                <div className='h-[30px] outline outline-offset-3 outline-red-100 bg-red-200 mx-auto rounded-full aspect-square'>

                </div>
                <div>
                    <p>Rahmi Cooper</p>
                    <small>2 hours ago</small>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MemberWidget
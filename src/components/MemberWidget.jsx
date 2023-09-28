import React from 'react'

const MemberWidget = () => {

    let users = [ {
        name: 'Joe', work: 'freelance-developer', 
        blogs: '54', websites: '32', 
        hackathons: 'none', location: 'Morocco', id: '0',
          
      },
       {
        name: 'Janet', work: 'fullstack-developer', 
        blogs: '34', websites: '12', 
        hackathons: '6', location: 'Mozambique', id: '1',          
      },
      {
        name: 'Janet', work: 'fullstack-developer', 
        blogs: '34', websites: '12', 
        hackathons: '6', location: 'Mozambique', id: '1',          
      },
      {
        name: 'Janet', work: 'fullstack-developer', 
        blogs: '34', websites: '12', 
        hackathons: '6', location: 'Mozambique', id: '1',          
      },   {
        name: 'Janet', work: 'fullstack-developer', 
        blogs: '34', websites: '12', 
        hackathons: '6', location: 'Mozambique', id: '1',          
      },   {
        name: 'Janet', work: 'fullstack-developer', 
        blogs: '34', websites: '12', 
        hackathons: '6', location: 'Mozambique', id: '1',          
      },   {
        name: 'Janet', work: 'fullstack-developer', 
        blogs: '34', websites: '12', 
        hackathons: '6', location: 'Mozambique', id: '1',          
      },   {
        name: 'Janet', work: 'fullstack-developer', 
        blogs: '34', websites: '12', 
        hackathons: '6', location: 'Mozambique', id: '1',          
      },
      
    ]


  return (
    <div className='w-[259px] flex flex-col h-[377px] mx-auto bg-[#7c82c305] rounded-md shadow-sm p-[.8rem]'>
        <h4 className='font-bold text-[16px] text-[#4f515b]'>Members</h4>
        <hr />
        <div className='flex justify-between my-3'>
            <small className='cursor-pointer'>Newest</small> | <small className='cursor-pointer'>Active</small> | <small className='cursor-pointer'>Popular</small>
        </div>
        <div className='grow w-full overflow-y-scroll no-scrollbar'>
            {users.map((user, index) => (
                <div key={index} className='member-widget px-2 my-3 flex flex-row w-full'>
                    <div className='h-[30px] w-[30px] outline outline-offset-3 outline-red-100 bg-red-200 rounded-full aspect-square'>

                    </div>
                    <div className='h-full mx-2 flex items-start justify-center flex-col'>
                        <a href='#' className='text-sm font-bold hover:underline'>Rahmi Cooper</a>
                        <small className='text-[12px] text-gray-400'>2 hours ago</small>
                    </div>
                </div>               
            ))}
        </div>
    </div>
  )
}

export default MemberWidget
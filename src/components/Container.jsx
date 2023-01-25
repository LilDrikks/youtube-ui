import React from 'react'
import FeedFilter from './FeedFilter'
import Main from './Main/Main'
import SidebarClose from './Sidebar'

function Container() {
  return (
    <div className='flex bg-black w-full'>
      <div className='w-full flex'>
      <SidebarClose />
      <div className='w-[94vw] pl-4'>
      <FeedFilter />
      <Main />
      </div>
      </div>
    </div>
  )
}

export default Container
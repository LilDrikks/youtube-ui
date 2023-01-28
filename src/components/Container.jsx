import React from 'react'
import FeedFilter from './FeedFilter'
import Main from './Main/Main'
import SidebarClose from './Sidebar'

function Container() {
  return (
    <div className='flex w-full'>
      <div className='w-full flex'>
      <SidebarClose />
      <div className='w-[93vw] pl-6'>
      <FeedFilter />
      <Main />
      </div>
      </div>
    </div>
  )
}

export default Container
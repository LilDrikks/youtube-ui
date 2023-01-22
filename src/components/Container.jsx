import React from 'react'
import FeedFilter from './FeedFilter'
import Main from './Main/Main'
import SidebarClose from './Sidebar'

function Container() {
  return (
    <div className='flex'>
      <SidebarClose />
      <div className='w-[95vw] pl-1 pr-7'>
      <FeedFilter />
      <Main />
      </div>
    </div>
  )
}

export default Container
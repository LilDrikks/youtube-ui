import React from 'react'
import FeedFilter from './FeedFilter'
import Main from './Main/Main'
import SidebarClose from './Sidebar'

function Container() {
  return (
    <div className='flex'>
      <SidebarClose />
      <div className='w-[96vw] pr-7'>
      <FeedFilter />
      <Main />
      </div>
    </div>
  )
}

export default Container
import React from 'react'
import FeedFilter from './FeedFilter'
import SidebarClose from './Sidebar'

function Main() {
  return (
    <main className='flex'>
      <SidebarClose />
      <FeedFilter /> 
    </main>
  )
}

export default Main
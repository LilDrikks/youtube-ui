import React from 'react'

function SidebarItem({ children, name }) {
  return (
    <div className="w-[64px] h-[74px] rounded-lg hover:bg-[#272727] pt-[8.5px] bg-black flex flex-col justify-center items-center">
      {children}
      <span className="text-white text-[10px] pt-[5px]">{name}</span>
    </div>
  )
}

export default SidebarItem

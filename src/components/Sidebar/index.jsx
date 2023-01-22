import React from 'react'
import BibSvg from '../../assets/svgs/BibSvg'
import HomeSvg from '../../assets/svgs/HomeSvg'
import ShortsSvg from '../../assets/svgs/ShortsSvg'
import SubSvg from '../../assets/svgs/SubSvg'
import SidebarItem from './SidebarItem'

function SidebarClose() {
  return (
    <div className="w-[5vw] h-full ml-1">
      <SidebarItem name="Início">
        <a href="#">
          <HomeSvg />
        </a>
      </SidebarItem>
      <SidebarItem name='Shorts'>
        <a href="#">
          <ShortsSvg />
        </a>
      </SidebarItem>
      <SidebarItem name='Inscrições'>
        <a href="#">
          <SubSvg />
        </a>
      </SidebarItem>
      <SidebarItem name='Biblioteca'>
        <a href="#">
          <BibSvg />
        </a>
      </SidebarItem>
    
    </div>
  )
}

export default SidebarClose

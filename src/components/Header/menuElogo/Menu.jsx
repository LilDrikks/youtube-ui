import React from 'react'
import Button from '../perfil/Button'
import Logo from './Logo'
import MenuSvg from './MenuSvg'

function Menu() {
  return (
    <div className='flex items-center justify-center relative'>
      <Button>
      <MenuSvg />
      </Button>
      <Logo />
      <span className='text-[#9d9d9d] text-[10px] absolute top-[2px] right-[-16px]'>BR</span>
    </div>
  )
}

export default Menu
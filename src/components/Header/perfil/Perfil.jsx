import React from 'react'
import {BsBell} from 'react-icons/bs'
function Perfil() {
  return (
    <div className='flex justify-end gap-3 w-full'>
      <button className='rounded-full '>
        <BsBell />
      </button>
      <button>
        <img src="" alt="bell" />
      </button>
      <button className='bg-white rounded-full w-8 h-8'>
        <img src="" alt="avatar" />
      </button>
    </div>
  )
}

export default Perfil

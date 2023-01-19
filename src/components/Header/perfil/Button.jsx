import React from 'react'

function Button({children}) {
  return (
    <button className='w-10 h-10 rounded-full hover:bg-[#272727] flex justify-center items-center'>
      {children}
    </button>
  )
}

export default Button
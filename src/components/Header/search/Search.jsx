import React, { useState } from 'react'
import SearchIcon from './SearchIcon'
import Speak from './speak'
import keyboard from '../../../assets/keyboard.png'

function Search() {
    const [span, setSpan] = useState(false)
    
    console.log(span)
  return (
    <div className='flex w-100 h-10 w-full justify-center'>
        <div className={`max-w-[540px] w-full flex items-center bg-[#121212] rounded-l-full w-100 h-10 overflow-hidden border-[0.1px] ${span ? 'border-[rgb(28,98,185)]' : 'border-[#2d2d2d]'}`}>
            <span className={`${span ? '' : 'hidden'} pl-3`}>
                <SearchIcon size={'20px'} />
            </span>
            <input type="text" className='w-full pl-3 border-none outline-none text-[#878686] bg-transparent' placeholder='Pesquisar' onBlur={() => setSpan(false)} onFocus={() => setSpan(true)} />
            <button>
                <img src={keyboard} className='h-[11px] w-[19px] mr-3 mb-1' />
            </button>
        </div>
        <button className='rounded-r-full bg-[#222222] w-[64px] flex justify-center items-center'>
            <SearchIcon size={'24px'} />
        </button>
        <button  className='min-w-[40px] h-10 ml-2 rounded-full flex justify-center items-center bg-[#181818] hover:bg-[#303030]'>
            <Speak />
        </button>
    </div>
  )
}

export default Search
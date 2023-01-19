import React from 'react'
import {BsBell} from 'react-icons/bs'
import {RxAvatar} from 'react-icons/rx'
import Avatar from './Avatar.jsx'
import Bell from './Bell.jsx'
import Button from './Button.jsx'
import Cam from './Cam.jsx'

function Perfil() {
  return (
    <div className='flex gap-3 w-100'>
      <Button >
        <Cam />
      </Button>
      <Button> 
        <Bell />
      </Button>
      <Button>
        <Avatar />
      </Button>
    </div>
  )
}

export default Perfil

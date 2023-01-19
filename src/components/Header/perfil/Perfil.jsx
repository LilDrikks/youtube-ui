import React from 'react'
import Avatar from '../../../assets/svgs/Avatar'
import Bell from '../../../assets/svgs/Bell.jsx'
import Button from './Button.jsx'
import Cam from '../../../assets/svgs/Cam.jsx'

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

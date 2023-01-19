import React from 'react'

function MenuSvg() {
  return (
    <svg
      viewBox="0 0 24 24"
      preserveAspectRatio="xMidYMid meet"
      focusable="false"
      className='m-2'
      style={{
        pointerEvents: 'none',
        display: 'block',
        width: '24px',
        height: '24px',
      }}
    >
      <g>
        <path d="M21,6H3V5h18V6z M21,11H3v1h18V11z M21,17H3v1h18V17z"
        fill='white'></path>
      </g>
    </svg>
  )
}

export default MenuSvg

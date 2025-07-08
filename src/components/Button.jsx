import React from 'react'

const Button = ({id, title, leftIcon, rightIcon, containerClass}) => {
  return (
    <main>
        <button id={id} title={title} className={`group relative z-10 w-fit
        cursor-pointer overflow-hidden rounded-full px-7 py-3 text-black ${containerClass}`}>
            <span className='relative incline-flex overflow-hidden font-tektur-regular text-xs uppercase'>{title}</span>{leftIcon}
        </button>
    </main>
  )
}

export default Button
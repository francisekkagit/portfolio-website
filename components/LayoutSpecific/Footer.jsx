import React from 'react'

const Footer = () => {
  return (
    <div className='sticky bottom-0 flex flex-col gap-1 items-center'>
        <p className='text-sm text-subtext'>Handcrafted with Next.js & TailwindCSS</p>
        <p className='text-sm text-subtext'>Powered by Vercel</p>
    </div>
  )
}

export default Footer
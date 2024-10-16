import React from 'react'
import { Textarea } from '@nextui-org/react';

const QuickMessage = () => {
  return (
    <div className='w-[80%] flex flex-col gap-1'>
        <Textarea variant='bordered' minRows={1} placeholder='Send me a message!' className='shadow-sm'/>
        <span className='ml-2 text-subtext'>Include your email address or phone number</span>
    </div>
  )
}

export default QuickMessage
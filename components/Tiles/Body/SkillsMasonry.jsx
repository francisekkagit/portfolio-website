import React from 'react'

const SkillsMasonry = () => {
  return (
    <div className='w-full bg-tile p-3 rounded-xl shadow-lg max-tile-sm flex flex-col gap-5'>
        <div className='bg-subtile p-5 rounded-xl shadow-md'></div>
        <div className='grid grid-rows-3 md:grid-flow-col gap-5'>
            <div className='bg-subtile rounded-xl shadow-md p-3 row-span-3'></div>
            <div className='bg-subtile rounded-xl shadow-md p-3'></div>
            <div className='bg-subtile rounded-xl shadow-md p-3 row-span-2'></div>
        </div>
    </div>
  )
}

export default SkillsMasonry
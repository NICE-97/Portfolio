import React from 'react'

function Tech({ data }) {
  return (
    <div className='flex gap-4 text-sm'>
        {data.map((item, index) =>{
          return(
            <div key={`${item}-tech-${index}`} className={`bg-primarySubcontent font-medium px-4 py-1 rounded-full`}>{item}</div>
          )
        })}
    </div>
  )
}

export default Tech

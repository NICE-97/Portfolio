import React from 'react'

function Tech({ isHighLight, data}) {
  return (
    <div className='flex gap-4 text-sm'>
        {data.map((item, index) =>{
          return(
            <div key={`${item}-tech-${index}`} className={`bg-primaryBase font-medium px-4 py-1 rounded-full ${isHighLight ? "text-primaryTitle" : ""}`}>{item}</div>
          )
        })}
    </div>
  )
}

export default Tech

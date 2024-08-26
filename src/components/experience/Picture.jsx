import React from 'react'

function Picture({ picture, title}) {
  if (!picture) {
    return null;
  }
  return (
    <div className='mt-5'>
      <img className='rounded-md border-2 shadow-md' src={picture} alt={title} />
    </div>
  )
}

export default Picture

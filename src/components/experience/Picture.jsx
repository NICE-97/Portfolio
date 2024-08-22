import React from 'react'

function Picture({ picture, title}) {
  if (!picture) {
    return null;
  }
  return (
    <div className='mt-5'>
      <img className='w-5/6 rounded-md' src={picture} alt={title} />
    </div>
  )
}

export default Picture

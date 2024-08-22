import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Material({ icon, link }) {
  if (!icon) {
    return null;
  }
  return (
        <a className='text-primaryContent transition-all hover:text-white hover:scale-110' href={link} target='_blank'>
          <FontAwesomeIcon className='' icon={icon}/>
        </a>
  )
}

export default Material

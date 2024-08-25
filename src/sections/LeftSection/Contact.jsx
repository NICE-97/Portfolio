import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons'

function Contact() {
  return (
    <div className='flex items-end gap-4 text-3xl'>
        <FontAwesomeIcon className='hover:scale-125 text-primaryContent hover:text-primaryAccent transition-all' icon={faGithub}/>
        <FontAwesomeIcon className='hover:scale-125 text-primaryContent hover:text-primaryAccent transition-all' icon={faFacebook}/>
    </div>
  )
}

export default Contact

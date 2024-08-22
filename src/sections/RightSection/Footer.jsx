import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { FaCopyright } from "react-icons/fa";

function Footer() {
  return (
    <div className='mb-24'>
        <div className='flex justify-end gap-2 text-lg font-semibold'>
            <span>Copyright</span>
            <div className='grid content-center'>
                <FaCopyright />
            </div>
            <span>2024  By - Patthanawong Sangpan</span>
            <div className='grid content-center text-primaryContent text-xl transition-all hover:scale-125 hover:text-white'>
                <a href="https://github.com/NICE-97" target='_blank'><FontAwesomeIcon icon={faGithub}/></a>
            </div>
        </div>
    </div>
  )
}

export default Footer

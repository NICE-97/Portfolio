import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowRight, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { data } from '../../contents/header'

function Header() {
  return (
    <div className='flex flex-col gap-4'>
        <div className='text-3xl text-primaryAccent font-bold'>{data.name}</div>
        <div className='text-xl text-primaryAccent font-semibold'>{data.title}</div>
        <div className='text-base w-5/6'>{data.caption}</div>
         <div className='mt-4'>
            <a href={data.link} target='_blank'>
                <span className='bg-primarySubcontent text-primaryAccent font-semibold px-6 py-2 rounded-md'>
                  <span className='-rotate-90 inline-block mr-2'>
                        <FontAwesomeIcon className='animate-bounce' icon={faArrowDown} />
                    </span>
                  {data.btntext}
            </span>
            </a>
        </div>
    </div>
  )
}

export default Header

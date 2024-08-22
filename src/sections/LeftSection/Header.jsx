import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { data } from '../../contents/header'

function Header() {
  return (
    <div className='flex flex-col gap-4'>
        <div className='text-3xl font-bold'>{data.name}</div>
        <div className='text-xl text-primaryAccent font-semibold'>{data.title}</div>
        <div className='text-base w-5/6'>{data.caption}</div>
         <div className='mt-4'>
            <a href={data.link} target='_blank'>
                <span className='bg-primarySubcontent text-gray-200 px-3 py-2 rounded-md'>
                {data.btntext}
                    <span className='rotate-90 inline-block ml-1'>
                        <FontAwesomeIcon className='animate-bounce' icon={faArrowDown} />
                    </span>
            </span>
            </a>
        </div>
    </div>
  )
}

export default Header

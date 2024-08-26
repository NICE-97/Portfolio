import React,{ useContext, useEffect } from 'react'
import { data } from '../../contents/about'
import { onInitial } from '../../App'

function About({
  title: sectionTitle = "",
  currentSectionId
}) {
  const getSectionId = useContext(onInitial)
  const SECTION_ID = `${sectionTitle}-section`

  useEffect(()=>{
    getSectionId(SECTION_ID);
  },[])

  return (
    <div className='space-y-4 px-2 mt-1 scroll-m-12' id={SECTION_ID}>
        <div className='text-2xl font-bold'>
          <span className={`dark:bg-white bg-primaryAccent h-[3px] duration-500 ease-in-out  mr-2 mb-2 new-arrow inline-block ${currentSectionId === SECTION_ID ? "pr-10" : ""}`}></span>
          <div className={`text-primaryAccent inline-block`}>{data.title}</div>
        </div>
        <div className='text-primaryTitle'>{data.description}</div>
    </div>
  )
}

export default About

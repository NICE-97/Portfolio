import React, { useState } from 'react'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Nav({ navBarItems, currentSection }) {
  const [isMouseEnter, setIsMouseEnter] = useState({});
  function handleClick (sectionId) {
      console.log(sectionId)
      document.getElementById(sectionId).scrollIntoView({ behavior: "smooth"})
  }

  return (
    <div className='hidden lg:flex flex-col font-semibold'>
        {navBarItems.map((items, index) =>{
          return(
            <div 
              key={`nav-${items}-${index}`} 
              onClick={() => handleClick(items.sectionId)}
              onMouseEnter={() => setIsMouseEnter({[items.title]: true})}
              onMouseLeave={() => setIsMouseEnter({[items.title]: false})}
              className='cursor-pointer flex py-3'
            >
                <div>
                  <FontAwesomeIcon 
                  className={`new-arrow mt-1 text-xl text-primaryAccent  ${currentSection === items.sectionId ? "text-primaryAccent" : isMouseEnter[items.title] ? "" : "hidden"}`} icon={faArrowRight}/>
                </div>
                <div className={`text-xl font-bold duration-500 ease-out uppercase  ${currentSection === items.sectionId || isMouseEnter[items.title] ? "translate-x-2 text-primaryAccent" : ""}`}>
                  {items.title}
                </div>
            </div>
          )
        })}
    </div>
  )
}

export default Nav

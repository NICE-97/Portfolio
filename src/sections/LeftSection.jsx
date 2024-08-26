import React from 'react'
import Header from './LeftSection/Header'
import Nav from './LeftSection/Nav'
import Contact from './LeftSection/Contact'

function LeftSection({ navBarItems, currentSection }) {
  return (
    <div className='px-3'>
        <div className='sticky top-12 grid gap-y-14 lg:gap-y-5 px-2 mb-20 lg:grid-rows-[35%_45%_20%] lg:h-[86vh]'>
          <Header/>
          <Nav navBarItems={ navBarItems } currentSection={currentSection}/>
          <Contact/>
        </div>
    </div>
  )
}

export default LeftSection

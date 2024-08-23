import React from 'react'
import About from './RightSection/About'
import ContentContainer from '../components/experience/ContentContainer'
import { data as experienceData } from '../contents/experience'
import { data as projectData } from '../contents/project'
import Footer from './RightSection/Footer'
import { data as certification } from '../contents/certification'

function RightSection({ currentSectionId}) {
  return (
    <div className="grid gap-20 lg:gap-40 px-3">
      <About 
        title='About'
        currentSectionId = {currentSectionId}
      />
      <ContentContainer
        title= 'Experience'
        data= {experienceData}
        currentSectionId = {currentSectionId}
      />
      <ContentContainer
        title= 'Project'
        data= {projectData}  
        currentSectionId = {currentSectionId}
      />
      <ContentContainer
        title= 'Certification'
        data= {certification}     
        currentSectionId = {currentSectionId}
      />
      {/* <ContentContainer
        title= 'Article'
        data= {projectData}      
        currentSectionId = {currentSectionId}
      /> */}
      <Footer/>
    </div>
  )
}

export default RightSection

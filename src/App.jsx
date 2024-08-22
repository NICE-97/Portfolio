import { useState, createContext, useEffect } from 'react'
import './App.css'
import LeftSection from './sections/LeftSection'
import RightSection from './sections/RightSection'

export const onInitial =  createContext();

function App() {
  const [sectionsIds, setSectionsIds] = useState([]);
  const [navBarItems, setNavBerItems] = useState([]);
  const [currentSection, setCurrentSection] = useState("");

  const addSectionId = (sectionId) => {
    const elementId = document.getElementById(sectionId).id;
    setSectionsIds((prev)=>[...new Set([...prev, elementId])]);
    const elementTitle = document.getElementById(sectionId).childNodes[0].textContent
    const obj = { title: elementTitle, sectionId: elementId }
    setNavBerItems((prev) => {
      if (prev.findIndex(e => e.title === obj.title) < 0) {
        return [...prev, obj]
      }
      return prev;
    })
  }

  function handleScroll () {
    for (let index = 0; index < sectionsIds.length; index++) {
      const el = sectionsIds[index];
      const elOffsetTop = document.getElementById(el).getClientRects()[0].y;
      const height = document.getElementById(el).getClientRects()[0].height * 0.5;
      const viewHeight = window.innerHeight * 0.3;

      if (elOffsetTop <= 0) {
        if((elOffsetTop + height) > viewHeight) {
          setCurrentSection(el)
        }
      }else if (elOffsetTop > 0 && elOffsetTop < viewHeight) {
        setCurrentSection(el)
      }
    }
  }

  useEffect(() => {
    if (sectionsIds.length > 0) {
      setCurrentSection(sectionsIds[0])
    }
  },[sectionsIds])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return() => {
      window.removeEventListener('scroll', handleScroll)
    }
  },[sectionsIds])

  return (
    <onInitial.Provider value={addSectionId}>
      <div  className='mt-10 mx-auto max-w-7xl grid gap-y-5 lg:grid-cols-[40%_60%]'>
          <LeftSection navBarItems={navBarItems} currentSection={currentSection}/>
          <RightSection currentSectionId={currentSection}/>
      </div>
    </onInitial.Provider>
  )
}

export default App

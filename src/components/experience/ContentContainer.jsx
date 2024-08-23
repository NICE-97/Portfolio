import React, { useState, useContext , useEffect } from 'react'
import FormattedDate from './FormattedDate';
import Picture from './Picture';
import TitleLink from './TitleLink';
import Material from './Material';
import Description from './Description';
import Tech from './Tech';
import { onInitial } from '../../App';

function ContentContainer({
    title: sectionTitle = "",
    data = [],
    currentSectionId
}) {
    const getSectionId = useContext(onInitial)
    const [isMouseEnter, setIsMouseEnter] = useState({});
    const SECTION_ID = `${sectionTitle}-section`
    useEffect(()=>{
        getSectionId(SECTION_ID);
    },[])

    return (
      <div id={SECTION_ID} className='scroll-m-10'>
          <div className='text-primaryAccent font-bold text-2xl px-2'>
            <div>
                <span className={`bg-white h-[2px] duration-500 ease-in-out  mr-2 mb-2 new-arrow inline-block ${currentSectionId === SECTION_ID ? "pr-10" : ""}`}></span>
                {sectionTitle}
            </div>
          </div>
          {data.map(({
              date = "",
              title = "",
              link = "",
              materials = [],
              description = [],
              skill = [],
              picture = "",
          }, index) => {
              return(
                  <div key={`${SECTION_ID}-${index}-${title.replaceAll(" ","")}`}
                      className={`grid grid-cols-[25%_75%] rounded-md px-4 py-4 mt-4 ${isMouseEnter[`${SECTION_ID}-${index}`] ? "bg-primaryBase transition-all" : ""}`}
                      onMouseEnter={() => setIsMouseEnter({ [`${SECTION_ID}-${index}`]: true})}
                      onMouseLeave={() => setIsMouseEnter({ [`${SECTION_ID}-${index}`]: false})}
                  >
                      <div>
                          <FormattedDate isHighLight={isMouseEnter[`${SECTION_ID}-${index}`]}>{date}</FormattedDate>
                          <Picture picture={picture} title={title}/>
                      </div>
                      <div className='flex flex-col gap-4'>
                          <TitleLink isHighLight={isMouseEnter[`${SECTION_ID}-${index}`]} title={title} link={link}/>
                          {
                              materials.length > 0 ?
                              <div className={`flex gap-4 text-xl items-center ${isMouseEnter[`${SECTION_ID}-${index}`] ? "text-primaryAccent" : "" }`}>
                                  {
                                      materials.map((items, index)=>{
                                          return(
                                              <Material key={`${items.type}-materials-${index}`} icon={items.type} link={items.link}/>
                                          )
                                      })
                                  }
                              </div>
                              : null
                          }
                          {description.map((items, index) =>{
                              return(
                                  <Description key={`${items}-description-${index}`} description={items}/>
                              )
                          })}
                          <div className={` ${isMouseEnter[`${SECTION_ID}-${index}`] ? "text-primaryAccent" : ""}`}>
                              {skill.map((items, index)=>{
                                  return(
                                      <Tech key={`${items}-skill-${index}`} data={items}/>
                                  )
                              })}
                          </div>
                      </div>
                  </div>
              )
          })}
      </div>
    )
}

export default ContentContainer

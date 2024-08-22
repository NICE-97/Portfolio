import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function TitleLink({ isHighLight, title, link}) {
  if(!link) {
    return <div className={`text-primaryAccent font-medium text-xl ${isHighLight ? "text-primaryTitle" : ""}`}>{title}</div>
  }

  return (
    <div className={`text-primaryAccent font-medium text-xl ${isHighLight ? "text-primaryTitle" : ""}`}>
      <a href={link} target='_blank'>
        {title}
        <FontAwesomeIcon className={`text-xs -rotate-45 transition-all ease-out translate-x-1 ${isHighLight ? "translate-x-2 -translate-y-1" : ""}`} icon={faArrowRight}/>
      </a>
    </div>
  )
}

export default TitleLink

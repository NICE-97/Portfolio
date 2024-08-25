import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function TitleLink({ isHighLight, title, link}) {
  if(!link) {
    return <div className={`font-medium text-xl ${isHighLight ? "text-primaryAccent" : ""}`}>{title}</div>
  }

  return (
    <div className={`font-medium text-xl ${isHighLight ? "text-primaryAccent" : ""}`}>
      <a href={link} target='_blank'>
        {title}
        <FontAwesomeIcon className={`text-xs -rotate-45 transition-all ease-out translate-x-1 ${isHighLight ? "translate-x-2 -translate-y-1" : ""}`} icon={faArrowRight}/>
      </a>
    </div>
  )
}

export default TitleLink

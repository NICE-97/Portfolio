import React from 'react'

function FormattedDate({ isHighLight, children }) {
  return (
    <div>
        <span className={`font-medium ${isHighLight ? "text-primarAccent" : ""}`}>
            {children}
        </span>
    </div>
  )
}

export default FormattedDate

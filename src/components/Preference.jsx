import React,{useState} from 'react'


function Preference({children,isOpen, setIsOpen}) {
   
  return (
    <div className="box">
          <button
            className="btn-toggle"
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? "-" : "+"}
          </button>
          {isOpen && children}
        </div>
  )
}

export default Preference
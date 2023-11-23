import React from 'react'
import { IconContext } from 'react-icons'




function SidebarButtons(props) {
 
  
  return (
    <>
  
    <div className={`flex gap-5 hover:cursor-pointer  `}> 
      
    <IconContext.Provider value={{ size: '15', color:  'blue' }}>
        {props.icon}
        <p className={`text-black text-xs`}>{props.title}</p>
        </IconContext.Provider>
    </div>
   
        </>
   
  )
}

export default SidebarButtons
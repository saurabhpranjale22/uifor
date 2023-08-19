import React, { useState } from 'react'
import '../Middle/middle.css'
const Middle = () => {
  const [tab1,setTab1] = useState("")
  const [tab2,setTab2] = useState("")
  const [tab3,setTab3] = useState("")
  const [tab4,setTab4] = useState("")
  return (
    <div style={{position:'relative',marginTop:'3rem'}}>
       
         <div className='tabs1'>
            <span className='tabs'>Tab 1</span>
            <span className='tabs'>Tab 2</span>
            <span className='tabs'>Tab 1</span>
            <span className='tabs'>Tab 2</span>
        </div>
        <div className='mainT'>
     Hello sir
        </div>
       
        <div>

        </div>
    </div>
  )
}

export default Middle
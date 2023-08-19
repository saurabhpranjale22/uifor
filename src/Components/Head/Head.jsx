import React, { useState } from 'react'
import '../Head/head.css'

const Head = () => {

    const [tab1,setTab1] =useState(false)
    const [tab2,setTab2] =useState(false)
  return (
    <div>
        <div className='mainD'>
     Hello sir
        </div>

       {tab1 ?  <section className='tab1model'>
       <button onClick={()=>{setTab1(false)}}>❌</button>
            </section> : null}

     {tab2 ? <section className='tab2model'>
                <button onClick={()=>{setTab2(false)}}>❌</button>
            </section> : null}

            
        <div className='sider'>
            <section className='sideD'>
            <iframe width="300" height="190" style={{objectFit:'cover'}} src="https://www.youtube.com/embed/vYPYgHwf2KA?si=63NFMXi8ZmPbor_b" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </section>
            <section className='sideD'>
            <iframe width="300" height="190" src="https://www.youtube.com/embed/vYPYgHwf2KA?si=63NFMXi8ZmPbor_b" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </section>
        </div>

        <div className='tab'>
           
            <span onClick={()=>{setTab1(true)}} className='tab1'>Tab 1</span>
            <span onClick={()=>{setTab2(true)}} className='tab1'>Tab 2</span>
        </div>
    </div>
  )
}

export default Head
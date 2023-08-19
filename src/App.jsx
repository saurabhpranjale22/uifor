
import { useState } from 'react'
import './App.css'
import Footer from './Components/Footer/Footer'
import Head from './Components/Head/Head'
import Middle from './Components/Middle/Middle'
import{GiHamburgerMenu} from 'react-icons/gi'
import{RxCross1} from 'react-icons/rx'

function App() {
const [log,setLog] = useState(false)
const [map,setMap] =useState(false)


  return (
    <>
      <div className='Outer'>
        <div className='Middle'>
          <section className='toggle'>
            <aside onClick={()=>{setLog(true)}}><GiHamburgerMenu size={25} /></aside>
            <aside onClick={()=>{setMap(true)}}><GiHamburgerMenu size={25}/></aside>
          </section>


    {log ?     
          <section className='sign'>
            <RxCross1 size={25} onClick={()=>{setLog(false)}} />
            <form style={{display:'flex',flexDirection:'column',margin:'auto',marginTop:'3rem'}}>
              <h2 style={{textAlign:'center',paddingBottom:'1rem'}}>Sign In</h2>
    <input type='text' style={{height:'2rem',width:'90%',margin:'auto'}} placeholder='Username'></input>
    <input type='password' style={{height:'2rem',width:'90%',margin:'auto',marginTop:'0.5rem'}} placeholder='Password'></input>
    <button style={{width:'4rem',height:'2rem',margin:'auto',marginTop:'0.5rem'}}>Sign In</button>
  </form>
</section>
          : null}




{map ?     
          <section className='map'>
            <RxCross1 size={25} className='cross'  onClick={()=>{setMap(false)}} />
  <div style={{width:'100%',marginTop:'4rem',marginLeft:'1.5rem'}} >
    <h3 style={{alignItems:'center'}}>Our Location</h3>
  <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15135.358626188017!2d73.80660485!3d18.4909208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1692344475195!5m2!1sen!2sin"
              width="300"
              height="300"
              
              style={{ border: 0 ,margin:'auto'}}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            />
  </div>
</section>
          : null}

          <div className='Content'>

          
<Head />
<Middle />
<Footer />
          </div>
        </div>
      </div>
    </>
  )
}

export default App

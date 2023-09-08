import  {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'


export default function Hearder() {
  const [click,setClick] =useState(false)
const handerClick=()=>setClick(!click)
  return (
   // menu

    <div className="sticky bg-gradient-to-tr from-green-400 to-green-200 text-white top-0 left-0 z-10 h-24 "  >
      <div className='flex justify-between items-center p-4 mx-20'>
     
     
        <h1 className='font-handwriting text-4xl text-slate-800 font-light text-left  md:text-center'>Portifólio</h1>
        <ul className={click? 'nav-menu active':'nav-menu'}>
            <li>
     <a className='text-slate-800 text-2xl  no-underline hover:underline' href="#">Home</a>        
                
            </li>
            <li>  
              
               <a className='text-slate-800 text-2xl  no-underline hover:underline' href="#projetos">
              Projetos
                </a></li>
                <li> 
                <a  className='text-slate-800 text-2xl  no-underline hover:underline'href="#educacao">
                Skills</a></li>
            <li>
            <a  className='text-slate-800 text-2xl  no-underline hover:underline'href="#contato">
                Contato</a></li>
            
               
        </ul>

{/* botao responsivo */}
<div className='hamburger' onClick={handerClick}>
  {click ?(<FaTimes size={20} style={{color:'#333'}}/>) :<FaBars size={20} style={{color:'#333'}}/>}
</div>



      </div>
    </div>
  )
}

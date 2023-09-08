
import {FaWhatsapp, FaGithub,FaLinkedin, FaInstagram, } from 'react-icons/fa'
import imagem from "../assets/imagem.jpg"
export default function Footer() {




  return (
<div className='footer  bg-gradient-to-tr from-green-400 to-green-200 text-white   py-2 '>
<div className="relative right-0 -mt-[6px] h-3 w-full rounded-l-full bg-gradient-to-r from-green-700 to-green-400 md:w-full"></div>
        
      
            <div className=" flex mb-4 pt-2 md: justify-between ml-28">
            <a  className="flex items-center  text-3xl sm:mb-0 ">
                <img src={imagem} className="h-8 mr-3 rounded-lg" alt="Flowbite Logo" />
               <span className="self-center text-3xl font-handwriting  font-light text-green-800   whitespace-nowrap ">Casali Tech</span>
             </a>
      </div>
      
      <h1 className='font-handwriting text-4xl text-green-800 font-light text-center  '>Redes Sociais</h1>
           
        
      

    

    

        <div className='flex justify-center mt-4 gap-5'>
        <a href="https://www.instagram.com/casalitech/">
                    <FaInstagram className='icon transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-125 hover:bg-black-500 duration-300 '/>
                </a>
            
              <a href="https://www.linkedin.com/in/jaquelinecasali/">
                    <FaLinkedin className='icon transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-125 hover:bg-black-500 duration-300 '/>
                </a>
                <a href="https://github.com/JacquelineCasali">
                    <FaGithub className='icon transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-125 hover:bg-black-500 duration-300'/>
                </a>
      <a href="https://api.whatsapp.com/send?phone=5571999735079&amp;text=Olá"target="_blank" >

      
                    <FaWhatsapp className="icon transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-125 hover:bg-black-500 duration-300"/>
                </a>
        </div>


  
         <div>
      <a href="https://api.whatsapp.com/send?phone=5571999735079&amp;text=Olá"target="_blank" className="fixed bottom-10 right-10 w-12 hover:-translate-y-2 hover:scale-125 hover:bg-black-500 duration-300">
    
 <img src="https://portfolio.or.app.br/assets/icons8-whatsapp.d082e683.svg" alt=""  />
      
     </a>
      </div>
      <p className="text-center p-4 font-semibold text-green-800">&copy; Copyright Portifólio  2023</p>
  
    </div>


     

      

    
     )
}

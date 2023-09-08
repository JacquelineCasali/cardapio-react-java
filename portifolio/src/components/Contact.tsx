import { FormEvent, useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import { FaSpinner } from "react-icons/fa"
import Sucesso from '../components/Sucesso';
import Error from "../components/Error";
export default function Contact() {
    const form = useRef<HTMLFormElement>(null)
     // botao
    // carregando 
    const [loading, setLoading] = useState(false)
    // sucesso
    const [success, setSuccess] = useState(false)
    // error
    const [error, setError] = useState(false)



    const sendEmail = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
    
        if (!form.current) return
    
        setLoading(true)
    
        emailjs
          .sendForm(
            "service_j72sp18",
            "template_n3ltznv",
            form.current,
            "-UjOEThCmDQW5AsGt"
          )
          .then(
            () => {
              setSuccess(true)
              setLoading(false)
            },
            (error) => {
              setError(true)
              setLoading(false)
              console.error(error)
            }
          )
      }
    
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-20 lg:px-8" id="contato">
      
       <div className="relative  text-center " >
            <h2 className="   font-light text-green-800 " >
             
           
            <span className="font-handwriting text-4xl ">Contato</span> 
            </h2>
             {/* <p className="relative text-2xl text-gray-400">
         Entre em contato por formulário
            </p>  */}
            <div className="absolute left-6  top-1 z-0  h-10 w-44 rounded-lg bg-green-600/10 md:left-1/3 ml-28 "  />

        
         </div>

    {/* <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm"> */}
    <div className="py-10 px-32">
     
    <form ref={form} onSubmit={sendEmail}>
    <div className=" flex flex-col md:flex-row">

   
<div className="basis-1/2  md:mr-10">

<label htmlFor="nome" className=" font-medium font-headline text-green-900 mt-3">
            Nome:
          </label>
        
          <input
              id="nome"
              name="nome"
              type="text"
              required
              placeholder="Digite Seu Nome aqui"
              className="mb-5 mt-2  w-full rounded-lg border p-2.5 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
            />

</div>
    
     
<div className="  basis-1/2">
<label htmlFor="email" className="font-medium font-headline text-green-700 mt-3">
                Email: 
              </label>
             
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="mb-5 mt-2  w-full rounded-lg border p-2.5 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                  placeholder="Digite Seu Email aqui"
               />
</div>
</div>
        
          <input
              id="assunto"
              name="assunto"
              type="text"
              required
              placeholder="Assunto"
              className="mb-5 mt-2  w-full rounded-lg border p-2.5 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
            />

          <label htmlFor="messagem" className=" font-medium font-headline text-green-900 mt-3">
            Mensagem:
          </label>
          
            <textarea
              id="messagem"
              name="messagem"
            placeholder="Deixe sua mensagem aqui"
             
              required
              className="mb-5 mt-2 h-36 w-full rounded-lg border p-2.5 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
            />
         {success && <Sucesso/> }
       

     <div>
          <button
            type="submit"
            className="btn w-full hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            disabled={loading}
           
         >
           
             {loading && <FaSpinner className="h-4 w-4 animate-spin" />}
                 
             Enviar mensagem
          </button>
        
      
        

          {error && <Error/>}


</div>
      </form>

  
    </div>
 

  </div>

)
}


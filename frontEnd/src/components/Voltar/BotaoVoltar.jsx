import React from 'react'
import { Link } from 'react-router-dom'
import "../Voltar/Voltar.css"
export default function BotaoVoltar() {
  return (
    <>
       <div className='voltar'>
       <Link className="voltar" to={"/"}>Voltar</Link>
    
       </div>
       
    </>
  )
}

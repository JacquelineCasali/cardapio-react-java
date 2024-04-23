import { Helmet, HelmetProvider } from "react-helmet-async"; // titulo da pagina

import LerCard from "../components/Ler/Ler";


export default function Home() {
 
  return (
  

   <>
     <HelmetProvider>
        <Helmet title="Detalhe Cardapio" />
      </HelmetProvider>
   

<LerCard/>
   </>
   
    

  )
}

import { Helmet, HelmetProvider } from "react-helmet-async"; // titulo da pagina
import Card from "../components/Card/Card";


export default function Home() {
 
  return (
  

   <>
     <HelmetProvider>
        <Helmet title="Cardápio" />
      </HelmetProvider>
   

<Card/>
   </>
   
    

  )
}

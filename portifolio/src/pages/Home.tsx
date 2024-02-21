
import '../App.css'
import { Helmet, HelmetProvider } from "react-helmet-async"; // titulo da pagina
//import Hearder from '../components/Hearder/Hearder'
import Banner from '../components/Banner/Banner'
import Projects from '../components/Projects';
 import Linguguens from '../components/Linguguens';
//import Footer from '../components/Footer/Footer';
 import Contact from '../components/Contato/Contact';
//import Card from '../components/Card/Card';
import Hearder from '../components/Hearder/Hearder';
import Footer from '../components/Footer/Footer';

function Home() {


  return (
    <>
       <HelmetProvider>
        <Helmet title="Portifolio" />
      </HelmetProvider>
    

     < Hearder/>
 
      <Banner/>
      <Projects/>

<Linguguens/>
 <Contact/>
<Footer/>

    </>
  )
}

export default Home

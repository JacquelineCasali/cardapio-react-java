
import './App.css'
import { Helmet, HelmetProvider } from "react-helmet-async"; // titulo da pagina
import Hearder from './components/Hearder'
import Banner from './components/Banner'
import Projects from './components/Projects';
import Linguguens from './components/Linguguens';
import Footer from './components/Footer';
import Contact from './components/Contact';



function App() {


  return (
    <main>
       <HelmetProvider>
        <Helmet title="Portifolio" />
      </HelmetProvider>


     < Hearder/>
     
      <Banner/>
      <Projects/>
<Linguguens/>
 <Contact/>

<Footer/>
  
    </main>
  )
}

export default App

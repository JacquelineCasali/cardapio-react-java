import { useState } from "react";
import { FaBars } from "react-icons/fa";
import styles from "./Header.module.css";
export default function Hearder() {
  //mostrar ou nao menu
  const [menu, setMenu] = useState(false);
  //  mudança de menu
  const click = () => {
    setMenu(!menu);
  };
  // const handerClick = () => setClick(!click);
  return (
    // menu

    <header
      className="fixed w-full bg-gradient-to-tr from-green-400 to-green-200 text-white top-0 left-0 z-10 h-24 
     flex justify-between items-center p-4 "
    >
      <span className="font-handwriting text-4xl text-slate-800 font-light text-left ml-28 md:text-center">
        Portifólio
      </span>

      <nav className={`${styles.menuSandwich} ${menu ? styles.show : ""}  `}
       onClick={click}
      >
        <a
          className=" text-slate-800 text-2xl  no-underline hover:underline pr-6"
          href="/"
        >
          Home
        </a>

        <a
          className="text-slate-800 text-2xl  no-underline hover:underline pr-6"
          href="#projetos"
        >
          Projetos
        </a>

        <a
          className="text-slate-800 text-2xl  no-underline hover:underline pr-6"
          href="#educacao"
        >
          Skills
        </a>

        <a
          className="text-slate-800 text-2xl  no-underline hover:underline pr-16"
          href="#contato"
        >
          Contato
        </a>
      </nav>

      {/* botao responsivo */}
   
      <div className={styles.hamburger} onClick={click}>
     
        <FaBars size={20} style={{ color: "#333" }} />
      
      </div>
    </header>
  );
}

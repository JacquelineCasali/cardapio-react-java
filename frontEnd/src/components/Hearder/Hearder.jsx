import React, { useState } from "react";
import styles from "./Hearder.module.css";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

function Hearder() {
    //mostrar ou nao menu
    const [menu, setMenu] = useState(false);
    // //  mudança de menu
    const click = () => {
      setMenu(!menu);
    };
  return (
    <header className={styles.header}>
        <span>Cardápio</span>
      

      <nav className={`${styles.menuSandwich} ${menu ? styles.show : ""} `} onClick={click} >
        <Link  className={styles.a} to="/">Home</Link>

          <Link className={styles.a} to={`/cadastro`}>
          Cadastrar</Link>
      
      </nav>

     {/* botao responsivo */}
   
     <div className={styles.hamburger} onClick={click}>
     
     <FaBars size={20} style={{ color: "black"}} />
   
   </div>

    </header>
  );
}

export default Hearder;

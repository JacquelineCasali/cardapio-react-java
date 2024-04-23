import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async"; // titulo da pagina

import "./Editar.css";
import icone from "../../assets/x.png";
import BotaoVoltar from "../Voltar/BotaoVoltar";

// estilo de alerta

export default function Editar() {
  // formatação de alerta
  const { id } = useParams();
    useEffect(() => {
   
    axios
      .get("http://localhost:8080/food/"+id)
      .then((res) => setValues(res.data))
      .catch((err) => console.log(err));
  }, []);



  const [values, setValues] = useState({
    image: "",
    title: "",
    price: "",
  });
  // navegação
  const navigate = useNavigate();
  // validação da senha
 
  const handleSubmit = async (e) => {
    // intercepitação do evento
    e.preventDefault();
   
      //   // conectar banco de dados
      axios
        .put("http://localhost:8080/food/"+ id, values)
        .then((res) => {
          console.log(res);
          navigate("/");
        })
        .catch((err) => console.log(err));
    
  };
  return (
    <div className="cadastrofood">
      <HelmetProvider>
        <Helmet title="Cadastro" />
      </HelmetProvider>

      <div className="container">
        {/* lado esquerdo site */}
       
        <div className="center">
        <BotaoVoltar/>
          <Link className="icone-x" to={"/"}>
            <img src={icone} alt="Logo" />
          </Link>

          <h1 className="titulocadastro">Cadastro cardápio </h1>

          <form  className="form"onSubmit={handleSubmit}>
            <input
              className="input"
              type="text"
              placeholder="Link da imagem "
              name="image"
              value={values.image}
              onChange={(e) => setValues({ ...values, image: e.target.value })}
            />
          
            <input
              className="input"
              type="text"
              placeholder="Titulo"
              value={values.title}
              onChange={(e) => setValues({ ...values, title: e.target.value })}
            />
            <input
              className="input"
              type="text"
              placeholder="Preço"
              value={values.price}
              onChange={(e) =>
                setValues({ ...values, price: e.target.value })
              }
            />
            <button className="btn-login-cadastro">Salvar</button>
          </form>
        </div>
        
      </div>
    </div>
  );
}

import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { Helmet, HelmetProvider } from "react-helmet-async"; // titulo da pagina

import "./Cadastro.css";
import icone from "../../assets/x.png";

// estilo de alerta
import "react-toastify/dist/ReactToastify.css";

export default function Cadastro() {
  // formatação de alerta
  const toastOptions = {
    position: "top-center",
    autoClose: 5000,
    pauseOnHover: true,
    draggable: true,
    theme: "green",
  };

  const [values, setValues] = useState({
    image: "",
    title: "",
    price: "",
  });
  // navegação
  const navigate = useNavigate();
  // validação da senha
  const handleValidation = () => {
    const { image, title, price } = values;

    if (image === "") {
      //campo nao pode ser vazio
      toast.error("Por favor, preencha com o link da Imagem", toastOptions);
      return false;
    } else if (title === "") {
      //campo nao pode ser vazio
      toast.error("Por favor, preencha seu titulo", toastOptions);
      return false;
    } else if (price === "") {
      toast.error("Por favor, preencha seu price", toastOptions);
      return false;
    }
    return true;
  };
  const handleSubmit = async (e) => {
    // intercepitação do evento
    e.preventDefault();
    if (handleValidation()) {
      //   // conectar banco de dados
      axios
        .post("http://localhost:8080/food", values)
        .then((res) => {
          console.log(res);
          navigate("/");
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div className="cadastrofood">
      <HelmetProvider>
        <Helmet title="Cadastro" />
      </HelmetProvider>

      <div className="container">
        {/* lado esquerdo site */}

        <div className="center">
          <Link className="icone-x" to={"/"}>
            <img src={icone} alt="Logo" />
          </Link>

          <h1 className="titulocadastro">Cadastro cardápio </h1>

          <form className="form" onSubmit={handleSubmit}>
            <input
              className="input"
              type="text"
              placeholder="Link da imagem "
              name="image"
              onChange={(e) => setValues({ ...values, image: e.target.value })}
            />

            <input
              className="input"
              type="text"
              placeholder="Titulo"
              onChange={(e) => setValues({ ...values, title: e.target.value })}
            />
            <input
              className="input"
              type="text"
              placeholder="Preço"
              onChange={(e) => setValues({ ...values, price: e.target.value })}
            />
            <button className="btn-login-cadastro">Cadastrar</button>
          </form>
        </div>
        <ToastContainer
          toastStyle={{ backgroundColor: "crimson", marginTop: "68px" }}
        />
      </div>
    </div>
  );
}

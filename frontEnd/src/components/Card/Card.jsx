import "./card.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import * as Icon from "react-bootstrap-icons";
export default function Card() {

   const [data, setData] = useState([]);
  useEffect(() => {
   
    axios
      .get("http://localhost:8080/food")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(data);


  const [busca, setBusca] = useState("");
  //corventendo para miniscula
  const searchLowerCase = busca.toLowerCase();
  console.log(busca);
  const nome = data.filter(
    (cliente) =>
      cliente.title.toLowerCase().includes(searchLowerCase) 
      // ||
      // cliente.email.toLowerCase().includes(searchLowerCase)
  );
  // delete
  const handleDelete = (id) => {
    axios
      .delete("http://localhost:8080/food/" + id)
      .then((res) => {
        location.reload();
      })
      .catch((err) => console.log(err));
  };




  return (
    <div className="container">
      <div className="titulo">
        {/* filtro */}
        <input
          type="texts"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          className="pesquisa"
          placeholder="Pesquise aqui"
        />

        <div className="lupa">
          <BsSearch size={30} />
        </div>

        <h2 className="h2">Cardápio</h2>
      </div>

          <div className="teste">
        <Link to={"/cadastro"}>
          <button className="button">Cadastro</button>
        </Link>
      </div>
      
      <div className="card-grid">
        {nome?.map((footdata, index) => (
        <Link  to={`/${footdata.id}`}>
       <div className="card" key={index}>
          
          
            <img src={footdata.image} />
            <h2>{footdata.title}</h2>
           
            <p>
    <b>Preço:</b> R$:{footdata.price.toFixed(2)}
                  </p> 
    
    <div className="iconetable">

    <Link to={`/${footdata.id}`}>
                        <Icon.Book
                          color="black"
                          size={30}
                          cursor="pointer"
                          className="icone"
                        />
                      </Link>

    <Link to={`/edit/${footdata.id}`}>
                        <Icon.Pencil
                          color="black"
                          size={30}
                          cursor="pointer"
                          className="icone"
                        />
                      </Link>
    <Link onClick={() => handleDelete(footdata.id)}>
                        <Icon.Trash3
                          color="black"
                          size={30}
                          cursor="pointer"
                          
                          className="icone"
                        />
                      </Link>



    </div>
               
            
          </div>
          
          </Link>
        ))}
      </div>

    
    </div>
  );
}

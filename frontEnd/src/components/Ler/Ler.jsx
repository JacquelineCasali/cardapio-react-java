import "./Ler.css";
import axios from "axios";
import React, { useEffect, useState } from "react";

import BotaoVoltar from "../Voltar/BotaoVoltar";
import { Link, useParams } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";
export default function LerCard() {

  const { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
   
    axios
      .get("http://localhost:8080/food/"+id)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(data);



  return (
    <div className="container">
      <div className="titulo">

   <h2 className="h2">Detalhe Cardápio</h2>
      </div>

  
      <div className="card-ler">
    
          <div className="card">
          
          
            <img src={data.image} />
            <h2>{data.title}</h2>
           
            <p>
    <b>Preço:</b> R$:{data.price}
                  </p> 
        

          <div className="iconetable">



<Link to={`/edit/${data.id}`}>
                    <Icon.Pencil
                      color="black"
                      size={30}
                      cursor="pointer"
                      className="icone"
                    />
                  </Link>
<Link onClick={() => handleDelete(data.id)}>
                    <Icon.Trash3
                      color="black"
                      size={30}
                      cursor="pointer"
                      
                      className="icone"
                    />
                  </Link>



</div>
</div>

      </div>




      <div className="link">
    
      <BotaoVoltar/>
      </div>

    </div>
  );
}

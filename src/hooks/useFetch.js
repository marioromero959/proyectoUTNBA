import { useEffect, useState } from "react";
import { getData2 } from "../helpers/getAPIData"

export const useFetchComentarios = (limite) =>{
    // Los hooks pueden usar otros hooks
    const [comentarios, setComentarios] = useState([]);

    const getComentarios = async () => {
    const newComentarios = await getData2(limite);
    setComentarios(newComentarios);
  };
  // el useEffect no puede ser async
  useEffect(() => {
    getComentarios();
  }, []); 

  //Unicamente ejecuta esta funcion al comienzo, cuando se renderiza el componente
    return {
        comentarios
    };

}
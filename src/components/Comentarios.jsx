import React, { useState } from 'react';
import { useFetchComentarios } from '../hooks/useFetch';

//en esta seccion llamamos a una api usando fetch
function Comentarios() {
    const { comentarios } = useFetchComentarios(10);
    return (
            <>
                <h1>Comentarios</h1>
                {
                    comentarios.map((com)=>(
                        <p key={com.id} style={{padding:'10px 120px'}}>
                            {com.body}
                        </p>
                    ))
                }
            </>        
);
}
  
  export default Comentarios;
  
import React, { useState } from 'react';

const Contacto = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };
  const setearLocalS = (e) =>{
    e.preventDefault();
    let data = { email: email, message: message };
    localStorage.setItem('data', JSON.stringify(data));
    sessionStorage.setItem('data', JSON.stringify(data));
  }

  const obtenerLocalS = () =>{
    let storedDataLocal = JSON.parse(localStorage.getItem('data'));
    let storedDataSession = JSON.parse(sessionStorage.getItem('data'));
    console.log('Mi data guardada en LS es:', storedDataLocal);
    console.log('Mi data guardada en SS es:', storedDataSession);
  }
  
  const borrarLocalS = () =>{
    localStorage.removeItem('data');
    sessionStorage.removeItem('data');
  }

  return (
    <div>
      <h2>Contacto</h2>
      <form onSubmit={setearLocalS}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <label htmlFor="textarea">Guardar Mensaje en LS:</label>
        <textarea required name="message" cols="30" rows="10" onChange={handleMessageChange}></textarea>
        <button type="submit">Enviar</button>
        <button type="button" onClick={obtenerLocalS}>Mostrar Data de LS y SS</button>
        <button type="button" onClick={borrarLocalS}>Borrar Data de LS y SS</button>
      </form>
    </div>
  );
};

export default Contacto;

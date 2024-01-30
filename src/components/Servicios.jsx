import React from 'react';

const Servicios = () => {
  // Datos de los planes de servicio
  const planes = [
    { nombre: 'Plan Básico', precio: '$9.99', beneficios: ['Función 1', 'Función 2', 'Función 3'] },
    { nombre: 'Plan Estándar', precio: '$19.99', beneficios: ['Todas las funciones del Plan Básico', 'Función 4', 'Función 5'] },
    { nombre: 'Plan Premium', precio: '$29.99', beneficios: ['Todas las funciones del Plan Estándar', 'Función 6', 'Soporte prioritario'] },
  ];
  const beneficiosGenerales = [
    'Soporte 24/7',
    'Idem Plan basico + envios gratuitos',
    'Idem Plan Estandar + descuentos exclusivos',
  ];

  return (
    <div>
      <h1>Nuestros Servicios</h1>
      <div className="planes">
        {planes.map((plan, index) => (
          <div key={index} className="card">
            <h2>{plan.nombre}</h2>
            <p>Precio: {plan.precio}</p>
          </div>
        ))}
      </div>

      <h2>Beneficios Generales</h2>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Plan</th>
          </tr>
        </thead>
        <tbody>
          {beneficiosGenerales.map((beneficio, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{beneficio}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Servicios;

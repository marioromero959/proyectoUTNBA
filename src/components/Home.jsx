// Home.jsx
import React from 'react';
import p1 from '../assets/p1.jpeg';
import p2 from '../assets/p2.jpeg';
import p3 from '../assets/p3.jpeg';
import p4 from '../assets/p4.jpeg';
import p5 from '../assets/p5.jpeg';
import p6 from '../assets/p6.jpeg';
import p7 from '../assets/p7.jpeg';
import p8 from '../assets/p8.jpeg';
import p9 from '../assets/p9.jpeg';
import p10 from '../assets/p10.jpeg';
import p11 from '../assets/p11.jpeg';
import p12 from '../assets/p12.jpeg';
import p13 from '../assets/p13.jpeg';
import p14 from '../assets/p14.jpeg';
import ProductCard from './ProductCard';
import { useState } from 'react';
import Banner from './Banner';
import Carousel from './Carousel';

const Home = () => {
  const [ productos, setProuctos ] = useState([
    {
      nombre:"Blazer Negro",
      precio:1000 ,
      descripcion:"Blazer negro clásico y elegante, perfecto para resaltar tu estilo con pureza y sofisticación.",
      img:p10,
      oferta:true
    },
    {
      nombre:"Corset Negro",
      precio:1000,
      descripcion:"Corset negro seductor y versátil que añade un toque de misterio y glamour a cualquier ocasión.",
      img:p7,
      oferta:true
    },
    {
      nombre:"Top Negro",
      precio:800,
      descripcion:"Top negro elegancia y estilo en una prenda versátil y cómoda.este top redefine tu estilo con sofisticación",
      img:p3,
      oferta:true
    }
  ])


  const [ productosMasVendidos, setProductosMasVendidos ] = useState([
    {
      nombre:"Blazer Negro",
      precio:1000 ,
      descripcion:"Blazer negro clásico y elegante, perfecto para resaltar tu estilo con pureza y sofisticación.",
      img:p10,
      oferta:true
    },
    {
      nombre:"Corset Negro",
      precio:1000,
      descripcion:"Corset negro seductor y versátil que añade un toque de misterio y glamour a cualquier ocasión.",
      img:p7,
      oferta:true
    },
    {
      nombre:"Bikini Rayas",
      precio:1000,
      descripcion:"Corset negro seductor y versátil que añade un toque de misterio y glamour a cualquier ocasión.",
      img:p4,
      oferta:false
    },
    {
      nombre:"Top Negro",
      precio:800,
      descripcion:"Top negro elegancia y estilo en una prenda versátil y cómoda.este top redefine tu estilo con sofisticación",
      img:p3,
      oferta:true
    },
    {
      nombre:"Bikini Naranja",
      precio:1000 ,
      descripcion:"Blazer negro clásico y elegante, perfecto para resaltar tu estilo con pureza y sofisticación.",
      img:p1,
      oferta:false
    },
    {
      nombre:"Corset Negro v2",
      precio:800,
      descripcion:"Top negro elegancia y estilo en una prenda versátil y cómoda.este top redefine tu estilo con sofisticación",
      img:p6,
      oferta:false
    }
  ])
  const images = [p1,p3,p4,p5,p6,p7];
  return (
    <div>
      {/* Encabezado */}
      <header>
        <h1>Bienvenido a Accesorios Velka</h1>
      </header>
      {/* Sección de productos */}
        <h2>Ofertas TOTAL BLACK</h2>
      <section className='seccion-productos'>
        {
          productos.map((producto,index)=>(
            <ProductCard producto={producto} key={index} />
          ))
        }
      </section>


        <section style={{ display:'flex',flexDirection:'column',alignItems:'center'} }>
          <Carousel images={images} autoplay={false}/>
        </section>
        <section>
          <Banner titulo={'Conocé nuestra marca'} fondo ={p12} />
        </section>


        <h2>Productos más elegidos</h2>
        <section className='seccion-productos'>
          {
          productosMasVendidos.map((producto,index)=>(
            <ProductCard producto={producto} key={index} />
          ))
        }
        </section>

        <section>
          <Banner titulo={'Bienvenida al squad de Velka'} fondo ={p7} />
        </section>

      {/* Pie de página */}
      <footer>
        <p>&copy; 2024 Accesorios Velka. Todos los derechos reservados.</p>
        {/* Puedes agregar más contenido al pie de página si es necesario */}
      </footer>
    </div>
  );
};






export default Home;

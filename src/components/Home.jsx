// Home.jsx
import React from 'react';
import ropa1Image1 from '../assets/ropa1.jpeg';
import ropa1Image2 from '../assets/ropa2.jpeg';
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
      img:'/src/assets/p10.jpeg',
      oferta:true
    },
    {
      nombre:"Corset Negro",
      precio:1000,
      descripcion:"Corset negro seductor y versátil que añade un toque de misterio y glamour a cualquier ocasión.",
      img:'src/assets/p7.jpeg',
      oferta:true
    },
    {
      nombre:"Top Negro",
      precio:800,
      descripcion:"Top negro elegancia y estilo en una prenda versátil y cómoda.este top redefine tu estilo con sofisticación",
      img:'src/assets/p3.jpeg',
      oferta:true
    }
  ])


  const [ productosMasVendidos, setProductosMasVendidos ] = useState([
    {
      nombre:"Blazer Negro",
      precio:1000 ,
      descripcion:"Blazer negro clásico y elegante, perfecto para resaltar tu estilo con pureza y sofisticación.",
      img:'/src/assets/p10.jpeg',
      oferta:true
    },
    {
      nombre:"Corset Negro",
      precio:1000,
      descripcion:"Corset negro seductor y versátil que añade un toque de misterio y glamour a cualquier ocasión.",
      img:'src/assets/p7.jpeg',
      oferta:true
    },
    {
      nombre:"Bikini Rayas",
      precio:1000,
      descripcion:"Corset negro seductor y versátil que añade un toque de misterio y glamour a cualquier ocasión.",
      img:'src/assets/p4.jpeg',
      oferta:false
    },
    {
      nombre:"Top Negro",
      precio:800,
      descripcion:"Top negro elegancia y estilo en una prenda versátil y cómoda.este top redefine tu estilo con sofisticación",
      img:'src/assets/p3.jpeg',
      oferta:true
    },
    {
      nombre:"Bikini Naranja",
      precio:1000 ,
      descripcion:"Blazer negro clásico y elegante, perfecto para resaltar tu estilo con pureza y sofisticación.",
      img:'/src/assets/p1.jpeg',
      oferta:false
    },
    {
      nombre:"Corset Negro v2",
      precio:800,
      descripcion:"Top negro elegancia y estilo en una prenda versátil y cómoda.este top redefine tu estilo con sofisticación",
      img:'src/assets/p6.jpeg',
      oferta:false
    }
  ])


  const images = ['src/assets/p1.jpeg','src/assets/p3.jpeg','src/assets/p4.jpeg','src/assets/p5.jpeg','src/assets/p6.jpeg','src/assets/p7.jpeg'];

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
          <Banner titulo={'Conocé nuestra marca'} fondo ={'src/assets/p12.jpeg'} />
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
          <Banner titulo={'Bienvenida al squad de Velka'} fondo ={'src/assets/p7.jpeg'} />
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

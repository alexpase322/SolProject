import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import foto1 from '../assets/foto1.jpg'
import foto2 from '../assets/foto2.jpg'
import foto3 from '../assets/foto3.jpg'
import foto4 from '../assets/foto4.jpg'
import foto5 from '../assets/foto5.jpg'
import foto6 from '../assets/foto6.jpeg'
import foto7 from '../assets/foto7.jpeg'
import foto8 from '../assets/foto8.jpeg'
import fotoPrincipal from '../assets/fotoPrincipal.jpeg'

const PhotoAlbum = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    {
      content: (
        <section className="flex flex-col items-center bg-purple-300 p-8 rounded-lg shadow-lg text-center">
          <h1 className="text-3xl font-bold text-purple-800 mb-4">Para el amor de mi vida 🩷</h1>
          <p className="text-lg text-purple-700 mb-8">
            Este álbum es una pequeña recopilación de los momentos que hemos pasado juntos, me siento muy feliz de tener una novia tan hermosa, maravillosa y especial, única en mi vida, con quien tengo una conexión extraordinaria, digna de un amor eterno 🩷
          </p>
          <img src={fotoPrincipal} alt="Main photo" className="w-64 h-64 rounded-full shadow-md"/>
        </section>
      ),
    },
    {
      content: (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center">
            <img src={foto1} alt="Photo 1" className="w-full h-82 object-contain rounded-lg shadow-md mb-4 transform transition duration-500 hover:scale-105"/>
            <p className="text-lg text-purple-600">Fotito en Jardín con el amor de mi vida en mis piernas</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={foto2} alt="Photo 2" className="w-full h-82 object-contain rounded-lg shadow-md mb-4 transform transition duration-500 hover:scale-105"/>
            <p className="text-lg text-purple-600">Algún día será una foto así pero tú vestida de blanco en una hermosa iglesia</p>
          </div>
        </section>
      ),
    },
    {
      content: (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center">
            <img src={foto3} alt="Photo 3" className="w-full h-82 object-contain rounded-lg shadow-md mb-4 transform transition duration-500 hover:scale-105"/>
            <p className="text-lg text-purple-600">Primera vez que te veía con vestido y supe que tengo que regalarte vestidos </p>
          </div>
          <div className="flex flex-col items-center">
            <img src={foto4} alt="Photo 4" className="w-full h-82 object-contain rounded-lg shadow-md mb-4 transform transition duration-500 hover:scale-105"/>
            <p className="text-lg text-purple-600">Abrazame y jamás me sueltes</p>
          </div>
        </section>
      ),
    },
    {
      content: (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center">
            <img src={foto5}  alt="Photo 5" className="w-full h-82 object-contain rounded-lg shadow-md mb-4 transform transition duration-500 hover:scale-105"/>
            <p className="text-lg text-purple-600">Vamos a ser los tíos millonarios con los que nuestros sobrinos van a querer ir a todos lados </p>
          </div>
          <div className="flex flex-col items-center">
            <img src={foto6} alt="Photo 6" className="w-full h-82 object-contain rounded-lg shadow-md mb-4 transform transition duration-500 hover:scale-105"/>
            <p className="text-lg text-purple-600">Amo darte besos por toda tu carita y tu cuerpo</p>
          </div>
        </section>
      ),
    },
    {
      content: (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center">
            <img src={foto7} alt="Photo 7" className="w-full h-82 object-contain rounded-lg shadow-md mb-4 transform transition duration-500 hover:scale-105"/>
            <p className="text-lg text-purple-600">Solo puedo decir que las fotos que nos tomamos ese día son mágicas </p>
          </div>
          <div className="flex flex-col items-center">
            <img src={foto8} alt="Photo 8" className="w-full h-82 object-contain rounded-lg shadow-md mb-4 transform transition duration-500 hover:scale-105"/>
            <p className="text-lg text-purple-600">La sorpresa más hermosa que me pudo hacer el amor de mi vida</p>
          </div>
        </section>
      ),
    },
    {
      content: (
        <section className="flex flex-col items-center bg-purple-300 p-8 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-bold text-purple-800 mb-4">Continuará....</h2>
          <p className="text-lg text-purple-700">
            Ayúdame a seguir llenando este álbum de muchos recuerdos que nos lleven a momentos mágicos que vivimos y viviremos por siempre, en donde se ve a dos personas enamoradas, capaces de entregarlo todo por la otra persona, en donde se prioriza un sentimiento mútuo y reciproco, AMOR 🩷
          </p>
        </section>
      ),
    },
  ];

  const goToNextPage = () => {
    if (currentPage < pages.length - 1) setCurrentPage(currentPage + 1);
  };

  const goToPreviousPage = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center font-sans" style={{ backgroundImage: "url('/path-to-album-background.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {/* Contenedor Principal */}
      <div className="w-full max-w-4xl space-y-16 py-12 bg-opacity-80 bg-white rounded-lg shadow-lg p-6">
        {/* Renderizado Dinámico de las Páginas */}
        <AnimatePresence>
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
          >
            {pages[currentPage].content}
          </motion.div>
        </AnimatePresence>

        {/* Navegación entre páginas */}
        <div className="flex justify-between w-full">
          <button 
            onClick={goToPreviousPage} 
            disabled={currentPage === 0}
            className={`px-4 py-2 bg-purple-600 text-white rounded-lg ${currentPage === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-purple-700'}`}
          >
            Atrás
          </button>

          <button 
            onClick={goToNextPage} 
            disabled={currentPage === pages.length - 1}
            className={`px-4 py-2 bg-purple-600 text-white rounded-lg ${currentPage === pages.length - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-purple-700'}`}
          >
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhotoAlbum;




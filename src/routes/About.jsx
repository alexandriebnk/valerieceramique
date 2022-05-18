import React from 'react';
import { useQuery, gql } from '@apollo/client';

const aboutQuery = gql`
  query About {
    about {
      data {
        attributes {
          copyright
        }
      }
    }
  }
`;

const About = () => {
  const { loading, error, data } = useQuery(aboutQuery);

  if (loading) {
    return <p>Loading</p>;
  }

  if (error) {
    return <p>Error</p>;
  }

  return (
    <div className='about'>
      <div className='about__biography'>
        <p className='about__biography--fr'>
          Architecte de formation, c’est après une expérience de 8 ans au sein
          d’une institution culturelle que je m’engage pleinement dans le
          travail de la terre en créant mon atelier de céramique à Paris en
          2019.
          <br /> Après 2 ans de cours de tournage à l’atelier In Girum, je
          poursuis ma formation de potière à l’école des Arts et Techniques
          Céramiques auprès de Christophe Bonnard pour y acquérir les
          connaissances nécessaires à la création des émaux. En conjuguant mes
          compétences d’architecte et mon savoir-faire d’artisane, je conçois,
          du dessin à la réalisation, des objets utilitaires dédiées à la vie
          domestique.
          <br /> Principalement façonnées au tour, ces poteries contemporaines
          sont destinées à un usage quotidien et sont entièrement faites main
          par mes soins. Dans le souci d’une fabrication responsable, elles sont
          en majorité réalisées à partir de terres locales, extraites dans des
          régions proches comme la Normandie ou la Bourgogne.
        </p>
        <p className='about__biography--en'>
          Trained as an architect, it’s after an 8-year career in a cultural
          institution that I fully engage myself working with clay by creating
          my pottery studio in Paris in 2019.
          <br /> After learning throwing at In Girum ceramic studio during 2
          years, I continue my training as a potter at the school of « Arts et
          Techniques Céramiques » with Christophe Bonnard to acquire the
          necessary knowledge for the glazes creation. I combine my
          architectural background and my craftsmanship to conceive, from design
          to production, useful objects dedicated to domestic life.
          <br /> Mostly thrown, these contemporary ceramics are intended for
          everyday use and are entirely handmade by me. For the sake of
          responsible manufacturing, they are mostly made from local clays,
          extracted in nearby regions such as Normandy or Burgundy (France).
        </p>
        <div className='about__biography--copyright'>copyright</div>
      </div>
      <div className='about__portrait'>
        <img
          src=''
          className='about__portrait--item'
          alt='portrait'
          draggable='false'
        />
      </div>
    </div>
  );
};

export default About;

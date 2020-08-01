import React from 'react';
import Menu from '../../components/Menu'
import BannerMain from '../../components/BannerMain'
import Carousel from '../../components/Carousel'
import Footer from '../../components/Footer'
import dadosIniciais from '../../data/dados_iniciais.json'

function Home() {
  return (
    <div style={{ background: "#141414" }}>
      <Menu />

        <BannerMain
          videoTitle={dadosIniciais.categorias[1].videos[0].titulo}
          url={dadosIniciais.categorias[1].videos[0].url}
          videoDescription={"Estrelas de nêutrons são uma das coisas mais extremas e violentas do universo. Núcleos atômicos gigantes, com apenas alguns quilômetros de diâmetro, mas tão massivos quanto estrelas. E eles devem sua existência à morte de algo majestoso."}
        />

        <Carousel
          category={dadosIniciais.categorias[0]}
        />

        <Carousel
          category={dadosIniciais.categorias[1]}
        />

        <Carousel
          category={dadosIniciais.categorias[2]}
        />      

        <Carousel
          category={dadosIniciais.categorias[3]}
        />      

        <Carousel
          category={dadosIniciais.categorias[4]}
        />      

        <Carousel
          category={dadosIniciais.categorias[5]}
        />      

      <Footer />
    </div>
  );
}

export default Home;

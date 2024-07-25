import Image from "next/image";
import estilos from "./page.module.css";
import Banner_Home from "/public/banner-home.png";
import Banner_Sabores from "/public/banner-sabores.jpg";
import eventos_image from "/public/eventos-image.jpg";
import sobre_image from "/public/sobre-image.jpg";

export default function Home() {
  return (
    <main className={estilos.main}>


      <section className={estilos.primeira_secao} >

        <Image className={estilos.image} src={Banner_Home} />

        <h1 className={estilos.h1} >
          SORVETE ARTESANAL
        </h1>

      </section>

      {/* segunda secao */}
      <section className={estilos.segunda_secao}>
        <Image className={estilos.segunda_secao_image} src={Banner_Sabores} />
        <div className={estilos.segunda_secao_textos} >
          <h2>
            NOSSOS SABORES
          </h2>
          <span>
            Novos e deliciosos!
          </span>

          <p>
            Sorvete bom é aquele feito com os melhores ingredientes! Aqui na gelateria todos os nossos produtos são naturais, à base de frutas e sem nenhum conservante! Também temos opções sem lactose e sem açúcar. Venha conhecer e perceber que tem como o sorvete ser delicioso e saudável ao mesmo tempo!
          </p>
        </div>
      </section>


      {/* terceira secao */}
      <section className={estilos.segunda_secao}>
        <div className={estilos.segunda_secao_textos} >
          <h2>
            NOSSOS EVENTOS
          </h2>
          <span>
            Delicias com sorvete!
          </span>

          <p>
            Mais do que uma sorveteria, uma extensão da sua casa! Estamos aqui prontinhos para te atender e oferecer os melhores eventos com os melhores sorvete da sua vida! Venha nos conhecer e passar um tempo aqui com a gente.
          </p>
        </div>
        <Image className={estilos.segunda_secao_image} src={eventos_image} />
      </section>


      {/* quarta secao */}
      <section className={estilos.segunda_secao}>

        <Image className={estilos.segunda_secao_image} src={sobre_image} />
        <div className={estilos.segunda_secao_textos} >
          <h2 >
            SOBRE NÓS
          </h2>
          <span>
            Alegria em cada casquinha!
          </span>

          <p>
            Venha tomar o melhor sorvete da região aqui com a gente! Nós estamos há anos no mercado produzindo o que tem de melhor para o 	nosso cliente e você não pode ficar fora dessa. Venha nos fazer uma visita e aproveite o melhor atendimento e o melhor sorvete da cidade.
          </p>
        </div>

      </section>
    </main>
  );
}

import estilos from "./pagina_sobre.module.css";
import Image from "next/image";
import banner_sobre from "/public/banner-sobre.png";
import sorveteria from "/public/sorveteria.jpg";
import sobre_image from "/public/sobre-image.jpg";

export default function Pagina_Sobre() {
    return (
        <section className={estilos.container} >

            <section className={estilos.primeira_secao} >
                <Image className={estilos.primeira_secao_image} src={banner_sobre} />
                <h1 className={estilos.primeira_secao_h1} >
                    A GELATERIA
                </h1>
            </section>


            <section className={estilos.segunda_secao} >
                <h2>
                    Sobre Nós
                </h2>
                <span>
                    Nós simplesmente amamos sorvete!
                </span>
                <p>
                    Somos uma empresa apaixonada pelo que faz. Colocamos amor em cada sorvete produzido. Fazemos o melhor sorvete para os nossos clientes e gostamos de receber elogios. Estamos operando desde 2009 com as melhores matérias-primas para a produção final do sorvete. Vendemos tanto para varejo como para atacado.
                </p>

                <p>
                    Nossos clientes podem comprar os nossos sorvetes e degustar na nossa loja ou levar para sua residência e aproveitar junto com a família. Também vendemos para estabelecimentos e criamos eventos como festa de aniversário, formaturas e eventos empresariais. Para contratar os nossos serviços, basta entrar em contato conosco. Iremos proporcionar o melhor atendimento e os melhores produtos para você fazer a sua festa mais saborosa, com o melhor sorvete da cidade.
                </p>
            </section>


            <section className={estilos.terceira_secao} >
                <Image className={estilos.terceira_secao_image} src={sobre_image} />
                <Image className={estilos.terceira_secao_image} src={sorveteria} />
            </section>

        </section>
    );
};
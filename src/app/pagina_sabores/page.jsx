import Image from "next/image";
import banner_sabores from "/public/banner-sabores.jpg"
import estilos from "./pagina_sabores.module.css";

import sabor_oreo from "/public/sabor-oreo.png";
import sabor_pistache from "/public/sabor-pistache.png";
import sabor_cookies_avela from "/public/sabor-cookies-avela.png";
import sabor_kiwi from "/public/sorbet-kiwi.png";
import sabor_morango from "/public/sorbet-morango.png";
import sabor_limao_siciliano from "/public/sorbet-limao.png";

export default function Pagina_Sabores() {
    return (
        <section className={estilos.container} >
            <section className={estilos.primeira_secao_container} >
                <Image className={estilos.primeira_secao_image} src={banner_sabores} />
                <h1 className={estilos.primeira_secao_h1} >
                    NOSSOS SABORES
                </h1>
            </section>

            <section className={estilos.segunda_secao_container} >
                <h2>
                    SABORES DE SORVETE
                </h2>

                <section className={estilos.segunda_secao_cards} >
                    <section className={estilos.segunda_secao_card} >
                        <Image className={estilos.segunda_secao_image} src={sabor_oreo} />
                        <h3>
                            Sorvete de Oreo
                        </h3>
                        <p>
                            Delicioso sorvete sabor Oreo. Uma explosão de sabor.
                        </p>
                    </section>

                    <section className={estilos.segunda_secao_card} >
                        <Image className={estilos.segunda_secao_image} src={sabor_pistache} />
                        <h3>
                            Sorvete de Pistache
                        </h3>
                        <p>
                            Cremoso sorvete sabor pistache com pedacinhos de semente.
                        </p>
                    </section>

                    <section className={estilos.segunda_secao_card} >
                        <Image className={estilos.segunda_secao_image} src={sabor_cookies_avela} />
                        <h3>
                            Sorvete Cookies & Avelá
                        </h3>
                        <p>
                            O nosso melhor sorvete. Você vai adorar o sabor.
                        </p>
                    </section>
                    <section className={estilos.segunda_secao_card} >
                        <Image className={estilos.segunda_secao_image} src={sabor_kiwi} />
                        <h3>
                            Sorvete de Kiwi
                        </h3>
                        <p>
                            Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.
                        </p>
                    </section>
                    <section className={estilos.segunda_secao_card} >
                        <Image className={estilos.segunda_secao_image} src={sabor_morango} />
                        <h3>
                            Sorvete de Morango
                        </h3>
                        <p>
                            Sorvete de morango gourmet. Tradicional e saboroso.
                        </p>
                    </section>
                    <section className={estilos.segunda_secao_card} >
                        <Image className={estilos.segunda_secao_image} src={sabor_limao_siciliano} />
                        <h3>
                            Sorvete de Limão Siciliano
                        </h3>
                        <p>
                            O incrivel sorvete gourmet de limão siciliano vai te encantar.
                        </p>
                    </section>
                </section>
            </section>
        </section >
    );
};
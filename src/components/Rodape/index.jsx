import Image from "next/image";
import Logo from "/public/logo.png";
import estilos from "./Rodape.module.css";

export default function Rodape() {
    return (
        <footer className={estilos.footer} >
            <section className={estilos.section} >
                <Image className={estilos.logo} src={Logo} />

                <section>
                    <h3>
                        ENDEREÇO
                    </h3>
                    <p>
                        Av.Bernadino de Campos, 98
                    </p>
                    <p>
                        São Paulo, SP 12345-678
                    </p>
                </section>

                <section>
                    <h3>
                        CONTATO
                    </h3>
                    <p>
                        info@meusite.com
                    </p>
                    <p>
                        Tel: (11) 3456-7890
                    </p>
                </section>

                <section>
                    <h3>
                        HORÁRIOS
                    </h3>
                    <p>
                        ABERTO TODOS OS DIAS
                    </p>
                    <p>
                        10:00 - 22:00
                    </p>
                </section>
            </section>

            <p className={estilos.p}>
                Gelateria. Orgulhosamente desenvolvido por Eliel Reis
            </p>
        </footer>
    );
};
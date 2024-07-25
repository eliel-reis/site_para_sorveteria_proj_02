import Image from "next/image";
import Logo from "/public/logo.png";
import Link from "next/link";
import estilos from "./Topo.module.css";

export default function Topo() {
    return (
        <header className={estilos.topo_container} >
            <div className={estilos.topo_sub_container} >
                <Image className={estilos.topo_image} src={Logo} alt="Logo Gelateria" />
                <nav className={estilos.topo_container_links} >
                    <Link className={estilos.topo_links} href="/">
                        Home
                    </Link>

                    <Link className={estilos.topo_links} href="/pagina_sabores">
                        Sabores
                    </Link>

                    <Link className={estilos.topo_links} href="/pagina_sobre">
                        Sobre
                    </Link>
                </nav>
            </div>
        </header>
    );
};
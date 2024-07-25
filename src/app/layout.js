import "./globals.css";
import Topo from "@/components/Topo";
import Rodape from "@/components/Rodape";

export const metadata = {
  title: "Gelateria",
  description: "Venha tomar o melhor sorvete da região aqui com a gente! Nós estamos há anos no mercado produzindo o que tem de melhor para o nosso cliente e você não pode ficar fora dessa."
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Topo />
        {children}
        <Rodape />
      </body>
    </html>
  );
}

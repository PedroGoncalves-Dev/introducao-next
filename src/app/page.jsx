import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className="containerGlobal">

      <h1 className={styles.h1}>Aula next js</h1>
      <h2>Exemplo h2</h2>
      <h3>exemplo h3</h3>
      <p>Texto parágrafo</p>
      <Link href='/' >Home</Link>
      <Link href='/usuarios/login' >Login</Link>
      <Link href='/usuarios/cadastro' >Cadastro</Link>
      <Link href='/sobre' >Sobre</Link>
    </div>
  );
}

import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/logo.svg"
          alt="Octobots logo"
          width={180}
          height={180}
          priority
        />
        <h1 className={styles.title}>Welcome to Octobots</h1>
        <p className={styles.description}>
          Aprende, crea y comparte proyectos de robótica con Octobots. Escuela de
          robótica para niños y adolescentes.
        </p>

        <p>Seguimos trabajando en nuestra pagina web, vuelve pronto!</p>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://www.instagram.com/octobots.lat/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/ig.svg"
            alt="Instagram icon"
            width={16}
            height={16}
          />
          Instagram
        </a>
      </footer>
    </div>
  );
}

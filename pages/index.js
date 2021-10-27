import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Equilíbrio e Correção de solo</title>
        <meta name="description" content="Aplicação para gerenciamento do equilíbrio e correção de solo." />
        <link rel="icon" href="/projeto_graos_logo.png" />
      </Head>

      <main className={styles.main}>
        <Image src="/projeto_graos_logo.png" alt="logo do projeto grãos" width={50} height={50} />
        <h1 className={styles.title}>
          Equilíbrio e correção de solo
        </h1>

        <p className={styles.description}>
          Correções e recuperações por meterial.
        </p>

        <div className={styles.grid}>
          <Link href="/Fosforo">
            <a className={styles.card}>
              <h2>Correção/Recuperação de Fósforo &rarr;</h2>
            </a>
          </Link>

          <Link href="/Potassio">
            <a className={styles.card}>
              <h2>Correção/Recuperação de Potássio &rarr;</h2>
            </a>
          </Link>

          <Link href="/Calcio_Magnesio">
            <a className={styles.card}>
              <h2>Correção/Recuperação de Cálcio e Magnésio &rarr;</h2>
            </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>
          EMATER - {new Date().getFullYear()}
          <br />
          <span className={styles.logo}>
            <Image src="/emater_logo.png" alt="Emater Logo" width={72} height={16} />
          </span>
        </p>
      </footer>
    </div>
  )
}

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Equilíbrio e Correção de solo</title>
        <meta name="description" content="Aplicação para gerenciamento do equilíbrio e correção de solo." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Equilíbrio e correção de solo
        </h1>

        <p className={styles.description}>
          Correções e recuperações por meterial.
        </p>

        <div className={styles.grid}>
          <a href="" className={styles.card}>
            <h2>Correção/Recuperação de Fósforo &rarr;</h2>
          </a>

          <a href="n" className={styles.card}>
            <h2>Correção/Recuperação de Potássio &rarr;</h2>
          </a>

          <a href="" className={styles.card}>
            <h2>Correção/Recuperação de Cálcio e Magnésio &rarr;</h2>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>EMATER - {new Date().getFullYear()}</footer>
    </div>
  )
}

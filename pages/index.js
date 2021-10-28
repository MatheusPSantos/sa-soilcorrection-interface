import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Input, InputField } from '../components/Input'
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

        <section className={styles.grid_left}>
          <div className={styles.row}>
            <InputField className="w-700">
              <label htmlFor="produtor">Produtor:</label>
              <Input
                name="produtor"
                id="produtor"
                type="text"
                onChange={() => { }}
              />
            </InputField>
            <InputField className="w-100">
              <label htmlFor="data">Data:</label>
              <Input
                name="data"
                id="data"
                type="date"
                onChange={() => { }}
              />
            </InputField>
          </div>

          <div className={styles.row}>
            <InputField className="w-500">
              <label htmlFor="municipio">Município:</label>
              <Input
                id="municipio"
                name="municipio"
                type="text"
                onChange={() => { }}
              />
            </InputField>
            <InputField className="w-100">
              <label htmlFor="lote">Lote:</label>
              <Input
                id="lote"
                name="lote"
                type="text"
                onChange={() => { }}
              />
            </InputField>
            <InputField className="w-200">
              <label htmlFor="area_total">Área Total (ha):</label>
              <Input
                id="area_total"
                name="area_total"
                type="text"
                onChange={() => { }}
              />
            </InputField>
          </div>

          <div className={styles.row}>
            <InputField className="w-100">
              <label htmlFor="talhao">Talhão:</label>
              <Input
                id="talhao"
                name="talhao"
                type="text"
                onChange={() => { }}
              />
            </InputField>
            <InputField className="w-200">
              <label htmlFor="area_talhao">Área do talhão (ha):</label>
              <Input
                id="area_talhao"
                name="area_talhao"
                type="text"
                onChange={() => { }}
              />
            </InputField>
            <InputField className="w-200">
              <label htmlFor="matricula_lote">Matrícula do lote:</label>
              <Input
                id="matricula_lote"
                name="matricula_lote"
                type="text"
                onChange={() => { }}
              />
            </InputField>
          </div>

          <div className={styles.row}>
            <InputField className="w-200">
              <label htmlFor="textura_solo">Textura do Solo:</label>
              <Input
                id="textura_solo"
                name="textura_solo"
                type="text"
                onChange={() => { }}
              />
            </InputField>
            <InputField className="w-200">
              <label htmlFor="sistema_cultivo">Sitema de cultivo:</label>
              <Input
                id="sistema_cultivo"
                name="sistema_cultivo"
                type="text"
                onChange={() => { }}
              />
            </InputField>
          </div>

          <div className={styles.row}>
            <InputField className="w-700">
              <label htmlFor="responsavel_tecnico">Responsável técnico:</label>
              <Input
                id="responsavel_tecnico"
                name="responsavel_tecnico"
                type="text"
                onChange={() => { }}
              />
            </InputField>
          </div>
          <div className={styles.row}>
            <InputField className="w-500">
              <label htmlFor="profundidade_solo">Profundidade da amostra de solos (cm):</label>
              <Input
                id="profundidade_solo"
                name="profundidade_solo"
                type="text"
                onChange={() => { }}
              />
            </InputField>
          </div>
          <div className={styles.row}>
            <InputField className="w-300">
              <label htmlFor="resultado_analise_solo">Resultado da análise de solos Nº:</label>
              <Input
                id="resultado_analise_solo"
                name="resultado_analise_solo"
                type="text"
                onChange={() => { }}
              />
            </InputField>
          </div>
        </section>

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

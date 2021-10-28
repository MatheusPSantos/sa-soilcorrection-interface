import Head from 'next/head'
import { Card } from '../../components/Card';
import { Input, InputField } from '../../components/Input';
import styles from '../../styles/Home.module.css'

export default function CalcioMagnesio() {

  const fontesDeCalcioMagnesio = [
    { "indice": 1, "fonte": "Calcário Dolomítico" },
    { "indice": 2, "fonte": "Calcário Calcítico" },
    { "indice": 3, "fonte": "Calcário de Concha" },
    { "indice": 4, "fonte": "Gesso Agrícola" },
    { "indice": 5, "fonte": "Hidróxido de cálcio" },
    { "indice": 6, "fonte": "Calcário Magnesiano" }
  ];

  return <div className={styles.container} >
    <Head>
      <title>Equilíbrio e Correção de Cálcio e Magnésio</title>
    </Head>

    <main className={styles.main}>
      <h1 className={styles.title}>
        Correção/Recuperção de Cálcio e Magnésio
      </h1>

      <section style={{ marginTop: "50px" }} className="row w-800">
        <Card className="w-350">
          <h2>Cálcio</h2>
          <div className="col w-full">
            <div>
              <InputField className="w-full">
                <label>Participação atual no CTC do solo (%): </label>
                <Input
                  id=""
                  name=""
                  type="text"
                  placeholder="0,0%"
                />
              </InputField>
            </div>
            <div className="col">
              <InputField className="w-full">
                <label>Participação ideal na CTC (%): </label>
                <Input
                  type="text"
                  placeholder="45,0% a 55,0%"
                  name=""
                  id=""
                  disabled
                />
              </InputField>
            </div>
            <div className="col">
              <InputField className="w-full">
                <label>Participação após a correção (%): </label>
                <Input
                  id=""
                  name=""
                  type="text"
                  placeholder="0,0%"
                />
              </InputField>
              <InputField className="">
                <label>Participação na CTC, desejada (%): </label>
                <Input
                  id=""
                  name=""
                  type="text"
                  placeholder="0,0%"
                />
              </InputField>
            </div>

            {/* <div className="row">
              <InputField className="">
                <label>Fonte de Potássio a utilizar: </label>
                <select
                  style={{ height: "30px" }}
                >
                  {fontesDeCalcioMagnesio.map((fonte, index) => {
                    return <option key={index}>{fonte.indice} - {fonte.fonte}</option>
                  })}
                </select>
              </InputField>
            </div> */}
          </div>
        </Card>

        <Card className="w-350">
          <h2>Magnésio</h2>
          <div className="col w-full">
            <InputField className="w-full">
              <label>Participação atual na CTC do solo (%):</label>
              <Input
                type="text"
                placeholder="0,0%"
                name=""
                id=""
              />
            </InputField>

            <InputField className="w-full">
              <label>Participação ideal na CTC do solo (%):</label>
              <Input
                type="text"
                placeholder="10% a 15%"
                name=""
                id=""
                disabled
              />
            </InputField>

            <InputField className="w-full">
              <label>Participação após correção (%):</label>
              <Input
                type="text"
                placeholder="0,0%"
                name=""
                id=""
              />
            </InputField>
          </div>
        </Card>
      </section>
    </main>
  </div>;
}
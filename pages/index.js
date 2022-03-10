import { Competitions, Navbar } from '../components';
import styles from './index.module.css'

export default function Home({ }) {
  const availableCompetitions = [
    {
      "_id": "asasdasd",
      "name": "Batalha de Universidades SP seguimos fazendo um trabalho gigante auqi com meus amigos da turma do bairro alemanha e os inrmaos koff alucinados na bahia e guanabara com seus amigos alemnhanas jfhsdjfh  se sejhjshd es jhsdjhsj e s jshajhasj sasas  saa A ASDASDS",
      "startAt": "2022-01-01T09:00:00",
      "endAt": "2022-10-08T09:00:00",
      "institutions": "FGV, Santo Agostinho, São Paulo"
    }
  ]
  const finishedCompetitions = [
    {
      "_id": "asasdasdasas",
      "name": "Essa aqui é meme",
      "startAt": "2022-01-01T09:00:00",
      "endAt": "2022-01-08T09:00:00",
      "institutions": "FGV, Santo Agostinho, São Paulo"
    },
    {
      "_id": "asasdassasasd",
      "name": "Competição RJ",
      "startAt": "2022-01-01T09:00:00",
      "endAt": "2022-01-08T09:00:00",
      "institutions": "FGV, Santo Agostinho, São Paulo"
    }
  ]
  return (
    <div className={styles.mainDiv}>
      <Navbar />
      <Competitions available={availableCompetitions} finished={finishedCompetitions} />
    </div>
  )
}
/*
export async function getServerSideProps() {
  const [availableRes, finishedRes] = await Promise.all([
    fetch(`${process.env.BACKEND_URL}/competitions?available=true`),
    fetch(`${process.env.BACKEND_URL}/competitions?available=false`)
  ]);
  const [availableCompetitions, finishedCompetitions] = await Promise.all([
    availableRes.json(),
    finishedRes.json()
  ]);

  return {
    props: {
      availableCompetitions,
      finishedCompetitions
    }
  }
}*/
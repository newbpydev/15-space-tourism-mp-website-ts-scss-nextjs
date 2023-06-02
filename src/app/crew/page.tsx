import CrewCard from "../components/cards/crew/CrewCard";
import styles from "../styles/pages/crewpage.module.scss";
import { Crew } from "../types/crew";

async function CrewPage() {
  const url = "http://localhost:3001/crew";
  const data = await fetch(url, {});
  const crewData = (await data.json()) as Crew[];

  const renderCrew = crewData.map((crew) => {
    return <CrewCard crew={crew} key={crew.name} />;
  });

  return (
    <main className={styles.main}>
      <h1>CrewPage</h1>

      {renderCrew}
    </main>
  );
}

export default CrewPage;

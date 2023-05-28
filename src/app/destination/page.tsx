import styles from "../styles/pages/destination.module.scss";
import { getDestinations } from "../lib/localdata";
import DestinationCard from "../components/cards/destination/DestinationCard";

interface Props {}

async function DestinationPage() {
  const destinations = await getDestinations();

  const renderDestination = destinations && (
    <DestinationCard destination={destinations[0]} />
  );

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        <span>01</span> Pick your destination
      </h1>

      <>{renderDestination}</>
    </main>
  );
}

export default DestinationPage;

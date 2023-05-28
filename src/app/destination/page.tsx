import styles from "../styles/pages/destination.module.scss";
import { getAllData, getDestinations } from "../lib/localdata";

interface Props {}

async function DestinationPage() {
  const destinations = await getDestinations();

  return (
    <main className={styles.main}>
      <h1>Destination!</h1>
    </main>
  );
}

export default DestinationPage;

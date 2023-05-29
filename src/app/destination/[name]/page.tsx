import styles from "../../styles/pages/destination.module.scss";
import { getDestinations } from "../../lib/localdata";
import DestinationCard from "../../components/cards/destination/DestinationCard";
import Image from "next/image";
import DestinationNavBar from "@/app/components/navbar/DestinationNavBar";

export const generateStaticParams = async () => {
  const destinations = await getDestinations();
  const destinationParams = destinations?.map((destination) => {
    return { name: destination.name };
  });
  return destinationParams;
};

const getDestination = async (name: string) => {
  const destinations = await getDestinations();
  const data = destinations?.find(
    (destination) => destination.name.toLowerCase() === name
  );
  return data;
};

async function DestinationPage({ params, searchParams }: any) {
  const destination = await getDestination(params.name);

  if (!destination) return <p>No data for {params.name}</p>;

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        <span>01</span> Pick your destination
      </h1>

      <article id={`#${destination.name}`} className={styles.card}>
        <Image
          src={destination.images.png.slice(1)}
          alt={destination.name}
          width={170}
          height={170}
        />

        <div className={styles.navContainer}>
          <DestinationNavBar />

          <header className={styles.header}>
            <h2 className={styles.headerTitle}>{destination.name}</h2>
          </header>

          <p className={styles.description}>{destination.description}</p>

          <footer className={styles.footer}>
            <p className={styles.distance}>
              Avg. Distance <span>{destination.distance}</span>
            </p>
            <p className={styles.travel}>
              Est. Travel Time <span>{destination.travel}</span>
            </p>
          </footer>
        </div>
      </article>
    </main>
  );
}

export default DestinationPage;

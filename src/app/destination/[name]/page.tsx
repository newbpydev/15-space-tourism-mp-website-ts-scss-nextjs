import styles from "../../styles/pages/destination.module.scss";
import { getDestinations } from "../../lib/localdata";
import DestinationCard from "../../components/cards/destination/DestinationCard";
// import { PageProps } from "../../../../.next/types/app/page";

interface Props {}

export const generateStaticParams = async () => {
  return [{ name: "mars" }];
};

async function DestinationPage({ params, searchParams }: any) {
  console.log(params, searchParams);
  const destinations = await getDestinations();

  const renderDestination =
    destinations &&
    destinations.map((destination) => {
      return (
        <DestinationCard key={destination.name} destination={destination} />
      );
    });

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

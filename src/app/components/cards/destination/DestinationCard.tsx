import { Destination } from "@/app/types/destination";
import React from "react";
import DestinationNavBar from "../../navbar/DestinationNavBar";
import styles from "../../../styles/components/cards/destination/DestinationCard.module.scss";

interface Props {
  destination: Destination;
}

function DestinationCard({ destination }: Props) {
  return (
    <article id={`#${destination.name}`} className={styles.card}>
      <header className={styles.header}>
        <DestinationNavBar />
        <h2 className={styles.title}>{destination.name}</h2>
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
    </article>
  );
}

export default DestinationCard;

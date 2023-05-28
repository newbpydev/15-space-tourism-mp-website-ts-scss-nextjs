import { Destination } from "@/app/types/destination";
import React from "react";
import DestinationNavBar from "../../navbar/DestinationNavBar";

interface Props {
  destination: Destination;
}

function DestinationCard({ destination }: Props) {
  return (
    <article>
      <header>
        <DestinationNavBar />
        <h2>{destination.name}</h2>
      </header>

      <p>{destination.description}</p>

      <footer>
        <p>
          Avg. Distance <span>{destination.distance}</span>
        </p>
        <p>
          Est. Travel Time <span>{destination.travel}</span>
        </p>
      </footer>
    </article>
  );
}

export default DestinationCard;

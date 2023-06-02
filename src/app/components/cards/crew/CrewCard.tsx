import { Crew } from "@/app/types/crew";
import { FunctionComponent } from "react";

interface CrewCardProps {
  crew: Crew;
}

const CrewCard: FunctionComponent<CrewCardProps> = ({ crew }) => {
  return (
    <article>
      <h2>{crew.name}</h2>
    </article>
  );
};

export default CrewCard;

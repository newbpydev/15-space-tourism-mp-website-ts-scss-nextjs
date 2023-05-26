import { GetStaticProps } from "next";
import styles from "../styles/pages/destination.module.scss";
import path from "path";

interface Props {}

function DestinationPage() {
  return (
    <main className={styles.main}>
      <h1>Destination!</h1>
    </main>
  );
}

export default DestinationPage;

export const getStaticProps: GetStaticProps = async (context) => {
  const destination = await fetch(
    path.join(__dirname, "..", "data", "data.json")
  );
  console.log(destination);
  console.log("ji");

  return {
    props: {},
  };
};

import { GetStaticProps } from "next";
import styles from "../styles/pages/destination.module.scss";
import path from "path";
import fs from "fs";

interface Props {}

async function DestinationPage() {
  const url = path.join(process.cwd(), "data/data.json");

  fs.readFile(url, "utf-8", (err, data) => {
    if (err) {
      console.error(`Error reading file from disk: ${err}`);
    } else {
      const jsonData = JSON.parse(data);
      console.log(jsonData);
    }
  });

  return (
    <main className={styles.main}>
      <h1>Destination!</h1>
    </main>
  );
}

export default DestinationPage;

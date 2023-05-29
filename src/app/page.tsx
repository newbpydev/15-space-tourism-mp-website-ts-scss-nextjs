import styles from "./styles/pages/homepage.module.scss";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className={styles.main}>
      <section>
        <h1 className={styles.title}>
          So, you want to travel to <span>Space</span>
        </h1>
        <p className={styles.description}>
          Let&apos;s face it; if you want to go to space, you might as well
          genuinely go to outer space and not hover kind of on the edge of it.
          Well sit back, and relax because we&apos;ll give you a truly out of
          this world experience!
        </p>
      </section>

      <Link href={"/destination/moon"} className={styles.exploreLink}>
        Explore
      </Link>
    </main>
  );
}

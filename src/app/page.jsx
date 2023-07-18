import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/book.jpg";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src={Hero} alt="" className={styles.img} />
      </div>
    </div>
  );
}

import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";

const Card = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <Image src="/p1.png" alt="post" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <div className={styles.detail}>
            <span className={styles.date}>11.02.2023</span>
            <span className={styles.category}>CULTURE</span>
          </div>
          <Link href="/"><h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, soluta?</h1></Link>
          <p className={styles.description}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo ipsum corporis pariatur culpa iusto quos. Eligendi a quis eaque fugiat voluptatem voluptas id ducimus suscipit ut nihil, eos, dolores eveniet!</p>
          <Link href="/" className={styles.link}>Read more</Link>
        </div>
      </div>
    </>
  );
};

export default Card;

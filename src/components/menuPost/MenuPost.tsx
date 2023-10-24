import Link from "next/link";
import Image from "next/image";
import styles from "./menupost.module.css";

const MenuPost = ({
  mostPopular = false,
  editorsPick = false,
}: {
  mostPopular?: boolean;
  editorsPick?: boolean;
}) => {
  return (
    <>
      {mostPopular && (
        <div className={styles.items}>
          <Link href="/" className={styles.item}>
            <div className={styles.textContainer}>
              <span className={`${styles.category} ${styles.travel}`}>
                Travel
              </span>
              <h3 className={styles.postTitle}>
                Lorem ipsum dolor sit amet consectetur.
              </h3>
              <div className={styles.details}>
                <span className={styles.username}>John doe</span>
                <span className={styles.date}>12.10.2023</span>
              </div>
            </div>
          </Link>
        </div>
      )}

      {editorsPick && (
        <div className={styles.items}>
          <Link href="/" className={styles.item}>
            <div className={styles.imgContainer}>
              <Image src="/p1.png" alt="" fill className={styles.image} />
            </div>
            <div className={styles.textContainer}>
              <span className={`${styles.category} ${styles.travel}`}>
                Travel
              </span>
              <h3 className={styles.postTitle}>
                Lorem ipsum dolor sit amet consectetur.
              </h3>
              <div className={styles.details}>
                <span className={styles.username}>John doe</span>
                <span className={styles.date}>12.10.2023</span>
              </div>
            </div>
          </Link>
        </div>
      )}
    </>
  );
};

export default MenuPost;

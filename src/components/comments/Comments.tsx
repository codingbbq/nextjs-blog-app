import styles from "./comments.module.css";
import Link from "next/link";
import Image from "next/image";

const Comments = () => {
  const status = "authenticated";
  return (
    <>
        <div className={styles.container}>
            <h1 className={styles.title}>Comments</h1>
            {status === 'authenticated' ? (
              <div className={styles.write}>
                <textarea placeholder="Write a comment" className={styles.input}></textarea>
                <button className={styles.button}>Send</button>
              </div>
            ) : (
              <Link href="/login">Login to write comment</Link>
            )}

            <div className={styles.comments}>
              <div className={styles.comment}>
                <div className={styles.user}>
                  <Image src="/p1.png" alt="" width={50} height={50} className={styles.image} />
                  <div className={styles.userInfo}>
                    <span className={styles.username}>John Doe</span>
                    <span className={styles.date}>10.10.2023</span>
                  </div>
                </div>
              </div>
              <p className={styles.desc}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam eius quam aut minus quia dolores sapiente in ducimus vero quo. Dolore tempore sit, ipsa soluta perspiciatis iusto esse exercitationem commodi?
              </p>
            </div>
        </div>
    </>
  )
};

export default Comments;

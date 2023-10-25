import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className={styles.container}>
        <div className={styles.info}>
          <div className={styles.logo}>
            <h1 className={styles.logoText}>codingBBQ</h1>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            aliquam alias debitis consequatur, error inventore, aut
            necessitatibus vero illum nemo facere labore eum sunt deserunt quam
            repellendus asperiores perspiciatis assumenda.
          </p>
          <div className={styles.icons}>
            <Image src="/facebook.png" alt="Facebook" width={18} height={18} />
            <Image src="/instagram.png" alt="Facebook" width={18} height={18} />
            <Image src="/tiktok.png" alt="Facebook" width={18} height={18} />
            <Image src="/youtube.png" alt="Facebook" width={18} height={18} />
          </div>
        </div>

        <div className={styles.links}>
          <div className={styles.list}>
            <span className={styles.listTitle}>Links</span>
            <Link href="/">Home</Link>
            <Link href="/">Blog</Link>
            <Link href="/">About</Link>
            <Link href="/">Contact</Link>
          </div>

          <div className={styles.list}>
            <span className={styles.listTitle}>Tags</span>
            <Link href="/">Style</Link>
            <Link href="/">Fashion</Link>
            <Link href="/">Food</Link>
            <Link href="/">Travel</Link>
            <Link href="/">Culture</Link>
            <Link href="/">Coding</Link>
          </div>

          <div className={styles.list}>
            <span className={styles.listTitle}>Social</span>
            <Link href="/">Facebook</Link>
            <Link href="/">Twitter</Link>
            <Link href="/">Instagram</Link>
            <Link href="/">Youtube</Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

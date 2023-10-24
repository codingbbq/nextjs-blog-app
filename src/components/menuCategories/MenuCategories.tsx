import styles from "./menucategories.module.css";
import Link from "next/link";

const MenuCategories = () => {
  return (
    <>
      <div className={styles.categoryList}>
        <Link
          href="/blog?cat=fashion"
          className={`${styles.categoryItem} ${styles.fashion}`}
        >
          Fashion
        </Link>

        <Link
          href="/blog?cat=style"
          className={`${styles.categoryItem} ${styles.style}`}
        >
          Style
        </Link>

        <Link
          href="/blog?cat=food"
          className={`${styles.categoryItem} ${styles.food}`}
        >
          Food
        </Link>

        <Link
          href="/blog?cat=coding"
          className={`${styles.categoryItem} ${styles.coding}`}
        >
          Coding
        </Link>
      </div>
    </>
  );
};

export default MenuCategories;

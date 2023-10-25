import CardList from "@/components/cardList/CardList";
import styles from "./blogpage.module.css";
import Menu from "@/components/menu/Menu";

const BlogPage = () => {
  return (
    <>
        <h1 className={styles.title}>Style Blog</h1>
        <div className={styles.content}>
            <CardList />
            <Menu />
        </div>
    </>
  );
};

export default BlogPage;

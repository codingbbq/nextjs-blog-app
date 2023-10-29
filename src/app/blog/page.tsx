import CardList from "@/components/cardList/CardList";
import styles from "./blogpage.module.css";
import Menu from "@/components/menu/Menu";

const BlogPage = ({ searchParams }: { searchParams : { page: string, cat: string }}) => {

  const page = searchParams.page ? parseInt(searchParams.page) : 1;
  const { cat } = searchParams || '';

  return (
    <>
        <h1 className={styles.title}>{cat} Blog</h1>
        <div className={styles.content}>
            <CardList page={page} cat={cat} />
            <Menu />
        </div>
    </>
  );
};

export default BlogPage;

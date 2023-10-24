import styles from "./menu.module.css";
import MenuPost from "../menuPost/MenuPost";
import MenuCategories from "../menuCategories/MenuCategories";

const Menu = () => {
  return (
    <>
      <div className={styles.container}>
        <>
          <h2 className={styles.subtitle}>{"What's Hot"}</h2>
          <h1 className={styles.title}>Most Popular</h1>
          <MenuPost mostPopular={true} />
        </>

        <>
          <h2 className={styles.subtitle}>Discover by topic</h2>
          <h1 className={styles.title}>Categories</h1>
          <MenuCategories />
        </>

        <>
          <h2 className={styles.subtitle}>Chosen by the Editor</h2>
          <h1 className={styles.title}>Editor's Pick</h1>
          <MenuPost editorsPick={true} />
        </>
      </div>
    </>
  );
};

export default Menu;

import { Post } from "../../../types";
import Pagination from "../pagination/Pagination";
import styles from "./cardlist.module.css";
import Card from "@/components/card/Card";

const getPostsData = async (page: number, cat: string) => {
	const res = await fetch(`http://localhost:3000/api/posts?page=${page}&cat=${cat || ''}`, {
		cache: "no-cache",
	});

	if (!res.ok) {
		throw new Error("Error in fetching categoreis list");
	}

	return res.json();
};

const CardList = async ({page, cat}: {page: number, cat: string}) => {

  const {posts, count}: { posts: Post[], count: number } = await getPostsData(page, cat);
  const POST_PER_PAGE = 2;

  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Recent Posts</h1>
        <div className={styles.posts}>
            { posts?.map((post) => (
              <Card post={post} key={post._id} />
           ))}
        </div>
        <Pagination page={page} hasNext={hasNext} hasPrev={hasPrev} />
      </div>
    </>
  );
};

export default CardList;

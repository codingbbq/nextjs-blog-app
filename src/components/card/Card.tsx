import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";
import { Post } from "../../../types";

const Card = ({ post, key }: { post: Post; key: string }) => {
	return (
		<>
			<div className={styles.container} key={key}>
				{post.image && (
					<div className={styles.imgContainer}>
						<Image
							src="/p1.png"
							alt="post"
							fill
							className={styles.image}
						/>
					</div>
				)}
				<div className={styles.textContainer}>
					<div className={styles.detail}>
						<span className={styles.date}>{post.createdAt.substring(0,10)}</span>
						<span className={styles.category}>{post.catSlug}</span>
					</div>
					<Link href={`/posts/${post.slug}`}>
						<h1>
							{post.title}
						</h1>
					</Link>
					<p className={styles.description}>
						{post.desc.substring(0, 60)}
					</p>
					<Link href={`/posts/${post.slug}`} className={styles.link}>
						Read more
					</Link>
				</div>
			</div>
		</>
	);
};

export default Card;

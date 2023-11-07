import styles from "./singlePage.module.css";
import Image from "next/image";
import Menu from "@/components/menu/Menu";
import Comments from "@/components/comments/Comments";
import { Post, User } from "../../../../types";

const getPostData = async (slug: string) => {
	const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
		cache: "no-cache",
	});

	if (!res.ok) {
		throw new Error("Error in fetching categoreis list");
	}

	return res.json();
};

const SinglePage = async ({ params }: { params: { slug: string } }) => {
	const { slug } = params;
	const data: any = await getPostData(slug);
	return (
		<>
			<div>
				<div className={styles.infoContainer}>
					<div className={styles.textContainer}>
						<h1 className={styles.title}>{data?.post?.title}</h1>
						<div className={styles.user}>
							{data?.post?.user?.image && (
								<div className={styles.userImageContainer}>
									<Image
										src={data?.post?.user?.image}
										alt=""
										fill
										className={styles.avatar}
									/>
								</div>
							)}
							<div className={styles.userTextContainer}>
								<span className={styles.username}>
									{data?.post?.user?.name}
								</span>
								<span className={styles.date}>
									{data?.post?.createdAt}
								</span>
							</div>
						</div>
					</div>
					{data?.post?.image && (
						<div className={styles.imgContainer}>
							<Image
								src={data?.post?.image}
								alt={data?.post?.title}
								fill
								className={styles.avatar}
							/>
						</div>
					)}
				</div>
				<div className={styles.content}>
					<div className={styles.post}>
						<div className={styles.description} dangerouslySetInnerHTML={{__html: data?.post?.desc}} />

						<div className={styles.comments}>
							<Comments postSlug={slug} />
						</div>
					</div>
					<Menu />
				</div>
			</div>
		</>
	);
};

export default SinglePage;

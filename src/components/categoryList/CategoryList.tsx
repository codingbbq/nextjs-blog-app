import styles from "./categorylist.module.css";
import Link from "next/link";
import Image from "next/image";
import { Category } from "../../../types";

const getCategoriesData = async () => {
	const res = await fetch("http://localhost:3000/api/categories", {
		cache: "no-cache",
	});

	if (!res.ok) {
		throw new Error("Error in fetching categoreis list");
	}

	return res.json();
};

const CategoryList = async () => {
	const data: Category[] = await getCategoriesData();
	return (
		<>
			<div className={styles.container}>
				<h1 className={styles.title}>Popular Category</h1>
				<div className={styles.categories}>
					{data.map((category) => (
						<Link
                            key={category._id}
							href={`blog?cat=${category.slug}`}
							className={`${styles.category} ${styles[category.slug]}`}
						>
							{category.image && <Image
								src={category.image}
								alt={category.title}
								width={32}
								height={32}
								className={styles.image}
							/>}
							{category.slug}
						</Link>
					))}
				</div>
			</div>
		</>
	);
};

export default CategoryList;

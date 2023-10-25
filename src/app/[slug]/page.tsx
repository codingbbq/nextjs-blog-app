import styles from "./singlePage.module.css";
import Image from "next/image";
import Menu from "@/components/menu/Menu";
import Comments from "@/components/comments/Comments";

const SinglePage = () => {
    return (
        <>
            <div>
                <div className={styles.infoContainer}>
                    <div className={styles.textContainer}>
                        <h1 className={styles.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                        <div className={styles.user}>
                            <div className={styles.userImageContainer}>
                                <Image src="/p1.png" alt="" fill className={styles.avatar} />
                            </div>
                            <div className={styles.userTextContainer}>
                                <span className={styles.username}>John Doe</span>
                                <span className={styles.date}>10.03.2023</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.imgContainer}>
                        <Image src="/p1.png" alt="" fill className={styles.image} />
                    </div>
                </div>
                <div className={styles.content}>
                    <div className={styles.post}>
                        <div className={styles.description}>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam sit corrupti ad tenetur ex. Dolorum, neque blanditiis maxime eum, quam repellat quo at adipisci dolores optio dignissimos sint eveniet praesentium.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, debitis nisi odit consequatur eligendi incidunt fugiat eaque! Iusto maiores repellat porro sed tenetur. Impedit natus tempora asperiores unde quidem illum?</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt omnis esse magni nam tempora veritatis animi vitae quis sit harum aliquid aperiam, ex sunt quam dolorem sint nisi beatae ipsum?</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam blanditiis deserunt sequi distinctio, nemo harum iure delectus voluptatibus eligendi repellat labore sint debitis autem assumenda quis. Nesciunt aut dignissimos qui.</p>
                        </div>

                        <div className={styles.comments}>
                            <Comments />
                        </div>
                    </div>
                    <Menu />
                </div>
            </div>
        </>
    )
};

export default SinglePage;
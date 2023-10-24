import styles from './featured.module.css';
import Image from 'next/image';

const Featured = () => {
    return (
        <article className={styles.container}>
            <h1 className={styles.title}>
                <b>Lorem ipsum dolor sit amet</b> consectetur adipisicing elit. Asperiores, quis!
            </h1>
            <div className={styles.post}>
                <div className={styles.imgContainer}>
                    <Image src="/p1.png" alt="" fill className={styles.image} />
                </div>
                <div className={styles.textContainer}>
                    <h1 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, reprehenderit.</h1>
                    <p className={styles.postDesc}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde voluptatibus maiores, sapiente adipisci officiis libero modi deleniti voluptatum sequi praesentium iure explicabo magni. Alias minus, quas deserunt ipsam esse dolor.
                        Corporis sed cupiditate fugit dolor est necessitatibus provident doloremque quis, accusantium qui voluptatem, vitae nostrum asperiores blanditiis assumenda sapiente nemo dignissimos doloribus veniam voluptate aut cum odio quas a. Repellat.
                    </p>
                    <button className={styles.button}>Read More</button>
                </div>
            </div>
        </article>
    )
};

export default Featured;
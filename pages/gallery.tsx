import Head from "next/head";
import Image from "next/image";
import styles from '../styles/gallery.module.css';
import { v4 as uuidv4 } from 'uuid';

export default function Gallery() {
    const imageList = [
        'IMG-20231030-WA0009.jpg',
        'IMG-20231030-WA0010.jpg',
        'IMG-20231030-WA0011.jpg',
        'IMG-20231030-WA0012.jpg',
        'IMG-20231030-WA0013.jpg',
        'IMG-20231030-WA0016.jpg',
        'IMG-20231030-WA0017.jpg',
        'IMG-20231030-WA0020.jpg',
        'IMG-20231030-WA0021.jpg',
        'IMG-20231030-WA0022.jpg',
    ]
    return (
        <>
            <Head>
                <title>Pandyaji Matrugaya | Gallery</title>
            </Head>

            <div className={styles.imageGrid}>
                {imageList.map((file) => (
                    <div className="my-4 card" key={uuidv4()}>
                        <img
                            key={file}
                            src={`/Gallery/${file}`}
                            alt={file}
                            className={styles.cardImg}
                        />
                    </div>
                ))}
            </div>
        </>
    )
}
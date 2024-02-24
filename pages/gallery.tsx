import Head from "next/head";
import Image from "next/image";
import styles from '../styles/gallery.module.css';
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from "react";

export default function Gallery() {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
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
        'WhatsApp Image 2024-02-12 at 16.54.16_3835c1f4.jpg',
        'WhatsApp Image 2024-02-12 at 16.54.16_65755292.jpg',
        'WhatsApp Image 2024-02-12 at 16.54.16_ba7fe105.jpg',
        'IMG-20240217-WA0011.jpg',
        'IMG-20240217-WA0012.jpg',
        'IMG-20240217-WA0013.jpg',
        'IMG-20240217-WA0014.jpg',
        'IMG-20240217-WA0016.jpg',
        'IMG-20240217-WA0017.jpg'
    ]
    useEffect(() => {
        const handleResize = () => {
            setWidth(0.75 * (window.innerWidth));
            setHeight(0.35 * (window.innerWidth))
        };

        // Initial call to set the initial width
        handleResize();

        // Add an event listener for window resize
        window.addEventListener('resize', handleResize);

        // Clean up the event listener when component is unmounted
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <>
            <Head>
                <title>Siddhpur Matrugaya Purohit | Gallery</title>
            </Head>
            <div className="container">
            <video src = "/video1.mp4" width={width} height={height} className={styles.video} controls />
            </div>
            <div className={styles.imageGrid}>
                {imageList.map((file) => (
                    <div className="my-4 card" key={uuidv4()}>
                        <Image
                            key={file}
                            src={`/Gallery/${file}`}
                            alt={file}
                            className={styles.cardImg}
                            height="200"
                            width="335"
                        />
                    </div>
                ))}
            </div>
        </>
    )
}
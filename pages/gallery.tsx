import Head from "next/head";
import Image from "next/image";
import styles from '../styles/gallery.module.css';
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from "react";
import axios from 'axios';

export default function Gallery() {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [imageList, setImageList] = useState([]);

    const getGoogleDriveImages = async () => {
        const folderId = process.env.FOLDERID;
        const apiKey = process.env.APIKEY;
        const qParam = encodeURIComponent(`'${folderId}' in parents`);
        const apiKeyParam = encodeURIComponent(`${apiKey}`); // not directly writing apiKey to make sure that parameter passed in the function is a string. Earlier was giving error in deployment
        const apiUrl = `https://www.googleapis.com/drive/v3/files?q=${qParam}&key=${apiKeyParam}`;

        try {
            const response = await axios.get(apiUrl);
            const imageIds = response.data.files.map(file => file.id);
            const imageUrls = imageIds.map(id => `https://drive.google.com/uc?id=${id}`);
            setImageList(imageUrls);
        } catch (error) {
            console.error('Error fetching images from Google Drive:', error);
            return [];
        }
    };

    useEffect(() => {
        getGoogleDriveImages();
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
                <video src="/video1.mp4" width={width} height={height} className={styles.video} controls />
            </div>
            <div className={styles.imageGrid}>
                {imageList && imageList.map((file) => (
                    <div className="my-4 card" key={uuidv4()}>
                        <Image
                            key={file}
                            src={file}
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
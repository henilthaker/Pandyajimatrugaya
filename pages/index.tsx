import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Carousel from 'react-material-ui-carousel';
const inter = Inter({ subsets: ['latin'] })

const carouselStyles = {
  width: '300px', // Adjust this value to set the desired width
  margin: 'auto', // Center the carousel
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Siddhpur Matrugaya Purohit | Home</title>
      </Head>
      <div className="container my-4">
        <div className={styles.titleImg}>
          {/* <Image src="/Gallery/IMG-20231103-WA0011.jpg" height="400" width="400" alt="..." className={styles.img} /> */}
          {/* <div className={styles.welcome}>Welcome to</div>
          <div className={styles.title}>Pandyaji Matrugaya</div>
          <div className={styles.subtitle}>Your one stop for complete matrugaya pooja</div> */}
          <div className="pic-ctn" style={carouselStyles}>
            <Carousel>
              <Image height="400" width="300" src="/images/bindu-sarovar.jpg" alt="" className="pic" />
              <Image height="400" width="300" src="/images/img1.jpg" alt="" className="pic" />
              <Image height="400" width="300" src="/images/img3.jpg" alt="" className="pic" />
              <Image height="400" width="300" src="/images/img4.jpg" alt="" className="pic" />
              <Image height="400" width="300" src="/images/img5.jpg" alt="" className="pic" />
            </ Carousel>
          </div>
        </div>
        <p className={styles.welcomeNote}>
          We are pleased to welcome you to our website, where you can learn more about the ancient practice of Matrugaya, performed by our knowledgeable and experienced purohit. Matrugaya is a powerful ritual that has been passed down through generations. This tarpan performed as a thanksgiving to our ancestors, especially our mother and to liberate then from the vicious circle of life and death.
        </p>
        <p className={styles.welcomeNote}>
          We are the purohit of Matrugaya Tirth Kshetra, Siddhpur and we are the gour for Bhatias, Sonis and Patels.
        </p>
      </div>
      <div className='container'>
        <h2>Our Services</h2>
        <div className={styles.ourService}>
          <div className={`card ${styles.serviceItem}`}>Matrugaya Shradh Pooja</div>
          <div className={`card ${styles.serviceItem}`}>Naraya Bali Shradh Pooja</div>
          <div className={`card ${styles.serviceItem}`}>Matru/Pitru Tarpan Shradh Pooja</div>
          <div className={`card ${styles.serviceItem}`}>Hasti Visarjan Pooja</div>
          <div className={`card ${styles.serviceItem}`}>Tirth Shradh Pooja</div>
          <div className={`card ${styles.serviceItem}`}>Dasha Ekadasha Dhvadasha Shradh Karma</div>
        </div>
      </div>
    </>
  )
}

import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Pandyaji Matrugaya | Home</title>
      </Head>
      <div className="container my-4">
        <div className={styles.titleImg}>
          <img src="/Gallery/IMG-20231103-WA0011.jpg" height="400px" alt="..." className={styles.img} />
          {/* <div className={styles.welcome}>Welcome to</div>
          <div className={styles.title}>Pandyaji Matrugaya</div>
          <div className={styles.subtitle}>Your one stop for complete matrugaya pooja</div> */}
        </div>
        <p className={styles.welcomeNote}>
          We are pleased to welcome you to our website, where you can learn more about the ancient practice of Matrugaya, performed by our knowledgeable and experienced purohit. Matrugaya is a powerful ritual that has been passed down through generations. This tarpan performed as a thanksgiving to our ancestors, especially our mother and to liberate then from the vicious circle of life and death.
        </p>
        <p className={styles.welcomeNote}>
          We are the purohit of Matrugaya Tirth Kshetra, Siddhpur and we are the gour for Bhatias, Sonis and Patels.
        </p>
      </div>
      <div className="container card">
        <h2>Importance of Matrugaya</h2>
        <p>
          We never realise the importance of a mother until she leaves for the heavenly abode.

          A life lived selflessly for her home, husband and children, a mother is worshipped by the Gods too.
          Her sacrifices are uncountable towards her children. This tarpan is a thanksgiving and liberating our ancestors and our mother from the vicious circle of life and death.
          It's said this pious place called the matru gaya tirth enables our ancestors or pitru to attain salvation (moksh).

          Hence whether you are a son or a daughter, it's our duty to help them attain liberation.

          This puja is repaying the debt of our mother. Hence the name matru gaya mentioned in the bhagwat gita too.
        </p>
      </div>
    </>
  )
}

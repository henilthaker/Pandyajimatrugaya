import Head from "next/head";
import Link from "next/link";
import styles from '../styles/contact.module.css'
import { useState } from "react";
export default function Contact() {
    const [message, setMessage] = useState('');
    const [name, setName] = useState('');

    const url = "https://wa.me/919925308771?text=" + "Name: " + name + "%0a" + "Message: " + message;

    return (
        <>
            <Head>
                <title>Pandyaji Matrugaya | Contact</title>
            </Head>
            <div className="container my-4">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58351.333799760956!2d72.35030274715746!3d23.926528451205307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395cf4fdb8907cdb%3A0xb588efce07ef80e5!2sSiddhpur%2C%20Gujarat%20384151!5e0!3m2!1sen!2sin!4v1680359405268!5m2!1sen!2sin" className={styles.map} loading={"lazy"}>
                </iframe>
                <div className={styles.contact}>
                    <table cellPadding={20} className={styles.contact_details}>
                        <tbody>
                            <tr className={styles.table_row}>
                                <td><i className="fa fa-phone fa-lg"></i></td>
                                <td>9925072800</td>
                            </tr>
                            <tr className={styles.table_row}>
                                <td><i className="fa fa-envelope"></i></td>
                                <td>jigneshpandya@gmail.com</td>
                            </tr>
                            <tr className={styles.table_row}>
                                <td><i className="fa fa-map-marker fa-lg"></i></td>
                                <td>Bindusarovar, Siddhpur, Gujarat, India</td>
                            </tr>
                        </tbody>
                    </table>

                    <div className={styles.form}>
                        <h3><b>Chat With Us</b></h3>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows={5} onChange={(e) => setMessage(e.target.value)}></textarea>
                        </div>
                        <center>
                            <button type="button" className="btn btn-primary mx-4"><Link href={url} className={styles.button}>Send Message</Link></button>
                        </center>
                    </div>
                </div>
            </div>
        </>
    )
}
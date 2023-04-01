import Head from "next/head";
import styles from '../styles/contact.module.css'
export default function Contact() {
    return (
        <>
            <Head>
                <title>Pandyaji Matrugaya | Contact</title>
            </Head>
            <div className="container my-4">
                <div className={styles.contact_details}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58351.333799760956!2d72.35030274715746!3d23.926528451205307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395cf4fdb8907cdb%3A0xb588efce07ef80e5!2sSiddhpur%2C%20Gujarat%20384151!5e0!3m2!1sen!2sin!4v1680359405268!5m2!1sen!2sin" width={450} height={450} loading={"lazy"}>
                    </iframe>
                    <div className="form">
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows={5}></textarea>
                        </div>
                        <center>
                            <button type="button" className="btn btn-primary mx-4">Send Message</button>
                        </center>

                    </div>
                </div>
            </div>
        </>
    )
}
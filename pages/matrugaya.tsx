import Head from "next/head";
import { useState, useEffect } from "react";

export default function OurServices() {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
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
                <title>Siddhpur Matrugaya Purohit | Matrugaya Details</title>
            </Head>
            <div className="card">
                <iframe width={width} height={height} src="https://www.youtube.com/embed/QZzVqedwINM?si=_KgOnwwwMQiU6uKO" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            </div>
            <div className="container my-2">
                <h2>History of Matrugaya</h2>
                <p>
                    Kapila took over management of the ashram after Sage Kardam left it to live as a hermit in Bindu Sarovar. One day, his mother Devahuti recalled that Vishnu had taken the form of Kapila in order to propagate the philosophy of Sankhya Yoga, which combines devotional service and mystical realisation. The talks Kapila gave him were to be used to convey this point. He told his kid that he was prepared and eager to learn from him and addressed him as Lord Almighty. He claimed that his involvement with his material senses had upset him, and he had turned to matrugaya for rescue.
                </p>
            </div>
            <div className="container my-4">
                <h2>Importance of Matrugaya</h2>
                <p>
                    We never realise the importance of a mother until she leaves for the heavenly abode.

                    A life lived selflessly for her home, husband and children, a mother is worshipped by the Gods too.
                    Her sacrifices are uncountable towards her children. This tarpan is a thanksgiving and liberating our ancestors and our mother from the vicious circle of life and death.
                    It&apos;s said this pious place called the matru gaya tirth enables our ancestors or pitru to attain salvation (moksh).

                    Hence whether you are a son or a daughter, it&apos;s our duty to help them attain liberation.

                    This puja is repaying the debt of our mother. Hence the name matru gaya mentioned in the bhagwat gita too.
                </p>
            </div>
            <div className="container my-4">
                <h2>Steps of Matrugaya</h2>
                <p>
                    This puja is repaying the debt of our mother. Hence the name matru gaya mentioned in the bhagwat gita too.
                    Matru shraddh is mainly performed by the eldest son of the family. The first step is to take holy bath in sacred river thus Gaya, Varanasi, Allahabad, Siddhpur, Puri, Rameswar are the main place to perform this sacred rituals. An expert purohit needs to be invited for this ritual.PindDaan is the ritual of offering sesame seeds, rice and balls made from barley flour is performed. As per the convenience yajman has to offer food, sweets- mainly khir, clothes and Dakshina to Brahmin with south side face. Dan offered to Brahmin is believed to reaches to our ancestors. After the Brahmin bhoj, food should be share with crow, cow, ants and dogs. After this offer food and clothes to needy people known as Maha Dakshina should be performed.
                </p>
            </div>
            <div className="container  my-4">
                <h2>Benefits of Matrugaya</h2>
                <ol>
                    <li>The descendants receive blessings from their ancestors.</li>
                    <li>This rituals helps in removing or reducing the effect of Pitru Dosha if any.</li>
                    <li>It is believed that after performing this ritual, ancestors will bring good fortune and positive energies to their descendants.</li>
                    <li>This ritual helps in an individual&apos;s spiritual progress.</li>
                </ol>
            </div>
        </>
    )
}
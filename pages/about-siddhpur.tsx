import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
export default function Contact() {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    useEffect(() => {
        const handleResize = () => {
          setWidth(0.75*(window.innerWidth));
          setHeight(0.35*(window.innerWidth))
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
                <title>Siddhpur Matrugaya Purohit | About Siddhpur</title>
            </Head>
            <div className="card">
                <Image src="/images/rudra_mahalay.jpg" alt="rudra mahalay" height={height} width={width} />
            </div>
            <div className="container my-2">
                <p>
                    It is a revered location situated alongside the holy lake Bindu Sarovara and the Vedic river Saraswathi. It is a holy location where Sage Kardhama received the divine vision of Lord Vishnu after performing tremendous penance there for 10,000 years.
                </p>
                <p>
                    Sage Kardhama, also known as Kardhama Prajapathi, and his wife Devahuti spent several years there and engaged in penance. It is a sacred location.
                </p>
                <p>
                    It is a place of reverence where Sage Sri Kapilaacharya, also known as Kapila Bhagavantha, was born to the Divine parents Sage Kardhama Prajapathi and Devahuti as a philosophical incarnation of Lord Vishnu.
                </p>
                <p>
                    The originator and exponent of Saankhya Philosophy, Sri Kapila Bhagavantha, preached Divine Knowledge to his Mother Devahuti in this honourable location.
                    Devahuti obtained Siddhi and salvation at this Holy location, and as a result, the area became known as Siddhipada, which later became known as Siddhpur.
                </p>
                <p>
                    The powerful avathara of Lord Vishnu, Lord Sri Parashurama, is claimed to have done sacred ceremonies to his Mother there as well. Given all the sanctity connected to the Divine Mother, Mathru Gaya, the Siddhi Kshetra, or the spot that bestowed siddhi and salvation (Moksha) upon a Mother, became a well-known name for the location.
                    So, there is a great deal of significance in executing sacred rituals at this location dedicated solely to a Mother. It is one of the holiest locations for Hindus to visit in North Gujarat.
                </p>
            </div>
        </>
    )
}
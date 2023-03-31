import Head from "next/head";
import Image from "next/image";
export default function Gallery() {
    return (
        <>
            <Head>
                <title>Pandyaji Matrugaya | Gallery</title>
            </Head>
            <div className="container">
                <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="2000">
                            <Image src="/images/img1.jpeg" className="d-block w-100" alt="..." width="100" height="275" />
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <Image src="/images/img2.jpeg" className="d-block w-100" alt="..." width="100" height="275" />
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <Image src="/images/img3.jpeg" className="d-block w-100" alt="..." width="100" height="275" />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </>
    )
}
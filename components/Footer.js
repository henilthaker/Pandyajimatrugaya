import Link from 'next/link';
const Footer = () => {
    return (
        // <div className="container" data-bs-theme="dark">
        //     <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5">
        //         <div className="col mb-3">
        //             <Link href="/" className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
        //                 Pandyaji Matrugaya
        //             </Link>
        //             <p className="text-body-secondary">© 2023</p>
        //         </div>

        //         {/* <div className="col mb-3">

        //         </div> */}

        //         <div className="col mb-3">
        //             <h5>Quick Links</h5>
        //             <ul className="nav flex-column">
        //                 <li className="nav-item mb-2"><Link href="/" className="nav-link p-0 text-body-secondary">Home</Link></li>
        //                 <li className="nav-item mb-2"><Link href="/gallery" className="nav-link p-0 text-body-secondary">Gallery</Link></li>
        //                 <li className="nav-item mb-2"><Link href="/matrugaya" className="nav-link p-0 text-body-secondary">Matrugaya</Link></li>
        //                 <li className="nav-item mb-2"><Link href="/about-siddhpur" className="nav-link p-0 text-body-secondary">About Siddhpur</Link></li>
        //                 <li className="nav-item mb-2"><Link href="/our-services" className="nav-link p-0 text-body-secondary">Our Services</Link></li>
        //                 <li className="nav-item mb-2"><Link href="/contact" className="nav-link p-0 text-body-secondary">Contact</Link></li>
        //             </ul>
        //         </div>

        //         <div className="col mb-3">
        //             <h5>Contact Details</h5>
        //             {/* <ul className="nav flex-column">
        //                 <li className="nav-item mb-2">Phone: 9925072800</li>
        //                 <li className="nav-item mb-2">Email: jigneshpandya@gmail.com</li>
        //                 <li className="nav-item mb-2">Address: Bindusarovar, Siddhpur, Gujarat, India</li>
        //             </ul> */}
        //             <table cellPadding={10}>
        //                 <tbody>
        //                     <tr>
        //                         <td><i className="fa fa-phone fa-lg"></i></td>
        //                         <td>9925072800</td>
        //                     </tr>
        //                     <tr>
        //                         <td><i className="fa fa-envelope"></i></td>
        //                         <td>jigneshpandya@gmail.com</td>
        //                     </tr>
        //                     <tr>
        //                         <td><i className="fa fa-map-marker fa-lg"></i></td>
        //                         <td>Bindusarovar, Siddhpur, Gujarat, India</td>
        //                     </tr>
        //                 </tbody>
        //             </table>
        //         </div>
        //     </footer>
        // </div>
            <footer className="py-3 my-4 my-footer" data-bs-theme="dark">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item"><Link href="/" className="nav-link px-2 text-body-secondary">Home</Link></li>
                    <li className="nav-item"><Link href="/gallery" className="nav-link px-2 text-body-secondary">Gallery</Link></li>
                    <li className="nav-item"><Link href="/matrugaya" className="nav-link px-2 text-body-secondary">Matrugaya</Link></li>
                    <li className="nav-item"><Link href="/about-siddhpur" className="nav-link px-2 text-body-secondary">About Siddhpur</Link></li>
                    <li className="nav-item"><Link href="/contact" className="nav-link px-2 text-body-secondary">Contact</Link></li>
                </ul>
                <p className="text-center text-body-secondary">© 2023 Pandyaji Matrugaya</p>
            </footer>
    );
}
export default Footer;
import Link from 'next/link';
const Footer = () => {
    return (
        <div className="container">
            <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
                <div className="col mb-3">
                    <Link href="/" className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
                        Pandyaji Matrugaya
                    </Link>
                    <p className="text-body-secondary">© 2023</p>
                </div>

                <div className="col mb-3">

                </div>

                <div className="col mb-3">
                    <h5>Quick Links</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><Link href="/" className="nav-link p-0 text-body-secondary">Home</Link></li>
                        <li className="nav-item mb-2"><Link href="/gallery" className="nav-link p-0 text-body-secondary">Gallery</Link></li>
                        <li className="nav-item mb-2"><Link href="/our-services" className="nav-link p-0 text-body-secondary">Our Services</Link></li>
                        <li className="nav-item mb-2"><Link href="/contact" className="nav-link p-0 text-body-secondary">Contact</Link></li>
                    </ul>
                </div>

                <div className="col mb-3">
                    <h5>Contact Details</h5>
                    {/* <ul className="nav flex-column">
                        <li className="nav-item mb-2">Phone: 9925072800</li>
                        <li className="nav-item mb-2">Email: jigneshpandya@gmail.com</li>
                        <li className="nav-item mb-2">Address: Bindusarovar, Siddhpur, Gujarat, India</li>
                    </ul> */}
                    <table cellPadding={10}>
                        <tr>
                            <td>Phone:</td>
                            <td>9925072800</td>
                        </tr>
                        <tr>
                            <td>Email:</td>
                            <td>jigneshpandya@gmail.com</td>
                        </tr>
                        <tr>
                            <td>Address:</td>
                            <td>Bindusarovar, Siddhpur, Gujarat, India</td>
                        </tr>
                    </table>
                </div>
            </footer>
        </div>
    );
}
export default Footer;
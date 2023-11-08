import Link from 'next/link';
const Footer = () => {
    return (
        <footer className="py-3 my-4 my-footer" data-bs-theme="dark">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                <li className="nav-item"><Link href="/" className="nav-link px-2 text-body-secondary">Home</Link></li>
                <li className="nav-item"><Link href="/gallery" className="nav-link px-2 text-body-secondary">Gallery</Link></li>
                <li className="nav-item"><Link href="/matrugaya" className="nav-link px-2 text-body-secondary">Matrugaya</Link></li>
                <li className="nav-item"><Link href="/about-siddhpur" className="nav-link px-2 text-body-secondary">About Siddhpur</Link></li>
                <li className="nav-item"><Link href="/contact" className="nav-link px-2 text-body-secondary">Contact</Link></li>
            </ul>
            <ul className="contact-list nav justify-content-center border-bottom pb-3 mb-3">
                <li className="nav-item text-body-secondary px-2"><i className="fa fa-phone fa-lg mx-2"></i>9925072800</li>
                <li className="nav-item text-body-secondary px-2"><i className="fa fa-envelope mx-2"></i>jigneshpandya@gmail.com</li>
                <li className="nav-item text-body-secondary px-2"><i className="fa fa-map-marker fa-lg mx-2"></i>Bindusarovar, Siddhpur, Gujarat, India</li>

            </ul>
            <p className="text-center text-body-secondary">© 2023 Pandyaji Matrugaya</p>
        </footer>
    );
}
export default Footer;
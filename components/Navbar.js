import Link from 'next/link';
const Navbar = () => {
    return (
        <div className="container">
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                    <span className="fs-4">Pandyaji Matrugaya</span>
                </a>

                <ul className="nav nav-pills">
                    <li className="nav-item"><Link href="/" className="nav-link active" aria-current="page">Home</Link></li>
                    <li className="nav-item"><Link href="/gallery" className="nav-link">Gallery</Link></li>
                    <li className="nav-item"><Link href="/our-services" className="nav-link">Our Services</Link></li>
                    <li className="nav-item"><Link href="/contact" className="nav-link">Contact</Link></li>

                </ul>
            </header>
        </div>
    )
}
export default Navbar;
import Link from 'next/link';
import Image from 'next/image';
const Navbar = () => {
    return (

        <nav className="navbar navbar-expand-lg bg-body-tertiary px-4" data-bs-theme="dark">
            <div className="container-fluid">
                <Link className="navbar-brand" href="/"><Image src="/finalLogo.png" height="50" width="220"/></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" href="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/gallery">Gallery</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/matrugaya">Matrugaya</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/about-siddhpur">About Siddhpur</Link>
                        </li>
                        {/* <li className="nav-item">
                                <Link className="nav-link" href="/our-services">Our Services</Link>
                            </li> */}
                        <li className="nav-item">
                            <Link className="nav-link" href="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}
export default Navbar;
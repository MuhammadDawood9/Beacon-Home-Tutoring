import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, MapPin, Mail, Facebook, Instagram, ChevronDown } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';
import Newsletter from './Newsletter';
import Schema from './Schema';

const NavDropdown = ({ title, children }) => (
    <div className="relative group">
        <button className="flex items-center gap-1 font-semibold text-brand-blue hover:text-brand-gold transition py-4">
            {title} <ChevronDown className="w-4 h-4" />
        </button>
        <div className="absolute top-full left-0 bg-white shadow-xl rounded-b-lg py-2 min-w-[240px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 border-t-4 border-brand-gold z-50">
            {children}
        </div>
    </div>
);

const DropdownLink = ({ to, children }) => (
    <Link to={to} className="block px-4 py-2 text-sm text-gray-700 hover:bg-brand-blue hover:text-white transition">
        {children}
    </Link>
);

const Layout = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <div className="flex flex-col min-h-screen font-sans text-gray-900">
            <Schema type="LocalBusiness" />
            <WhatsAppButton />

            {/* Top Bar - Contact Info (Desktop) */}
            <div className="bg-brand-blue text-white py-2 text-sm hidden md:block">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <div className="flex gap-6">
                        <a href="tel:+923281446886" className="flex items-center gap-2 hover:text-brand-gold transition">
                            <Phone className="w-4 h-4" /> +92 328 1446886
                        </a>
                        <a href="mailto:beaconhometutoringacademy001@gmail.com" className="flex items-center gap-2 hover:text-brand-gold transition">
                            <Mail className="w-4 h-4" /> beaconhometutoringacademy001@gmail.com
                        </a>
                    </div>
                    <div className="flex gap-4">
                        <a href="https://www.facebook.com/profile.php?id=61574996775655" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-brand-gold"><Facebook className="w-4 h-4" /></a>
                        <a href="https://www.instagram.com/beaconhometutoringacademy?igsh=MWtjamR6c2E5bDg3&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-brand-gold"><Instagram className="w-4 h-4" /></a>
                    </div>
                </div>
            </div>

            {/* Navbar */}
            <header className="sticky top-0 z-50 bg-white shadow-md">
                <div className="container mx-auto px-4 flex justify-between items-center relative">
                    {/* Logo */}
                    <Link to="/" aria-label="Home" className="flex items-center gap-2 py-4">
                        <img src="/logo.png" alt="Beacon Academy Logo" width="64" height="64" className="h-12 w-auto md:h-16" />
                        <span className="text-xl md:text-2xl font-bold font-serif text-brand-blue hidden sm:block">Beacon Academy</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex gap-6 items-center">
                        <Link to="/" className="font-semibold text-brand-blue hover:text-brand-gold transition">Home</Link>

                        <NavDropdown title="About Beacon">
                            <DropdownLink to="/about">About Us</DropdownLink>
                            <DropdownLink to="/why-beacon">Why Beacon</DropdownLink>
                            <DropdownLink to="/join-team">Become a Tutor</DropdownLink>
                        </NavDropdown>

                        <NavDropdown title="Tutoring Services">
                            <DropdownLink to="/services/o-level">O-Level / IGCSE</DropdownLink>
                            <DropdownLink to="/services/a-level">A-Level</DropdownLink>
                            <DropdownLink to="/services/ib-program">IB Program (PYP/MYP/DP)</DropdownLink>
                            <DropdownLink to="/services/matric-fsc">Matric & FSc</DropdownLink>
                            <DropdownLink to="/services/montessori">Montessori & Junior Grades</DropdownLink>
                            <DropdownLink to="/services/spoken-english">Spoken English & IELTS</DropdownLink>
                        </NavDropdown>

                        <NavDropdown title="Curriculums">
                            <DropdownLink to="/services/cambridge-system">Cambridge System</DropdownLink>
                            <DropdownLink to="/services/oxford-curriculum">Oxford Curriculum</DropdownLink>
                        </NavDropdown>

                        <Link to="/blog" className="font-semibold text-brand-blue hover:text-brand-gold transition">Blog</Link>
                        <Link to="/faq" className="font-semibold text-brand-blue hover:text-brand-gold transition">FAQ</Link>

                        <Link to="/contact" className="ml-4 bg-brand-gold text-brand-blue px-6 py-2.5 rounded-full font-bold hover:bg-opacity-90 transition shadow-sm">
                            Contact Us
                        </Link>
                    </nav>

                    {/* Mobile Menu Button - Keeping it visible on md/sm */}
                    <button
                        className="lg:hidden text-brand-blue focus:outline-none"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                    </button>
                </div>

                {/* Mobile Navigation Dropdown */}
                {isMenuOpen && (
                    <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl h-[80vh] overflow-y-auto">
                        <nav className="flex flex-col p-4 gap-4 font-semibold text-brand-blue">
                            <Link to="/" onClick={toggleMenu} className="hover:text-brand-gold">Home</Link>

                            <div className="flex flex-col gap-2">
                                <span className="text-gray-400 text-xs uppercase tracking-wider font-bold">About</span>
                                <Link to="/about" onClick={toggleMenu} className="pl-4 border-l-2 border-gray-100 hover:border-brand-gold transition">About Us</Link>
                                <Link to="/join-team" onClick={toggleMenu} className="pl-4 border-l-2 border-gray-100 hover:border-brand-gold transition">Become a Tutor</Link>
                            </div>

                            <div className="flex flex-col gap-2">
                                <span className="text-gray-400 text-xs uppercase tracking-wider font-bold">Tutoring Services</span>
                                <Link to="/services/o-level" onClick={toggleMenu} className="pl-4 border-l-2 border-gray-100 hover:border-brand-gold transition">O-Level / IGCSE</Link>
                                <Link to="/services/a-level" onClick={toggleMenu} className="pl-4 border-l-2 border-gray-100 hover:border-brand-gold transition">A-Level</Link>
                                <Link to="/services/ib-program" onClick={toggleMenu} className="pl-4 border-l-2 border-gray-100 hover:border-brand-gold transition">IB Program</Link>
                                <Link to="/services/matric-fsc" onClick={toggleMenu} className="pl-4 border-l-2 border-gray-100 hover:border-brand-gold transition">Matric & FSc</Link>
                                <Link to="/services/montessori" onClick={toggleMenu} className="pl-4 border-l-2 border-gray-100 hover:border-brand-gold transition">Montessori</Link>
                                <Link to="/services/spoken-english" onClick={toggleMenu} className="pl-4 border-l-2 border-gray-100 hover:border-brand-gold transition">Spoken English</Link>
                            </div>

                            <div className="flex flex-col gap-2">
                                <span className="text-gray-400 text-xs uppercase tracking-wider font-bold">Curriculums</span>
                                <Link to="/services/cambridge-system" onClick={toggleMenu} className="pl-4 border-l-2 border-gray-100 hover:border-brand-gold transition">Cambridge System</Link>
                                <Link to="/services/oxford-curriculum" onClick={toggleMenu} className="pl-4 border-l-2 border-gray-100 hover:border-brand-gold transition">Oxford Curriculum</Link>
                            </div>

                            <div className="border-t border-gray-100 pt-4 flex flex-col gap-4">
                                <Link to="/blog" onClick={toggleMenu} className="hover:text-brand-gold">Blog</Link>
                                <Link to="/faq" onClick={toggleMenu} className="hover:text-brand-gold">FAQ</Link>
                                <Link to="/contact" onClick={toggleMenu} className="bg-brand-gold text-brand-blue px-4 py-3 rounded-lg text-center font-bold shadow-sm">
                                    Contact Us
                                </Link>
                            </div>
                        </nav>
                    </div>
                )}
            </header>

            {/* Main Content */}
            <main className="flex-grow">
                {children}
            </main>

            {/* Footer */}
            <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
                <div className="container mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

                    {/* Column 1: About */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">Beacon Academy</h3>
                        <p className="mb-4 text-sm leading-relaxed">
                            Providing premium home and online tutoring services in Lahore for over 15 years.
                            We connect students with the most qualified educators to achieve academic excellence.
                        </p>
                        <div className="flex gap-4 mt-6">
                            <a href="https://www.facebook.com/profile.php?id=61574996775655" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="bg-gray-800 p-2 rounded-full hover:bg-brand-blue hover:text-white transition">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="https://www.instagram.com/beaconhometutoringacademy?igsh=MWtjamR6c2E5bDg3&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="bg-gray-800 p-2 rounded-full hover:bg-brand-blue hover:text-white transition">
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/services/o-level" className="hover:text-brand-gold">O-Level Tutors</Link></li>
                            <li><Link to="/services/a-level" className="hover:text-brand-gold">A-Level Tutors</Link></li>
                            <li><Link to="/services/ib-program" className="hover:text-brand-gold">IB Program</Link></li>
                            <li><Link to="/blog" className="hover:text-brand-gold">Education Blog</Link></li>
                            <li><Link to="/faq" className="hover:text-brand-gold">FAQ</Link></li>
                            <li><Link to="/join-team" className="hover:text-brand-gold">Become a Tutor</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Contact (SEO Critical) */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
                        <address className="not-italic space-y-3 text-sm">
                            <div className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-brand-gold mt-1" />
                                <p>Muhafiz town Near EME Society , Lahore, Pakistan</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-brand-gold" />
                                <p><a href="tel:+923281446886" className="hover:text-brand-gold">+92 328 1446886</a></p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-brand-gold" />
                                <p><a href="mailto:beaconhometutoringacademy001@gmail.com" className="hover:text-brand-gold">beaconhometutoringacademy001@gmail.com</a></p>
                            </div>
                        </address>

                    </div>

                    {/* Column 4: Newsletter */}
                    <Newsletter />
                </div>

                {/* Copyright */}
                <div className="container mx-auto px-4 border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Beacon Home Tutoring Academy. All rights reserved.</p>
                </div>
            </footer>
        </div >
    );
};

export default Layout;

import React, { useState } from 'react';
import { Menu, X, Phone, MapPin, Mail, Facebook, Instagram, ChevronDown } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';
import Newsletter from './Newsletter';
import Schema from './Schema';

const Layout = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

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

    const DropdownLink = ({ href, children }) => (
        <a href={href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-brand-blue hover:text-white transition">
            {children}
        </a>
    );

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
                    <a href="/" aria-label="Home" className="flex items-center gap-2 py-4">
                        <img src="/logo.png" alt="Beacon Academy Logo" width="64" height="64" className="h-12 w-auto md:h-16" />
                        <span className="text-xl md:text-2xl font-bold font-serif text-brand-blue hidden sm:block">Beacon Academy</span>
                    </a>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex gap-6 items-center">
                        <a href="/" className="font-semibold text-brand-blue hover:text-brand-gold transition">Home</a>

                        <NavDropdown title="About Beacon">
                            <DropdownLink href="/about">About Us</DropdownLink>
                            <DropdownLink href="/why-beacon">Why Beacon</DropdownLink>
                            <DropdownLink href="/join-team">Become a Tutor</DropdownLink>
                        </NavDropdown>

                        <NavDropdown title="Tutoring Services">
                            <DropdownLink href="/services/o-level">O-Level / IGCSE</DropdownLink>
                            <DropdownLink href="/services/a-level">A-Level</DropdownLink>
                            <DropdownLink href="/services/ib-program">IB Program (PYP/MYP/DP)</DropdownLink>
                            <DropdownLink href="/services/matric-fsc">Matric & FSc</DropdownLink>
                            <DropdownLink href="/services/montessori">Montessori & Junior Grades</DropdownLink>
                            <DropdownLink href="/services/spoken-english">Spoken English & IELTS</DropdownLink>
                        </NavDropdown>

                        <NavDropdown title="Curriculums">
                            <DropdownLink href="/services/cambridge-system">Cambridge System</DropdownLink>
                            <DropdownLink href="/services/oxford-curriculum">Oxford Curriculum</DropdownLink>
                        </NavDropdown>

                        <a href="/blog" className="font-semibold text-brand-blue hover:text-brand-gold transition">Blog</a>
                        <a href="/faq" className="font-semibold text-brand-blue hover:text-brand-gold transition">FAQ</a>

                        <a href="/contact" className="ml-4 bg-brand-gold text-brand-blue px-6 py-2.5 rounded-full font-bold hover:bg-opacity-90 transition shadow-sm">
                            Contact Us
                        </a>
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
                            <a href="/" onClick={toggleMenu} className="hover:text-brand-gold">Home</a>

                            <div className="flex flex-col gap-2">
                                <span className="text-gray-400 text-xs uppercase tracking-wider font-bold">About</span>
                                <a href="/#about" onClick={toggleMenu} className="pl-4 border-l-2 border-gray-100 hover:border-brand-gold transition">About Us</a>
                                <a href="/join-team" onClick={toggleMenu} className="pl-4 border-l-2 border-gray-100 hover:border-brand-gold transition">Become a Tutor</a>
                            </div>

                            <div className="flex flex-col gap-2">
                                <span className="text-gray-400 text-xs uppercase tracking-wider font-bold">Tutoring Services</span>
                                <a href="/services/o-level" onClick={toggleMenu} className="pl-4 border-l-2 border-gray-100 hover:border-brand-gold transition">O-Level / IGCSE</a>
                                <a href="/services/a-level" onClick={toggleMenu} className="pl-4 border-l-2 border-gray-100 hover:border-brand-gold transition">A-Level</a>
                                <a href="/services/ib-program" onClick={toggleMenu} className="pl-4 border-l-2 border-gray-100 hover:border-brand-gold transition">IB Program</a>
                                <a href="/services/matric-fsc" onClick={toggleMenu} className="pl-4 border-l-2 border-gray-100 hover:border-brand-gold transition">Matric & FSc</a>
                                <a href="/services/montessori" onClick={toggleMenu} className="pl-4 border-l-2 border-gray-100 hover:border-brand-gold transition">Montessori</a>
                                <a href="/services/spoken-english" onClick={toggleMenu} className="pl-4 border-l-2 border-gray-100 hover:border-brand-gold transition">Spoken English</a>
                            </div>

                            <div className="flex flex-col gap-2">
                                <span className="text-gray-400 text-xs uppercase tracking-wider font-bold">Curriculums</span>
                                <a href="/services/cambridge-system" onClick={toggleMenu} className="pl-4 border-l-2 border-gray-100 hover:border-brand-gold transition">Cambridge System</a>
                                <a href="/services/oxford-curriculum" onClick={toggleMenu} className="pl-4 border-l-2 border-gray-100 hover:border-brand-gold transition">Oxford Curriculum</a>
                            </div>

                            <div className="border-t border-gray-100 pt-4 flex flex-col gap-4">
                                <a href="/blog" onClick={toggleMenu} className="hover:text-brand-gold">Blog</a>
                                <a href="/faq" onClick={toggleMenu} className="hover:text-brand-gold">FAQ</a>
                                <a href="/contact" onClick={toggleMenu} className="bg-brand-gold text-brand-blue px-4 py-3 rounded-lg text-center font-bold shadow-sm">
                                    Contact Us
                                </a>
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
                            <li><a href="/services/o-level-tutors" className="hover:text-brand-gold">O-Level Tutors</a></li>
                            <li><a href="/services/a-level-tutors" className="hover:text-brand-gold">A-Level Tutors</a></li>
                            <li><a href="/services/ib-program" className="hover:text-brand-gold">IB Program</a></li>
                            <li><a href="/blog" className="hover:text-brand-gold">Education Blog</a></li>
                            <li><a href="/faq" className="hover:text-brand-gold">FAQ</a></li>
                            <li><a href="/join-team" className="hover:text-brand-gold">Become a Tutor</a></li>
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

import React, { useState } from 'react';
import SEO from '../components/SEO';
import FindTutorForm from '../components/FindTutorForm';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
    return (
        <>
            <SEO
                title="Contact Us | Hire a Tutor in Lahore | Beacon Academy"
                description="Contact Beacon Home Tutoring Academy to hire a tutor or apply as a tutor. Call 0328 1446886 for immediate assistance."
            />

            <div className="bg-brand-blue text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
                    <p className="text-xl text-gray-200">Get in touch for the best home tutoring services in Lahore</p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16">
                <div className="grid lg:grid-cols-2 gap-12 items-start">

                    {/* Left: Contact Info */}
                    <div>
                        <h2 className="text-3xl font-bold text-brand-blue mb-8">We'd Love to Hear From You</h2>
                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="bg-brand-gold bg-opacity-10 p-4 rounded-full">
                                    <Phone className="w-6 h-6 text-brand-blue" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-gray-900">Phone & WhatsApp</h3>
                                    <p className="text-gray-600 mb-1">Available 24/7</p>
                                    <a href="tel:+923281446886" className="text-brand-blue font-bold text-xl hover:underline">+92 328 1446886</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-brand-gold bg-opacity-10 p-4 rounded-full">
                                    <Mail className="w-6 h-6 text-brand-blue" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-gray-900">Email Address</h3>
                                    <p className="text-gray-600 mb-1">For general inquiries</p>
                                    <a href="mailto:beaconhometutoringacademy001@gmail.com" className="text-brand-blue font-bold text-xl hover:underline">beaconhometutoringacademy001@gmail.com</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-brand-gold bg-opacity-10 p-4 rounded-full">
                                    <MapPin className="w-6 h-6 text-brand-blue" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-gray-900">Office Address</h3>
                                    <p className="text-gray-600">Muhafiz town Near EME Society , Lahore, Pakistan</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 p-6 bg-gray-50 rounded-xl border border-gray-100">
                            <h3 className="font-bold text-xl text-brand-blue mb-2">Are you a Tutor?</h3>
                            <p className="text-gray-600 mb-4">Join our network of professional educators.</p>
                            <a href="/join-team" className="text-brand-blue font-bold hover:underline flex items-center gap-1">
                                Apply as a Tutor &rarr;
                            </a>
                        </div>
                    </div>

                    {/* Right: Lead Form */}
                    <div id="book-demo">
                        <FindTutorForm />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;

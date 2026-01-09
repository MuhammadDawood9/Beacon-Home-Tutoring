import React from 'react';
import SEO from '../components/SEO';
import { CheckCircle, ArrowRight, Shield } from 'lucide-react';

const About = () => {
    return (
        <>
            <SEO
                title="About Us | Beacon Home Tutoring Academy"
                description="Learn about Beacon Home Tutoring Academy's mission to provide exceptional home and online tutoring in Lahore. Trusted by families for over 15 years."
                url={window.location.href}
            />

            {/* Hero Section */}
            <div className="relative bg-brand-blue text-white py-24">
                <div className="absolute inset-0 bg-black/40 z-10"></div>
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')" }}
                ></div>
                <div className="container mx-auto px-4 relative z-20">
                    <p className="text-sm uppercase tracking-wide opacity-80 mb-2">Home &gt; About Us</p>
                    <h1 className="text-4xl md:text-5xl font-bold">About Us</h1>
                </div>
            </div>

            {/* Intro Section - Trusted Home Tuition */}
            <section className="py-20 bg-white overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Image Collage */}
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                                alt="Student learning"
                                className="rounded-lg shadow-xl w-3/4 relative z-10"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                                alt="Child reading"
                                className="absolute -bottom-10 -right-4 w-2/3 rounded-lg shadow-xl border-8 border-white z-20"
                            />
                            <div className="absolute top-10 -left-10 w-24 h-24 bg-brand-gold/20 rounded-full z-0"></div>
                            <div className="absolute bottom-10 right-20 w-32 h-32 bg-brand-blue/10 rounded-full z-0"></div>
                        </div>

                        {/* Content */}
                        <div>
                            <span className="text-brand-gold font-bold uppercase tracking-wider text-sm mb-2 block">About Us</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Trusted Home Tuition in Lahore for Every Student</h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                <span className="font-bold text-gray-900">Beacon Home Tutoring Academy</span> connects you with the best home tuition in Lahore. We help students learn effectively through personalized support. In the first session, our team assesses exactly what your child needs to make learning easy.
                            </p>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                We have served families for 15+ years. We provide specialized home tuition in Lahore right at your kitchen table. From DHA and Bahria to Johar Town, our home tuition in Lahore service covers every major area.
                            </p>

                            <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500 mb-8 flex items-start gap-4">
                                <div className="bg-orange-500 p-2 rounded-full text-white mt-1">
                                    <Shield className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Looking for a reliable tutor?</h4>
                                    <p className="text-sm text-gray-600">We'll match you with the best home tutor in your area.</p>
                                </div>
                            </div>

                            <a href="/contact" className="inline-flex items-center gap-2 bg-brand-gold text-brand-blue px-8 py-4 rounded-lg font-bold hover:bg-opacity-90 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                                Get a Home Tutor - Chat Now <ArrowRight className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-20 bg-gray-50 border-y border-gray-100">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-12">
                        {/* Feat 1 */}
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 border-b-2 border-brand-gold inline-block pb-2">Exceptional Instruction</h3>
                            <p className="text-sm text-gray-600 mb-6">We deliver one-on-one home tutoring in Lahore tailored to your child's pace and learning goals.</p>
                            <ul className="space-y-3">
                                {['Individual learning support', 'Qualified tutors with proven results', 'Flexible tutoring hours available', 'Affordable options for every household'].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                                        <CheckCircle className="w-4 h-4 text-brand-blue flex-shrink-0 mt-1" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* Feat 2 */}
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 border-b-2 border-brand-gold inline-block pb-2">Real Innovations</h3>
                            <p className="text-sm text-gray-600 mb-6">We provide long-term academic guidance that ensures lasting results and learning continuity.</p>
                            <ul className="space-y-3">
                                {['Unlimited access to learning material', 'Ongoing academic monitoring', 'Goal-based academic tracking', 'Affordable rates for every budget'].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                                        <CheckCircle className="w-4 h-4 text-brand-blue flex-shrink-0 mt-1" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* Feat 3 */}
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 border-b-2 border-brand-gold inline-block pb-2">Lifetime Access</h3>
                            <p className="text-sm text-gray-600 mb-6">Our resources and services are designed to provide long-term support to our clients.</p>
                            <ul className="space-y-3">
                                {['Lifetime access to our resources', 'Ongoing support and guidance', 'Reach their desired level of success', 'Affordable rates that fit any budget'].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                                        <CheckCircle className="w-4 h-4 text-brand-blue flex-shrink-0 mt-1" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="relative py-24 bg-gray-900">
                <div
                    className="absolute inset-0 bg-cover bg-fixed bg-center opacity-30"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')" }}
                ></div>

                <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center">
                    <div className="bg-white p-10 md:p-12 rounded-lg shadow-2xl max-w-xl">
                        <span className="text-brand-blue font-bold uppercase tracking-wider text-xs mb-2 block">Discover Mission</span>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Our Platform is Better</h2>

                        <h4 className="font-bold text-gray-800 mb-2">Our Mission</h4>
                        <p className="text-gray-600 text-sm leading-relaxed mb-8">
                            Our goal is to give your child individualized tutoring services that help them reach their academic goals. We think that every child should have a chance to do well, and we are committed to helping your child reach his or her full potential through effective and interesting teaching.
                        </p>

                        <a href="/join-team" className="inline-block bg-brand-blue text-white px-6 py-3 rounded font-bold hover:bg-brand-gold hover:text-brand-blue transition">
                            Learn More
                        </a>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <span className="text-brand-gold font-bold uppercase tracking-wider text-sm mb-2 block">Testimonials</span>
                    <h2 className="text-3xl font-bold text-gray-900 mb-16">What Students Say</h2>

                    <div className="grid md:grid-cols-3 gap-8 text-left">
                        {/* Left Card */}
                        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 flex flex-col items-center text-center">
                            <p className="text-gray-600 text-sm italic mb-6">"International Baccalaureate tutoring by Beacon has made my time a lot easier. It has been only one month since delivering the grade and I'm really happy."</p>
                            <div className="w-16 h-16 rounded-full bg-gray-200 mb-4 overflow-hidden">
                                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Kashif" />
                            </div>
                            <h5 className="font-bold text-gray-900">Kashif</h5>
                        </div>

                        {/* Center Card (Dark) */}
                        <div className="bg-brand-blue text-white p-8 rounded-xl shadow-2xl transform md:-translate-y-4 flex flex-col items-center text-center relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-2 bg-brand-gold"></div>
                            <h4 className="font-bold text-lg mb-4">Waqas</h4>
                            <p className="text-blue-100 text-sm italic mb-6">"Life is difficult for students who came for IB. As the IB curriculum advanced and the English language became a challenge, Beacon tutors changed everything for me."</p>
                            <div className="w-20 h-20 rounded-full border-4 border-brand-gold mb-4 overflow-hidden">
                                <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="Waqas" />
                            </div>
                            <span className="text-brand-gold text-xs uppercase tracking-wide font-bold">Student</span>
                        </div>

                        {/* Right Card */}
                        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 flex flex-col items-center text-center">
                            <p className="text-gray-600 text-sm italic mb-6">"My daughter is an IB student and I wanted to find someone who could guide her through the process of application. Beacon's experience was amazing!"</p>
                            <div className="w-16 h-16 rounded-full bg-gray-200 mb-4 overflow-hidden">
                                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Muskan" />
                            </div>
                            <h5 className="font-bold text-gray-900">Muskan</h5>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;

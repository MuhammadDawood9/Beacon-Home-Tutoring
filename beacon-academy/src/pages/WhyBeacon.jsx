import React from 'react';
import SEO from '../components/SEO';
import Schema from '../components/Schema';
import StatsCounter from '../components/StatsCounter';
import { homeStats } from '../data/stats.jsx';
import { Layers } from 'lucide-react';

const WhyBeacon = () => {
    const schemaData = {
        name: "Why Choose Beacon | Premium Home Tutoring in Lahore",
        description: "Discover why Beacon Home Tutoring Academy is the top choice for parents in Lahore. Expert instructors, personalized learning, and proven results.",
        url: "https://beacon.academy/why-beacon",
        logo: "https://beacon.academy/logo.png",
        parentOrganization: {
            "@type": "Organization",
            name: "Beacon Academy",
            url: "https://beacon.academy",
            logo: "https://beacon.academy/logo.png"
        }
    };

    return (
        <>
            <Schema type="WebPage" data={schemaData} />
            <SEO
                title="Why Choose Beacon | Premium Home Tutoring in Lahore"
                description="Discover why Beacon Home Tutoring Academy is the top choice for parents in Lahore. Expert instructors, personalized learning, and proven results."
                url="https://beacon.academy/why-beacon"
            />

            {/* Hero Section */}
            <div className="relative bg-brand-blue text-white py-24">
                <div className="absolute inset-0 bg-black/40 z-10"></div>
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')" }}
                ></div>
                <div className="container mx-auto px-4 relative z-20">
                    <p className="text-sm uppercase tracking-wide opacity-80 mb-2">Home &gt; Why Beacon</p>
                    <h1 className="text-4xl md:text-5xl font-bold">Why Beacon</h1>
                </div>
            </div>

            {/* What We Can Do Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        {/* Left Image */}
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                                alt="Group tutoring session"
                                className="rounded px-4"
                            />
                        </div>

                        {/* Right Content */}
                        <div>
                            <span className="text-brand-gold font-bold uppercase tracking-wider text-xs mb-2 block">WHY</span>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Beacon Home Tutor</h2>

                            <h4 className="font-bold text-gray-800 text-sm mb-2">What We Can Do</h4>
                            <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                At Beacon Home Tutor, we offer trusted home tutors in Lahore for students of all ages. Whether your child needs help with schoolwork or subject basics, we can assist. We also support test preparation for better results. Our expert tutors cover a range of subjects, including English, science, math, and more. Each session is held at home to keep learning simple and effective. Families choose us because we make education clear, personal, and result-driven.
                            </p>

                            <h4 className="font-bold text-gray-800 text-sm mb-2">Why Pick Us?</h4>
                            <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                We match your child with a qualified home tutor who focuses on their academic progress and development. From basic subjects to exam-level goals, we guide each student with care and attention. We also offer flexible tutoring services and budget-friendly plans. Many parents trust us when looking for a female home tutor in Lahore. They rely on our team for consistent support and precise results. Your child's success is always our mission.
                            </p>

                            <h4 className="font-bold text-gray-800 text-sm mb-2">Our Values</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Our goal is to build honest and respectful learning. At Beacon Home Tutor, we focus on personalized help, academic support, and discipline. Every student gets full attention from experienced tutors. We believe in learning that fits your child's pace. With our in-home tutors, students feel more confident and stay on track. We treat every family with care and professionalism.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Bar */}
            <StatsCounter stats={homeStats} />

            {/* Split Feature Section */}
            <section className="flex flex-col md:flex-row h-auto md:h-[600px]">
                {/* Left Content */}
                <div className="w-full md:w-1/2 bg-gray-50 flex items-center p-8 md:p-20 order-2 md:order-1">
                    <div className="max-w-xl">
                        {/* Item 1 */}
                        <div className="flex gap-6 mb-12">
                            <div className="flex-shrink-0 w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-lg">
                                01
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-3">Empower Your Child's Success with Personalized Beacon Home Tutoring</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    At Beacon Home Tutor, every child can grow with the proper support. Our home tutoring services in Lahore are tailored to each student's pace and needs. We guide students in core subjects and exam prep to help them learn with confidence. Our trusted team ensures consistent progress through one-on-one sessions at home. Join us to unlock your child's academic potential.
                                </p>
                            </div>
                        </div>

                        {/* Item 2 */}
                        <div className="flex gap-6">
                            <div className="flex-shrink-0 w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-lg">
                                02
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-3">Cultivating Cultural Diversity for a Global Learning Experience</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    We know that learning goes beyond books. That's why Beacon Home Tutor builds a kind and welcoming space for every child. Our home tutors understand that every child is different. They teach in simple ways that match each student's learning style. This approach improves understanding and promotes confidence. A caring tutor helps your child learn at home. We focus on school success and personal growth together.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Image */}
                <div
                    className="w-full md:w-1/2 bg-cover bg-center h-[400px] md:h-full order-1 md:order-2"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1427504746696-ea5abc71b997?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80')" }}
                ></div>
            </section>

            {/* Partners Section */}
            <section className="bg-brand-blue py-20 text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-white mb-16">Our Company & Partners</h2>

                    {/* Partner Placeholders (Styled as text/icons since we don't have exact logos) */}
                    <div className="flex flex-wrap justify-center gap-12 items-center opacity-70">
                        <div className="text-white font-serif font-bold text-2xl flex items-center gap-2"><Layers className="w-8 h-8" /> ROOTS</div>
                        <div className="text-white font-sans font-bold text-3xl tracking-tighter">TNS</div>
                        <div className="text-white font-serif italic text-2xl">Beaconhouse</div>
                        <div className="text-white font-mono font-bold text-2xl border-2 border-white p-2">LGS</div>
                        <div className="text-white font-cursive text-3xl">Kids Kampus</div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default WhyBeacon;

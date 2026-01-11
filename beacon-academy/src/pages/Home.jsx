import React from 'react';
import SEO from '../components/SEO';
import GrowthOfferSection from '../components/GrowthOfferSection';
import StatsCounter from '../components/StatsCounter';
import AboutSection from '../components/AboutSection';
import SubjectSpotlight from '../components/SubjectSpotlight';
import { getBaseUrl } from '../utils/url';
import { ArrowRight, BookOpen, GraduationCap, Users, ClipboardList, UserCheck, CalendarCheck, ShieldCheck, RefreshCw, Award, Wallet } from 'lucide-react';
import { homeStats } from '../data/stats'; // Import the stats

const Home = () => {
    const baseUrl = getBaseUrl();
    return (
        <>
            <SEO
                title="Home Tutors in Lahore | Beacon Home Tutoring Academy"
                description="Get qualified home and online tutors in Lahore for O-Levels, A-Levels, IB, and Montessori. 15+ years of experience. Hire a tutor today."
                url={baseUrl}
                keywords="Home Tutors in Lahore, Home Tuition Lahore, O Level Tutors, A Level Tutors, Online Tutors Pakistan"
            />

            {/* Hero Section */}
            <section className="relative text-white py-24 md:py-32 overflow-hidden">
                {/* Background Image & Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=60&w=1200&auto=format&fit=crop"
                        srcSet="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=60&w=600&auto=format&fit=crop 600w, 
                                https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=60&w=1200&auto=format&fit=crop 1200w"
                        alt="Expert home tutor helping student in Lahore"
                        className="w-full h-full object-cover"
                        loading="eager"
                        fetchPriority="high"
                    />
                    <div className="absolute inset-0 bg-brand-blue opacity-90"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl">
                        <div>
                            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                                Expert Home Tutors in <span className="text-brand-gold">Lahore</span>
                            </h1>
                        </div>

                        <p
                            className="text-xl mb-8 text-gray-100"
                        >
                            Unlock your child's potential with Lahore's most trusted tutoring network.
                            Specializing in O/A Levels, IB, and Montessori education.
                        </p>

                        <div
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <a href="/contact" className="bg-brand-gold text-brand-blue font-bold py-4 px-8 rounded-lg hover:bg-white transition text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                                Hire a Tutor
                            </a>
                            <a href="#services-grid" className="border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-brand-blue transition text-center">
                                Explore Subjects
                            </a>
                        </div>
                    </div>
                </div>
            </section>



            {/* About Section */}
            <AboutSection />

            {/* Subject Spotlight */}
            <SubjectSpotlight />

            {/* Services Grid */}
            <section id="services-grid" className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">Our Tutoring Services</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            We provide specialized tutoring for all major academic boards and levels.
                            Select a category to find the perfect tutor.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {['O-Level', 'A-Level', 'Cambridge System', 'Oxford Curriculum', 'IB Program', 'Montessori', 'Matric & FSc', 'Spoken English'].map((service, index) => (
                            <a
                                key={service}
                                href={`/services/${service.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                                className="block bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition">
                                    <BookOpen className="w-24 h-24 text-brand-blue" />
                                </div>
                                <h3 className="text-2xl font-bold mb-3 text-brand-blue group-hover:text-brand-gold transition-colors relative z-10">
                                    {service}
                                </h3>
                                <p className="text-gray-600 mb-6 relative z-10">
                                    Professional home and online tutors available for {service} curriculum.
                                    Personalized attention for maximum results.
                                </p>
                                <div className="flex items-center text-brand-blue font-semibold group-hover:text-brand-gold transition-colors relative z-10">
                                    Find Tutors <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            <GrowthOfferSection />


            {/* Animated Stats Section */}
            <StatsCounter stats={homeStats} />

            {/* How It Works Section */}
            <section className="py-20 bg-white border-t border-b">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">Simple 3-Step Hiring Process</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Hiring a qualified tutor has never been easier.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 text-center max-w-6xl mx-auto">
                        {/* Step 1 */}
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 bg-brand-gold/10 rounded-full flex items-center justify-center mb-6 text-brand-blue">
                                <ClipboardList className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-brand-blue mb-3">1. Share Your Requirements</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Fill out our form or message us on WhatsApp. Tell us your location (e.g., DHA, Johar Town), the subject, and the grade level you need help with.
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 bg-brand-gold/10 rounded-full flex items-center justify-center mb-6 text-brand-blue">

                                <UserCheck className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-brand-blue mb-3">2. We Match You with an Expert</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Our team analyzes your needs and selects the perfect tutor from our network of 500+ qualified professionals. We verify their experience and background for your safety.
                            </p>
                        </div>

                        {/* Step 3 */}
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 bg-brand-gold/10 rounded-full flex items-center justify-center mb-6 text-brand-blue">
                                <CalendarCheck className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-brand-blue mb-3">3. Interview & Start Learning</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Have a brief discussion with the tutor to ensure they are the right fit. Once satisfied, set your schedule and begin your home tuition immediately.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Why Choose Us Section */}
            <section className="py-20 bg-gray-50 border-b">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">Why Choose Beacon Home Tutoring?</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            We go the extra mile to ensure your child gets the best education possible.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Feature 1 */}
                        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition text-center border border-gray-100">
                            <div className="w-14 h-14 bg-brand-blue/5 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-blue">
                                <ShieldCheck className="w-8 h-8" />
                            </div>
                            <h3 className="text-lg font-bold text-brand-blue mb-3">Verified Home Tutors</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Every tutor undergoes a strict background check and qualification verification (CNIC & Degree check) before joining our team.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition text-center border border-gray-100">
                            <div className="w-14 h-14 bg-brand-blue/5 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-blue">
                                <RefreshCw className="w-8 h-8" />
                            </div>
                            <h3 className="text-lg font-bold text-brand-blue mb-3">Guaranteed Replacement</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Not satisfied with the trial? We provide a free replacement within 24 hours—no questions asked.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition text-center border border-gray-100">
                            <div className="w-14 h-14 bg-brand-blue/5 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-blue">
                                <Award className="w-8 h-8" />
                            </div>
                            <h3 className="text-lg font-bold text-brand-blue mb-3">Exam-Focused Results</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                We don't just teach; we prepare for exams. Our focus is on Past Papers (D-Series/Redspot) to ensure A* grades in O/A Levels.
                            </p>
                        </div>

                        {/* Feature 4 */}
                        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition text-center border border-gray-100">
                            <div className="w-14 h-14 bg-brand-blue/5 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-blue">
                                <Wallet className="w-8 h-8" />
                            </div>
                            <h3 className="text-lg font-bold text-brand-blue mb-3">Affordable Tuition Rates</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Premium home tutoring at competitive market rates in Lahore. No hidden registration fees or commission.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;

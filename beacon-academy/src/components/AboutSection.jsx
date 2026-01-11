import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const AboutSection = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
                    {/* Image Column */}
                    <div className="w-full md:w-1/2 relative">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop"
                                alt="Professional home tutor teaching student in Lahore"
                                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-brand-blue/10"></div>
                        </div>
                        {/* Decorative Element */}
                        <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-brand-gold/20 rounded-full blur-2xl -z-10"></div>
                        <div className="absolute -top-6 -left-6 w-32 h-32 bg-brand-blue/20 rounded-full blur-2xl -z-10"></div>
                    </div>

                    {/* Text Column */}
                    <div className="w-full md:w-1/2">
                        <div className="inline-block px-4 py-1.5 bg-brand-blue/10 text-brand-blue font-bold rounded-full text-sm mb-6">
                            ABOUT BEACON HOME ACADEMY
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            Providing Excellence in <span className="text-brand-blue">Home Tutoring</span>
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            Beacon Home Tutoring Academy is Lahore's premier network of professional home tutors.
                            We bridge the gap between struggling students and academic success by providing
                            personalized coaching in the comfort of your home. We serve <span className="font-semibold">whole Lahore including Bahria Town, DHA, and Johar Town</span>.
                        </p>

                        <div className="space-y-4 mb-8">
                            {[
                                "Experienced & Verified Tutors",
                                "Customized Learning Plans",
                                "Consistent Weekly Assessments",
                                "Proven Track Record of A* Grades"
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <CheckCircle className="w-6 h-6 text-brand-gold flex-shrink-0" />
                                    <span className="text-gray-700 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>

                        <Link
                            to="/contact"
                            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-brand-blue rounded-lg hover:bg-brand-gold hover:shadow-lg hover:-translate-y-1"
                        >
                            Get Started Today
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;

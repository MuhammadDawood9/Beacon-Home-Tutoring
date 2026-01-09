import React from 'react';
import SEO from '../components/SEO';
import TutorApplicationForm from '../components/TutorApplicationForm';
import { CheckCircle } from 'lucide-react';

const JoinTeam = () => {
    return (
        <>
            <SEO
                title="Jobs for Home Tutors in Lahore | Apply Online"
                description="Join Beacon Academy as a home tutor. We are looking for qualified teachers for O-Level, A-Level, and Montessori. Apply now."
            />

            <div className="bg-gray-50 py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center mb-12">
                        <h1 className="text-4xl font-bold text-brand-blue mb-4">Join Our Tutoring Network</h1>
                        <p className="text-xl text-gray-600">
                            Earn respect and a handsome income by teaching students in your area.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Benefits */}
                        <div>
                            <h2 className="text-2xl font-bold text-brand-blue mb-6">Why Join Beacon Academy?</h2>
                            <div className="space-y-6">
                                {[
                                    { title: "High Paying Jobs", desc: "Get connected with premium clients who value quality education." },
                                    { title: "Flexible Schedule", desc: "Choose assignments that fit your timetable and location preferences." },
                                    { title: "Professional Growth", desc: "Access to training resources and certification opportunities." },
                                    { title: "Reliable Support", desc: "Our team handles client management so you can focus on teaching." }
                                ].map((benefit, index) => (
                                    <div key={index} className="flex gap-4">
                                        <div className="mt-1">
                                            <CheckCircle className="w-6 h-6 text-brand-gold" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg text-gray-900">{benefit.title}</h3>
                                            <p className="text-gray-600">{benefit.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12">
                                <h3 className="font-bold text-gray-900 mb-4">Looking for a tutor instead?</h3>
                                <a href="/contact" className="inline-block bg-white border-2 border-brand-blue text-brand-blue font-bold py-3 px-6 rounded-lg hover:bg-brand-blue hover:text-white transition">
                                    Hire a Tutor
                                </a>
                            </div>
                        </div>

                        {/* Application Form */}
                        <div>
                            <TutorApplicationForm />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default JoinTeam;

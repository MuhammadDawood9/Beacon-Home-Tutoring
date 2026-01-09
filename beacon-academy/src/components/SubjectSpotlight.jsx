import React from 'react';
import { Calculator, BookType, Atom } from 'lucide-react';

const SubjectCard = ({ icon, title, description, colorClass }) => (
    <div className={`${colorClass} rounded-2xl p-8 text-center text-white shadow-lg transform hover:-translate-y-1 transition-transform duration-300`}>
        <div className="flex justify-center mb-6">
            <div className="border-4 border-black/20 rounded-xl p-3">
                {icon}
            </div>
        </div>
        <h3 className="text-xl font-bold mb-4 uppercase tracking-wide">{title}</h3>
        <p className="text-white/90 text-sm leading-relaxed">
            {description}
        </p>
    </div>
);

const SubjectSpotlight = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                        Expert Home Tutors in Lahore for <span className="text-brand-blue">Every Subject</span>
                    </h2>
                    <h3 className="text-xl font-semibold text-gray-700 mb-8">
                        Helping Students Learn Better with the Right Tutor at Home
                    </h3>

                    <div className="space-y-4 text-gray-600 leading-relaxed">
                        <p>
                            At Beacon Home Academy, we believe every child deserves focused support. We provide our services in
                            <span className="font-semibold text-brand-blue"> whole Lahore, Bahria Town, DHA, Johar Town</span> and every part of Lahore.
                            Our tutors focus on each child's unique learning style and their respective school level.
                        </p>
                        <p>
                            We specialize in <span className="font-semibold text-brand-blue">at-home tutoring services</span> designed to build confidence and clarity.
                            Our expert tutors help students in Maths, English, and Science, guiding them step by step.
                            From homework help to exam preparation, we make learning more structured and stress-free.
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <SubjectCard
                        icon={<Calculator className="w-12 h-12 text-black" />}
                        title="MATHS"
                        description="Build confidence in maths with help from a trusted home tutor. We guide students through clear, step-by-step lessons. From basic operations to complex questions, our tutors help improve skills and scores."
                        colorClass="bg-[#00bfa5]" // Green matching image
                    />
                    <SubjectCard
                        icon={<BookType className="w-12 h-12 text-black" />}
                        title="ENGLISH"
                        description="A female home tutor in Lahore helps your child with grammar, reading, and writing. Each lesson is tailored to the school level and supports learning clearly at home in Lahore."
                        colorClass="bg-[#ff1744]" // Red/Pink matching image
                    />
                    <SubjectCard
                        icon={<Atom className="w-12 h-12 text-black" />}
                        title="SCIENCE"
                        description="Explore science topics with the help of top home tutors near you. Our tutors explain complex ideas in simple terms, using real-life examples. From chemistry to physics, students gain clarity and better results."
                        colorClass="bg-[#ff9100]" // Orange matching image
                    />
                </div>
            </div>
        </section>
    );
};

export default SubjectSpotlight;

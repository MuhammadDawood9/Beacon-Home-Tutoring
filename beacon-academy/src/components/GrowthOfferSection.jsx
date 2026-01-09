import React from 'react';
import { BookOpen, Target, Wallet } from 'lucide-react';

const GrowthOfferSection = () => {
    const features = [
        {
            icon: <BookOpen className="w-8 h-8 text-brand-blue" />,
            title: "One-on-One Learning",
            description: "We analyze your child's strengths and weaknesses and create a customized learning plan.",
            borderColor: "border-brand-blue"
        },
        {
            icon: <Target className="w-8 h-8 text-brand-gold" />,
            title: "Flexible Schedule",
            description: "We know each child learns differently. To accommodate your kid, we offer flexible scheduling. We're available 24/7.",
            borderColor: "border-brand-gold"
        },
        {
            icon: <Wallet className="w-8 h-8 text-brand-gold" />, // Using Wallet for affordable prices
            title: "Affordable Prices",
            description: "We offer top-notch education at affordable prices. Our upfront price ensures you receive the best value.",
            borderColor: "border-brand-gold"
        }
    ];

    return (
        <section className="relative mb-24">
            {/* Top Background Section */}
            <div className="relative h-[600px] w-full overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1200&auto=format&fit=crop"
                    alt="Student receiving personalized home tutoring in Lahore"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Blue Overlay */}
                <div className="absolute inset-0 bg-brand-blue/90" />

                {/* Content Overlay */}
                <div className="absolute inset-0 z-10 container mx-auto px-4 pt-20 text-center text-white">
                    <p className="text-sm font-bold tracking-widest uppercase mb-4 opacity-90">MAKE CONNECTIONS</p>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">What We Offer For Growth</h2>
                    <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-200 leading-relaxed">
                        We provide individualized, one-on-one tutoring services that are suited to your child's
                        requirements and schedule at LGS Home Tutor. Our professional tutors offer academic
                        support and coaching to help your kid reach their full potential.
                    </p>
                </div>
            </div>

            {/* Overlapping Cards Container */}
            <div className="container mx-auto px-4 relative z-20 -mt-64">
                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg p-10 text-center shadow-xl hover:shadow-2xl transition-shadow duration-300"
                        >
                            <div className={`w-24 h-24 mx-auto mb-8 rounded-full border-2 border-dashed ${feature.borderColor} flex items-center justify-center`}>
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-brand-blue mb-4">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GrowthOfferSection;

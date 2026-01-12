import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { homeStats } from '../data/stats.jsx'; // Import default stats

const StatItem = ({ icon, target, label, isLast }) => {
    const [count, setCount] = useState(0);
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    useEffect(() => {
        if (!inView) return;

        let startTimestamp = null;
        const duration = 2000;

        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(easeOutQuart * target));

            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };

        window.requestAnimationFrame(step);
    }, [inView, target]);

    return (
        <div ref={ref} className={`flex-1 flex flex-col items-center justify-center p-2 relative ${!isLast ? 'md:border-r border-white/20' : ''}`}>
            <div className="mb-2 text-white">{icon}</div>
            <div className="text-3xl md:text-4xl font-bold text-white mb-1">{count}</div>
            <div className="text-white/80 font-medium uppercase text-xs tracking-wider">{label}</div>
        </div>
    );
};

const StatsCounter = ({ stats = homeStats }) => { // Accept stats as a prop, with a default
    return (
        <section className="bg-white py-8">
            <div className="container mx-auto px-4">
                <div className="bg-brand-blue rounded-[16px] py-8 px-4 shadow-lg max-w-5xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-0">
                        {stats.map((stat, index) => (
                            <StatItem
                                key={index}
                                icon={stat.icon}
                                target={stat.target}
                                label={stat.label}
                                isLast={index === stats.length - 1}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StatsCounter;

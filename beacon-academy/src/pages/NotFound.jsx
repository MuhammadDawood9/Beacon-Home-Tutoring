import React from 'react';
import SEO from '../components/SEO';

const NotFound = () => {
    return (
        <>
            <SEO title="Page Not Found" description="The page you are looking for does not exist." />
            <div className="container mx-auto px-4 py-40 text-center">
                <h1 className="text-6xl font-bold text-brand-blue mb-4">404</h1>
                <p className="text-xl text-gray-600 mb-8">Oops! The page you're looking for doesn't exist.</p>
                <a href="/" className="bg-brand-gold text-brand-blue px-6 py-3 rounded font-bold hover:bg-opacity-90">Go Home</a>
            </div>
        </>
    );
};

export default NotFound;

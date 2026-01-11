import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Schema from '../components/Schema';
import { servicesData } from '../data/services';
import { CheckCircle, ArrowRight, Phone } from 'lucide-react';
import FindTutorForm from '../components/FindTutorForm';

const Services = () => {
    const { serviceSlug } = useParams();
    const service = servicesData[serviceSlug] || {};

    // If service not found, redirect to home or show 404 (handled by layout)
    if (!service.title) {
        return <Navigate to="/404" replace />;
    }

    const Icon = service.icon || (() => null);

    const schemaData = {
        name: service.title || '',
        description: service.description || '',
        areaServed: {
            "@type": "City",
            "name": "Lahore"
        },
        hasOfferCatalog: {
            "@type": "OfferCatalog",
            "name": "Tutoring Services",
            "itemListElement": (service.features || []).map(feature => ({
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": feature
                }
            }))
        }
    };

    return (
        <>
            <Schema type="Service" data={schemaData} />
            <SEO
                title={service.metaTitle || `${service.title} | Beacon Academy`}
                description={service.metaDescription || service.description || ''}
                url={window.location.href}
            />

            {/* Hero */}
            <div className="bg-brand-blue text-white py-16">
                <div className="container mx-auto px-4">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-white/10 rounded-lg">
                            <Icon className="w-8 h-8 text-brand-gold" />
                        </div>
                        <span className="text-brand-gold font-bold tracking-wider uppercase text-sm">Service Detail</span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">{service.title}</h1>
                    <p className="text-xl text-gray-200 max-w-2xl">{service.subtitle || ''}</p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16">
                <div className="grid lg:grid-cols-3 gap-12">

                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        <div className="prose prose-lg max-w-none text-gray-600 mb-12">
                            <div dangerouslySetInnerHTML={{ __html: service.content || '' }} />
                        </div>

                        <div className="bg-gray-50 rounded-xl p-8 border border-gray-100 mb-12">
                            <h2 className="text-2xl font-bold text-brand-blue mb-6">Why Choose Our {serviceSlug.replace('-', ' ')} Tutors?</h2>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {(service.features || []).map((feature, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-brand-gold mt-1 flex-shrink-0" />
                                        <span className="font-medium text-gray-800">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA Box */}
                        <div className="bg-brand-blue text-white rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                            <div>
                                <h3 className="text-2xl font-bold mb-2">Ready to start learning?</h3>
                                <p className="text-blue-100">Hire an expert tutor today.</p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                                <a href="tel:+923281446886" className="flex items-center justify-center gap-2 bg-transparent border-2 border-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-brand-blue transition">
                                    <Phone className="w-5 h-5" /> Call Now
                                </a>
                                <a href="#book-form" className="flex items-center justify-center gap-2 bg-brand-gold text-brand-blue px-6 py-3 rounded-lg font-bold hover:bg-white transition">
                                    Hire a Tutor <ArrowRight className="w-5 h-5" />
                                </a>
                            </div>
                        </div>

                        {/* Related Services */}
                        <div className="mt-12">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Explore Other Services</h3>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {Object.entries(servicesData)
                                    .filter(([slug]) => slug !== serviceSlug)
                                    .slice(0, 4) // Show up to 4 other services
                                    .map(([slug, data]) => (
                                        <Link
                                            key={slug}
                                            to={`/services/${slug}`}
                                            className="block p-4 border border-gray-100 rounded-lg hover:shadow-md hover:border-brand-blue transition group"
                                        >
                                            <h4 className="font-bold text-brand-blue group-hover:text-brand-gold transition-colors">{data.title}</h4>
                                            <p className="text-sm text-gray-500 line-clamp-1">{data.subtitle}</p>
                                        </Link>
                                    ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar Form */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24" id="book-form">
                            <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
                                <div className="bg-gray-50 p-4 border-b border-gray-100 text-center">
                                    <h3 className="font-bold text-brand-blue">Get a Free Consultation</h3>
                                    <p className="text-sm text-gray-500">Instant response guaranteed</p>
                                </div>
                                <div className="p-2">
                                    <FindTutorForm />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Services;

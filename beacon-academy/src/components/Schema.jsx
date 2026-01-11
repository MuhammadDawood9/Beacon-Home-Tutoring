import React from 'react';
import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

const Schema = ({ type, data }) => {
    let schemaData = {};

    if (type === 'LocalBusiness') {
        schemaData = {
            "@context": "https://schema.org",
            "@type": "LocalBusiness", // or TuitionService if supported, but LocalBusiness is safer
            "name": "Beacon Home Tutoring Academy",
            "image": "https://beaconhometutoring.com/logo.png",
            "@id": "https://beaconhometutoring.com",
            "url": "https://beaconhometutoring.com",
            "telephone": "+923281446886",
            "priceRange": "$$",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Muhafiz Town near EME Society",
                "addressLocality": "Lahore",
                "addressRegion": "Punjab",
                "postalCode": "54000",
                "addressCountry": "PK"
            },
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": 31.4697, // Approximate Lahore coords, ideally specific
                "longitude": 74.2728
            },
            "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday"
                ],
                "opens": "00:00",
                "closes": "23:59"
            },
            "sameAs": [
                "https://www.facebook.com/profile.php?id=61574996775655",
                "https://www.instagram.com/beaconhometutoringacademy?igsh=MWtjamR6c2E5bDg3&utm_source=qr"
            ],
            ...data // Allow overriding or adding props
        };
    } else if (type === 'Service') {
        schemaData = {
            "@context": "https://schema.org",
            "@type": "Service",
            "provider": {
                "@type": "LocalBusiness",
                "name": "Beacon Home Tutoring Academy",
                "image": "https://beaconhometutoring.com/logo.png"
            },
            ...data
        };
    } else if (type === 'Article') {
        schemaData = {
            "@context": "https://schema.org",
            "@type": "Article",
            "author": {
                "@type": "Person",
                "name": "Beacon Academy Team"
            },
            "publisher": {
                "@type": "Organization",
                "name": "Beacon Home Tutoring Academy",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://beaconhometutoring.com/logo.png"
                }
            },
            ...data
        };
    } else {
        // Generic fallback or raw data pass-through
        schemaData = {
            "@context": "https://schema.org",
            ...data
        };
    }

    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(schemaData)}
            </script>
        </Helmet>
    );
};

Schema.propTypes = {
    type: PropTypes.string.isRequired,
    data: PropTypes.object.isRequired
};

export default Schema;

import React from 'react';
import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';
import { getBaseUrl } from '../utils/url';

const SEO = ({ title, description, type = 'website', name = 'Beacon Home Tutoring Academy', image, url, keywords }) => {
    const baseUrl = getBaseUrl();
    // Use pathname from window if available, otherwise assume root
    const pathname = typeof window !== 'undefined' ? window.location.pathname : '';

    return (
        <Helmet>
            {/* Standard metadata */}
            <title>{title}</title>
            <meta name='description' content={description} />
            <link rel="canonical" href={url || `${baseUrl}${pathname}`} />

            {/* Facebook tags */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            {image && <meta property="og:image" content={image} />}
            {url && <meta property="og:url" content={url} />}
            <meta property="og:site_name" content={name} />

            {/* Twitter tags */}
            <meta name="twitter:creator" content={name} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            {image && <meta name="twitter:image" content={image} />}
            {/* Keywords */}
            {keywords && <meta name="keywords" content={keywords} />}
        </Helmet>
    );
};

SEO.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    type: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.string,
    url: PropTypes.string,
    keywords: PropTypes.string,
};

export default SEO;

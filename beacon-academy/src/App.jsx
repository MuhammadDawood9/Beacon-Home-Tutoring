import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import SEO from './components/SEO';

// Lazy loading pages
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const Contact = lazy(() => import('./pages/Contact'));
const JoinTeam = lazy(() => import('./pages/JoinTeam'));
const About = lazy(() => import('./pages/About'));
const WhyBeacon = lazy(() => import('./pages/WhyBeacon'));
const Faq = lazy(() => import('./pages/Faq'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <Router>
      <Layout>
        {/* Global Suspense for lazy loaded routes */}
        <Suspense fallback={<div className="flex h-screen items-center justify-center">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/why-beacon" element={<WhyBeacon />} />
            <Route path="/services/:serviceSlug" element={<Services />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:postSlug" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/join-team" element={<JoinTeam />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}

export default App;

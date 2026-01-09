import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import SEO from '../components/SEO';
import Schema from '../components/Schema';
import { blogData } from '../data/blog';
import { Calendar, User, ArrowLeft, Share2 } from 'lucide-react';

const BlogPost = () => {
    const { postSlug } = useParams();
    const post = blogData.find(p => p.slug === postSlug);

    if (!post) {
        return <Navigate to="/404" replace />;
    }

    const schemaData = {
        headline: post.title,
        image: post.image,
        datePublished: new Date(post.date).toISOString(), // Assuming date is parseable or format appropriately
        articleBody: post.content ? post.content.replace(/<[^>]+>/g, '') : post.excerpt, // Strip HTML for body or use excerpt
        author: {
            "@type": "Person",
            "name": post.author
        }
    };

    return (
        <>
            <Schema type="Article" data={schemaData} />
            <SEO
                title={`${post.title} | Beacon Academy Blog`}
                description={post.excerpt}
                image={post.image}
                type="article"
            />

            <article className="min-h-screen bg-gray-50 py-12">
                <div className="container mx-auto px-4 max-w-4xl">
                    <a href="/blog" className="inline-flex items-center gap-2 text-gray-500 hover:text-brand-blue mb-8 transition">
                        <ArrowLeft className="w-4 h-4" /> Back to Blog
                    </a>

                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-64 md:h-96 object-cover"
                        />

                        <div className="p-8 md:p-12">
                            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-6">
                                <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {post.date}</span>
                                <span className="flex items-center gap-2"><User className="w-4 h-4" /> {post.author}</span>
                            </div>

                            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                                {post.title}
                            </h1>

                            <div
                                className="prose prose-lg prose-blue max-w-none text-gray-700"
                                dangerouslySetInnerHTML={{ __html: post.content }}
                            />

                            <hr className="my-12 border-gray-100" />

                            <div className="flex justify-between items-center">
                                <span className="font-bold text-gray-900">Share this article:</span>
                                <div className="flex gap-4">
                                    <button className="p-2 rounded-full bg-gray-100 hover:bg-brand-blue hover:text-white transition">
                                        <Share2 className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </>
    );
};

export default BlogPost;

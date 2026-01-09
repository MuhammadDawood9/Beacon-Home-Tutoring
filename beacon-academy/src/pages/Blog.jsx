import React from 'react';
import SEO from '../components/SEO';
import { blogData } from '../data/blog';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
    return (
        <>
            <SEO
                title="Educational Tips & Guides | Beacon Home Tutoring Blog"
                description="Read expert advice on exams, parenting, and education trends in Pakistan. Best resources for O/A Level students."
            />

            <div className="bg-gray-50 py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-brand-blue mb-4">Latest Insights</h1>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Expert advice for students and parents. Stay updated with the latest educational trends and exam tips.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogData.map((post) => (
                            <article key={post.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col">
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover hover:scale-105 transition duration-500"
                                    />
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                                        <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                                        <span className="flex items-center gap-1"><User className="w-3 h-3" /> {post.author}</span>
                                    </div>
                                    <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                                        <a href={`/blog/${post.slug}`} className="hover:text-brand-blue transition">
                                            {post.title}
                                        </a>
                                    </h2>
                                    <p className="text-gray-600 mb-4 line-clamp-3 text-sm flex-grow">
                                        {post.excerpt}
                                    </p>
                                    <a href={`/blog/${post.slug}`} className="mt-auto inline-flex items-center gap-2 text-brand-blue font-bold hover:text-brand-gold transition">
                                        Read Article <ArrowRight className="w-4 h-4" />
                                    </a>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blog;

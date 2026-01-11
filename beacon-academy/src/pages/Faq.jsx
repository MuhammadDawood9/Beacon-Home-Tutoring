import React, { useState } from 'react';
import SEO from '../components/SEO';
import Schema from '../components/Schema';
import { getBaseUrl } from '../utils/url';
import { Flag, ChevronDown, ChevronUp, ArrowRight, PlusCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const FaqItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 mb-4 overflow-hidden">
            <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                onClick={onClick}
            >
                <span className="font-bold text-gray-800 text-lg">{question}</span>
                {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-brand-blue" />
                ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
            </button>
            <div
                className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                    {answer}
                </div>
            </div>
        </div>
    );
};

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(0);
    const baseUrl = getBaseUrl();

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    const faqs = [
        {
            question: "How To Unlock Your Learning Potential with Beacon Home Tutor?",
            answer: "Our expert tutors provide personalized learning plans tailored to your child's unique strengths and weaknesses. By focusing on concept building and regular assessments, we ensure steady academic growth and confidence."
        },
        {
            question: "What qualifications do the tutors have?",
            answer: "All our tutors are highly qualified professionals with degrees from reputable universities. They undergo a strict verification process, including background checks and teaching demonstrations, to ensure they meet our high standards."
        },
        {
            question: "What type of materials and resources are provided by the tutoring service?",
            answer: "We provide curated worksheets, past papers (D-Series/Redspot), and customized notes. Our tutors also recommend specific textbooks and online resources to supplement the student's learning."
        },
        {
            question: "How much does the tutoring service cost?",
            answer: "Our rates are competitive and vary depending on the grade level, subject, and location. We offer flexible packages to suit different budgets without compromising on quality. Contact us for a personalized quote."
        },
        {
            question: "Is the tutoring service flexible and able to adjust to my child’s needs?",
            answer: "Absolutely. We understand that every student is different. Our tutors adapt their teaching style and schedule to match your child's pace and learning requirements, ensuring a stress-free experience."
        }
    ];

    const schemaData = {
        mainEntity: faqs.map(faq => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer
            }
        }))
    };

    return (
        <>
            <Schema type="FAQPage" data={schemaData} />
            <SEO
                title="FAQ | Beacon Home Tutoring Academy"
                description="Frequently Asked Questions about our home tutoring services in Lahore. Learn about our tutors, costs, and teaching methodology."
                url={`${baseUrl}/faq`}
            />

            {/* Hero Section */}
            <div className="relative h-64 md:h-80 bg-brand-blue overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop"
                    alt="FAQ Background"
                    className="absolute inset-0 w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-blue to-transparent opacity-90"></div>
                <div className="container mx-auto px-4 h-full flex flex-col justify-center items-start relative z-10 text-white">
                    <div className="text-sm font-medium mb-2 text-brand-gold uppercase tracking-wider">Home » Faq</div>
                    <h1 className="text-4xl md:text-6xl font-bold">Faq</h1>
                </div>
            </div>

            {/* Content Section */}
            <div className="bg-gray-50 py-20">
                <div className="container mx-auto px-4">
                    {/* Icon Header */}
                    <div className="flex justify-center mb-12">
                        <div className="w-16 h-16 bg-brand-blue text-white rounded flex items-center justify-center shadow-lg transform -rotate-3">
                            <Flag className="w-8 h-8" />
                        </div>
                    </div>

                    {/* FAQ Accordion */}
                    <div className="max-w-3xl mx-auto space-y-4">
                        {faqs.map((faq, index) => (
                            <FaqItem
                                key={index}
                                question={faq.question}
                                answer={faq.answer}
                                isOpen={openIndex === index}
                                onClick={() => toggleFaq(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Feature Grid Section */}
            <div>
                {/* Row 1: Family Connect */}
                <div className="grid md:grid-cols-2">
                    <div className="bg-brand-blue text-white p-12 md:p-20 flex flex-col justify-center relative overflow-hidden">
                        {/* Abstract Pattern Overlay */}
                        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Family Connect</h2>
                            <p className="text-gray-200 mb-8 leading-relaxed">
                                Our one-on-one tutoring program helps your kid succeed academically. Our Beacon-certified tutors help your kid evaluate their strengths and weaknesses, create a personalized learning plan, and get academic support.
                            </p>
                            <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-brand-blue font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition shadow-md w-max">
                                <PlusCircle className="w-5 h-5" /> Apply Now
                            </Link>
                        </div>
                    </div>
                    <div className="h-64 md:h-auto">
                        <img
                            src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1000&auto=format&fit=crop"
                            alt="Family spending time together"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Row 2: Teacher Development */}
                <div className="grid md:grid-cols-2">
                    <div className="h-64 md:h-auto order-2 md:order-1">
                        <img
                            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1000&auto=format&fit=crop"
                            alt="Teacher helping student"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="bg-white p-12 md:p-20 flex flex-col justify-center order-1 md:order-2">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Teacher Professional Development</h2>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Apply today to collaborate with Beacon Home Tutor for Family Connect and Teacher Professional Development. Help us maximize your child's academic potential or your teaching career. Join our learning and teaching community now!
                        </p>
                        <Link to="/join-team" className="inline-flex items-center gap-2 bg-brand-blue text-white font-bold py-3 px-8 rounded-full hover:bg-brand-blue/90 transition shadow-md w-max">
                            <PlusCircle className="w-5 h-5" /> Get Started
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Faq;

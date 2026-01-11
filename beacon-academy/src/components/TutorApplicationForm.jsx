import React, { useState } from 'react';
import { User, Phone, Mail, GraduationCap, Briefcase, FileUp, Send, CheckCircle } from 'lucide-react';

const TutorApplicationForm = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const name = e.target[0].value;
        const phone = e.target[1].value;
        const experience = e.target[4].value; // Adjust index based on form layout

        // Construct WhatsApp Message for quick application
        const message = `*Tutor Application*%0A%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Exp:* ${experience}%0A%0A_Please contact me for CV submission._`;

        const link = document.createElement('a');
        link.href = `https://wa.me/923281446886?text=${message}`;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                <div className="mx-auto bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Application Submitted!</h3>
                <p className="text-gray-600">
                    Your profile has been shared with our recruitment team. We will review your application and contact you for an interview if shortlisted.
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-brand-blue mb-6">Become a Tutor</h3>
            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <div className="relative">
                        <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <input
                            type="text"
                            required
                            placeholder="Your Full Name"
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue outline-none transition"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <div className="relative">
                        <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <input
                            type="tel"
                            required
                            placeholder="0300 1234567"
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue outline-none transition"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <div className="relative">
                        <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <input
                            type="email"
                            required
                            placeholder="you@example.com"
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue outline-none transition"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Qualification</label>
                    <div className="relative">
                        <GraduationCap className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <input
                            type="text"
                            required
                            placeholder="e.g. BS Mathematics, MBA"
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue outline-none transition"
                        />
                    </div>
                </div>
            </div>

            <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">Teaching Experience (Years)</label>
                <div className="relative">
                    <Briefcase className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <select className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue outline-none transition bg-white">
                        <option value="">Select Experience</option>
                        <option value="fresh">Fresh Graduate</option>
                        <option value="1-3">1-3 Years</option>
                        <option value="4-7">4-7 Years</option>
                        <option value="8+">8+ Years</option>
                    </select>
                </div>
            </div>

            <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">CV / Resume</label>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start gap-3">
                    <FileUp className="w-6 h-6 text-brand-blue flex-shrink-0 mt-1" />
                    <div>
                        <p className="text-sm text-gray-700 font-medium">Document Submission</p>
                        <p className="text-xs text-gray-600 mt-1">
                            To ensure quick processing, please attach your CV (PDF/Word) directly in the WhatsApp chat after clicking "Submit Application".
                        </p>
                    </div>
                </div>
            </div>

            <button
                type="submit"
                className="w-full mt-8 bg-brand-blue text-white font-bold text-lg py-4 rounded-lg hover:bg-opacity-90 transition flex items-center justify-center gap-2"
            >
                Submit Application <Send className="w-5 h-5" />
            </button>
        </form>
    );
};

export default TutorApplicationForm;

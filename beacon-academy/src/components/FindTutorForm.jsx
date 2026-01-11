import React, { useState } from 'react';
import { User, Phone, MapPin, BookOpen, Send, CheckCircle } from 'lucide-react';

const locations = [
    "DHA (All Phases)",
    "Model Town",
    "Johar Town",
    "Wapda Town",
    "Bahria Town",
    "Cantt",
    "Gulberg",
    "Garden Town",
    "Faisal Town",
    "Valencia",
    "Other"
];

const FindTutorForm = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Construct WhatsApp Message
        const message = `*New Tutor Request*%0A%0A*Name:* ${e.target[0].value}%0A*Phone:* ${e.target[1].value}%0A*Area:* ${e.target[2].value}%0A*Subject:* ${e.target[3].value}`;

        // Open WhatsApp
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
            <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center animate-fade-in">
                <div className="mx-auto bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Request Received!</h3>
                <p className="text-gray-600">
                    Thank you for contacting Beacon Academy. An education consultant will call you shortly to discuss your requirements.
                </p>
                <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-brand-blue font-semibold hover:underline"
                >
                    Submit another request
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-brand-blue mb-6">Find a Home Tutor</h3>
            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                    <div className="relative">
                        <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <input
                            type="text"
                            required
                            placeholder="Enter your name"
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition"
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
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Area / Location</label>
                    <div className="relative">
                        <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <select
                            required
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition bg-white"
                        >
                            <option value="">Select your area</option>
                            {locations.map(loc => <option key={loc} value={loc}>{loc}</option>)}
                        </select>
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Subject / Class</label>
                    <div className="relative">
                        <BookOpen className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <input
                            type="text"
                            required
                            placeholder="e.g. O-Level Math, Class 5"
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition"
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full bg-brand-gold text-brand-blue font-bold text-lg py-3 rounded-lg hover:bg-opacity-90 transition flex items-center justify-center gap-2"
                >
                    Hire a Tutor <Send className="w-5 h-5" />
                </button>
                <p className="text-xs text-center text-gray-500 mt-2">
                    Our team will contact you shortly.
                </p>
            </div>
        </form>
    );
};

export default FindTutorForm;

import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
    return (
        <a
            href="https://wa.me/923281446886"
            target="_blank"
            rel="nofollow noreferrer"
            aria-label="Chat on WhatsApp"
            className="fixed bottom-6 right-6 bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:bg-[#20bd5a] transition-all duration-300 z-50 animate-bounce hover:animate-none flex items-center justify-center"
        >
            <MessageCircle className="w-8 h-8" />
        </a>
    );
};

export default WhatsAppButton;

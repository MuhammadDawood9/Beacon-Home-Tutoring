import React from 'react';

const Newsletter = () => {
    return (
        <div>
            <h3 className="text-xl font-bold text-white mb-4">Newsletter</h3>

            <p className="mb-4 text-sm text-gray-400">
                To get the latest news and latest updates from us.
            </p>

            <form action="/subscribe" className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                <div>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-brand-blue transition text-sm"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-brand-blue text-white font-bold py-2 rounded hover:bg-brand-blue/90 transition text-sm uppercase"
                >
                    Subscribe
                </button>
            </form>
        </div>
    );
};

export default Newsletter;

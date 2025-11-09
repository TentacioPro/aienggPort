import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="py-6 sm:py-8 text-sm text-[#3B0270]/70">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row md:justify-evenly md:items gap-3 sm:gap-4 text-center md:text-left">
                    <p>
                        Designed & Built by Sajjad Ismail. Powered by AI, crafted with passion.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
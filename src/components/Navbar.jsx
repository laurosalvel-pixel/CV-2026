import React from 'react';
import { motion } from 'framer-motion';

export default function Navbar({ activeView, setActiveView }) {
    const navItems = [
        { id: 'cv', label: 'CV' },
        { id: 'ventures', label: 'Ventures' },
        { id: 'profile', label: 'Profile' }
    ];

    return (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[100]">
            <nav className="flex items-center p-1.5 gap-1.5 bg-white/70 backdrop-blur-md rounded-full shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-[#E5E5E5]/50">
                {navItems.map((item) => {
                    const isActive = activeView === item.id;
                    return (
                        <button
                            key={item.id}
                            onClick={() => {
                                if (item.id === 'cv' && activeView === 'cv') {
                                    const cvSection = document.getElementById('cv-main-section');
                                    if (cvSection) {
                                        const y = cvSection.getBoundingClientRect().top + window.pageYOffset - 100;
                                        window.scrollTo({ top: y, behavior: 'smooth' });
                                    } else {
                                        window.scrollTo({ top: 0, behavior: 'smooth' });
                                    }
                                } else {
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                    setActiveView(item.id);
                                    
                                    if (item.id === 'cv') {
                                        setTimeout(() => {
                                            const cvSection = document.getElementById('cv-main-section');
                                            if (cvSection) {
                                                const y = cvSection.getBoundingClientRect().top + window.pageYOffset - 100;
                                                window.scrollTo({ top: y, behavior: 'smooth' });
                                            }
                                        }, 100);
                                    }
                                }
                            }}
                            className={`relative px-5 py-2 rounded-full text-[14px] font-medium transition-colors duration-300 ease-out z-10 ${isActive ? 'text-white' : 'text-[#555] hover:text-[#111]'}`}
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="navbar-active-bg"
                                    className="absolute inset-0 bg-[#111] rounded-full -z-10"
                                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                />
                            )}
                            <span className="relative z-10">{item.label}</span>
                        </button>
                    );
                })}
            </nav>
        </div>
    );
}

import React from 'react';
import { motion } from 'framer-motion';

export default function Navbar({ activeView, setActiveView }) {
    const navItems = [
        { id: 'cv', label: 'CV' },
        { id: 'ventures', label: 'Ventures' },
        { id: 'profile', label: 'Profile' }
    ];

    return (
        <div className="fixed top-6 left-0 right-0 z-[100] px-4 sm:px-10 pointer-events-none flex flex-col sm:block justify-center items-center gap-3">
            <nav className="pointer-events-auto flex items-center p-1.5 gap-1 sm:gap-1.5 bg-white/70 backdrop-blur-md rounded-full shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-[#E5E5E5]/50 mx-auto w-max">
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
            <div className="pointer-events-auto sm:absolute sm:right-10 sm:top-1/2 sm:-translate-y-1/2 flex items-center p-1 bg-white/70 backdrop-blur-md rounded-full shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-[#E5E5E5]/50 mx-auto w-max">
                <a 
                    href="/cv-pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[13px] font-medium text-[#555] hover:bg-white hover:text-[#111] hover:shadow-sm transition-all duration-300 group"
                    title="Print CV"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-80 group-hover:opacity-100"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                    <span className="hidden sm:block">CV PDF</span>
                </a>
                <div className="w-[1px] h-3.5 bg-[#D4D4D4] hidden sm:block"></div>
                <a 
                    href="/LauroSalvel_Diplomas_2026.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[13px] font-medium text-[#555] hover:bg-white hover:text-[#111] hover:shadow-sm transition-all duration-300 group"
                    title="View Diplomas"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-80 group-hover:opacity-100"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                    <span className="hidden sm:block">Diplomas</span>
                </a>
            </div>
        </div>
    );
}

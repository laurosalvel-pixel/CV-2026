import React from 'react';
import { Icon } from '@iconify/react';

export default function Hero() {
    return (
        <section className="relative w-full h-[100svh] min-h-[600px] flex items-center justify-center overflow-hidden bg-[#F5F5F5]">
            {/* Spline 3D Interactive Integration */}
            <div className="absolute inset-0 z-0 overflow-hidden bg-[#E5E5E5]">
                <iframe 
                    src="https://my.spline.design/glassmorphlandingpage-HsuP2ST568ssZWCM9Tp1mpSO/" 
                    frameBorder="0" 
                    width="100%" 
                    height="100%"
                    title="Interactive Spline 3D Glassmorphism Background"
                    className="w-full h-full object-cover pointer-events-auto scale-[1.4] origin-center"
                />
            </div>
            
            {/* Subtle Gradient overlay to ensure text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-0 pointer-events-none" />

            {/* Foreground Content - UX Profile Pill */}
            <div className="relative z-10 flex items-center p-3 sm:p-4 rounded-full bg-white/70 backdrop-blur-md border border-[#E5E5E5]/50 shadow-[0_4px_24px_rgba(0,0,0,0.06)] max-w-[700px] w-auto mx-4 pointer-events-none mt-[-50px]">
                
                {/* Floating Frosted Portrait Frame */}
                <div className="w-[88px] h-[88px] sm:w-[104px] sm:h-[104px] rounded-full overflow-hidden shadow-sm bg-[#EAEAEA]/80 border border-white/60 shrink-0 mr-5 sm:mr-6">
                    <img src="/portrait.jpg" alt="Lauro Salvel" className="w-full h-full object-cover" />
                </div>

                {/* Text Column */}
                <div className="flex flex-col justify-center text-left py-1 pr-6 sm:pr-8">
                    {/* Title */}
                    <h1 className="text-[28px] sm:text-[36px] font-[800] text-text-primary tracking-tight leading-none mb-1.5 drop-shadow-sm">
                        Lauro Salvel
                    </h1>
                    
                    {/* Subheading */}
                    <h2 className="text-[14px] sm:text-[16px] font-medium text-[#444] leading-snug drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)] tracking-wide max-w-[440px]">
                        I’m a generalist with a networked mindset, driven by ideas, grounded in execution.
                    </h2>
                </div>
            </div>
            
            {/* Scroll Indication Overlay */}
            <div 
                style={{ pointerEvents: 'auto' }}
                onClick={() => {
                    const cvSection = document.getElementById('cv-main-section');
                    if (cvSection) {
                        const y = cvSection.getBoundingClientRect().top + window.pageYOffset - 100;
                        window.scrollTo({ top: y, behavior: 'smooth' });
                    }
                }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-70 text-text-secondary cursor-pointer hover:opacity-100 transition-opacity"
            >
                <span className="text-[10px] font-semibold uppercase tracking-[0.25em]">View Experience</span>
                <Icon icon="lucide:arrow-down" className="w-[18px] h-[18px] animate-bounce text-text-secondary mt-1" />
                <div className="w-[1px] h-[30px] bg-gradient-to-b from-text-secondary to-transparent" />
            </div>
        </section>
    );
}

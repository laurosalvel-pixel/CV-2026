import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';
import Footer from './Footer';
const mockReels = [
    { 
        id: 1, 
        title: "Mixed Martial Arts", 
        desc: "Finding focus and staying humble on the mat. KamayTao Brownbelt.", 
        media: [
            { type: "video", url: "/reels/2020_MMA.mp4" },
            { type: "image", url: "/reels/2020_MMA.jpg" },
            { type: "image", url: "/reels/2018_KamayTaoBrownbelt.jpg" }
        ]
    },
    { 
        id: 2, 
        title: "Physical Health", 
        desc: "Putting in the daily reps to stay active and grounded.", 
        media: [
            { type: "video", url: "/reels/2023_gym.mp4" },
            { type: "image", url: "/reels/bike_ride.jpg" }
        ]
    },
    { 
        id: 3, 
        title: "Military Service", 
        desc: "A tough but formative time. Grateful for the lessons and the brotherhood.", 
        media: [
            { type: "video", url: "/reels/2019_Army.mp4" }
        ]
    },
    { 
        id: 4, 
        title: "Marriage", 
        desc: "Marrying my best friend and starting our next chapter.", 
        media: [
            { type: "image", url: "/reels/2024_wedding.png" }
        ]
    },
    { 
        id: 5, 
        title: "Spiritual & Moral Wellbeing", 
        desc: "Staying rooted in faith, family, and the things that actually matter.", 
        media: [
            { type: "video", url: "/reels/2025_baptism.mp4" }
        ]
    }
];

const MediaSwitcher = ({ media }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleNext = () => {
        if (media.length > 1) {
            setActiveIndex(prev => (prev + 1) % media.length);
        }
    };

    useEffect(() => {
        if (media.length <= 1) return;
        
        let timer;
        const currentItem = media[activeIndex];
        
        if (currentItem.type === 'image') {
            timer = setTimeout(handleNext, 4500); // 4.5 seconds for images
        }
        
        return () => clearTimeout(timer);
    }, [activeIndex, media]);

    return (
        <div className="absolute inset-0 w-full h-full bg-[#111]">
            <AnimatePresence mode="popLayout" initial={false}>
                {media.map((item, index) => {
                    if (index !== activeIndex) return null;
                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8 }}
                            className="absolute inset-0 w-full h-full"
                        >
                            {item.type === 'video' ? (
                                <video 
                                    src={item.url} 
                                    autoPlay 
                                    loop={media.length <= 1} // Only loop indefinitely if it's the sole file
                                    muted 
                                    playsInline 
                                    onEnded={media.length > 1 ? handleNext : undefined}
                                    className="w-full h-full object-cover" 
                                />
                            ) : (
                                <img 
                                    src={item.url} 
                                    alt="Milestone Focus" 
                                    className="w-full h-full object-cover" 
                                />
                            )}
                        </motion.div>
                    );
                })}
            </AnimatePresence>
        </div>
    );
};

// Animation configs
const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.15 }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

export default function Profile() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const getRelativeIndex = (index, current, total) => {
        let diff = index - current;
        if (diff > Math.floor(total / 2)) diff -= total;
        if (diff < -Math.floor(total / 2)) diff += total;
        return diff;
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % mockReels.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + mockReels.length) % mockReels.length);
    };

    return (
        <div className="w-full min-h-screen py-24 px-6 sm:px-12 flex justify-center bg-[#F5F5F5]">
            <motion.div 
                variants={container}
                initial="hidden"
                animate="show"
                className="max-w-[800px] w-full flex flex-col gap-12"
            >
                {/* 1. Header ID Card */}
                <motion.div variants={item} className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 bg-white/60 backdrop-blur-md p-6 sm:p-8 rounded-[32px] border border-[#E5E5E5] shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
                    
                    {/* Placeholder Portrait Slot */}
                    <div className="w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] rounded-full overflow-hidden shadow-sm bg-[#EAEAEA] border-[2px] border-white shrink-0 flex items-center justify-center">
                        <img src="/portrait.jpg" alt="Lauro Salvel" className="w-full h-full object-cover" />
                    </div>

                    {/* Meta Snapshot */}
                    <div className="flex flex-col">
                        <h1 className="text-[32px] sm:text-[40px] font-[800] text-[#111] tracking-tight leading-none mb-4">
                            Lauro Alessandro Salvel
                        </h1>
                        <div className="flex flex-wrap items-center gap-3 mb-5">
                            <span className="flex items-center gap-1.5 px-3 py-1.5 bg-[#111] text-white text-[12px] font-semibold rounded-full tracking-wide">
                                <Icon icon="lucide:map-pin" className="text-[13px]" /> Zurich, CH
                            </span>
                            <span className="flex items-center gap-1.5 px-3 py-1.5 bg-black/5 border border-black/10 text-[#333] text-[12px] font-semibold rounded-full tracking-wide">
                                <Icon icon="lucide:calendar" className="text-[13px]" /> June 1997
                            </span>
                            <span className="flex items-center gap-1.5 px-3 py-1.5 bg-black/5 border border-black/10 text-[#333] text-[12px] font-semibold rounded-full tracking-wide">
                                <Icon icon="lucide:heart" className="text-[13px]" /> Married since 2024
                            </span>
                        </div>
                        
                        {/* Languages */}
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                            <h4 className="text-[#888] text-[11px] font-bold uppercase tracking-widest w-full mb-1">Languages</h4>
                            <span className="text-[#111] text-[15px] font-medium">German <span className="text-[#888] text-[13px] font-normal">(Native)</span></span>
                            <span className="text-[#EAEAEA] block w-[1px] h-[14px]"></span>
                            <span className="text-[#111] text-[15px] font-medium">English <span className="text-[#888] text-[13px] font-normal">(Advanced)</span></span>
                            <span className="text-[#EAEAEA] block w-[1px] h-[14px]"></span>
                            <span className="text-[#111] text-[15px] font-medium">Portuguese <span className="text-[#888] text-[13px] font-normal">(Intermediate)</span></span>
                            <span className="text-[#EAEAEA] block w-[1px] h-[14px]"></span>
                            <span className="text-[#111] text-[15px] font-medium">French <span className="text-[#888] text-[13px] font-normal">(Elementary)</span></span>
                        </div>
                    </div>
                </motion.div>

                {/* 2. Core Philosophy Master Statement */}
                <motion.div variants={item} className="px-2">
                    <p className="text-[20px] sm:text-[24px] md:text-[28px] font-medium text-[#111] leading-snug tracking-tight">
                        I started out in design, but quickly realized I was more interested in <span className="text-black font-extrabold relative inline-block after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[3px] after:bg-black/10">how ideas work and scale</span>. Today, I operate at the intersection of marketing, business and systems building to turn concepts into reality.
                    </p>
                </motion.div>

                {/* 3. The Manifesto Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                    {/* How I Think */}
                    <motion.div variants={item} className="bg-white/60 backdrop-blur-md p-8 rounded-[28px] border border-[#E5E5E5] flex flex-col gap-5 shadow-[0_8px_30px_rgba(0,0,0,0.04)] h-full">
                        <h3 className="flex items-center gap-2 text-[#888] text-[11px] font-bold uppercase tracking-widest pb-3 border-b border-[#EAEAEA]">
                            <Icon icon="lucide:brain-circuit" className="text-[16px] text-[#111]" /> How I Think
                        </h3>
                        <ul className="flex flex-col gap-4">
                            <li className="flex items-start gap-3 text-[#111] text-[15px] font-medium leading-relaxed">
                                <span className="text-[#111]/30 mt-0.5 shrink-0"><Icon icon="lucide:arrow-right" /></span> Creativity is not separate from business, but drives it.
                            </li>
                            <li className="flex items-start gap-3 text-[#111] text-[15px] font-medium leading-relaxed">
                                <span className="text-[#111]/30 mt-0.5 shrink-0"><Icon icon="lucide:arrow-right" /></span> Relationships compound over time.
                            </li>
                            <li className="flex items-start gap-3 text-[#111] text-[15px] font-medium leading-relaxed">
                                <span className="text-[#111]/30 mt-0.5 shrink-0"><Icon icon="lucide:arrow-right" /></span> Attention is one of the most valuable currencies in the modern economy.
                            </li>
                            <li className="flex items-start gap-3 text-[#111] text-[15px] font-medium leading-relaxed">
                                <span className="text-[#111]/30 mt-0.5 shrink-0"><Icon icon="lucide:arrow-right" /></span> Removing inefficiency is often more powerful than adding more.
                            </li>
                        </ul>
                    </motion.div>

                    {/* What I Care About */}
                    <motion.div variants={item} className="bg-white/60 backdrop-blur-md p-8 rounded-[28px] border border-[#E5E5E5] flex flex-col gap-5 shadow-[0_8px_30px_rgba(0,0,0,0.04)] h-full">
                        <h3 className="flex items-center gap-2 text-[#888] text-[11px] font-bold uppercase tracking-widest pb-3 border-b border-[#EAEAEA]">
                            <Icon icon="lucide:target" className="text-[16px] text-[#111]" /> What I Care About
                        </h3>
                        <ul className="flex flex-col gap-4">
                            <li className="flex items-start gap-3 text-[#111] text-[15px] font-medium leading-relaxed">
                                <span className="text-[#111]/30 mt-0.5 shrink-0"><Icon icon="lucide:arrow-right" /></span> Building things that actually solve problems
                            </li>
                            <li className="flex items-start gap-3 text-[#111] text-[15px] font-medium leading-relaxed">
                                <span className="text-[#111]/30 mt-0.5 shrink-0"><Icon icon="lucide:arrow-right" /></span> Simplifying complex ideas
                            </li>
                            <li className="flex items-start gap-3 text-[#111] text-[15px] font-medium leading-relaxed">
                                <span className="text-[#111]/30 mt-0.5 shrink-0"><Icon icon="lucide:arrow-right" /></span> Understanding how people think and behave
                            </li>
                            <li className="flex items-start gap-3 text-[#111] text-[15px] font-medium leading-relaxed">
                                <span className="text-[#111]/30 mt-0.5 shrink-0"><Icon icon="lucide:arrow-right" /></span> Staying adaptable in fast-moving environments
                            </li>
                        </ul>
                    </motion.div>

                    {/* How I Work */}
                    <motion.div variants={item} className="bg-white/60 backdrop-blur-md p-8 rounded-[28px] border border-[#E5E5E5] flex flex-col gap-5 shadow-[0_8px_30px_rgba(0,0,0,0.04)] h-full">
                        <h3 className="flex items-center gap-2 text-[#888] text-[11px] font-bold uppercase tracking-widest pb-3 border-b border-[#EAEAEA]">
                            <Icon icon="lucide:hammer" className="text-[16px] text-[#111]" /> How I Work
                        </h3>
                        <ul className="flex flex-col gap-4">
                            <li className="flex items-start gap-3 text-[#111] text-[15px] font-medium leading-relaxed">
                                <span className="text-[#111]/30 mt-0.5 shrink-0"><Icon icon="lucide:arrow-right" /></span> Hands-on by default: I prefer building over planning
                            </li>
                            <li className="flex items-start gap-3 text-[#111] text-[15px] font-medium leading-relaxed">
                                <span className="text-[#111]/30 mt-0.5 shrink-0"><Icon icon="lucide:arrow-right" /></span> Perform best under pressure with clear direction
                            </li>
                            <li className="flex items-start gap-3 text-[#111] text-[15px] font-medium leading-relaxed">
                                <span className="text-[#111]/30 mt-0.5 shrink-0"><Icon icon="lucide:arrow-right" /></span> Fast iteration over overthinking
                            </li>
                            <li className="flex items-start gap-3 text-[#111] text-[15px] font-medium leading-relaxed">
                                <span className="text-[#111]/30 mt-0.5 shrink-0"><Icon icon="lucide:arrow-right" /></span> Full ownership over tasks and outcomes
                            </li>
                        </ul>
                    </motion.div>
                </div>

                {/* 4. Deep Notes */}
                <motion.div variants={item} className="bg-white/60 backdrop-blur-md p-8 sm:p-10 rounded-[32px] border border-[#E5E5E5] flex flex-col gap-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)] w-full relative overflow-hidden">
                    <Icon icon="lucide:quote" className="absolute -top-4 -left-4 text-[#F5F5F5] text-[120px] -z-10" />
                    <h3 className="flex items-center gap-2 text-[#888] text-[11px] font-bold uppercase tracking-widest pb-3 border-b border-[#EAEAEA]">
                        <Icon icon="lucide:book-open" className="text-[16px] text-[#111]" /> Notes on Execution
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[#111] text-[15px] font-medium leading-relaxed">
                        <div className="flex flex-col gap-5">
                            <p>I learn best by building and observing, not by endless theory.</p>
                            <p>I’m less interested in perfect concepts and more in ideas that actually work and evolve over time. Perfection rarely exists in the real world.</p>
                        </div>
                        <div className="flex flex-col gap-5">
                            <p>Most things become clear through execution. What looks uncertain at first often compounds into clarity once you start building.</p>
                            <p>I focus on building on strengths rather than trying to fix every weakness. <span className="bg-[#111] text-white px-2 py-0.5 rounded-md">Strengths create leverage</span> and that’s where real progress happens.</p>
                        </div>
                    </div>
                </motion.div>

                {/* 5. Personal Milestones (Reels Slider) */}
                <motion.div variants={item} className="w-full flex flex-col gap-8 mt-8 pb-10">
                    <div className="flex flex-col items-center justify-center text-center px-2">
                        <h3 className="flex items-center justify-center gap-2 text-[#888] text-[11px] font-bold uppercase tracking-widest mb-2">
                            <Icon icon="lucide:camera" className="text-[16px] text-[#111]" /> Highlights
                        </h3>
                        <h2 className="text-[32px] sm:text-[40px] font-bold text-[#111] tracking-tight leading-none">Memorable Moments</h2>
                    </div>

                    <div className="relative w-full h-[460px] sm:h-[500px] flex items-center justify-center mt-4">
                        {/* Left Arrow OVERLAPPING */}
                        <button 
                            onClick={handlePrev}
                            className="absolute left-2 sm:left-4 z-50 w-12 h-12 rounded-full bg-white/80 backdrop-blur-md border border-[#E5E5E5] shadow-[0_4px_20px_rgba(0,0,0,0.1)] flex items-center justify-center hover:bg-white hover:scale-110 transition-all text-[#111]"
                        >
                            <Icon icon="lucide:chevron-left" className="text-[24px]" />
                        </button>

                        {/* Right Arrow OVERLAPPING */}
                        <button 
                            onClick={handleNext}
                            className="absolute right-2 sm:right-4 z-50 w-12 h-12 rounded-full bg-white/80 backdrop-blur-md border border-[#E5E5E5] shadow-[0_4px_20px_rgba(0,0,0,0.1)] flex items-center justify-center hover:bg-white hover:scale-110 transition-all text-[#111]"
                        >
                            <Icon icon="lucide:chevron-right" className="text-[24px]" />
                        </button>

                        <div className="relative w-full h-full flex items-center justify-center max-w-[800px] mx-auto">
                            {mockReels.map((reel, index) => {
                                const offset = getRelativeIndex(index, currentIndex, mockReels.length);
                                const isCenter = offset === 0;
                                
                                return (
                                    <motion.div 
                                        key={reel.id}
                                        initial={false}
                                        animate={{
                                            x: offset * (window.innerWidth < 640 ? 110 : 160), // Horizontal displacement
                                            scale: isCenter ? 1 : 0.85,
                                            zIndex: isCenter ? 30 : (20 - Math.abs(offset)),
                                            opacity: Math.abs(offset) <= 1 ? (isCenter ? 1 : 0.4) : 0,
                                        }}
                                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                        className={`absolute w-[240px] h-[400px] sm:w-[280px] sm:h-[460px] rounded-[32px] overflow-hidden bg-[#111] shadow-2xl ${isCenter ? 'cursor-default' : 'cursor-pointer'}`}
                                        onClick={() => {
                                            if (!isCenter) {
                                                if (offset > 0) handleNext();
                                                if (offset < 0) handlePrev();
                                            }
                                        }}
                                        style={{ pointerEvents: Math.abs(offset) <= 1 ? 'auto' : 'none' }}
                                    >
                                        <MediaSwitcher media={reel.media} />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />
                                        <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col gap-2 transition-opacity duration-300 pointer-events-none z-10" style={{ opacity: isCenter ? 1 : 0 }}>
                                            <h4 className="text-white text-[20px] font-bold tracking-tight">{reel.title}</h4>
                                            <p className="text-white/80 text-[13px] font-medium leading-relaxed">{reel.desc}</p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                        
                        {/* Pagination Dots */}
                        <div className="absolute -bottom-10 left-0 w-full flex justify-center gap-2 z-20">
                            {mockReels.map((_, idx) => (
                                <button 
                                    key={idx} 
                                    onClick={() => setCurrentIndex(idx)}
                                    className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-6 bg-[#111]' : 'w-2 bg-[#CCC] hover:bg-[#888]'}`} 
                                />
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* 6. Contact Footer */}
                <motion.div variants={item} className="w-full">
                    <Footer />
                </motion.div>

            </motion.div>
        </div>
    );
}

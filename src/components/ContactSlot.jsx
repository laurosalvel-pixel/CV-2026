import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';

const TypewriterText = ({ text }) => {
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        let i = 0;
        setDisplayedText("");
        const timer = setInterval(() => {
            if (i < text.length) {
                setDisplayedText(text.slice(0, i + 1));
                i++;
            } else {
                clearInterval(timer);
            }
        }, 50);

        return () => clearInterval(timer);
    }, [text]);

    return (
        <span className="inline align-middle">
            {displayedText}
            <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                className="inline-block w-[0.08em] h-[0.9em] bg-[#111] ml-[4px] align-middle -mt-[0.1em]"
            />
        </span>
    );
};

export default function ContactSlot({ showProportional, isActive, onVisible, onHidden, onHover, onHoverEnd, onTimelineClick }) {
    const goals = [
        "Scaling your business?",
        "Turning ideas into revenue?",
        "Building something new?"
    ];

    const [currentGoalIndex, setCurrentGoalIndex] = useState(0);
    const [showContact, setShowContact] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                onVisible?.('contact');
            } else {
                onHidden?.('contact');
            }
        }, { threshold: 0.1, rootMargin: "-30% 0px -50% 0px" });

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [onVisible, onHidden]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentGoalIndex((prev) => (prev + 1) % goals.length);
        }, 3500);
        return () => clearInterval(interval);
    }, []);

    const buttons = [
        { label: 'lauro.salvel@gmail.com', icon: 'lucide:mail', href: 'mailto:lauro.salvel@gmail.com', w: 236 },
        { label: '+41 79 915 89 49', icon: 'lucide:phone', href: 'tel:+41799158949', w: 196 },
        { label: 'WhatsApp', icon: 'lucide:message-circle', href: 'https://wa.me/41799158949', w: 140 },
        { label: 'LinkedIn', icon: 'lucide:linkedin', href: 'https://www.linkedin.com/in/lauro-salvel-330532195/', w: 136 }
    ];

    return (
        <div 
            id="contact"
            ref={ref}
            onMouseEnter={() => onHover?.('contact')}
            onMouseLeave={() => onHoverEnd?.('contact')}
            className="relative pl-[44px] pb-[40px] w-full max-w-[700px]"
        >
            {/* Timeline Line Segment (Connects down to real positions) */}
            <div
                className={`absolute left-[3.5px] w-[3px] rounded-full z-0 pointer-events-none transition-colors duration-500 ease-out ${!showProportional ? 'bg-black' : (isActive ? 'bg-black' : 'bg-[#E5E5E5]')}`}
                style={{ top: '35px', bottom: '-40px' }}
            ></div>

            {/* Glowing Open Position Dot */}
            <div
                onClick={(e) => { e.stopPropagation(); onTimelineClick?.('contact'); }}
                className={`absolute left-[-1.5px] top-[35px] w-[13px] h-[13px] rounded-full z-10 flex items-center justify-center shadow-[0_0_10px_rgba(0,0,0,0.15)] cursor-pointer transition-transform duration-300 hover:scale-125
                    ${!showProportional ? 'bg-black' : (isActive ? 'bg-black scale-110' : 'bg-[#E5E5E5]')}`}
            >
                <motion.div
                    animate={{ scale: [1, 1.6, 1], opacity: [0.5, 0.1, 0.5] }}
                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                    className={`absolute inset-0 rounded-full pointer-events-none ${!showProportional ? 'bg-black' : (isActive ? 'bg-black' : 'bg-[#E5E5E5]')} `}
                />
            </div>

            {/* Header */}
            <div className="mb-2 text-[#555] text-[13px] font-medium tracking-widest uppercase">
                OPEN TO WORK
            </div>
            
            <h2 
                onClick={() => onTimelineClick?.('contact')}
                className="text-[28px] sm:text-[32px] font-[700] text-[#111] tracking-tight leading-snug sm:leading-none mb-8 min-h-[70px] sm:min-h-[40px] flex items-center cursor-pointer hover:opacity-80 transition-opacity w-fit pr-4"
            >
                <TypewriterText text={goals[currentGoalIndex]} />
            </h2>

            {/* Interactive Fanning Buttons */}
            <div className="flex flex-wrap items-center relative z-20 min-h-[52px] gap-3 pb-2">
                <button
                    onClick={() => setShowContact(!showContact)}
                    className="group relative flex items-center gap-2 px-6 h-[48px] bg-[#111] rounded-full text-[14px] font-[600] text-white overflow-hidden shadow-[0_4px_14px_rgba(0,0,0,0.15)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.2)] transition-all duration-300 shrink-0 z-30"
                >
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out rounded-full pointer-events-none" />
                    <span className="relative z-10 flex items-center gap-2 min-w-[75px] justify-center">
                        {showContact ? (
                            <><Icon icon="lucide:x" className="text-[16px]" /> Close</>
                        ) : (
                            <>Let's Talk <Icon icon="lucide:arrow-right" className="text-[16px] group-hover:translate-x-1 transition-transform" /></>
                        )}
                    </span>
                </button>

                <AnimatePresence>
                        {showContact && buttons.map((btn, idx) => (
                            <motion.a
                                key={idx}
                                href={btn.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                variants={{
                                    hidden: { 
                                        opacity: 0, 
                                        width: 0,
                                        paddingLeft: 0,
                                        paddingRight: 0
                                    },
                                    visible: { 
                                        opacity: 1, 
                                        width: btn.w,
                                        paddingLeft: 24, 
                                        paddingRight: 24
                                    }
                                }}
                                transition={{ 
                                    duration: 0.25, 
                                    ease: "easeOut" 
                                }}
                                className="group relative flex items-center justify-center gap-2 h-[48px] bg-[#111] rounded-full text-[14px] font-[600] text-white overflow-hidden shadow-[0_4px_14px_rgba(0,0,0,0.15)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.2)] transition-colors duration-300 shrink-0 whitespace-nowrap"
                            >
                                <div className="absolute inset-0 w-full h-full bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out rounded-full pointer-events-none" />
                                <span className="relative z-10 flex items-center gap-2">
                                    <Icon icon={btn.icon} className="text-[16px] shrink-0" />
                                    <span>{btn.label}</span>
                                </span>
                            </motion.a>
                        ))}
                    </AnimatePresence>
            </div>
        </div>
    );
}

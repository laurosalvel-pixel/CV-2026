import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Position({
    id,
    date,
    title,
    company,
    promotions = [],
    tags,
    sections,
    isCurrent = false,
    isLast = false,
    isActive = false,
    showProportional = false,
    defaultActiveTab = null,
    onVisible,
    onHidden,
    onHover,
    onHoverEnd,
    onTimelineClick
}) {
    const [activeTab, setActiveTab] = useState(defaultActiveTab);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                onVisible?.(id);
            } else {
                onHidden?.(id);
            }
        }, { threshold: 0.1, rootMargin: "-30% 0px -50% 0px" });

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [id, onVisible, onHidden]);

    const activeSection = sections.find((s) => s.id === activeTab);

    return (
        <div
            id={id}
            ref={ref}
            onMouseEnter={() => onHover?.(id)}
            onMouseLeave={() => onHoverEnd?.(id)}
            className="relative pl-[44px]"
        >
            {/* Timeline Line Segment (Connects to next dot) */}
            {!isLast && (
                <div
                    className={`absolute left-[3.5px] w-[3px] rounded-full z-0 pointer-events-none transition-colors duration-500 ease-out
                        ${!showProportional ? 'bg-black' : (isActive ? 'bg-black' : 'bg-[#E5E5E5]')}`}
                    style={{ top: '35px', bottom: '-40px' }}
                ></div>
            )}

            {/* Timeline Dot */}
            <div
                onClick={(e) => { e.stopPropagation(); onTimelineClick?.(id); }}
                className={`absolute left-0 w-[13px] h-[13px] rounded-full z-10 transition-transform duration-300 transition-colors cursor-pointer hover:scale-125
                    ${!showProportional ? 'bg-[#111]' : (isActive ? 'bg-[#111] scale-110' : 'bg-[#E5E5E5]')}`}
                style={{ left: '-1.5px', top: '35px' }}
                aria-label={`Position dot for ${title}`}
            />

            {/* Header */}
            <div className="mb-1 text-text-secondary text-[14px]">
                {date}
            </div>
            <h2 
                onClick={() => onTimelineClick?.(id)}
                className="text-[20px] font-[600] text-text-primary tracking-tight leading-snug mb-1 cursor-pointer hover:text-black hover:opacity-80 transition-opacity w-fit"
            >
                {title}
            </h2>
            <div className="text-[15px] font-[400] text-text-primary mb-5 flex items-center gap-1.5">
                <span>{company}</span>
            </div>

            {/* Sub-promotions timeline */}
            {promotions && promotions.length > 0 && (
                <div className="flex flex-col gap-2.5 mb-5 mt-[-2px]">
                    {promotions.map((promo, idx) => (
                        <div key={idx} className="relative flex items-center gap-2 pt-[2px] pb-[2px]">
                            {/* Sub-timeline solid black dot matched to main timeline axis */}
                            <div
                                className={`absolute w-[9px] h-[9px] rounded-full z-10 transition-colors duration-300
                                    ${!showProportional ? 'bg-[#111]' : (isActive ? 'bg-[#111]' : 'bg-[#E5E5E5]')}`}
                                style={{ left: '-43.5px' }}
                            />
                            <span className="text-[13px] text-text-secondary w-[65px]">{promo.date},</span>
                            <span className="text-[14px] text-text-primary tracking-tight font-medium">{promo.title}</span>
                        </div>
                    ))}
                </div>
            )}

            {/* Static Tags (Top Row) */}
            <div className="flex items-center gap-2 flex-wrap mb-3">
                {tags.map((tag) => (
                    <span key={tag} className="tag">
                        {tag}
                    </span>
                ))}
            </div>

            {/* Interactive Tabs (Bottom Row, matching Tag sizes) */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
                {sections.map((section) => {
                    const isActive = activeTab === section.id;
                    return (
                        <button
                            key={section.id}
                            onClick={() => setActiveTab(isActive ? null : section.id)}
                            className={`
                flex items-center justify-center rounded-full border transition-all duration-300 ease-in-out
                ${isActive
                                    ? 'px-3 py-1.5 bg-[#111111] border-[#111111] shadow-sm'
                                    : 'px-2 py-1.5 bg-transparent border-[#CCC] hover:bg-[#EAEAEA]/50'}
                h-[28px] /* Match tag height strictly */
              `}
                        >
                            <div className={`${isActive ? 'text-white' : 'text-text-primary'} flex items-center justify-center`}>
                                {section.icon}
                            </div>
                            <AnimatePresence>
                                {isActive && (
                                    <motion.span
                                        initial={{ width: 0, opacity: 0 }}
                                        animate={{ width: "auto", opacity: 1 }}
                                        exit={{ width: 0, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="ml-1.5 text-[12px] font-medium text-white overflow-hidden whitespace-nowrap"
                                    >
                                        {section.label}
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </button>
                    );
                })}
            </div>

            {/* Expanded Content Area Smooth Expansion with Standardized min-height */}
            <AnimatePresence mode="wait">
                {activeSection && (
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        style={{ overflow: 'hidden' }}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                            className="w-full min-h-[140px] pt-1 pb-4"
                        >
                            {activeSection.content}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

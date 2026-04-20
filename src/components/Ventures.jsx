import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import straightFactsImg from '../../raw_content_videos_pictures/StraightFacts_Picture_01.jpg';
import straightFactsLogo from '../../raw_content_videos_pictures/StraightFacts_Logo_negative.svg';
import sierra22Img from '../../raw_content_videos_pictures/Music_Header_big.jpg';
import mediaBongoImg from '../../raw_content_videos_pictures/MediaBongo_Picture_Ventures.png';
import mediaBongoLogo from '../../raw_content_videos_pictures/MediaBongo_Logo_negativ.svg';
import Footer from './Footer';
const VentureCard = ({ venture }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div className="relative w-full min-h-[620px] sm:min-h-[600px] [perspective:2000px] mb-16 sm:mb-24 last:mb-0">
            <motion.div
                initial={false}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
                style={{ transformStyle: 'preserve-3d', WebkitTransformStyle: 'preserve-3d' }}
                className="w-full h-full relative min-h-[620px] sm:min-h-[600px] rounded-[24px] sm:rounded-[32px] cursor-pointer shadow-[0_24px_60px_rgba(0,0,0,0.1)] border border-[#E5E5E5]/50 group"
                onClick={() => setIsFlipped(!isFlipped)}
            >
                {/* --- FRONT PANEL --- */}
                <div 
                    style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', backgroundColor: '#111', transform: 'translateZ(1px)' }}
                    className={`absolute inset-0 w-full h-full rounded-[24px] sm:rounded-[32px] overflow-hidden flex flex-col justify-end ${isFlipped ? 'pointer-events-none' : 'pointer-events-auto'}`}
                >
                    {/* Background Image Layer */}
                    <div className="absolute inset-0 w-full h-full z-0" style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}>
                        <img 
                            src={venture.image} 
                            alt={venture.title} 
                            className="w-full h-full object-cover opacity-60 group-hover:opacity-75 transition-opacity duration-700"
                        />
                        {/* Dramatic Gradient Overlay for text legibility */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent sm:bg-gradient-to-r sm:from-black/95 sm:via-black/60 sm:to-transparent" />
                    </div>

                    {/* Top Context Bar: Status Pill & Flip Affordance */}
                    <div className="absolute top-6 left-6 sm:top-8 sm:left-8 z-20 flex items-center gap-3" style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}>
                        {venture.status && (
                            <div className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 shadow-sm max-w-full">
                                {venture.status === 'Archived' ? (
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#EF4444] shrink-0 shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
                                ) : (
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#10B981] shrink-0 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                                )}
                                <span className="text-white text-[12px] font-bold uppercase tracking-widest truncate">{venture.status}</span>
                            </div>
                        )}
                    </div>

                    {/* Foreground Content HUD */}
                    <div className="relative z-10 w-full p-6 sm:p-12 md:p-16 flex flex-col justify-end" style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}>
                        <div className="max-w-[700px]">
                            {/* Subtitle Metadata */}
                            <h3 className="text-[#A3A3A3] text-[12px] font-semibold uppercase tracking-widest mb-4 sm:mb-6 leading-relaxed">
                                {venture.subtitle.replace(/ · /g, (match) => ` ${String.fromCharCode(8226)} `)}
                            </h3>

                            {/* Logo or Title */}
                            {venture.logo ? (
                                <img src={venture.logo} alt={`${venture.title} Logo`} className={`${venture.logoClass || 'h-[36px] sm:h-[48px]'} w-auto object-contain mb-5 sm:mb-8 drop-shadow-lg`} />
                            ) : (
                                <h2 className="text-[32px] sm:text-[40px] font-[800] text-white tracking-tight leading-none mb-5 sm:mb-8 drop-shadow-lg">
                                    {venture.title}
                                </h2>
                            )}

                            {/* Two-Column Information Layout */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-10">
                                <div>
                                    <h4 className="text-white/40 text-[11px] font-bold uppercase tracking-widest mb-3 flex items-center gap-2">
                                        <Icon icon="lucide:info" className="text-[13px]" /> About
                                    </h4>
                                    <p className="text-white/90 text-[15px] leading-relaxed font-medium drop-shadow-sm pr-4">
                                        {venture.about}
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-white/40 text-[11px] font-bold uppercase tracking-widest mb-3 flex items-center gap-2">
                                        <Icon icon="lucide:target" className="text-[13px]" /> Value Proposition
                                    </h4>
                                    <p className="text-white/90 text-[15px] leading-relaxed font-medium drop-shadow-sm pr-4">
                                        {venture.value}
                                    </p>
                                </div>
                            </div>

                            {/* Roles Stack */}
                            <div className="flex flex-col gap-3">
                                <span className="text-white/40 text-[11px] font-bold uppercase tracking-[0.2em]">ROLES:</span>
                                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                                    {venture.roles.map((role, idx) => (
                                        <div key={idx} className="px-3 py-1.5 sm:px-5 sm:py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white text-[12px] sm:text-[13px] font-semibold tracking-wide shadow-sm" style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}>
                                            {role}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- BACK PANEL --- */}
                <div 
                    style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', transform: 'rotateY(180deg) translateZ(1px)' }}
                    className={`absolute inset-0 w-full h-full rounded-[24px] sm:rounded-[32px] bg-[#fafafa] flex flex-col p-6 sm:p-12 ${isFlipped ? 'pointer-events-auto' : 'pointer-events-none'}`}
                >
                    {/* Scrollable Content Container */}
                    {venture.backDetails && (
                        <div className="flex-1 w-full overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] flex flex-col items-center">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 sm:gap-x-20 gap-y-10 w-full h-max pb-24 pt-4">
                                
                                {/* Left Column */}
                                <div className="flex flex-col gap-8">
                                    {venture.backDetails.leftSections?.map((section, idx) => (
                                        <div key={idx}>
                                            <h4 className="text-[#888] text-[11px] font-bold uppercase tracking-widest mb-3">{section.title}</h4>
                                            {section.type === 'text' && (
                                                <p className="text-[#333] text-[15px] leading-relaxed font-medium">
                                                    {section.content}
                                                </p>
                                            )}
                                            {section.type === 'list' && (
                                                <ul className="flex flex-col gap-2.5">
                                                    {section.items.map((item, id) => (
                                                        <li key={id} className="text-[#333] text-[15px] leading-relaxed font-medium flex items-start gap-2.5">
                                                            <Icon icon="lucide:check" className="text-[#10B981] mt-1.5 shrink-0" />
                                                            <span>{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                            {section.type === 'metric' && (
                                                <p className="text-[18px] font-bold text-[#111]">{section.content}</p>
                                            )}
                                        </div>
                                    ))}
                                </div>

                                {/* Right Column */}
                                <div className="flex flex-col gap-8">
                                    {venture.backDetails.rightSections?.map((section, idx) => (
                                        <div key={idx}>
                                            <h4 className="text-[#888] text-[11px] font-bold uppercase tracking-widest mb-3">{section.title}</h4>
                                            {section.type === 'text' && (
                                                <p className="text-[#333] text-[15px] leading-relaxed font-medium">
                                                    {section.content}
                                                </p>
                                            )}
                                            {section.type === 'list' && (
                                                <ul className="flex flex-col gap-2.5">
                                                    {section.items.map((item, id) => (
                                                        <li key={id} className="text-[#333] text-[15px] leading-relaxed font-medium flex items-start gap-2.5">
                                                            <Icon icon="lucide:check" className="text-[#10B981] mt-1.5 shrink-0" />
                                                            <span>{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                            {section.type === 'metric' && (
                                                <p className="text-[18px] font-bold text-[#111]">{section.content}</p>
                                            )}
                                        </div>
                                    ))}
                                </div>

                            </div>
                        </div>
                    )}
                    
                    {/* Fixed Action Button */}
                    {venture.backDetails?.link && (
                        <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-10 z-[60]">
                            <a 
                                href={`https://${venture.backDetails.link}`} 
                                target="_blank" 
                                rel="noreferrer"
                                onClickCapture={(e) => e.stopPropagation()}
                                onPointerDownCapture={(e) => e.stopPropagation()}
                                className="relative flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#111] hover:bg-[#333] transition-colors text-white text-[13px] font-bold tracking-wide shadow-xl active:scale-95"
                            >
                                <span className="pointer-events-none">Visit {venture.backDetails.linkText || venture.backDetails.link}</span>
                                <span className="pointer-events-none"><Icon icon="lucide:external-link" /></span>
                            </a>
                        </div>
                    )}
                </div>
            </motion.div>
        </div>
    );
};

export default function Ventures() {
    const ventures = [
        {
            id: 'straightfacts',
            title: 'StraightFacts',
            logo: straightFactsLogo,
            subtitle: 'Chrome Extension · AI · Knowledge System',
            about: 'Turn YouTube videos into structured, usable knowledge, directly inside your browser.',
            value: 'No switching. No copy-pasting. Just extraction.',
            roles: ['Founder', 'Developer'],
            status: 'Active · Ongoing development',
            image: straightFactsImg,
            backDetails: {
                leftSections: [
                    { title: 'Positioning', type: 'text', content: 'A local-first tool that turns long-form video into structured, usable knowledge.' },
                    { title: 'Target', type: 'text', content: 'Students, researchers and professionals who want to get value from content quickly.' },
                    { title: 'Core Insight', type: 'text', content: 'Most content is watched and forgotten. Real value comes from extracting and structuring information so it can be reused.' }
                ],
                rightSections: [
                    { title: 'How it Works', type: 'list', items: [
                        'AI summaries in different formats (neutral, tutorial, facts, article)',
                        'Sidebar directly inside YouTube',
                        'Notes, search and structured storage',
                        'Local setup with user-controlled API usage'
                    ]},
                    { title: 'Status', type: 'list', items: [
                        'Active · Ongoing development',
                        'Built and operated solo'
                    ]},
                    { title: 'Why it Matters', type: 'text', content: 'It shifts video consumption from passive watching to active knowledge building.' }
                ],
                link: "chromewebstore.google.com/detail/straightfacts/aoopdiojoiciljpanhkloeopaklcdhaa",
                linkText: "Chrome Web Store"
            }
        },
        {
            id: 'mediabongo',
            title: 'MediaBongo',
            logo: mediaBongoLogo,
            logoClass: 'h-[32px] sm:h-[38px]',
            subtitle: 'Marketing · Branding · Strategy',
            about: 'A lean approach to branding and marketing, focused on turning attention into structured value and dealflow.',
            value: 'High-level execution without the complexity of traditional agencies.',
            roles: ['Founder', 'Positioning', 'Visual Identity'],
            status: 'Active',
            image: mediaBongoImg,
            backDetails: {
                leftSections: [
                    { title: 'Positioning', type: 'text', content: 'A lean, system-driven approach to branding and marketing focused on turning attention into measurable value.' },
                    { title: 'Target', type: 'text', content: 'Small business owners who want strong execution without the cost and complexity of traditional agencies.' },
                    { title: 'Core Insight', type: 'text', content: 'Most small businesses struggle with execution. It is often too slow, too expensive or too complex.' }
                ],
                rightSections: [
                    { title: 'How it Works', type: 'list', items: [
                        'Lean setup with international production resources',
                        'Direct client advisory and fast iteration',
                        'Reusable systems instead of one-off solutions',
                        'Clear focus on positioning and execution'
                    ]},
                    { title: 'Revenue', type: 'metric', content: '~CHF 15k per year' },
                    { title: 'Why it Matters', type: 'text', content: 'It removes agency friction and gives clients more control, speed and clarity.' }
                ],
                link: "mediabongo.ch",
                linkText: "mediabongo.ch"
            }
        },
        {
            id: 'sierra22',
            title: 'SIERRA22',
            subtitle: 'Music · Content · Audience',
            about: 'Started as a personal music project and grew into an audience of 9k+ followers and 500k+ views built organically.',
            value: 'A hands-on experience in understanding what gets attention, what doesn’t, and how content actually spreads.',
            roles: ['Creator', 'Brand Manager'],
            status: 'Archived',
            image: sierra22Img,
            backDetails: {
                leftSections: [
                    { title: 'Positioning', type: 'text', content: 'A personal music project that grew into an organic audience through consistent content and experimentation.' },
                    { title: 'Target', type: 'text', content: 'Short-form content consumers and music-driven audiences on TikTok.' },
                    { title: 'Core Insight', type: 'text', content: 'Attention is not random. It is driven by format, timing, consistency and understanding what people respond to.' }
                ],
                rightSections: [
                    { title: 'How I Worked', type: 'list', items: [
                        'Consistent content creation and publishing',
                        'Testing formats, sounds and visuals',
                        'Adapting to trends',
                        'Learning through iteration'
                    ]},
                    { title: 'Metrics', type: 'list', items: [
                        '9k+ followers',
                        '75k+ likes',
                        '500k+ views'
                    ]},
                    { title: 'Why it Matters', type: 'text', content: 'This was my first real experience building something from zero and reaching an audience. It shaped how I think about content, attention and distribution.' }
                ],
                link: "www.tiktok.com/@sierra22.music",
                linkText: "TikTok Profile"
            }
        }
    ];

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-[1200px] mx-auto pt-32 px-6 sm:px-10 pb-32"
        >
            <div className="max-w-[800px] mb-12 sm:mb-16">
                <h1 className="text-[32px] sm:text-[40px] font-[800] text-[#111] mb-6 tracking-tight leading-none">Ventures</h1>
                <p className="text-[#555] text-[16px] sm:text-[18px] leading-relaxed max-w-prose">
                    Here's where I show my projects. A collection of ideas, businesses, and creative explorations that have defined my entrepreneurial journey.
                </p>
            </div>

            <div className="flex flex-col">
                {ventures.map((venture) => (
                    <VentureCard key={venture.id} venture={venture} />
                ))}
            </div>

            <Footer />
        </motion.div>
    );
}

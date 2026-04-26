import React, { useEffect } from 'react';
import { allRoles } from '../data/roles';

export default function CvPdf() {
    useEffect(() => {
        // Automatically open the print dialog when the component mounts
        const timer = setTimeout(() => {
            window.print();
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    const cvRoles = allRoles.filter(role => !role.id.toString().startsWith('history-'));
    const historicalRoles = allRoles.filter(role => role.id.toString().startsWith('history-'));

    // Helper function to extract overview/description paragraph
    const getOverview = (sections) => {
        const descSection = sections.find(s => s.id === 'description');
        if (!descSection) return null;
        // The content inside description is usually a grid containing a p tag.
        // For print, we just want to extract the raw string if possible, or render it cleanly.
        // It's safer to map but drop the heavy backgrounds. We'll rely on global CSS overrides for background colors.
        return descSection.content;
    };

    // Define clean, text-based performance statements for the PDF print logic specifically
    // This entirely circumvents the website UI component grids to maintain a strict, professional document flow
    const printPerformanceData = {
        'digt': [
            "Generated CHF 1.4M+ in Sales",
            "Acquired and managed 100+ Clients",
            "Conducted 300+ Consultations",
            "Driven CHF 4.9M+ in Incremental Revenue"
        ],
        'velocity': [
            "Achieved +20% Community-Growth",
            "Established 3 Core Campaign Formats",
            "Supported 2 Major Events"
        ],
        'mybikeplan': [
            "Managed CHF 100k Budget responsibility",
            "Reduced Customer Acquisition Cost (CAC) by 20%",
            "Developed 10 Custom Campaign Formats",
            "Drove +40% Community-Growth"
        ]
    };

    return (
        <div className="bg-white min-h-screen text-black font-sans leading-relaxed cv-print-container">
            <div className="max-w-[800px] mx-auto py-12 px-8">
                
                {/* Header */}
                <header className="mb-12 border-b border-gray-300 pb-8 flex items-start gap-6">
                    <div className="w-[100px] h-[100px] rounded-full overflow-hidden shrink-0 border border-gray-200">
                        <img src="/portrait.jpg" alt="Lauro Salvel" className="w-full h-full object-cover grayscale" />
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-4xl font-extrabold tracking-tight mb-2">Lauro Salvel</h1>
                        <p className="text-lg text-gray-700 font-medium mb-3">Building tools and brands with precision.</p>
                        
                        <div className="flex flex-wrap gap-x-4 gap-y-1 text-[13px] font-medium text-gray-500">
                            <span>Phone: +41 79 915 89 49</span>
                            <span>•</span>
                            <span>Email: lauro.salvel@gmail.com</span>
                            <span>•</span>
                            <span>LinkedIn: linkedin.com/in/lauro-salvel-330532195</span>
                        </div>
                    </div>
                </header>

                {/* Main Experience */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold tracking-tight mb-6 uppercase text-gray-800 tracking-widest border-b border-gray-200 pb-2">Experience</h2>
                    <div className="flex flex-col gap-10">
                        {cvRoles.map((role, idx) => (
                            <div key={`cv-${idx}`} className="avoid-page-break">
                                <div className="mb-3">
                                    <h3 className="text-xl font-bold text-black">{role.title}</h3>
                                    <div className="flex font-medium text-gray-600 text-sm mt-1 justify-between">
                                        <span>{role.company}</span>
                                        <span>{role.date}</span>
                                    </div>
                                </div>
                                <div className="text-gray-800 text-[13px] leading-relaxed mb-3">
                                    {getOverview(role.sections)}
                                </div>
                                
                                {/* Add performance data logically as plain text bullets */}
                                {idx < 3 && printPerformanceData[role.id] && (
                                    <div className="mb-4 mt-4">
                                        <h3 className="text-[12px] font-bold text-black mb-2 uppercase tracking-tight">Key Achievements</h3>
                                        <ul className="list-disc pl-5 text-gray-800 text-[13px] leading-relaxed flex flex-col gap-1">
                                            {printPerformanceData[role.id].map((bullet, i) => (
                                                <li key={i}>{bullet}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {role.tags && role.tags.length > 0 && (
                                    <div className="flex gap-2 flex-wrap mt-3">
                                        <span className="font-semibold text-xs text-gray-500 py-1 uppercase">Capabilities:</span>
                                        {role.tags.map((tag, i) => (
                                            <span key={i} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-semibold">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Historical Roles */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold tracking-tight mb-6 uppercase text-gray-800 tracking-widest border-b border-gray-200 pb-2">Early History & Education</h2>
                    <div className="flex flex-col gap-8">
                        {historicalRoles.map((role, idx) => (
                            <div key={`hist-${idx}`} className="avoid-page-break">
                                <div className="mb-2">
                                    <h3 className="text-lg font-bold text-black">{role.title}</h3>
                                    <div className="flex font-medium text-gray-600 text-sm mt-1 justify-between">
                                        <span>{role.company}</span>
                                        <span>{role.date.split('|')[0].trim()}</span>
                                    </div>
                                </div>
                                <div className="text-gray-800 text-sm leading-relaxed">
                                    {getOverview(role.sections)}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Ventures */}
                <section className="avoid-page-break">
                    <h2 className="text-2xl font-bold tracking-tight mb-6 uppercase text-gray-800 tracking-widest border-b border-gray-200 pb-2">Selected Ventures</h2>
                    <div className="grid grid-cols-1 gap-6">
                        <div>
                            <h3 className="text-lg font-bold text-black mb-1">StraightFacts <span className="font-normal text-sm text-gray-500">— Founder & Developer</span></h3>
                            <p className="text-sm text-gray-700 font-medium">A local-first Chrome extension that turns long-form YouTube video into structured, usable knowledge.</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-black mb-1">MediaBongo <span className="font-normal text-sm text-gray-500">— Founder</span></h3>
                            <p className="text-sm text-gray-700 font-medium">A lean approach to branding and marketing, focused on turning attention into structured value and dealflow.</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-black mb-1">SIERRA22 <span className="font-normal text-sm text-gray-500">— Creator</span></h3>
                            <p className="text-sm text-gray-700 font-medium">A personal music project testing content and audience strategy, scaling to 500k+ views organically.</p>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}

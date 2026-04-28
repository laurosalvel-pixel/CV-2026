import React, { useEffect } from 'react';

export default function CvPdf() {
    useEffect(() => {
        // Automatically open the print dialog when the component mounts
        const timer = setTimeout(() => {
            window.print();
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="bg-white min-h-screen text-black font-sans leading-snug cv-print-container">
            <div className="max-w-[800px] mx-auto py-10 px-8 text-[13px]">
                
                {/* Header */}
                <header className="mb-6 border-b border-gray-300 pb-5">
                    <h1 className="text-3xl font-extrabold tracking-tight mb-1">Lauro Salvel</h1>
                    <p className="text-[15px] text-gray-800 font-medium mb-2">Growth-focused Marketing & Advertising Manager building tools and brands with precision.</p>
                    
                    <div className="flex gap-4 text-[12px] font-medium text-gray-600">
                        <span>+41 79 915 89 49</span>
                        <span>•</span>
                        <span>lauro.salvel@gmail.com</span>
                        <span>•</span>
                        <span>linkedin.com/in/lauro-salvel-330532195</span>
                        <span>•</span>
                        <span>laurosalvel.ch</span>
                    </div>
                </header>

                {/* Professional Summary */}
                <section className="mb-6">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-2 border-b border-gray-200 pb-1">Professional Summary</h2>
                    <p className="text-gray-800 leading-relaxed text-justify">
                        Dynamic Marketing & Sales Manager with a proven track record of driving commercial growth and building brand partnerships. Adept at consultative selling, campaign strategy, and performance marketing. Scaled advertising ecosystems and delivered over CHF 1.4M+ in sales and CHF 4.9M+ in incremental revenue through strategic client acquisition and retention. I combine creative content execution with data-driven decision-making to optimize customer acquisition costs and drive sustainable community growth.
                    </p>
                </section>

                {/* Skills */}
                <section className="mb-6">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-2 border-b border-gray-200 pb-1">Skills</h2>
                    <div className="flex flex-wrap gap-x-2 gap-y-1 text-gray-800 font-medium">
                        <span>Consultative Selling</span> <span className="text-gray-400">|</span>
                        <span>Business Development</span> <span className="text-gray-400">|</span>
                        <span>Campaign Strategy</span> <span className="text-gray-400">|</span>
                        <span>Performance Marketing</span> <span className="text-gray-400">|</span>
                        <span>Client Acquisition</span> <span className="text-gray-400">|</span>
                        <span>Data Analysis</span> <span className="text-gray-400">|</span>
                        <span>Brand Partnerships</span> <span className="text-gray-400">|</span>
                        <span>Content Creation</span> <span className="text-gray-400">|</span>
                        <span>Video Editing</span> <span className="text-gray-400">|</span>
                        <span>Budget Oversight</span>
                    </div>
                </section>

                {/* Experience */}
                <section className="mb-6">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4 border-b border-gray-200 pb-1">Experience</h2>
                    
                    <div className="flex flex-col gap-6">
                        {/* Digt AG */}
                        <div className="avoid-page-break">
                            <div className="flex justify-between items-baseline mb-1">
                                <h3 className="text-[15px] font-bold text-black">Account Manager Advertising Sales</h3>
                                <span className="font-semibold text-gray-600 text-[12px]">Feb 2024 – Present</span>
                            </div>
                            <div className="text-gray-600 font-medium text-[13px] mb-2">
                                Digt AG | Zurich (Hybrid) | Fulltime
                            </div>
                            <ul className="list-disc pl-5 text-gray-800 leading-relaxed flex flex-col gap-1">
                                <li>Built and scaled advertising partnerships across Fashion, Sports, Health, and Beauty sectors within closed-community platforms.</li>
                                <li>Generated CHF 1.4M+ in sales and drove CHF 4.9M+ in incremental revenue through strategic campaign execution.</li>
                                <li>Acquired and managed over 100 enterprise clients, including HUGO BOSS, Zalando, and Decathlon Group.</li>
                                <li>Conducted 300+ consultative sales sessions, translating marketing insights into actionable commercial results.</li>
                            </ul>
                        </div>

                        {/* Velocity Switzerland */}
                        <div className="avoid-page-break">
                            <div className="flex justify-between items-baseline mb-1">
                                <h3 className="text-[15px] font-bold text-black">Marketing Manager</h3>
                                <span className="font-semibold text-gray-600 text-[12px]">Aug 2023 – Dec 2023</span>
                            </div>
                            <div className="text-gray-600 font-medium text-[13px] mb-2">
                                Velocity Switzerland | Zurich (Hybrid) | 60%
                            </div>
                            <ul className="list-disc pl-5 text-gray-800 leading-relaxed flex flex-col gap-1">
                                <li>Led social media strategy across three locations, achieving a 20% increase in community growth.</li>
                                <li>Developed and established 3 core content campaign formats to standardize and scale marketing output.</li>
                                <li>Directed content creation and video editing initiatives, supporting 2 major community events to boost brand engagement.</li>
                            </ul>
                        </div>

                        {/* MyBikePlan AG */}
                        <div className="avoid-page-break">
                            <div className="flex justify-between items-baseline mb-1">
                                <h3 className="text-[15px] font-bold text-black">Junior Marketing Manager</h3>
                                <span className="font-semibold text-gray-600 text-[12px]">Sep 2021 – Apr 2023</span>
                            </div>
                            <div className="text-gray-600 font-medium text-[13px] mb-2">
                                MyBikePlan AG | Zurich | 80%
                            </div>
                            <ul className="list-disc pl-5 text-gray-800 leading-relaxed flex flex-col gap-1">
                                <li>Managed a CHF 100k marketing budget across Meta, Google, and print media channels.</li>
                                <li>Optimized performance marketing funnels, reducing Customer Acquisition Cost (CAC) by 20%.</li>
                                <li>Developed and executed 10 custom campaign formats, driving a 40% increase in community growth.</li>
                                <li>Progressed rapidly from Content Creator to Performance Marketing Specialist, culminating in the Junior Marketing Manager role.</li>
                            </ul>
                        </div>

                        {/* Early Experience */}
                        <div className="avoid-page-break">
                            <div className="flex justify-between items-baseline mb-1">
                                <h3 className="text-[15px] font-bold text-black">Early Experience</h3>
                                <span className="font-semibold text-gray-600 text-[12px]">2016 – 2021</span>
                            </div>
                            <div className="text-gray-600 font-medium text-[13px] mb-2">
                                Various Companies | Switzerland
                            </div>
                            <ul className="list-disc pl-5 text-gray-800 leading-relaxed flex flex-col gap-1">
                                <li>Delivered brand identities and marketing assets for multiple clients as an independent designer, improving brand consistency and campaign execution.</li>
                                <li>Completed an intensive Mediamatics apprenticeship, building a foundational skillset in project management, design, and digital media.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Education */}
                <section className="mb-6 avoid-page-break">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-3 border-b border-gray-200 pb-1">Education</h2>
                    <div className="flex flex-col gap-3">
                        <div>
                            <div className="flex justify-between items-baseline mb-1">
                                <h3 className="text-[14px] font-bold text-black">Vocational Baccalaureate (Berufsmaturität) in Design & Art</h3>
                                <span className="font-semibold text-gray-600 text-[12px]">2020 – 2021</span>
                            </div>
                            <div className="text-gray-800 text-[13px]">Berufsschule für Gestaltung Zürich (BfGZ)</div>
                        </div>
                        <div>
                            <div className="flex justify-between items-baseline mb-1">
                                <h3 className="text-[14px] font-bold text-black">Federal Diploma of Vocational Education and Training (EFZ) as Mediamatician</h3>
                                <span className="font-semibold text-gray-600 text-[12px]">2016 – 2020</span>
                            </div>
                            <div className="text-gray-800 text-[13px]">Berufsschule für Gestaltung Zürich (BfGZ)</div>
                        </div>
                    </div>
                </section>

                {/* Ventures */}
                <section className="avoid-page-break">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-3 border-b border-gray-200 pb-1">Selected Ventures</h2>
                    <ul className="list-none text-gray-800 leading-relaxed flex flex-col gap-2">
                        <li>
                            <span className="font-bold text-black">StraightFacts</span> — A local-first Chrome extension that turns long-form YouTube video into structured, usable knowledge.
                        </li>
                        <li>
                            <span className="font-bold text-black">MediaBongo</span> — A lean branding and marketing initiative focused on turning attention into structured value and dealflow.
                        </li>
                    </ul>
                </section>

            </div>
        </div>
    );
}

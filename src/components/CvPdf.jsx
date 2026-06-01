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
                <header className="mb-6 border-b border-gray-300 pb-5 flex items-start gap-6">
                    <div className="w-[80px] h-[80px] rounded-full overflow-hidden shrink-0 border border-gray-200">
                        <img src="/portrait.jpg" alt="Lauro Salvel" className="w-full h-full object-cover grayscale" />
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-3xl font-extrabold tracking-tight mb-1">Lauro Salvel</h1>
                        <p className="text-[15px] text-gray-800 font-medium mb-2">Building tools and brands with precision.</p>
                        
                        <div className="flex flex-wrap gap-x-4 gap-y-1 text-[12px] font-medium text-gray-600">
                            <span className="whitespace-nowrap">+41 79 915 89 49</span>
                            <span>•</span>
                            <span className="whitespace-nowrap">lauro.salvel@gmail.com</span>
                            <span>•</span>
                            <span className="whitespace-nowrap">linkedin.com/in/laurosalvel</span>
                            <div className="basis-full h-0" />
                            <span className="whitespace-nowrap">laurosalvel.ch</span>
                        </div>
                    </div>
                </header>

                {/* Professional Summary */}
                <section className="mb-6">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-2 border-b border-gray-200 pb-1">Professional Summary</h2>
                    <p className="text-gray-800 leading-relaxed text-justify">
                        Lauro Salvel has a foundation in design and structured visual thinking, with a strong understanding of users and communication. Trained through a 4-year Swiss EFZ apprenticeship in Graphic Design, he developed a deep sense for clarity, systems, and execution. He built on this foundation by managing marketing across multiple brands with 6-figure budget responsibility, consistently exceeding growth targets. He later expanded into commercial execution in sales, generating CHF 1.4M+ in direct sales and CHF 4.9M+ in incremental revenue through partnerships and performance-driven work. Lauro combines design, business logic, and analytical thinking to turn ideas into structured, scalable outcomes, with a growing focus on AI-driven ventures, fintech, and finance.
                    </p>
                </section>

                {/* Skills */}
                <section className="mb-6">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-2 border-b border-gray-200 pb-1">Skills</h2>
                    <div className="flex flex-wrap gap-x-2 gap-y-1 text-gray-800 font-medium">
                        <span>Business Development</span> <span className="text-gray-400">|</span>
                        <span>Revenue Thinking</span> <span className="text-gray-400">|</span>
                        <span>Data Analysis</span> <span className="text-gray-400">|</span>
                        <span>Consultative Selling</span> <span className="text-gray-400">|</span>
                        <span>Campaign Strategy</span> <span className="text-gray-400">|</span>
                        <span>Performance Optimization</span> <span className="text-gray-400">|</span>
                        <span>User Understanding</span> <span className="text-gray-400">|</span>
                        <span>Visual Communication</span> <span className="text-gray-400">|</span>
                        <span>Content Execution</span> <span className="text-gray-400">|</span>
                        <span>Budget Ownership</span>
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
                                Digt AG | Fulltime, Hybrid, Zurich
                            </div>
                            <ul className="list-disc pl-5 text-gray-800 leading-relaxed flex flex-col gap-1">
                                <li>Built and managed partnerships across Fashion, Sports, Health, and Beauty within closed digital ecosystems</li>
                                <li>Generated CHF 1.4M+ in direct sales and CHF 4.9M+ in incremental revenue through structured deal execution</li>
                                <li>Conducted 300+ consultations, translating client needs into commercially viable campaign setups</li>
                                <li>Managed relationships with 100+ brands including HUGO BOSS, Zalando, and Decathlon</li>
                            </ul>
                        </div>

                        {/* Velocity Switzerland */}
                        <div className="avoid-page-break">
                            <div className="flex justify-between items-baseline mb-1">
                                <h3 className="text-[15px] font-bold text-black">Marketing Manager</h3>
                                <span className="font-semibold text-gray-600 text-[12px]">Aug 2023 – Dec 2023</span>
                            </div>
                            <div className="text-gray-600 font-medium text-[13px] mb-2">
                                Velocity Switzerland | 60%, Hybrid, Zurich
                            </div>
                            <ul className="list-disc pl-5 text-gray-800 leading-relaxed flex flex-col gap-1">
                                <li>Structured growth initiatives across three locations, improving visibility and community engagement</li>
                                <li>Increased community size by 20% through consistent content and distribution execution</li>
                                <li>Developed repeatable campaign structures to standardize output and improve efficiency</li>
                                <li>Supported execution of two major events with direct impact on reach and positioning</li>
                            </ul>
                        </div>

                        {/* MyBikePlan AG */}
                        <div className="avoid-page-break">
                            <div className="flex justify-between items-baseline mb-1">
                                <h3 className="text-[15px] font-bold text-black">Junior Marketing Manager</h3>
                                <span className="font-semibold text-gray-600 text-[12px]">Sep 2021 – Apr 2023</span>
                            </div>
                            <div className="text-gray-600 font-medium text-[13px] mb-2">
                                MyBikePlan AG | 80%, Zurich
                            </div>
                            <ul className="list-disc pl-5 text-gray-800 leading-relaxed flex flex-col gap-1">
                                <li>Managed marketing channels including Meta, Google, and print with CHF 100k budget responsibility</li>
                                <li>Reduced Customer Acquisition Cost (CAC) by 20% through performance optimization</li>
                                <li>Built and executed campaign structures contributing to +40% community growth</li>
                                <li>Combined analytical planning with hands-on execution across all major activities</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Foundation in Design */}
                <section className="mb-6">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4 border-b border-gray-200 pb-1">Foundation in Design</h2>
                    
                    <div className="flex flex-col gap-6">
                        {/* KOMMPAKT AG Apprentice */}
                        <div className="avoid-page-break">
                            <div className="flex justify-between items-baseline mb-1">
                                <h3 className="text-[15px] font-bold text-black">Graphic Design EFZ Apprentice</h3>
                                <span className="font-semibold text-gray-600 text-[12px]">Aug 2014 – Aug 2018</span>
                            </div>
                            <div className="text-gray-600 font-medium text-[13px] mb-2">
                                KOMMPAKT AG | Fulltime, Baden
                            </div>
                            <ul className="list-disc pl-5 text-gray-800 leading-relaxed flex flex-col gap-1">
                                <li>Completed a 4-year Swiss Federal VET apprenticeship (EFZ) in Graphic Design</li>
                                <li>Developed strong fundamentals in typography, layout, color systems, and visual hierarchy</li>
                                <li>Worked in a real agency environment across print and digital projects</li>
                                <li>Built a structured approach to problem-solving, user understanding, and execution that continues to shape all current work</li>
                            </ul>
                        </div>

                        {/* KOMMPAKT AG Designer */}
                        <div className="avoid-page-break">
                            <div className="flex justify-between items-baseline mb-1">
                                <h3 className="text-[15px] font-bold text-black">Graphic Designer</h3>
                                <span className="font-semibold text-gray-600 text-[12px]">Aug 2018 – Jan 2019</span>
                            </div>
                            <div className="text-gray-600 font-medium text-[13px] mb-2">
                                KOMMPAKT AG
                            </div>
                            <ul className="list-disc pl-5 text-gray-800 leading-relaxed flex flex-col gap-1">
                                <li>Took ownership of larger client projects across print and digital media</li>
                                <li>Applied design systems to real commercial use cases</li>
                            </ul>
                        </div>

                        {/* Freelance Designer */}
                        <div className="avoid-page-break">
                            <div className="flex justify-between items-baseline mb-1">
                                <h3 className="text-[15px] font-bold text-black">Freelance Designer</h3>
                                <span className="font-semibold text-gray-600 text-[12px]">Feb 2020 – Mar 2021</span>
                            </div>
                            <ul className="list-disc pl-5 text-gray-800 leading-relaxed flex flex-col gap-1">
                                <li>Delivered brand identities and digital assets for multiple clients</li>
                                <li>Translated business ideas into visual systems and communication</li>
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
                                <h3 className="text-[14px] font-bold text-black">BA of Science in Digital Business Management</h3>
                                <span className="font-semibold text-gray-600 text-[12px]">Sep 2021 – Mar 2022 | 1st Semester</span>
                            </div>
                            <div className="text-gray-800 text-[13px]">Fachhochschule Graubünden</div>
                        </div>
                        <div>
                            <div className="flex justify-between items-baseline mb-1">
                                <h3 className="text-[14px] font-bold text-black">BMS Professional Maturity Certificate</h3>
                                <span className="font-semibold text-gray-600 text-[12px]">Aug 2020 – Jun 2021</span>
                            </div>
                            <div className="text-gray-800 text-[13px]">Design & Arts</div>
                        </div>
                    </div>
                </section>

                {/* Independent Ventures */}
                <section className="avoid-page-break">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-3 border-b border-gray-200 pb-1">Independent Ventures</h2>
                    <ul className="list-none text-gray-800 leading-relaxed flex flex-col gap-2">
                        <li>
                            <span className="font-bold text-black">StraightFacts</span> — Development of AI-Chrome extension turning long-form content into structured knowledge
                        </li>
                        <li>
                            <span className="font-bold text-black">MediaBongo</span> — Built Branding Agency focused on structuring attention into measurable business outcomes
                        </li>
                    </ul>
                </section>

            </div>
        </div>
    );
}

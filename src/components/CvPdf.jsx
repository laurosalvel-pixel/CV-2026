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
                        
                        <div className="flex gap-4 text-[12px] font-medium text-gray-600">
                            <span>+41 79 915 89 49</span>
                            <span>•</span>
                            <span>lauro.salvel@gmail.com</span>
                            <span>•</span>
                            <span>linkedin.com/in/lauro-salvel-330532195</span>
                            <span>•</span>
                            <span>laurosalvel.ch</span>
                        </div>
                    </div>
                </header>

                {/* Professional Summary */}
                <section className="mb-6">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-2 border-b border-gray-200 pb-1">Professional Summary</h2>
                    <p className="text-gray-800 leading-relaxed text-justify">
                        Generalist operating at the intersection of business, marketing, and systems. Proven ability to build and scale commercial structures, generating CHF 1.4M+ in sales and CHF 4.9M+ in incremental revenue. Known for turning ideas into structured execution, combining analytical thinking with hands-on delivery. Currently focused on expanding into finance, fintech, and AI-driven environments.
                    </p>
                </section>

                {/* Skills */}
                <section className="mb-6">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-2 border-b border-gray-200 pb-1">Skills</h2>
                    <div className="flex flex-wrap gap-x-2 gap-y-1 text-gray-800 font-medium">
                        <span>Business Development</span> <span className="text-gray-400">|</span>
                        <span>Consultative Selling</span> <span className="text-gray-400">|</span>
                        <span>Acquisition</span> <span className="text-gray-400">|</span>
                        <span>Budget-Oversight</span> <span className="text-gray-400">|</span>
                        <span>Analytics</span> <span className="text-gray-400">|</span>
                        <span>Campaign Strategy</span> <span className="text-gray-400">|</span>
                        <span>Marketing Formats</span> <span className="text-gray-400">|</span>
                        <span>Presentations</span> <span className="text-gray-400">|</span>
                        <span>Content-Creation</span> <span className="text-gray-400">|</span>
                        <span>Brand Identity</span>
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
                                <span className="font-semibold text-gray-600 text-[12px]">Feb 2024 – Now</span>
                            </div>
                            <div className="text-gray-600 font-medium text-[13px] mb-2">
                                Digt AG | Fulltime, Hybrid, Zurich
                            </div>
                            <ul className="list-disc pl-5 text-gray-800 leading-relaxed flex flex-col gap-1">
                                <li>Built and scaled commercial partnerships across Fashion, Sports, Health and Beauty on closed community platforms.</li>
                                <li>Generated CHF 1.4M+ in Sales and 4.9M+ Incremental Revenue through structured opportunity creation.</li>
                                <li>Developed a consultative selling system, conducting 300+ consultations and acquiring 100+ Clients including ABOUT YOU, HUGO BOSS AG, and Zalando.</li>
                            </ul>
                        </div>

                        {/* Velocity Switzerland */}
                        <div className="avoid-page-break">
                            <div className="flex justify-between items-baseline mb-1">
                                <h3 className="text-[15px] font-bold text-black">Marketing Manager</h3>
                                <span className="font-semibold text-gray-600 text-[12px]">Aug 2023 – Dez 2023</span>
                            </div>
                            <div className="text-gray-600 font-medium text-[13px] mb-2">
                                Velocity Switzerland | 60%, Hybrid, Zurich
                            </div>
                            <ul className="list-disc pl-5 text-gray-800 leading-relaxed flex flex-col gap-1">
                                <li>Scaled community growth strategies and commercial channels across three distinct locations.</li>
                                <li>Generated +20% Community-Growth and supported 2 major revenue-driving events.</li>
                                <li>Built 3 structured acquisition formats through a dedicated growth and acquisition strategy.</li>
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
                                <li>Optimized main commercial channels including Meta, Google, and print media with 100k budget ownership.</li>
                                <li>Built strategic revenue-driving initiatives, blending analytical planning with execution to drive +40% Community-Growth.</li>
                                <li>Scaled 10 systemized acquisition formats and channels, reducing CAC by -20%.</li>
                            </ul>
                        </div>

                        {/* Early Experience */}
                        <div className="avoid-page-break">
                            <div className="flex justify-between items-baseline mb-1">
                                <h3 className="text-[15px] font-bold text-black">Early Experience</h3>
                                <span className="font-semibold text-gray-600 text-[12px]">Aug 2014 – Mar 2021</span>
                            </div>
                            <div className="text-gray-600 font-medium text-[13px] mb-2">
                                Freelancing & KOMMPAKT AG
                            </div>
                            <ul className="list-disc pl-5 text-gray-800 leading-relaxed flex flex-col gap-1">
                                <li><strong>Graphic Design and Digital Content | Freelancing (Feb 2020 – Mar 2021)</strong>: Executed independent design contracts, delivering brand identities, digital assets, and commercial collateral.</li>
                                <li><strong>Graphic Designer | KOMMPAKT AG (Aug 2018 – Jan 2019)</strong>: Took ownership of larger agency accounts and cross-media campaigns.</li>
                                <li><strong>Graphic Design EFZ Apprentice | KOMMPAKT AG (Aug 2014 – Aug 2018)</strong>: Completed a 4-year Swiss Federal VET apprenticeship covering layout, color theory, print production, and digital design.</li>
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
                                <span className="font-semibold text-gray-600 text-[12px]">Sep 2021 – Mar 2022</span>
                            </div>
                            <div className="text-gray-800 text-[13px]">Fachhochschule Graubünden</div>
                        </div>
                        <div>
                            <div className="flex justify-between items-baseline mb-1">
                                <h3 className="text-[14px] font-bold text-black">BMS Professional Maturity Certificate</h3>
                                <span className="font-semibold text-gray-600 text-[12px]">Aug 2020 – Jun 2021</span>
                            </div>
                            <div className="text-gray-800 text-[13px]">Design & Arts | Final Grade: 5.3</div>
                        </div>
                        <div>
                            <div className="flex justify-between items-baseline mb-1">
                                <h3 className="text-[14px] font-bold text-black">European Bartender School Phuket</h3>
                                <span className="font-semibold text-gray-600 text-[12px]">Nov 2019 – Dez 2019</span>
                            </div>
                            <div className="text-gray-800 text-[13px]">Travel & Course | Thailand</div>
                        </div>
                        <div>
                            <div className="flex justify-between items-baseline mb-1">
                                <h3 className="text-[14px] font-bold text-black">Preliminary design course</h3>
                                <span className="font-semibold text-gray-600 text-[12px]">Aug 2013 – Jun 2014</span>
                            </div>
                            <div className="text-gray-800 text-[13px]">F+F Schule für Kunst und Mediendesign</div>
                        </div>
                        <div>
                            <div className="flex justify-between items-baseline mb-1">
                                <h3 className="text-[14px] font-bold text-black">Highschool Sek A1</h3>
                                <span className="font-semibold text-gray-600 text-[12px]">2010 – 2013</span>
                            </div>
                            <div className="text-gray-800 text-[13px]">Zurich</div>
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
                            <span className="font-bold text-black">MediaBongo</span> — A lean approach to branding and marketing, focused on turning attention into structured value and dealflow.
                        </li>
                    </ul>
                </section>

            </div>
        </div>
    );
}

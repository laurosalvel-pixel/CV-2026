import React from 'react';
import { Icon } from '@iconify/react';
import AnimatedCounter from '../components/AnimatedCounter';

const OutlineIcon = ({ icon }) => (
    <Icon icon={icon} className="text-[16px] stroke-[1.5px] opacity-80" />
);

const generateHistorySections = (overview, learnings, tools) => {
    const sections = [
        {
            id: 'description',
            icon: <OutlineIcon icon="lucide:menu" />,
            label: 'Overview',
            content: (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 w-full">
                    <div className="w-full bg-[#E6E6E6]/60 p-4 rounded-lg">
                        <h3 className="text-[13px] font-semibold text-black mb-2">Overview</h3>
                        <p className="text-[#555] text-[13px] leading-relaxed">{overview}</p>
                    </div>
                </div>
            )
        }
    ];

    if (learnings && learnings.length > 0) {
        sections.push({
            id: 'growth',
            icon: <OutlineIcon icon="lucide:user" />,
            label: 'Key Learnings',
            content: (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 w-full">
                    <div className="w-full bg-[#E6E6E6]/60 p-4 rounded-lg">
                        <h3 className="text-[13px] font-semibold text-black mb-2">Key Learnings</h3>
                        <div className="text-[#555] text-[13px] leading-relaxed">
                            {learnings.map((l, i) => <div key={i}>{l}</div>)}
                        </div>
                    </div>
                </div>
            )
        });
    }

    if (tools && tools.length > 0) {
        sections.push({
            id: 'operation',
            icon: <OutlineIcon icon="lucide:wrench" />,
            label: 'Operations',
            content: (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 w-full">
                    <div className="w-full bg-[#E6E6E6]/60 p-4 rounded-lg">
                        <h3 className="text-[13px] font-semibold text-black mb-2">Tools & Environments</h3>
                        <div className="text-[#555] text-[13px] leading-relaxed">
                            {tools.map((t, i) => <div key={i}>{t}</div>)}
                        </div>
                    </div>
                </div>
            )
        });
    }

    return sections;
};

export const historicalRoles = [
    {
        date: "Sep 2021 – Mar 2022 | 7m",
        title: "BA of Science in Digital Business Management",
        company: "Fachhochschule Graubünden | 1st Semester",
        tags: ["Scientific Work", "Math", "Information Systems", "Design Thinking", "Digital Business"],
        sections: [
            {
                id: 'description',
                icon: <OutlineIcon icon="lucide:menu" />,
                label: 'Overview',
                content: (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 w-full">
                        <div className="w-full bg-[#E6E6E6]/60 p-4 rounded-lg">
                            <h3 className="text-[13px] font-semibold text-black mb-2">Overview</h3>
                            <p className="text-[#555] text-[13px] leading-relaxed">
                                The BA in Digital Business Management focuses on human-centered design, innovation, digital ecosystems, and data-driven technologies. I completed the first semester while gaining exposure to topics such as UX, modern business models, and digital product development.
                            </p>
                        </div>
                    </div>
                )
            },
            {
                id: 'growth',
                icon: <OutlineIcon icon="lucide:user" />,
                label: 'Personal growth',
                content: (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 w-full">
                        <div className="w-full bg-[#E6E6E6]/60 p-4 rounded-lg">
                            <h3 className="text-[13px] font-semibold text-black mb-2">Experience</h3>
                            <p className="text-[#555] text-[13px] leading-relaxed">
                                While studying in Chur, I balanced two jobs alongside the program and commuted over two hours each way. Although the subjects were interesting, I realized that focusing on hands-on professional experience would accelerate my development more effectively. I therefore decided to continue building my career through real-world projects and work experience.
                            </p>
                        </div>
                        <div className="w-full bg-[#E6E6E6]/60 p-4 rounded-lg">
                            <h3 className="text-[13px] font-semibold text-black mb-2">Key Learnings</h3>
                            <div className="text-[#555] text-[13px] leading-relaxed">
                                Foundations of digital business models<br />
                                Human-centered design and UX thinking<br />
                                Innovation frameworks and product ideation<br />
                                Digital ecosystems<br />
                                Analytical problem solving
                            </div>
                        </div>
                    </div>
                )
            },
            {
                id: 'operation',
                icon: <OutlineIcon icon="lucide:wrench" />,
                label: 'Operations',
                content: (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 w-full">
                        <div className="w-full bg-[#E6E6E6]/60 p-4 rounded-lg">
                            <h3 className="text-[13px] font-semibold text-black mb-2">Tools</h3>
                            <div className="text-[#555] text-[13px] leading-relaxed">
                                Miro<br />
                                Figma<br />
                                Adobe Creative Cloud<br />
                                Research and academic writing tools
                            </div>
                        </div>
                        <div className="w-full bg-[#E6E6E6]/60 p-4 rounded-lg">
                            <h3 className="text-[13px] font-semibold text-black mb-2">Operating Principles</h3>
                            <div className="text-[#555] text-[13px] leading-relaxed">
                                Combining theoretical knowledge with practical case studies<br />
                                Collaborative group projects and workshops<br />
                                Full academic presence and structured coursework<br />
                                Research and scientific semester paper
                            </div>
                        </div>
                    </div>
                )
            }
        ]
    },
    {
        date: "Sep 2021 – Nov 2022 | 1y 3m",
        title: "Bar Security and Runner",
        company: "Widder Garage | Hourly, Weekends",
        tags: ["Operations", "Customer Service", "Security"],
        sections: generateHistorySections(
            "Ensured guest safety and smooth operational flow during high-volume weekend shifts at a premium hospitality venue.",
            ["De-escalation techniques", "High-stress environment management", "Team coordination"],
            ["Radio Communication", "Entry Management Systems"]
        )
    },
    {
        date: "Aug 2020 – Jun 2021 | 11m",
        title: "BMS Professional Maturity Certificate",
        company: "Design & Arts | Fulltime, Zurich",
        tags: [
            "Design & Arts", "Math", "Physics", 
            "Chemics & Biology", "Politics & History", "Art History", 
            "German Literature", "French", "English"
        ],
        sections: [
            {
                id: 'description',
                icon: <OutlineIcon icon="lucide:menu" />,
                label: 'Overview',
                content: (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 w-full">
                        <div className="w-full bg-[#E6E6E6]/60 p-4 rounded-lg">
                            <h3 className="text-[13px] font-semibold text-black mb-2">Overview</h3>
                            <p className="text-[#555] text-[13px] leading-relaxed">
                                Completed the Professional Maturity Certificate with a specialization in Design and Arts, blending academic rigor with creative practice.
                            </p>
                        </div>
                    </div>
                )
            },
            {
                id: 'performance',
                icon: <OutlineIcon icon="lucide:bar-chart-2" />,
                label: 'Performance',
                content: (
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 w-full">
                        <div className="w-full bg-[#E6E6E6]/60 rounded-lg p-3 sm:p-4 flex flex-col justify-between min-h-[96px]">
                            <span className="text-[12px] font-semibold text-[#111] block mb-2">Final Grade</span>
                            <span className="text-[24px] sm:text-[28px] lg:text-[32px] font-[800] text-[#111] leading-none block tracking-tight mt-1 mb-1 whitespace-nowrap">
                                <AnimatedCounter value="5.3" />
                            </span>
                        </div>
                    </div>
                )
            },
            {
                id: 'growth',
                icon: <OutlineIcon icon="lucide:user" />,
                label: 'Key Learnings',
                content: (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 w-full">
                        <div className="w-full bg-[#E6E6E6]/60 p-4 rounded-lg">
                            <h3 className="text-[13px] font-semibold text-black mb-2">Key Learnings</h3>
                            <div className="text-[#555] text-[13px] leading-relaxed">
                                <div>Editorial writing</div>
                                <div>Artistic methodologies</div>
                                <div>Literature</div>
                                <div>Predictive History</div>
                            </div>
                        </div>
                    </div>
                )
            },
            {
                id: 'operation',
                icon: <OutlineIcon icon="lucide:wrench" />,
                label: 'Operations',
                content: (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 w-full">
                        <div className="w-full bg-[#E6E6E6]/60 p-4 rounded-lg">
                            <h3 className="text-[13px] font-semibold text-black mb-2">Tools & Environments</h3>
                            <div className="text-[#555] text-[13px] leading-relaxed">
                                <div>Analog Books & Pen</div>
                                <div>Macbook</div>
                                <div>Adobe Creative Suite</div>
                            </div>
                        </div>
                    </div>
                )
            }
        ]
    },
    {
        date: "Feb 2020 – Mar 2021 | 1y 2m",
        title: "Graphic Design and Digital Content",
        company: "Freelancing",
        tags: ["Brand Identity", "Social Media", "Client Management"],
        sections: generateHistorySections(
            "Executed independent design contracts for various clients, delivering brand identities, digital assets, and marketing collateral.",
            ["Self-management and billing", "Direct client communication", "End-to-end project delivery"],
            ["Illustrator", "Photoshop", "InDesign", "Figma"]
        )
    },
    {
        date: "Feb 2020 – Mar 2020 | 2m",
        title: "Service / Barkeeper",
        company: "Widder Hotel & BARTY | Hourly, Zurich",
        tags: ["Mixology", "Guest Experience", "Hospitality"],
        sections: generateHistorySections(
            "Provided premium beverage service and curated guest experiences at high-end establishments.",
            ["Menu design", "Client relationship management", "Precision under pressure"],
            ["POS Systems", "Mixology Equipment"]
        )
    },
    {
        date: "Nov 2019 – Dez 2019 | 2m",
        title: "European Bartender School Phuket",
        company: "Travel & Course | Thailand",
        tags: ["Intensive Training", "International Experience"],
        sections: generateHistorySections(
            "Completed a rigorous international training program mastering advanced mixology and high-volume service techniques.",
            ["Speed-rack memorization", "Flair bartending basics", "Flavor profiling"],
            ["Cocktail Shakers", "Jiggers"]
        )
    },
    {
        date: "Jan 2019 – Okt 2019 | 10m",
        title: "Sergeant Scouts Sniper",
        company: "Swiss Army | Fulltime, Chur",
        tags: ["Leadership", "Tactical Planning", "Discipline"],
        sections: generateHistorySections(
            "Served as a Sergeant in the elite Scouts Sniper unit, leading a team through demanding physical and tactical training exercises.",
            ["Command and control", "Strategic positioning", "Extreme resilience"],
            ["Topographic Maps", "Tactical Optics", "Communication Gear"]
        )
    },
    {
        date: "Aug 2018 – Jan 2019 | 6m",
        title: "Graphic Designer",
        company: "KOMMPAKT AG | Fulltime, Baden",
        tags: ["Print Design", "Corporate Identity", "Web Design"],
        sections: generateHistorySections(
            "Transitioned from apprentice to full-time Graphic Designer, taking ownership of larger agency accounts and cross-media campaigns.",
            ["Print production preparation", "Brand guideline enforcement", "Agency workflow"],
            ["Adobe Creative Cloud", "Sketch", "CMS platforms"]
        )
    },
    {
        date: "Aug 2014 – Aug 2018 | 4y",
        title: "Graphic Design EFZ Apprentice",
        company: "KOMMPAKT AG | Fulltime, Baden",
        tags: ["Foundational Design", "Typography", "Layout"],
        sections: [
            {
                id: 'description',
                icon: <OutlineIcon icon="lucide:menu" />,
                label: 'Overview',
                content: (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 w-full">
                        <div className="w-full bg-[#E6E6E6]/60 p-4 rounded-lg">
                            <h3 className="text-[13px] font-semibold text-black mb-2">Overview</h3>
                            <p className="text-[#555] text-[13px] leading-relaxed">
                                Completed a 4-year Swiss Federal VET apprenticeship (EFZ) in Graphic Design within a professional agency environment. The program covered the full foundations of visual communication from typography, layout and composition to color theory, print production and digital design.<br /><br />
                                The education followed the tradition of the Swiss Design School, emphasizing structured design systems, precision and craftsmanship.
                            </p>
                        </div>
                    </div>
                )
            },
            {
                id: 'performance',
                icon: <OutlineIcon icon="lucide:bar-chart-2" />,
                label: 'Performance',
                content: (
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 w-full">
                        <div className="w-full bg-[#E6E6E6]/60 rounded-lg p-3 sm:p-4 flex flex-col justify-between min-h-[96px]">
                            <span className="text-[12px] font-semibold text-[#111] block mb-2">Final Grade</span>
                            <span className="text-[24px] sm:text-[28px] lg:text-[32px] font-[800] text-[#111] leading-none block tracking-tight mt-1 mb-1 whitespace-nowrap">
                                <AnimatedCounter value="5.1" />
                            </span>
                        </div>
                    </div>
                )
            },
            {
                id: 'growth',
                icon: <OutlineIcon icon="lucide:user" />,
                label: 'Personal growth',
                content: (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 w-full">
                        <div className="w-full bg-[#E6E6E6]/60 p-4 rounded-lg">
                            <h3 className="text-[13px] font-semibold text-black mb-2">Experience</h3>
                            <p className="text-[#555] text-[13px] leading-relaxed">
                                The apprenticeship was my first real contact with the professional world and shaped me fundamentally. Working in an agency environment from a young age taught me discipline, attention to detail and the importance of structure in creative work.<br /><br />
                                Over four intensive years I developed both technically and personally, learning how to turn abstract ideas into clear visual communication while adapting to deadlines, feedback and professional standards.
                            </p>
                        </div>
                        <div className="w-full bg-[#E6E6E6]/60 p-4 rounded-lg">
                            <h3 className="text-[13px] font-semibold text-black mb-2">Key Learnings</h3>
                            <div className="text-[#555] text-[13px] leading-relaxed">
                                Swiss grid systems and structured layout design<br />
                                Typography and visual hierarchy<br />
                                Color theory, contrast and composition<br />
                                Print production and design execution<br />
                                Attention to detail and design craftsmanship<br />
                                Translating ideas into clear visual communication
                            </div>
                        </div>
                    </div>
                )
            },
            {
                id: 'operation',
                icon: <OutlineIcon icon="lucide:wrench" />,
                label: 'Operations',
                content: (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 w-full">
                        <div className="w-full bg-[#E6E6E6]/60 p-4 rounded-lg">
                            <h3 className="text-[13px] font-semibold text-black mb-2">Tools & Environments</h3>
                            <div className="text-[#555] text-[13px] leading-relaxed">
                                Adobe Creative Cloud<br />
                                Illustration and vector design<br />
                                Layout and print production workflows<br />
                                Sketching and conceptual design
                            </div>
                        </div>
                        <div className="w-full bg-[#E6E6E6]/60 p-4 rounded-lg">
                            <h3 className="text-[13px] font-semibold text-black mb-2">Operating Methods</h3>
                            <div className="text-[#555] text-[13px] leading-relaxed">
                                Structured design thinking and visual problem solving<br />
                                Precision and attention to detail<br />
                                Iteration through feedback and refinement<br />
                                Discipline through agency workflows and deadlines<br />
                                Strong craftsmanship as foundation for creative work
                            </div>
                        </div>
                    </div>
                )
            }
        ]
    },
    {
        date: "Jul 2014 – Aug 2014 | 2m",
        title: "English Upper Intermediate",
        company: "Miami Rennert School",
        tags: ["Language Immersion", "Cultural Exchange"],
        sections: generateHistorySections(
            "Participated in an intensive language immersions program in Miami, achieving an Upper Intermediate proficiency.",
            ["Business English", "Cross-cultural communication"],
            []
        )
    },
    {
        date: "Aug 2013 – Jun 2014 | 11m",
        title: "Preliminary design course",
        company: "F+F Schule für Kunst und Mediendesign",
        tags: ["Artistic Foundation", "Exploration"],
        sections: generateHistorySections(
            "Completed foundational creative coursework exploring various artistic mediums before committing to graphic design.",
            ["Drawing fundamentals", "Color exploration", "Spatial reasoning"],
            ["Charcoal", "Acrylics", "Photography"]
        )
    },
    {
        date: "2010 – 2013 | 3y",
        title: "Highschool Sek A1",
        company: "Zurich",
        tags: ["General Education"],
        sections: generateHistorySections(
            "Completed highest-level secondary education building a strong foundation in languages, mathematics, and sciences.",
            ["Analytical problem solving", "Core academic disciplines"],
            []
        )
    }
];

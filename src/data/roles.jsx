import React from 'react';
import { Icon } from '@iconify/react';
import AnimatedCounter from '../components/AnimatedCounter';
import { historicalRoles } from './history';

const OutlineIcon = ({ icon }) => (
    <Icon icon={icon} className="text-[16px] stroke-[1.5px] opacity-80" />
);

// -- Digt AG Data --
const digtTags = [
    "Acquisition",
    "Consultative Selling",
    "Presentations",
    "Analytics",
    "Business Development"
];

const digtPerformanceContent = (
    <div className="grid grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.5fr] gap-3 w-full">
        {[
            { label: "in Sales", value: "CHF 1.4M+" },
            { label: "Clients", value: "100+" },
            { label: "Consultations", value: "300+" },
            { label: "Incremental Revenue", value: "4.9M+" },
        ].map((m, i) => (
            <div key={i} className="w-full bg-[#E6E6E6]/60 rounded-lg p-3 sm:p-4 flex flex-col justify-between min-h-[96px]">
                <span className="text-[12px] font-semibold text-[#111] block mb-2">{m.label}</span>
                <span className="text-[24px] sm:text-[28px] lg:text-[32px] font-[800] text-[#111] leading-none block tracking-tight mt-1 mb-1 whitespace-nowrap">
                    <AnimatedCounter value={m.value} />
                </span>
            </div>
        ))}
    </div>
);

const digtSections = [
    {
        id: 'description',
        icon: <OutlineIcon icon="lucide:menu" />,
        label: 'Overview',
        content: (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 w-full">
                <div className="w-full bg-[#E6E6E6]/60 p-4 rounded-lg">
                    <h3 className="text-[13px] font-semibold text-black mb-2">Overview</h3>
                    <p className="text-[#555] text-[13px] leading-relaxed">
                        Responsible for advertising partnerships across four categories: Fashion, Sports, Health and Beauty. Building collaborations with international brands and executing performance-driven campaigns across Switzerland’s largest closed community platforms: Brands for Employees, Brands for Students, TWINT Super Deals and myAXA Deals.
                    </p>
                </div>
                <div className="w-full bg-[#E6E6E6]/60 p-4 rounded-lg">
                    <h3 className="text-[13px] font-semibold text-black mb-2">Clients</h3>
                    <p className="text-[#555] text-[13px] leading-relaxed">
                        Richemont Group, Decathlon Group, Zalando, HUGO BOSS AG, Oniverse, About You, Swarovski, Farfetch, Mammut, Gymshark
                    </p>
                </div>
            </div>
        )
    },
    {
        id: 'performance',
        icon: <OutlineIcon icon="lucide:bar-chart-2" />,
        label: 'Performance',
        content: digtPerformanceContent
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
                        Joining Digt without a traditional sales background forced me to learn consultative selling quickly. By leveraging my prior understanding of the platform and its clients, I was able to translate marketing insight into commercial results.
                    </p>
                </div>
                <div className="w-full bg-[#E6E6E6]/60 p-4 rounded-lg">
                    <h3 className="text-[13px] font-semibold text-black mb-2">Key Learnings</h3>
                    <div className="text-[#555] text-[13px] leading-relaxed">
                        Long-term relationships outperform transactions<br />
                        Opportunity creation drives business growth<br />
                        Represent the customer, not just the company<br />
                        Creativity is a commercial advantage
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
                        Google Workspace<br />
                        Microsoft 365<br />
                        ChatGPT<br />
                        Gemeni<br />
                        Salesforce<br />
                        Sylius<br />
                        Hunter.io<br />
                        Slack
                    </div>
                </div>
                <div className="w-full bg-[#E6E6E6]/60 p-4 rounded-lg">
                    <h3 className="text-[13px] font-semibold text-black mb-2">Operating Principles</h3>
                    <div className="text-[#555] text-[13px] leading-relaxed">
                        Consultative sales and client advisory<br />
                        Deal structuring and risk evaluation<br />
                        Product and campaign packaging<br />
                        Closed-community marketing ecosystems<br />
                        Managing complex brand partnerships<br />
                        Driving incremental revenue growth
                    </div>
                </div>
            </div>
        )
    }
];

// -- Velocity Switzerland Data --
const velocityTags = [
    "Shooting",
    "Video-Editing",
    "Content-Creation",
    "Analytics"
];

const velocitySections = [
    {
        id: 'description',
        icon: <OutlineIcon icon="lucide:menu" />,
        label: 'Overview',
        content: (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 w-full">
                <div className="w-full bg-[#E6E6E6]/60 p-4 rounded-lg">
                    <h3 className="text-[13px] font-semibold text-black mb-2">Overview</h3>
                    <p className="text-[#555] text-[13px] leading-relaxed">
                        Responsible for managing all Social Media Channels and establish community growth opportunities through content strategy at three locations in Zurich and Basel.
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
            <div className="grid grid-cols-2 lg:grid-cols-[1.5fr_1fr_1.2fr] gap-3 w-full">
                {[
                    { label: "Community-Growth", value: "+20%" },
                    { label: "Campaign Formats", value: "3" },
                    { label: "Supported Events", value: "2" }
                ].map((m, i) => (
                    <div key={i} className="w-full bg-[#E6E6E6]/60 rounded-lg p-3 sm:p-4 flex flex-col justify-between min-h-[96px]">
                        <span className="text-[12px] font-semibold text-[#111] block mb-2">{m.label}</span>
                        <span className="text-[24px] sm:text-[28px] lg:text-[32px] font-[800] text-[#111] leading-none block tracking-tight mt-1 mb-1 whitespace-nowrap">
                            <AnimatedCounter value={m.value} />
                        </span>
                    </div>
                ))}
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
                        I joined Velocity during a period of personal transition, focusing mainly on content creation and creative execution. While the team was great and supportive, I quickly realized my goals were better aligned with a more challenging environment with commercial impact, which led me to pursue a new position at Digt AG.
                    </p>
                </div>
                <div className="w-full bg-[#E6E6E6]/60 p-4 rounded-lg">
                    <h3 className="text-[13px] font-semibold text-black mb-2">Key Learnings</h3>
                    <div className="text-[#555] text-[13px] leading-relaxed">
                        Creative Video Editing and transitions<br />
                        On camera model confidence<br />
                        Structural shooting guidance<br />
                        Shooting of large groups<br />
                        Event Management
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
                        Sony Alpha, Lighting, Mic<br />
                        Instagram<br />
                        Premiere Pro<br />
                        Meta Ads<br />
                        Canva
                    </div>
                </div>
            </div>
        )
    }
];

// -- MyBikePlan AG Data --
const mybikeplanPromotions = [
    { date: "Sep 2022", title: "Junior Marketing Manager" },
    { date: "Jun 2022", title: "Performance Marketing Specialist" },
    { date: "Sep 2021", title: "Content Creator" }
];

const mybikeplanTags = [
    "Content-Creation",
    "Campaign Strategy",
    "Marketing Formats",
    "Analytics",
    "Budget-Oversight"
];

const mybikeplanSections = [
    {
        id: 'description',
        icon: <OutlineIcon icon="lucide:menu" />,
        label: 'Overview',
        content: (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 w-full">
                <div className="w-full bg-[#E6E6E6]/60 p-4 rounded-lg">
                    <h3 className="text-[13px] font-semibold text-black mb-2">Overview</h3>
                    <p className="text-[#555] text-[13px] leading-relaxed">
                        As Junior Marketing Manager, I was responsible for managing and developing the company’s main marketing channels, including Meta, Google and print media. The role combined strategic campaign planning with hands-on creative work, community growth and budget management across channels.
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
            <div className="grid grid-cols-2 lg:grid-cols-[1.5fr_1fr_1.2fr_1.5fr] gap-3 w-full">
                {[
                    { label: "Budget responsibility", value: "100k" },
                    { label: "CAC", value: "-20%" },
                    { label: "Campaign Formats", value: "10" },
                    { label: "Community-Growth", value: "+40%" }
                ].map((m, i) => (
                    <div key={i} className="w-full bg-[#E6E6E6]/60 rounded-lg p-3 sm:p-4 flex flex-col justify-between min-h-[96px]">
                        <span className="text-[12px] font-semibold text-[#111] block mb-2">{m.label}</span>
                        <span className="text-[24px] sm:text-[28px] lg:text-[32px] font-[800] text-[#111] leading-none block tracking-tight mt-1 mb-1 whitespace-nowrap">
                            <AnimatedCounter value={m.value} />
                        </span>
                    </div>
                ))}
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
                        MyBikePlan was a small bootstrapped startup where I joined a team of five that grew to around fifteen during my time there. It was my entry point into marketing, where I developed my skills through hands-on experience. From planning and producing campaigns to strategy and budgeting. I remain very grateful for the steep learning curve and the great team I had the chance to grow with.
                    </p>
                </div>
                <div className="w-full bg-[#E6E6E6]/60 p-4 rounded-lg">
                    <h3 className="text-[13px] font-semibold text-black mb-2">Key Learnings</h3>
                    <div className="text-[#555] text-[13px] leading-relaxed">
                        Marketing through hands-on execution<br />
                        End-to-end campaign planning and production<br />
                        Brand positioning in an early-stage startup<br />
                        Budgeting and prioritizing limited resources<br />
                        Funnel management and performance analytics
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
                        Meta Business & Ads<br />
                        Google Ads<br />
                        Hubspot<br />
                        Instagram<br />
                        Premiere Pro<br />
                        Photoshop<br />
                        Canva<br />
                        Sony Alpha, Lighting, Mic
                    </div>
                </div>
                <div className="w-full bg-[#E6E6E6]/60 p-4 rounded-lg">
                    <h3 className="text-[13px] font-semibold text-black mb-2">Operating Principles</h3>
                    <div className="text-[#555] text-[13px] leading-relaxed">
                        Creative concepts and campaign production<br />
                        End-to-end campaign execution<br />
                        Full ownership of marketing initiatives<br />
                        Output-driven execution and rapid testing<br />
                        Persistence and strong work ethic
                    </div>
                </div>
            </div>
        )
    }
];

export const allRoles = [
    {
        id: 'digt',
        isCurrent: true,
        date: "Feb 2024 – Now | 2y 1m",
        title: "Sales Account Manager Advertising Sales",
        company: "Digt AG | Fulltime, Hybrid, Zurich",
        tags: digtTags,
        sections: digtSections
    },
    {
        id: 'velocity',
        isCurrent: false,
        date: "Aug 2023 – Dez 2023 | 5m",
        title: "Marketing Manager",
        company: "Velocity Switzerland | 60%, Hybrid, Zurich",
        tags: velocityTags,
        sections: velocitySections
    },
    {
        id: 'mybikeplan',
        isCurrent: false,
        date: "Sep 2021 – Apr 2023 | 1y 8m",
        title: "Junior Marketing Manager",
        company: "MyBikePlan AG | 80%, Zurich",
        promotions: mybikeplanPromotions,
        tags: mybikeplanTags,
        sections: mybikeplanSections
    },
    ...historicalRoles.map((r, i) => ({ id: `history-${i}`, isCurrent: false, ...r }))
];

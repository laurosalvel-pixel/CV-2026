import React from 'react';
import { parseDates } from '../utils/dateUtils';

const TRACK_START_YEAR = 2010;

export default function ProportionalTrack({ roles, activeIds, onTimelineClick }) {

    const now = new Date();
    const currentDecimalYear = now.getFullYear() + (now.getMonth() / 12);

    // Track ends 0.1 years (~1 month) past the current month so the topmost node isn't mathematically cut off
    const TRACK_END_YEAR = currentDecimalYear + 0.1;
    const TOTAL_YEARS = TRACK_END_YEAR - TRACK_START_YEAR;

    // Generate year markers from the current actual full year down to the start year
    const markers = [];
    for (let y = Math.floor(TRACK_END_YEAR); y >= TRACK_START_YEAR; y--) {
        // Draw mostly even years, or odd if it's the very top limit
        if (y % 2 === 0 || y === Math.floor(TRACK_END_YEAR)) {
            if (!markers.includes(y)) markers.push(y);
        }
    }

    return (
        <div className="relative w-full h-full pr-6 select-none flex flex-col pt-[35px] pb-10">
            {/* The actual track is a relative container bounded by paddings */}
            <div className="relative w-full h-full">
                {/* Year Labels */}
                {markers.map(year => {
                    const topP = ((TRACK_END_YEAR - year) / TOTAL_YEARS) * 100;
                    return (
                        <div
                            key={year}
                            className="absolute right-8 text-[11px] text-[#999] font-medium"
                            style={{ top: `${topP}%`, transform: 'translateY(-50%)' }}
                        >
                            {year}
                        </div>
                    );
                })}

                {/* Render role bars with overlap logic */}
                {(() => {
                    // Pre-calculate and sort roles by start date (oldest first)
                    const parsedRoles = roles.map(role => {
                        const { start, end } = parseDates(role.date);
                        const clampedEnd = Math.min(Math.max(end, TRACK_START_YEAR), TRACK_END_YEAR);
                        const clampedStart = Math.min(Math.max(start, TRACK_START_YEAR), TRACK_END_YEAR);
                        return { ...role, start: clampedStart, end: clampedEnd };
                    }).sort((a, b) => a.start - b.start);

                    // Assign columns based on overlaps
                    const columns = []; // Array of end-dates for the last scheduled role in each column
                    parsedRoles.forEach(role => {
                        let placed = false;
                        for (let i = 0; i < columns.length; i++) {
                            // If the column is free (its last scheduled item ended before this one starts)
                            if (columns[i] <= role.start + 0.01) {
                                role.column = i;
                                columns[i] = role.end;
                                placed = true;
                                break;
                            }
                        }
                        if (!placed) {
                            role.column = columns.length;
                            columns.push(role.end);
                        }
                    });

                    // We compute where the latest/highest chronological beam is attached for the Future Fading Beam
                    const activeRole = parsedRoles.find(r => r.isCurrent) || parsedRoles[parsedRoles.length - 1];
                    const safeActiveEnd = Math.max(activeRole?.end || currentDecimalYear, (activeRole?.start || currentDecimalYear) + 0.15);
                    const currentRoleTopPercent = ((TRACK_END_YEAR - safeActiveEnd) / TOTAL_YEARS) * 100;

                    return (
                        <>
                            {/* Future Endeavors Fading Beam */}
                            <div 
                                className="absolute rounded-t-full z-10 pointer-events-none"
                                style={{ 
                                    background: 'linear-gradient(to top, rgba(17,17,17,0.35), rgba(17,17,17,0))',
                                    top: '-40px', 
                                    bottom: `${100 - currentRoleTopPercent}%`,
                                    right: '-2px',
                                    width: '6px'
                                }}
                                title="Future Endeavors"
                            />

                            {parsedRoles.map((role) => {
                                // Enforce a minimum height for visually small blocks without moving the start position
                                const safeEnd = Math.max(role.end, role.start + 0.15); // Guarantee ~1.8 months visual height

                                const topPercent = ((TRACK_END_YEAR - safeEnd) / TOTAL_YEARS) * 100;
                                const bottomPercent = ((role.start - TRACK_START_YEAR) / TOTAL_YEARS) * 100;

                                const isActive = activeIds && activeIds.has(role.id);

                                // Calculate horizontal offset based on assigned overlapping column
                                const offsetPx = role.column * -9; // 9px offset for 6px beams

                                return (
                                    <div
                                        key={role.id}
                                        onClick={() => onTimelineClick?.(role.id)}
                                        className={`absolute rounded-full transition-all duration-300 cursor-pointer
                                            ${isActive ? 'bg-[#111] z-20 hover:scale-105 shadow-sm' : 'bg-[#E5E5E5] hover:bg-[#888] z-10'}`}
                                        style={{
                                            top: `${topPercent}%`,
                                            bottom: `${bottomPercent}%`,
                                            right: `${-2 + offsetPx}px`,
                                            width: isActive ? '8px' : '6px',
                                            transform: isActive ? 'translateX(1px)' : 'none'
                                        }}
                                    >
                                        {/* Hover label for blocks */}
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 hover:opacity-100 text-[10px] font-medium text-black whitespace-nowrap pointer-events-none transition-opacity bg-white px-2 py-0.5 rounded shadow-sm border border-[#EEE] z-30">
                                            {role.title}
                                        </div>
                                    </div>
                                );
                            })}
                        </>
                    );
                })()}
            </div>
        </div>
    );
}

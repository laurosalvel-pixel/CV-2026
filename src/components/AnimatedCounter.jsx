import React, { useEffect, useRef, useState } from 'react';
import { useInView, useMotionValue, animate } from 'framer-motion';

export default function AnimatedCounter({ value }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10px" });

    // Extract number and suffix/prefix
    // "CHF 1.4M+" -> prefix="CHF ", num=1.4, suffix="M+"
    const match = String(value).match(/^([^0-9]*)([0-9.,]+)(.*)$/);

    const prefix = match ? match[1] : '';
    const numStr = match ? match[2].replace(/,/g, '') : '0';
    const suffix = match ? match[3] : String(value);
    const isFloat = numStr.includes('.');
    const target = parseFloat(numStr) || 0;

    const motionValue = useMotionValue(0);

    const [display, setDisplay] = useState(isFloat ? '0.0' : '0');

    useEffect(() => {
        if (isInView) {
            animate(motionValue, target, {
                duration: 1.75, // Keeps overall time similar but ends decisively
                ease: "easeInOut" // Slower start, confident finish compared to spring
            });
        }
    }, [isInView, target, motionValue]);

    useEffect(() => {
        return motionValue.on("change", (v) => {
            if (isFloat) {
                setDisplay(v.toFixed(1));
            } else {
                setDisplay(Math.floor(v).toString());
            }
        });
    }, [motionValue, isFloat]);

    if (!match) return <span>{value}</span>;

    return (
        <span ref={ref} className="inline-grid tabular-nums relative whitespace-nowrap">
            {/* Hidden max-width element guaranteeing perfect container sizing from mount */}
            <span className="col-start-1 row-start-1 opacity-0 pointer-events-none" aria-hidden="true">
                {prefix}{isFloat ? target.toFixed(1) : target}{suffix}
            </span>
            {/* Visible Animating element */}
            <span className="col-start-1 row-start-1">
                {prefix}{display}{suffix}
            </span>
        </span>
    );
}

import React from 'react';
import { Icon } from '@iconify/react';

export default function Footer({ className = "" }) {
    return (
        <div className={`mt-8 pt-16 border-t border-[#EAEAEA] flex flex-col items-center text-center gap-8 pb-12 w-full max-w-[800px] mx-auto ${className}`}>
            <div className="flex flex-col items-center gap-2">
                <div className="w-[60px] h-[60px] rounded-full overflow-hidden shadow-sm bg-[#EAEAEA] border-[2px] border-white shrink-0 flex items-center justify-center mb-4">
                    <img src="/portrait.jpg" alt="Lauro Salvel" className="w-full h-full object-cover grayscale opacity-80" />
                </div>
                <h2 className="text-[#111] text-[32px] sm:text-[40px] font-bold tracking-tight">Let's Connect</h2>
                <p className="text-[#555] text-[15px] font-medium max-w-md">Whether you want to discuss scaling a business, turning ideas into revenue, or just chat about Music or Sports.</p>
            </div>
            
            <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 w-full">
                <a href="mailto:lauro.salvel@gmail.com" className="flex items-center gap-2 px-6 py-3.5 bg-[#111] text-white rounded-full text-[14px] font-bold hover:bg-[#333] transition-colors w-full sm:w-auto justify-center shadow-md hover:shadow-lg">
                    <Icon icon="lucide:mail" className="text-[16px]"/> lauro.salvel@gmail.com
                </a>
                <a href="tel:+41799158949" className="flex items-center gap-2 px-6 py-3.5 border border-[#EAEAEA] bg-white text-[#111] rounded-full text-[14px] font-bold hover:bg-gray-50 transition-colors w-full sm:w-auto justify-center">
                    <Icon icon="lucide:phone" className="text-[16px]"/> +41 79 915 89 49
                </a>
                <a href="https://wa.me/41799158949" className="flex items-center gap-2 px-6 py-3.5 border border-[#EAEAEA] bg-white text-[#111] rounded-full text-[14px] font-bold hover:bg-[#E8F5E9] transition-colors w-full sm:w-auto justify-center group">
                    <Icon icon="lucide:message-circle" className="text-[#10B981] group-hover:scale-110 transition-transform"/> WhatsApp
                </a>
                <a href="https://www.linkedin.com/in/laurosalvel/" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3.5 border border-[#EAEAEA] bg-white text-[#111] rounded-full text-[14px] font-bold hover:bg-[#E3F2FD] transition-colors w-full sm:w-auto justify-center group">
                    <Icon icon="lucide:linkedin" className="text-[#0077b5] group-hover:scale-110 transition-transform"/> LinkedIn
                </a>
            </div>
        </div>
    );
}

import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import Position from './Position';
import ProportionalTrack from './ProportionalTrack';
import ContactSlot from './ContactSlot';
import { allRoles } from '../data/roles';

export default function Timeline() {
  const [visibleIds, setVisibleIds] = useState(new Set());
  const [hoveredId, setHoveredId] = useState(null);
  const [showProportional, setShowProportional] = useState(false);
  const [clickedId, setClickedId] = useState(null);

  const handleVisible = (id) => {
    setVisibleIds(prev => {
      const next = new Set(prev);
      next.add(id);
      return next;
    });
  };

  const handleHidden = (id) => {
    setVisibleIds(prev => {
      const next = new Set(prev);
      next.delete(id);
      return next;
    });
  };

  useEffect(() => {
    const handleManualScroll = () => setClickedId(null);

    window.addEventListener('wheel', handleManualScroll, { passive: true });
    window.addEventListener('touchmove', handleManualScroll, { passive: true });
    window.addEventListener('keydown', (e) => {
      if (['ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', 'Space'].includes(e.code)) {
        handleManualScroll();
      }
    });

    return () => {
      window.removeEventListener('wheel', handleManualScroll);
      window.removeEventListener('touchmove', handleManualScroll);
      window.removeEventListener('keydown', handleManualScroll);
    };
  }, []);

  const activeIds = new Set();

  if (clickedId) {
    activeIds.add(clickedId);
  } else {
    // Determine which roles are visible relative to the grand chronological list
    // Ensure we only ever flag the top 3 most relevant roles currently on viewport
    const visibleArr = Array.from(visibleIds);
    if (visibleArr.length > 3) {
      const sortedVisible = visibleArr.sort((a, b) => {
        const idxA = allRoles.findIndex(r => r.id === a);
        const idxB = allRoles.findIndex(r => r.id === b);
        return idxA - idxB;
      });
      sortedVisible.slice(0, 3).forEach(id => activeIds.add(id));
    } else {
      visibleArr.forEach(id => activeIds.add(id));
    }
    if (hoveredId) activeIds.add(hoveredId);
  }

  const scrollToRole = (id) => {
    setClickedId(id);
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -150;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Floating Time Toggle Button */}
      <button
        onClick={() => setShowProportional(!showProportional)}
        className="fixed bottom-8 left-8 z-[100] p-3.5 bg-white border border-[#E5E5E5] rounded-full shadow-md hover:scale-105 transition-all text-[#111] flex items-center justify-center"
        title="Toggle Proportional Timeline"
      >
        <Icon icon="lucide:clock" width="22" height="22" />
      </button>

      <div id="cv-main-section" className="max-w-[1100px] mx-auto flex justify-center gap-6 md:gap-14 px-6 sm:px-10 pt-32 pb-16 items-start">
        {/* Left Proportional Track */}
        <div
          className={`shrink-0 sticky top-24 h-[calc(100vh-200px)] min-h-[500px] hidden sm:block w-[80px] md:w-[100px] transition-opacity duration-500
            ${showProportional ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        >
          <ProportionalTrack
            roles={allRoles}
            activeIds={activeIds}
            onTimelineClick={scrollToRole}
          />
        </div>

        {/* Right Main Timeline */}
        <div className="flex-1 w-full max-w-[700px]">
          <div className="relative flex flex-col gap-0">
            <ContactSlot 
              showProportional={showProportional}
              isActive={activeIds.has('contact')}
              onVisible={handleVisible}
              onHidden={handleHidden}
              onHover={setHoveredId}
              onHoverEnd={() => setHoveredId(null)}
              onTimelineClick={scrollToRole}
            />
            {allRoles.map((role, idx) => {
              const isActive = activeIds.has(role.id);
              return (
                <Position
                  key={role.id}
                  id={role.id}
                  isActive={isActive}
                  showProportional={showProportional}
                  isCurrent={role.isCurrent}
                  date={role.date}
                  title={role.title}
                  company={role.company}
                  promotions={role.promotions}
                  tags={role.tags}
                  sections={role.sections}
                  defaultActiveTab={null}
                  isLast={idx === allRoles.length - 1}
                  onVisible={handleVisible}
                  onHidden={handleHidden}
                  onHover={setHoveredId}
                  onHoverEnd={() => setHoveredId(null)}
                  onTimelineClick={scrollToRole}
                />
              )
            })}
          </div>
        </div>

        {/* Right Invisible Spacer */}
        <div className="shrink-0 hidden sm:block w-[80px] md:w-[100px] pointer-events-none"></div>
      </div>
    </>
  );
}

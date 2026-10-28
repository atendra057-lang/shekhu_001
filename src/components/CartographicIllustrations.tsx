"use client";

import React from "react";

/* ═══════════════════════════════════════════════════════════
   HERO CARTOGRAPHIC ILLUSTRATION
   A large, bespoke map-inspired graphic featuring:
   - Urban block patterns
   - Road networks
   - Sage-green land-use areas
   - River/waterway element
   - Contour lines & mapping details
   ═══════════════════════════════════════════════════════════ */
export function HeroMapIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 700"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      role="img"
    >
      {/* Background grid — subtle analytical grid */}
      <defs>
        <pattern id="heroGrid" width="30" height="30" patternUnits="userSpaceOnUse">
          <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#10283B" strokeWidth="0.15" opacity="0.15" />
        </pattern>
        <pattern id="heroGridFine" width="10" height="10" patternUnits="userSpaceOnUse">
          <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#10283B" strokeWidth="0.08" opacity="0.08" />
        </pattern>
        <clipPath id="heroClip">
          <rect x="40" y="30" width="520" height="640" rx="2" />
        </clipPath>
      </defs>

      <g clipPath="url(#heroClip)">
        {/* Fine grid background */}
        <rect width="600" height="700" fill="url(#heroGridFine)" />
        <rect width="600" height="700" fill="url(#heroGrid)" />

        {/* Contour lines — topographic feel */}
        <g opacity="0.12">
          <ellipse cx="300" cy="350" rx="260" ry="180" stroke="#10283B" strokeWidth="0.5" fill="none" />
          <ellipse cx="300" cy="350" rx="220" ry="150" stroke="#10283B" strokeWidth="0.5" fill="none" />
          <ellipse cx="300" cy="350" rx="180" ry="120" stroke="#10283B" strokeWidth="0.5" fill="none" />
          <ellipse cx="300" cy="350" rx="140" ry="90" stroke="#10283B" strokeWidth="0.5" fill="none" />
          <ellipse cx="300" cy="350" rx="100" ry="60" stroke="#10283B" strokeWidth="0.5" fill="none" />
        </g>

        {/* River / waterway — sinuous path through the city */}
        <path
          d="M 80 80 C 120 130, 160 180, 200 240 C 240 300, 220 360, 260 420 C 300 480, 340 520, 380 580 C 400 620, 440 650, 480 680"
          stroke="#81907A"
          strokeWidth="8"
          fill="none"
          opacity="0.15"
        />
        <path
          d="M 80 80 C 120 130, 160 180, 200 240 C 240 300, 220 360, 260 420 C 300 480, 340 520, 380 580 C 400 620, 440 650, 480 680"
          stroke="#81907A"
          strokeWidth="1.5"
          fill="none"
          opacity="0.4"
        />

        {/* Major roads — primary arterial network */}
        <g stroke="#10283B" strokeWidth="1.2" opacity="0.2">
          <line x1="60" y1="200" x2="540" y2="200" />
          <line x1="60" y1="400" x2="540" y2="400" />
          <line x1="150" y1="40" x2="150" y2="680" />
          <line x1="350" y1="40" x2="350" y2="680" />
          {/* Diagonal connector */}
          <line x1="150" y1="200" x2="350" y2="400" />
        </g>

        {/* Secondary roads */}
        <g stroke="#10283B" strokeWidth="0.4" opacity="0.15">
          <line x1="60" y1="130" x2="540" y2="130" />
          <line x1="60" y1="280" x2="540" y2="280" />
          <line x1="60" y1="340" x2="540" y2="340" />
          <line x1="60" y1="480" x2="540" y2="480" />
          <line x1="60" y1="560" x2="540" y2="560" />
          <line x1="230" y1="40" x2="230" y2="680" />
          <line x1="440" y1="40" x2="440" y2="680" />
        </g>

        {/* Urban blocks — irregular parcels */}
        <g opacity="0.08" fill="#10283B">
          <rect x="155" y="205" width="70" height="70" />
          <rect x="160" y="285" width="65" height="50" />
          <rect x="235" y="205" width="110" height="70" />
          <rect x="355" y="135" width="80" height="60" />
          <rect x="155" y="405" width="70" height="70" />
          <rect x="355" y="405" width="80" height="70" />
          <rect x="235" y="485" width="100" height="70" />
          <rect x="445" y="285" width="90" height="50" />
          <rect x="65" y="405" width="80" height="70" />
          <rect x="445" y="405" width="90" height="70" />
        </g>

        {/* Land-use zones — sage green patches */}
        <g opacity="0.12" fill="#81907A">
          {/* Green space / park */}
          <rect x="235" y="340" width="110" height="55" rx="1" />
          {/* Residential zone */}
          <rect x="70" y="135" width="75" height="60" rx="1" />
          {/* Open space near river */}
          <rect x="155" y="135" width="70" height="60" rx="1" />
          {/* Green corridor */}
          <rect x="355" y="485" width="80" height="70" rx="1" />
          {/* Park */}
          <ellipse cx="490" cy="560" rx="45" ry="30" />
        </g>

        {/* Map boundary — study area */}
        <rect
          x="60"
          y="100"
          width="480"
          height="530"
          stroke="#10283B"
          strokeWidth="1"
          strokeDasharray="6 3"
          fill="none"
          opacity="0.2"
        />

        {/* District/zone boundaries — dashed */}
        <g stroke="#81907A" strokeWidth="0.6" strokeDasharray="4 3" opacity="0.25">
          <line x1="60" y1="310" x2="540" y2="310" />
          <line x1="290" y1="100" x2="290" y2="630" />
        </g>

        {/* Coordinate labels */}
        <g
          fill="#81907A"
          fontSize="6"
          fontFamily="var(--font-body)"
          opacity="0.35"
          letterSpacing="0.05em"
        >
          <text x="65" y="96">26°48'N</text>
          <text x="65" y="636">26°42'N</text>
          <text x="485" y="96">82°12'E</text>
        </g>

        {/* North arrow */}
        <g transform="translate(510, 80)" opacity="0.3">
          <line x1="0" y1="25" x2="0" y2="0" stroke="#10283B" strokeWidth="1" />
          <polygon points="0,0 -4,8 4,8" fill="#10283B" />
          <text
            x="0"
            y="-5"
            textAnchor="middle"
            fontSize="7"
            fontFamily="var(--font-body)"
            fontWeight="500"
            fill="#10283B"
          >
            N
          </text>
        </g>

        {/* Scale bar */}
        <g transform="translate(410, 650)" opacity="0.3">
          <line x1="0" y1="0" x2="80" y2="0" stroke="#10283B" strokeWidth="0.8" />
          <line x1="0" y1="-3" x2="0" y2="3" stroke="#10283B" strokeWidth="0.8" />
          <line x1="40" y1="-3" x2="40" y2="3" stroke="#10283B" strokeWidth="0.8" />
          <line x1="80" y1="-3" x2="80" y2="3" stroke="#10283B" strokeWidth="0.8" />
          <text x="0" y="10" fontSize="5" fontFamily="var(--font-body)" fill="#10283B">0</text>
          <text x="76" y="10" fontSize="5" fontFamily="var(--font-body)" fill="#10283B">2 km</text>
        </g>

        {/* Small settlement dots */}
        <g fill="#10283B" opacity="0.2">
          <circle cx="180" cy="230" r="2" />
          <circle cx="280" cy="230" r="2.5" />
          <circle cx="380" cy="160" r="2" />
          <circle cx="180" cy="430" r="2" />
          <circle cx="380" cy="430" r="2" />
          <circle cx="280" cy="510" r="2" />
          <circle cx="470" cy="310" r="1.5" />
          <circle cx="100" cy="430" r="1.5" />
        </g>
      </g>
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════════
   EXPERTISE CARTOGRAPHIC DETAILS — smaller accent visuals
   ═══════════════════════════════════════════════════════════ */

export function ZonalPlanningGraphic({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className} aria-hidden="true">
      <g opacity="0.15">
        <rect x="10" y="10" width="180" height="140" stroke="#10283B" strokeWidth="0.5" strokeDasharray="4 2" />
        {/* Zones */}
        <rect x="15" y="15" width="50" height="40" fill="#81907A" opacity="0.4" />
        <rect x="70" y="15" width="60" height="40" fill="#10283B" opacity="0.08" />
        <rect x="135" y="15" width="50" height="40" fill="#81907A" opacity="0.25" />
        <rect x="15" y="60" width="80" height="35" fill="#10283B" opacity="0.06" />
        <rect x="100" y="60" width="85" height="35" fill="#81907A" opacity="0.3" />
        <rect x="15" y="100" width="55" height="45" fill="#81907A" opacity="0.2" />
        <rect x="75" y="100" width="50" height="45" fill="#10283B" opacity="0.05" />
        <rect x="130" y="100" width="55" height="45" fill="#81907A" opacity="0.35" />
        {/* Road lines */}
        <line x1="10" y1="58" x2="190" y2="58" stroke="#10283B" strokeWidth="0.8" />
        <line x1="10" y1="98" x2="190" y2="98" stroke="#10283B" strokeWidth="0.8" />
        <line x1="68" y1="10" x2="68" y2="150" stroke="#10283B" strokeWidth="0.8" />
        <line x1="132" y1="10" x2="132" y2="150" stroke="#10283B" strokeWidth="0.8" />
      </g>
    </svg>
  );
}

export function GISLayersGraphic({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className} aria-hidden="true">
      <g opacity="0.2">
        {/* Layered analysis effect */}
        <rect x="20" y="30" width="120" height="90" stroke="#10283B" strokeWidth="0.5" fill="#10283B" fillOpacity="0.03" transform="rotate(-2 80 75)" />
        <rect x="30" y="20" width="120" height="90" stroke="#81907A" strokeWidth="0.5" fill="#81907A" fillOpacity="0.05" transform="rotate(1 90 65)" />
        <rect x="40" y="10" width="120" height="90" stroke="#10283B" strokeWidth="0.5" fill="none" transform="rotate(-1 100 55)" />
        {/* Grid overlay */}
        <g stroke="#10283B" strokeWidth="0.2" opacity="0.5">
          <line x1="40" y1="30" x2="40" y2="100" />
          <line x1="70" y1="10" x2="70" y2="80" />
          <line x1="100" y1="10" x2="100" y2="100" />
          <line x1="130" y1="10" x2="130" y2="80" />
          <line x1="160" y1="10" x2="160" y2="100" />
        </g>
        {/* Points of interest */}
        <circle cx="85" cy="45" r="3" fill="#81907A" opacity="0.5" />
        <circle cx="120" cy="65" r="2" fill="#81907A" opacity="0.4" />
        <circle cx="60" cy="70" r="2.5" fill="#10283B" opacity="0.2" />
        <circle cx="145" cy="40" r="2" fill="#10283B" opacity="0.15" />
      </g>
    </svg>
  );
}

export function WaterInfraGraphic({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className} aria-hidden="true">
      <g opacity="0.2">
        {/* Water network lines */}
        <path d="M 20 80 L 60 80 L 60 40 L 120 40 L 120 80 L 180 80" stroke="#81907A" strokeWidth="1.5" />
        <path d="M 60 80 L 60 130 L 120 130 L 120 80" stroke="#81907A" strokeWidth="1" strokeDasharray="3 2" />
        <path d="M 120 40 L 180 40 L 180 80" stroke="#81907A" strokeWidth="1" />
        <path d="M 60 40 L 20 40 L 20 80" stroke="#81907A" strokeWidth="1" />
        {/* Treatment nodes */}
        <circle cx="60" cy="80" r="4" fill="none" stroke="#10283B" strokeWidth="0.8" />
        <circle cx="120" cy="80" r="4" fill="none" stroke="#10283B" strokeWidth="0.8" />
        <circle cx="120" cy="40" r="3" fill="#81907A" fillOpacity="0.3" stroke="#81907A" strokeWidth="0.5" />
        {/* Settlement blocks */}
        <rect x="75" y="55" width="30" height="20" fill="#10283B" opacity="0.06" />
        <rect x="135" y="55" width="25" height="20" fill="#10283B" opacity="0.06" />
        <rect x="75" y="95" width="30" height="20" fill="#10283B" opacity="0.06" />
      </g>
    </svg>
  );
}

export function FloodMitigationGraphic({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className} aria-hidden="true">
      <g opacity="0.18">
        {/* Contour lines */}
        <path d="M 10 130 Q 60 100, 100 110 Q 140 120, 190 90" stroke="#10283B" strokeWidth="0.5" />
        <path d="M 10 115 Q 60 85, 100 95 Q 140 105, 190 75" stroke="#10283B" strokeWidth="0.5" />
        <path d="M 10 100 Q 60 70, 100 80 Q 140 90, 190 60" stroke="#10283B" strokeWidth="0.5" />
        <path d="M 10 85 Q 60 55, 100 65 Q 140 75, 190 45" stroke="#10283B" strokeWidth="0.5" />
        <path d="M 10 70 Q 60 40, 100 50 Q 140 60, 190 30" stroke="#10283B" strokeWidth="0.5" />
        {/* Drainage pathways */}
        <path d="M 50 20 C 55 50, 70 70, 80 100 C 85 115, 90 130, 95 150" stroke="#81907A" strokeWidth="1.5" />
        <path d="M 130 15 C 125 40, 120 60, 115 90 C 112 110, 120 130, 125 150" stroke="#81907A" strokeWidth="1" />
        {/* Low-lying area */}
        <ellipse cx="100" cy="110" rx="35" ry="15" fill="#81907A" opacity="0.2" />
        {/* Urban blocks in floodplain */}
        <rect x="85" y="50" width="12" height="10" fill="#10283B" opacity="0.15" />
        <rect x="110" y="65" width="10" height="12" fill="#10283B" opacity="0.15" />
        <rect x="60" y="80" width="15" height="10" fill="#10283B" opacity="0.1" />
      </g>
    </svg>
  );
}

export function MasterPlanGraphic({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className} aria-hidden="true">
      <g opacity="0.18">
        {/* Outer boundary */}
        <rect x="10" y="10" width="180" height="140" stroke="#10283B" strokeWidth="0.5" rx="2" />
        {/* Major roads forming grid */}
        <line x1="10" y1="55" x2="190" y2="55" stroke="#10283B" strokeWidth="1" />
        <line x1="10" y1="105" x2="190" y2="105" stroke="#10283B" strokeWidth="1" />
        <line x1="65" y1="10" x2="65" y2="150" stroke="#10283B" strokeWidth="1" />
        <line x1="135" y1="10" x2="135" y2="150" stroke="#10283B" strokeWidth="1" />
        {/* Urban blocks */}
        <rect x="15" y="15" width="45" height="35" fill="#10283B" opacity="0.06" rx="1" />
        <rect x="70" y="15" width="60" height="35" fill="#81907A" opacity="0.15" rx="1" />
        <rect x="140" y="15" width="45" height="35" fill="#10283B" opacity="0.08" rx="1" />
        <rect x="15" y="60" width="45" height="40" fill="#81907A" opacity="0.2" rx="1" />
        <rect x="70" y="60" width="60" height="40" fill="#10283B" opacity="0.05" rx="1" />
        <rect x="140" y="60" width="45" height="40" fill="#81907A" opacity="0.12" rx="1" />
        <rect x="15" y="110" width="45" height="35" fill="#10283B" opacity="0.06" rx="1" />
        <rect x="70" y="110" width="60" height="35" fill="#81907A" opacity="0.25" rx="1" />
        <rect x="140" y="110" width="45" height="35" fill="#10283B" opacity="0.04" rx="1" />
        {/* Green space */}
        <ellipse cx="100" cy="80" rx="20" ry="12" fill="#81907A" opacity="0.3" />
        {/* Ring road */}
        <circle cx="100" cy="80" r="60" stroke="#10283B" strokeWidth="0.5" strokeDasharray="4 3" fill="none" />
      </g>
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════════
   ABOUT SECTION — Background cartographic detail
   ═══════════════════════════════════════════════════════════ */
export function AboutBackgroundMap({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 800 400" fill="none" className={className} aria-hidden="true">
      <defs>
        <pattern id="aboutGrid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#10283B" strokeWidth="0.12" opacity="0.1" />
        </pattern>
      </defs>
      <rect width="800" height="400" fill="url(#aboutGrid)" />
      {/* Contour lines */}
      <g opacity="0.06">
        <path d="M 0 300 Q 200 250, 400 280 Q 600 310, 800 260" stroke="#10283B" strokeWidth="0.8" fill="none" />
        <path d="M 0 260 Q 200 210, 400 240 Q 600 270, 800 220" stroke="#10283B" strokeWidth="0.8" fill="none" />
        <path d="M 0 220 Q 200 170, 400 200 Q 600 230, 800 180" stroke="#10283B" strokeWidth="0.8" fill="none" />
        <path d="M 0 180 Q 200 130, 400 160 Q 600 190, 800 140" stroke="#10283B" strokeWidth="0.8" fill="none" />
      </g>
      {/* River */}
      <path d="M 600 0 C 580 80, 620 160, 610 240 C 600 320, 640 360, 650 400" stroke="#81907A" strokeWidth="1.5" fill="none" opacity="0.1" />
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════════
   CONTACT SECTION — Dark cartographic background
   ═══════════════════════════════════════════════════════════ */
export function ContactMapBackground({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 1200 500" fill="none" className={className} aria-hidden="true">
      <defs>
        <pattern id="contactGrid" width="50" height="50" patternUnits="userSpaceOnUse">
          <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#F3F0E9" strokeWidth="0.15" opacity="0.05" />
        </pattern>
      </defs>
      <rect width="1200" height="500" fill="url(#contactGrid)" />
      {/* Road network */}
      <g stroke="#F3F0E9" strokeWidth="0.3" opacity="0.06">
        <line x1="0" y1="150" x2="1200" y2="150" />
        <line x1="0" y1="300" x2="1200" y2="300" />
        <line x1="300" y1="0" x2="300" y2="500" />
        <line x1="600" y1="0" x2="600" y2="500" />
        <line x1="900" y1="0" x2="900" y2="500" />
      </g>
      {/* River */}
      <path d="M 100 0 C 130 100, 90 200, 120 300 C 150 400, 110 450, 140 500" stroke="#81907A" strokeWidth="1.5" fill="none" opacity="0.08" />
      {/* Settlement dots */}
      <g fill="#F3F0E9" opacity="0.04">
        <circle cx="450" cy="200" r="3" />
        <circle cx="750" cy="250" r="2.5" />
        <circle cx="350" cy="350" r="2" />
        <circle cx="850" cy="150" r="2" />
        <circle cx="550" cy="380" r="2.5" />
        <circle cx="1050" cy="300" r="2" />
      </g>
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════════
   WATER SUPPLY INFRASTRUCTURE GRAPHIC
   AMRUT 2.0 water distribution, nodes, transmission lines
   ═══════════════════════════════════════════════════════════ */
export function WaterSupplyGraphic({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 320 220" fill="none" className={className} aria-hidden="true">
      <defs>
        <pattern id="waterGrid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#10283B" strokeWidth="0.1" opacity="0.12" />
        </pattern>
      </defs>
      <rect width="320" height="220" fill="url(#waterGrid)" />
      
      {/* Main distribution trunks */}
      <path d="M 30 110 L 100 110 L 160 60 L 240 60 L 290 110" stroke="#81907A" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M 100 110 L 100 170 L 180 170 L 240 130" stroke="#81907A" strokeWidth="1.2" strokeDasharray="4 3" />
      <path d="M 160 60 L 160 170" stroke="#10283B" strokeWidth="0.8" opacity="0.3" />
      <path d="M 240 60 L 240 170" stroke="#10283B" strokeWidth="0.8" opacity="0.3" />

      {/* Pressure zones / District Metered Areas */}
      <rect x="40" y="40" width="70" height="50" fill="#81907A" fillOpacity="0.08" stroke="#81907A" strokeWidth="0.6" strokeDasharray="3 2" rx="1" />
      <rect x="180" y="80" width="80" height="60" fill="#10283B" fillOpacity="0.05" stroke="#10283B" strokeWidth="0.5" strokeDasharray="3 2" rx="1" />

      {/* Reservoir / elevated storage nodes */}
      <circle cx="30" cy="110" r="6" fill="#10283B" fillOpacity="0.1" stroke="#10283B" strokeWidth="1.2" />
      <circle cx="100" cy="110" r="4.5" fill="#81907A" stroke="#10283B" strokeWidth="1" />
      <circle cx="160" cy="60" r="4.5" fill="#FAF9F5" stroke="#81907A" strokeWidth="1.5" />
      <circle cx="240" cy="60" r="4.5" fill="#81907A" stroke="#10283B" strokeWidth="1" />
      <circle cx="290" cy="110" r="5" fill="#10283B" fillOpacity="0.1" stroke="#10283B" strokeWidth="1.2" />
      <circle cx="180" cy="170" r="4" fill="#FAF9F5" stroke="#81907A" strokeWidth="1.2" />

      {/* Service settlement dots */}
      <g fill="#10283B" opacity="0.25">
        <circle cx="60" cy="60" r="1.5" />
        <circle cx="80" cy="70" r="1.5" />
        <circle cx="210" cy="100" r="1.5" />
        <circle cx="230" cy="115" r="1.5" />
        <circle cx="200" cy="125" r="1.5" />
      </g>
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════════
   WATERWAY REJUVENATION GRAPHIC
   Urban canal systems (Bandar, Ryves, Eluru), riparian buffer,
   urban fabric interfaces
   ═══════════════════════════════════════════════════════════ */
export function WaterwayRejuvenationGraphic({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 320 220" fill="none" className={className} aria-hidden="true">
      {/* Background contour lines */}
      <path d="M 10 30 Q 160 50, 310 20" stroke="#10283B" strokeWidth="0.4" opacity="0.1" />
      <path d="M 10 190 Q 160 170, 310 200" stroke="#10283B" strokeWidth="0.4" opacity="0.1" />

      {/* Riparian green buffer zone */}
      <path
        d="M 10 100 C 80 80, 140 140, 220 110 C 260 95, 290 105, 310 100 L 310 135 C 290 140, 260 130, 220 145 C 140 175, 80 115, 10 135 Z"
        fill="#81907A"
        fillOpacity="0.15"
      />

      {/* Main canal waterway */}
      <path
        d="M 10 115 C 80 95, 140 155, 220 125 C 260 110, 290 120, 310 115"
        stroke="#81907A"
        strokeWidth="6"
        strokeLinecap="round"
        opacity="0.3"
      />
      <path
        d="M 10 115 C 80 95, 140 155, 220 125 C 260 110, 290 120, 310 115"
        stroke="#10283B"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.5"
      />

      {/* Adjoining urban parcels */}
      <g fill="#10283B" opacity="0.08">
        <rect x="40" y="45" width="30" height="25" rx="1" />
        <rect x="80" y="40" width="35" height="30" rx="1" />
        <rect x="150" y="50" width="45" height="35" rx="1" />
        <rect x="230" y="40" width="40" height="30" rx="1" />
        <rect x="50" y="150" width="40" height="30" rx="1" />
        <rect x="110" y="160" width="35" height="25" rx="1" />
        <rect x="170" y="155" width="45" height="30" rx="1" />
        <rect x="240" y="150" width="35" height="30" rx="1" />
      </g>

      {/* Crossing bridges / access links */}
      <line x1="115" y1="100" x2="115" y2="135" stroke="#10283B" strokeWidth="1.5" />
      <line x1="240" y1="95" x2="240" y2="130" stroke="#10283B" strokeWidth="1.5" />
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════════
   REGIONAL PLANNING GRAPHIC
   Regional hierarchy, inter-city transport, settlement clusters
   ═══════════════════════════════════════════════════════════ */
export function RegionalPlanningGraphic({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 320 220" fill="none" className={className} aria-hidden="true">
      {/* Regional boundary polygon */}
      <polygon
        points="30,40 180,20 290,50 300,170 170,200 40,160"
        stroke="#10283B"
        strokeWidth="0.8"
        strokeDasharray="6 3"
        fill="#10283B"
        fillOpacity="0.03"
      />

      {/* Sub-regional divide */}
      <line x1="160" y1="20" x2="160" y2="195" stroke="#81907A" strokeWidth="0.6" strokeDasharray="3 3" opacity="0.4" />

      {/* Regional corridors */}
      <line x1="50" y1="140" x2="160" y2="100" stroke="#81907A" strokeWidth="1.5" />
      <line x1="160" y1="100" x2="270" y2="70" stroke="#81907A" strokeWidth="1.5" />
      <line x1="160" y1="100" x2="200" y2="170" stroke="#10283B" strokeWidth="1" opacity="0.3" />
      <line x1="160" y1="100" x2="100" y2="45" stroke="#10283B" strokeWidth="1" opacity="0.3" />

      {/* Primary regional center */}
      <circle cx="160" cy="100" r="8" fill="#FAF9F5" stroke="#10283B" strokeWidth="2" />
      <circle cx="160" cy="100" r="4" fill="#81907A" />

      {/* Secondary growth centers */}
      <circle cx="50" cy="140" r="5" fill="#FAF9F5" stroke="#81907A" strokeWidth="1.5" />
      <circle cx="270" cy="70" r="5" fill="#FAF9F5" stroke="#81907A" strokeWidth="1.5" />
      <circle cx="200" cy="170" r="4" fill="#FAF9F5" stroke="#10283B" strokeWidth="1" />
      <circle cx="100" cy="45" r="4" fill="#FAF9F5" stroke="#10283B" strokeWidth="1" />

      {/* Dispersed rural/peri-urban nodes */}
      <g fill="#10283B" opacity="0.2">
        <circle cx="80" cy="100" r="2" />
        <circle cx="120" cy="140" r="2" />
        <circle cx="220" cy="120" r="2" />
        <circle cx="240" cy="140" r="2" />
        <circle cx="210" cy="50" r="2" />
      </g>
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════════
   HOUSING & PROPERTY PLANNING GRAPHIC
   PMAY housing layouts, beneficiary block divisions,
   internal green open spaces
   ═══════════════════════════════════════════════════════════ */
export function HousingPlanningGraphic({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 320 220" fill="none" className={className} aria-hidden="true">
      {/* Site boundary */}
      <rect x="25" y="20" width="270" height="180" stroke="#10283B" strokeWidth="0.8" strokeDasharray="4 2" fill="none" />

      {/* Internal primary loop road */}
      <rect x="50" y="45" width="220" height="130" stroke="#10283B" strokeWidth="1.2" fill="none" opacity="0.3" rx="2" />

      {/* Central community park / open green */}
      <rect x="125" y="80" width="70" height="60" fill="#81907A" fillOpacity="0.2" stroke="#81907A" strokeWidth="0.8" rx="2" />
      <circle cx="160" cy="110" r="10" fill="#81907A" fillOpacity="0.3" />

      {/* Housing cluster blocks - left wing */}
      <g fill="#10283B" opacity="0.08">
        <rect x="65" y="60" width="22" height="18" rx="0.5" />
        <rect x="92" y="60" width="22" height="18" rx="0.5" />
        <rect x="65" y="85" width="22" height="18" rx="0.5" />
        <rect x="92" y="85" width="22" height="18" rx="0.5" />
        <rect x="65" y="110" width="22" height="18" rx="0.5" />
        <rect x="92" y="110" width="22" height="18" rx="0.5" />
        <rect x="65" y="135" width="22" height="18" rx="0.5" />
        <rect x="92" y="135" width="22" height="18" rx="0.5" />
      </g>

      {/* Housing cluster blocks - right wing */}
      <g fill="#10283B" opacity="0.08">
        <rect x="205" y="60" width="22" height="18" rx="0.5" />
        <rect x="232" y="60" width="22" height="18" rx="0.5" />
        <rect x="205" y="85" width="22" height="18" rx="0.5" />
        <rect x="232" y="85" width="22" height="18" rx="0.5" />
        <rect x="205" y="110" width="22" height="18" rx="0.5" />
        <rect x="232" y="110" width="22" height="18" rx="0.5" />
        <rect x="205" y="135" width="22" height="18" rx="0.5" />
        <rect x="232" y="135" width="22" height="18" rx="0.5" />
      </g>

      {/* Community civic node */}
      <rect x="135" y="52" width="50" height="18" fill="#81907A" fillOpacity="0.12" stroke="#81907A" strokeWidth="0.6" rx="1" />
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════════
   TOWNSHIP LAYOUT & TOPOGRAPHIC GRAPHIC
   Bhopal Development Authority early layout practice,
   topographic contours, sector roads, zoning plots
   ═══════════════════════════════════════════════════════════ */
export function TownshipLayoutGraphic({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 320 220" fill="none" className={className} aria-hidden="true">
      {/* Topographic contours behind township layout */}
      <g opacity="0.12" stroke="#10283B" strokeWidth="0.6" fill="none">
        <path d="M 20 60 Q 100 40, 180 70 T 300 50" />
        <path d="M 20 90 Q 100 70, 180 100 T 300 80" />
        <path d="M 20 120 Q 100 100, 180 130 T 300 110" />
        <path d="M 20 150 Q 100 130, 180 160 T 300 140" />
        <path d="M 20 180 Q 100 160, 180 190 T 300 170" />
      </g>

      {/* Township sector master grid */}
      <rect x="40" y="35" width="240" height="150" stroke="#10283B" strokeWidth="0.9" rx="2" fill="none" />
      <line x1="160" y1="35" x2="160" y2="185" stroke="#10283B" strokeWidth="1.2" />
      <line x1="40" y1="110" x2="280" y2="110" stroke="#10283B" strokeWidth="1.2" />

      {/* Sector subdivisions */}
      <rect x="55" y="48" width="90" height="50" fill="#81907A" fillOpacity="0.1" stroke="#81907A" strokeWidth="0.5" strokeDasharray="2 2" rx="1" />
      <rect x="175" y="48" width="90" height="50" fill="#10283B" fillOpacity="0.05" stroke="#10283B" strokeWidth="0.5" strokeDasharray="2 2" rx="1" />
      <rect x="55" y="122" width="90" height="50" fill="#10283B" fillOpacity="0.05" stroke="#10283B" strokeWidth="0.5" strokeDasharray="2 2" rx="1" />
      <rect x="175" y="122" width="90" height="50" fill="#81907A" fillOpacity="0.12" stroke="#81907A" strokeWidth="0.5" strokeDasharray="2 2" rx="1" />

      {/* Sector green spaces */}
      <ellipse cx="100" cy="73" rx="18" ry="12" fill="#81907A" fillOpacity="0.25" />
      <ellipse cx="220" cy="147" rx="18" ry="12" fill="#81907A" fillOpacity="0.25" />

      {/* Survey benchmark point */}
      <g transform="translate(160, 110)">
        <circle cx="0" cy="0" r="4" fill="#FAF9F5" stroke="#10283B" strokeWidth="1" />
        <line x1="-6" y1="0" x2="6" y2="0" stroke="#10283B" strokeWidth="0.8" />
        <line x1="0" y1="-6" x2="0" y2="6" stroke="#10283B" strokeWidth="0.8" />
      </g>
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════════
   PROJECT ILLUSTRATION SELECTOR COMPONENT
   Maps visualKey to the bespoke cartographic SVG
   ═══════════════════════════════════════════════════════════ */
export function ProjectIllustration({
  visualKey,
  className = "",
}: {
  visualKey: string;
  className?: string;
}) {
  switch (visualKey) {
    case "zonal":
      return <ZonalPlanningGraphic className={className} />;
    case "master-plan":
      return <MasterPlanGraphic className={className} />;
    case "water-supply":
      return <WaterSupplyGraphic className={className} />;
    case "water-body":
      return <WaterwayRejuvenationGraphic className={className} />;
    case "flood":
      return <FloodMitigationGraphic className={className} />;
    case "regional":
      return <RegionalPlanningGraphic className={className} />;
    case "housing":
      return <HousingPlanningGraphic className={className} />;
    case "township":
      return <TownshipLayoutGraphic className={className} />;
    default:
      return <MasterPlanGraphic className={className} />;
  }
}


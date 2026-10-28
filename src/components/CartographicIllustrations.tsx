"use client";

import React from "react";

/* ═══════════════════════════════════════════════════════════
   SECTION WATERMARK BACKGROUNDS
   Coordinated collection of faded urban-planning maps,
   topographic contours, GIS spatial boundaries, and street networks
   ═══════════════════════════════════════════════════════════ */

export function HeroMapIllustration({ className = "" }: { className?: string }) {
  return (
    <div
      className={`map-watermark-layer hero-map-mask ${className}`}
      aria-hidden="true"
    >
      {/* Layer 1: Large-scale Urban Street Network & Master Plan SVG map */}
      <div
        style={{
          position: "absolute",
          inset: "-6% -4%",
          backgroundImage: "url('/maps/urban-street-network.svg')",
          backgroundSize: "1550px auto",
          backgroundPosition: "82% 45%",
          backgroundRepeat: "no-repeat",
          opacity: 0.44,
          pointerEvents: "none",
        }}
      />

      {/* Layer 2: Secondary Topographic Contour overlay on the right side */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/maps/topographic-contours.svg')",
          backgroundSize: "1400px auto",
          backgroundPosition: "right center",
          backgroundRepeat: "no-repeat",
          opacity: 0.22,
          pointerEvents: "none",
        }}
      />

      {/* Layer 3: Crisp vector cartographic registration & survey geometry */}
      <svg
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Concentric planning radius rings centered near portrait area */}
        <g opacity="0.22">
          <circle
            cx="1040"
            cy="450"
            r="210"
            stroke="#10283B"
            strokeWidth="0.75"
            strokeDasharray="8 5"
          />
          <circle
            cx="1040"
            cy="450"
            r="330"
            stroke="#657762"
            strokeWidth="0.65"
            strokeDasharray="4 4"
          />
          <circle
            cx="1040"
            cy="450"
            r="460"
            stroke="#10283B"
            strokeWidth="0.5"
          />
        </g>
      </svg>

      {/* Layer 4: Directional warm-paper wash to ensure effortless headline legibility */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, rgba(250, 249, 245, 0.9) 0%, rgba(250, 249, 245, 0.78) 32%, rgba(250, 249, 245, 0.36) 60%, rgba(250, 249, 245, 0.2) 100%)",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}

export function AboutBackgroundMap({ className = "" }: { className?: string }) {
  return (
    <div
      className={`map-watermark-layer section-map-edges ${className}`}
      aria-hidden="true"
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/maps/topographic-contours.svg')",
          backgroundSize: "1500px auto",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          opacity: 0.42,
          pointerEvents: "none",
        }}
      />
      {/* Soft center paper wash so long paragraphs sit on a clean, readable surface */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 56% 66% at 48% 55%, rgba(243, 240, 233, 0.84) 0%, rgba(243, 240, 233, 0.42) 68%, rgba(243, 240, 233, 0.12) 100%)",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}

export function ExpertiseBackgroundMap({ className = "" }: { className?: string }) {
  return (
    <div
      className={`map-watermark-layer section-map-edges ${className}`}
      aria-hidden="true"
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/maps/gis-spatial-boundaries.svg')",
          backgroundSize: "1500px auto",
          backgroundPosition: "center top",
          backgroundRepeat: "repeat-y",
          opacity: 0.34,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 65% 60% at 50% 50%, rgba(250, 249, 245, 0.8) 0%, rgba(250, 249, 245, 0.36) 75%, rgba(250, 249, 245, 0.14) 100%)",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}

export function SelectedWorkBackgroundMap({ className = "" }: { className?: string }) {
  return (
    <div
      className={`map-watermark-layer section-map-edges ${className}`}
      aria-hidden="true"
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/maps/land-use-zoning.svg')",
          backgroundSize: "1500px auto",
          backgroundPosition: "center top",
          backgroundRepeat: "repeat-y",
          opacity: 0.26,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(243, 240, 233, 0.32) 0%, rgba(243, 240, 233, 0.78) 35%, rgba(243, 240, 233, 0.82) 75%, rgba(243, 240, 233, 0.4) 100%)",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}

export function ExperienceBackgroundMap({ className = "" }: { className?: string }) {
  return (
    <div
      className={`map-watermark-layer section-map-fade ${className}`}
      aria-hidden="true"
    >
      {/* Left outer margin cartographic strip (kept at fine 1:1 scale) */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "38%",
          height: "100%",
          backgroundImage: "url('/maps/waterway-infrastructure.svg')",
          backgroundSize: "1100px auto",
          backgroundPosition: "left top",
          backgroundRepeat: "repeat-y",
          opacity: 0.28,
          pointerEvents: "none",
        }}
      />
      {/* Right outer margin street & contour strip */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "38%",
          height: "100%",
          backgroundImage: "url('/maps/topographic-contours.svg')",
          backgroundSize: "1200px auto",
          backgroundPosition: "right top",
          backgroundRepeat: "repeat-y",
          opacity: 0.32,
          pointerEvents: "none",
        }}
      />
      {/* Center readability mask so timeline dates, titles, and responsibilities stay crisp */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, rgba(250, 249, 245, 0.22) 0%, rgba(250, 249, 245, 0.92) 22%, rgba(250, 249, 245, 0.96) 78%, rgba(250, 249, 245, 0.22) 100%)",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}

export function ContactMapBackground({ className = "" }: { className?: string }) {
  return (
    <div
      className={`map-watermark-layer dark-map-mask ${className}`}
      aria-hidden="true"
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/maps/dark-urban-network.svg')",
          backgroundSize: "1500px auto",
          backgroundPosition: "75% center",
          backgroundRepeat: "no-repeat",
          opacity: 0.58,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 55% 65% at 28% 50%, rgba(9, 29, 45, 0.74) 0%, rgba(9, 29, 45, 0.32) 65%, rgba(9, 29, 45, 0.1) 100%)",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   DETAILED DOMAIN & PROJECT CARTOGRAPHIC DIAGRAMS
   High-craft, multi-layered urban-planning graphics combining
   fine-grained CSS SVG map textures with crisp vector overlays
   ═══════════════════════════════════════════════════════════ */

function MapPlateWrapper({
  bgUrl,
  bgPosition = "center",
  bgSize = "560px auto",
  bgOpacity = 0.42,
  className = "",
  children,
}: {
  bgUrl: string;
  bgPosition?: string;
  bgSize?: string;
  bgOpacity?: number;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}
      aria-hidden="true"
    >
      {/* Underlying fine-linework cartographic map sheet */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url('${bgUrl}')`,
          backgroundSize: bgSize,
          backgroundPosition: bgPosition,
          opacity: bgOpacity,
          pointerEvents: "none",
        }}
      />
      {/* Focal vector diagram */}
      {children}
    </div>
  );
}

export function ZonalPlanningGraphic({ className = "" }: { className?: string }) {
  return (
    <MapPlateWrapper
      bgUrl="/maps/land-use-zoning.svg"
      bgPosition="35% 45%"
      bgSize="540px auto"
      bgOpacity={0.44}
      className={className}
    >
      <svg viewBox="0 0 360 220" fill="none" className="w-full h-full relative" aria-hidden="true">
        <defs>
          <pattern id="zonal-hatch-sage" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="5" stroke="#657762" strokeWidth="0.7" opacity="0.6" />
          </pattern>
          <pattern id="zonal-hatch-navy" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(-45)">
            <line x1="0" y1="0" x2="0" y2="5" stroke="#10283B" strokeWidth="0.55" opacity="0.42" />
          </pattern>
          <pattern id="zonal-cross" width="6" height="6" patternUnits="userSpaceOnUse">
            <path d="M 0 0 L 6 6 M 6 0 L 0 6" stroke="#10283B" strokeWidth="0.4" opacity="0.34" />
          </pattern>
        </defs>

        {/* Riverfront / riparian corridor along top */}
        <path
          d="M -10 48 C 70 42, 145 26, 230 18 C 285 12, 330 22, 370 14"
          stroke="#81907A"
          strokeWidth="20"
          opacity="0.25"
        />
        <path
          d="M -10 48 C 70 42, 145 26, 230 18 C 285 12, 330 22, 370 14"
          stroke="#657762"
          strokeWidth="5"
          opacity="0.42"
        />
        <path
          d="M -10 48 C 70 42, 145 26, 230 18 C 285 12, 330 22, 370 14"
          stroke="#10283B"
          strokeWidth="0.9"
          opacity="0.5"
        />

        {/* Zonal land-use parcels with distinct cartographic hatches */}
        <g>
          <rect x="24" y="64" width="74" height="48" fill="url(#zonal-cross)" stroke="#10283B" strokeWidth="0.8" opacity="0.78" />
          <rect x="38" y="75" width="46" height="26" fill="#FAF9F5" fillOpacity="0.75" stroke="#10283B" strokeWidth="0.6" opacity="0.65" />

          <rect x="106" y="56" width="82" height="56" fill="#81907A" fillOpacity="0.24" stroke="#657762" strokeWidth="0.8" />
          <rect x="110" y="60" width="74" height="48" fill="url(#zonal-hatch-sage)" />

          <rect x="196" y="50" width="72" height="62" fill="url(#zonal-hatch-navy)" stroke="#10283B" strokeWidth="0.75" opacity="0.8" />

          <rect x="276" y="50" width="62" height="62" fill="#FAF9F5" fillOpacity="0.55" stroke="#10283B" strokeWidth="0.7" opacity="0.7" />
          <line x1="276" y1="81" x2="338" y2="81" stroke="#10283B" strokeWidth="0.4" opacity="0.45" />
          <line x1="307" y1="50" x2="307" y2="112" stroke="#10283B" strokeWidth="0.4" opacity="0.45" />

          <rect x="24" y="122" width="74" height="70" fill="#FAF9F5" fillOpacity="0.55" stroke="#10283B" strokeWidth="0.7" opacity="0.65" />
          <line x1="24" y1="145" x2="98" y2="145" stroke="#10283B" strokeWidth="0.35" opacity="0.42" />
          <line x1="24" y1="168" x2="98" y2="168" stroke="#10283B" strokeWidth="0.35" opacity="0.42" />
          <line x1="61" y1="122" x2="61" y2="192" stroke="#10283B" strokeWidth="0.35" opacity="0.42" />

          <rect x="106" y="122" width="82" height="70" fill="url(#zonal-hatch-navy)" stroke="#10283B" strokeWidth="0.75" opacity="0.75" />
          <rect x="196" y="122" width="72" height="70" fill="#81907A" fillOpacity="0.2" stroke="#657762" strokeWidth="0.75" />
          <rect x="200" y="126" width="64" height="62" fill="url(#zonal-hatch-sage)" />

          <rect x="276" y="122" width="62" height="70" fill="url(#zonal-cross)" stroke="#10283B" strokeWidth="0.7" opacity="0.7" />
        </g>

        {/* Primary Arterial Grid & Zonal Boundary */}
        <g stroke="#10283B" opacity="0.6">
          <line x1="12" y1="117" x2="348" y2="117" strokeWidth="1.5" />
          <line x1="102" y1="40" x2="102" y2="204" strokeWidth="1.3" />
          <line x1="192" y1="34" x2="192" y2="204" strokeWidth="1.5" />
          <line x1="272" y1="34" x2="272" y2="204" strokeWidth="1.2" />
        </g>

        <rect
          x="16"
          y="42"
          width="328"
          height="158"
          stroke="#657762"
          strokeWidth="1.2"
          strokeDasharray="6 3"
          fill="none"
          opacity="0.75"
        />

        <circle cx="192" cy="117" r="6" fill="#FAF9F5" stroke="#10283B" strokeWidth="1.2" />
        <circle cx="192" cy="117" r="2.2" fill="#657762" />
        <circle cx="102" cy="117" r="4.5" fill="#FAF9F5" stroke="#10283B" strokeWidth="1" />
      </svg>
    </MapPlateWrapper>
  );
}

export function GISLayersGraphic({ className = "" }: { className?: string }) {
  return (
    <MapPlateWrapper
      bgUrl="/maps/urban-street-network.svg"
      bgPosition="60% 40%"
      bgSize="580px auto"
      bgOpacity={0.32}
      className={className}
    >
      <svg viewBox="0 0 360 220" fill="none" className="w-full h-full relative" aria-hidden="true">
        <defs>
          <pattern id="gis-card-hatch" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="5" stroke="#657762" strokeWidth="0.65" opacity="0.55" />
          </pattern>
        </defs>

        {/* Spatial polygon tessellation layers */}
        <g opacity="0.82">
          <polygon
            points="35,42 135,24 165,95 95,135 28,105"
            fill="url(#gis-card-hatch)"
            stroke="#10283B"
            strokeWidth="0.85"
          />
          <polygon
            points="135,24 245,36 230,115 165,95"
            fill="#81907A"
            fillOpacity="0.22"
            stroke="#10283B"
            strokeWidth="0.85"
          />
          <polygon
            points="245,36 335,52 320,145 230,115"
            fill="#FAF9F5"
            fillOpacity="0.5"
            stroke="#10283B"
            strokeWidth="0.85"
          />
          <polygon
            points="95,135 165,95 230,115 215,192 110,186"
            fill="url(#gis-card-hatch)"
            stroke="#657762"
            strokeWidth="0.9"
          />
          <polygon
            points="230,115 320,145 295,196 215,192"
            fill="#81907A"
            fillOpacity="0.24"
            stroke="#10283B"
            strokeWidth="0.85"
          />
        </g>

        {/* Spatial buffer analysis rings & vector topology */}
        <g opacity="0.78">
          <circle cx="165" cy="95" r="44" stroke="#657762" strokeWidth="0.85" strokeDasharray="4 3" fill="none" />
          <circle cx="165" cy="95" r="22" fill="#81907A" fillOpacity="0.18" stroke="#657762" strokeWidth="0.65" />
          <circle cx="245" cy="135" r="34" stroke="#10283B" strokeWidth="0.7" strokeDasharray="3 3" fill="none" />

          <line x1="95" y1="82" x2="165" y2="95" stroke="#10283B" strokeWidth="0.9" strokeDasharray="3 2" />
          <line x1="165" y1="95" x2="245" y2="75" stroke="#10283B" strokeWidth="0.9" strokeDasharray="3 2" />
          <line x1="165" y1="95" x2="245" y2="135" stroke="#10283B" strokeWidth="0.9" strokeDasharray="3 2" />
          <line x1="165" y1="95" x2="155" y2="160" stroke="#10283B" strokeWidth="0.9" strokeDasharray="3 2" />

          {[
            [95, 82],
            [165, 95],
            [245, 75],
            [245, 135],
            [155, 160],
          ].map(([cx, cy], idx) => (
            <g key={idx}>
              <circle cx={cx} cy={cy} r="4.5" fill="#FAF9F5" stroke="#10283B" strokeWidth="1.2" />
              <circle cx={cx} cy={cy} r="1.8" fill="#657762" />
            </g>
          ))}
        </g>
      </svg>
    </MapPlateWrapper>
  );
}

export function WaterInfraGraphic({ className = "" }: { className?: string }) {
  return <WaterSupplyGraphic className={className} />;
}

export function DPRDocumentationGraphic({ className = "" }: { className?: string }) {
  return <FloodMitigationGraphic className={className} />;
}

export function RegionalCoordinationGraphic({ className = "" }: { className?: string }) {
  return <RegionalPlanningGraphic className={className} />;
}

export function FloodMitigationGraphic({ className = "" }: { className?: string }) {
  return (
    <MapPlateWrapper
      bgUrl="/maps/topographic-contours.svg"
      bgPosition="75% 45%"
      bgSize="520px auto"
      bgOpacity={0.5}
      className={className}
    >
      <svg viewBox="0 0 360 220" fill="none" className="w-full h-full relative" aria-hidden="true">
        <defs>
          <pattern id="flood-hatch" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(35)">
            <line x1="0" y1="0" x2="0" y2="5" stroke="#657762" strokeWidth="0.65" opacity="0.55" />
          </pattern>
        </defs>

        {/* Multi-level elevation contour lines */}
        <g opacity="0.48" stroke="#10283B" fill="none">
          <path d="M 10 185 Q 85 145, 165 162 Q 250 180, 350 135" strokeWidth="0.85" />
          <path d="M 10 165 Q 85 125, 165 142 Q 250 160, 350 115" strokeWidth="0.45" />
          <path d="M 10 145 Q 85 105, 165 122 Q 250 140, 350 95" strokeWidth="0.45" strokeDasharray="5 3" />
          <path d="M 10 125 Q 85 85, 165 102 Q 250 120, 350 75" strokeWidth="0.85" />
          <path d="M 10 105 Q 85 65, 165 82 Q 250 100, 350 55" strokeWidth="0.45" />
          <path d="M 10 85 Q 85 45, 165 62 Q 250 80, 350 35" strokeWidth="0.45" />
        </g>

        {/* Low-lying floodplain catchment inundation buffer */}
        <path
          d="M 55 125 C 115 95, 215 105, 295 85 C 315 115, 285 165, 205 175 C 125 185, 45 160, 55 125 Z"
          fill="#81907A"
          fillOpacity="0.24"
          stroke="#657762"
          strokeWidth="0.85"
          strokeDasharray="4 3"
        />
        <path
          d="M 75 130 C 125 108, 205 115, 270 100 C 280 122, 260 155, 195 162 C 130 168, 68 150, 75 130 Z"
          fill="url(#flood-hatch)"
        />

        {/* Dendritic drainage network & stormwater interceptor channels */}
        <g opacity="0.82">
          <path
            d="M 20 155 C 95 145, 175 138, 255 118 C 295 108, 325 98, 350 88"
            stroke="#657762"
            strokeWidth="5.5"
            strokeOpacity="0.38"
            strokeLinecap="round"
          />
          <path
            d="M 20 155 C 95 145, 175 138, 255 118 C 295 108, 325 98, 350 88"
            stroke="#10283B"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path d="M 75 30 C 85 68, 105 105, 128 142" stroke="#657762" strokeWidth="1.2" />
          <path d="M 165 22 C 172 60, 182 95, 195 132" stroke="#657762" strokeWidth="1.2" />
          <path d="M 255 25 C 250 58, 248 88, 255 118" stroke="#657762" strokeWidth="1.1" strokeDasharray="4 2" />
          <path d="M 145 198 C 158 175, 168 156, 175 138" stroke="#657762" strokeWidth="1.1" />
          <path d="M 245 195 C 242 168, 246 142, 255 118" stroke="#657762" strokeWidth="1.1" strokeDasharray="4 2" />
        </g>

        {/* Urban settlement parcels in catchment */}
        <g fill="#FAF9F5" fillOpacity="0.65" stroke="#10283B" strokeWidth="0.65" opacity="0.75">
          <rect x="92" y="72" width="24" height="16" rx="0.5" />
          <rect x="122" y="76" width="28" height="18" rx="0.5" />
          <rect x="195" y="64" width="30" height="20" rx="0.5" />
          <rect x="102" y="152" width="32" height="18" rx="0.5" />
          <rect x="192" y="146" width="34" height="20" rx="0.5" />
          <rect x="275" y="128" width="28" height="18" rx="0.5" />
        </g>
      </svg>
    </MapPlateWrapper>
  );
}

export function MasterPlanGraphic({ className = "" }: { className?: string }) {
  return (
    <MapPlateWrapper
      bgUrl="/maps/urban-street-network.svg"
      bgPosition="64% 48%"
      bgSize="560px auto"
      bgOpacity={0.5}
      className={className}
    >
      <svg viewBox="0 0 360 220" fill="none" className="w-full h-full relative" aria-hidden="true">
        <defs>
          <pattern id="mp-hatch-sage" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="5" stroke="#657762" strokeWidth="0.65" opacity="0.6" />
          </pattern>
          <pattern id="mp-hatch-navy" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(-45)">
            <line x1="0" y1="0" x2="0" y2="5" stroke="#10283B" strokeWidth="0.5" opacity="0.4" />
          </pattern>
        </defs>

        {/* Sinuous river corridor across master plan area */}
        <path
          d="M 45 -10 C 85 55, 115 110, 145 155 C 165 185, 195 205, 225 230"
          stroke="#81907A"
          strokeWidth="18"
          opacity="0.28"
        />
        <path
          d="M 45 -10 C 85 55, 115 110, 145 155 C 165 185, 195 205, 225 230"
          stroke="#657762"
          strokeWidth="4.5"
          opacity="0.5"
        />

        {/* Planned urban blocks & land-use zones */}
        <g opacity="0.78">
          <rect x="135" y="34" width="64" height="42" fill="url(#mp-hatch-sage)" stroke="#657762" strokeWidth="0.8" />
          <rect x="207" y="34" width="58" height="42" fill="url(#mp-hatch-navy)" stroke="#10283B" strokeWidth="0.75" />
          <rect x="273" y="34" width="52" height="42" fill="#FAF9F5" fillOpacity="0.55" stroke="#10283B" strokeWidth="0.7" />

          <rect x="135" y="84" width="64" height="48" fill="#FAF9F5" fillOpacity="0.55" stroke="#10283B" strokeWidth="0.7" />
          <rect x="207" y="84" width="58" height="48" fill="#81907A" fillOpacity="0.25" stroke="#657762" strokeWidth="0.85" />
          <rect x="273" y="84" width="52" height="48" fill="url(#mp-hatch-navy)" stroke="#10283B" strokeWidth="0.75" />

          <rect x="155" y="140" width="44" height="46" fill="url(#mp-hatch-navy)" stroke="#10283B" strokeWidth="0.7" />
          <rect x="207" y="140" width="58" height="46" fill="#FAF9F5" fillOpacity="0.55" stroke="#10283B" strokeWidth="0.7" />
          <rect x="273" y="140" width="52" height="46" fill="url(#mp-hatch-sage)" stroke="#657762" strokeWidth="0.8" />
        </g>

        {/* Ring roads & radial corridors */}
        <g opacity="0.68">
          <circle cx="236" cy="108" r="52" stroke="#10283B" strokeWidth="1.2" fill="none" />
          <circle cx="236" cy="108" r="84" stroke="#657762" strokeWidth="0.95" strokeDasharray="6 3" fill="none" />
          <line x1="20" y1="80" x2="340" y2="80" stroke="#10283B" strokeWidth="1.3" />
          <line x1="20" y1="136" x2="340" y2="136" stroke="#10283B" strokeWidth="1.3" />
          <line x1="203" y1="16" x2="203" y2="204" stroke="#10283B" strokeWidth="1.3" />
          <line x1="269" y1="16" x2="269" y2="204" stroke="#10283B" strokeWidth="1.1" />
        </g>

        {/* Master Plan Statutory Development Boundary */}
        <polygon
          points="32,24 332,20 342,194 48,198 22,120"
          stroke="#10283B"
          strokeWidth="1.2"
          strokeDasharray="8 4 2 4"
          fill="none"
          opacity="0.72"
        />
      </svg>
    </MapPlateWrapper>
  );
}

export function WaterSupplyGraphic({ className = "" }: { className?: string }) {
  return (
    <MapPlateWrapper
      bgUrl="/maps/waterway-infrastructure.svg"
      bgPosition="45% 50%"
      bgSize="540px auto"
      bgOpacity={0.44}
      className={className}
    >
      <svg viewBox="0 0 360 220" fill="none" className="w-full h-full relative" aria-hidden="true">
        <defs>
          <pattern id="ws-dma-hatch" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="5" stroke="#657762" strokeWidth="0.6" opacity="0.5" />
          </pattern>
        </defs>

        {/* DMA (District Metered Area) Service Zone Polygons */}
        <g opacity="0.78">
          <polygon
            points="32,36 142,28 152,102 42,108"
            fill="url(#ws-dma-hatch)"
            stroke="#657762"
            strokeWidth="0.85"
            strokeDasharray="4 2"
          />
          <polygon
            points="162,28 318,34 326,112 168,104"
            fill="#FAF9F5"
            fillOpacity="0.45"
            stroke="#10283B"
            strokeWidth="0.8"
            strokeDasharray="4 2"
          />
          <polygon
            points="48,120 205,114 212,192 56,194"
            fill="#81907A"
            fillOpacity="0.18"
            stroke="#657762"
            strokeWidth="0.85"
            strokeDasharray="4 2"
          />
          <polygon
            points="220,120 328,122 322,194 224,192"
            fill="url(#ws-dma-hatch)"
            stroke="#10283B"
            strokeWidth="0.8"
            strokeDasharray="4 2"
          />
        </g>

        {/* Settlement blocks within service zones */}
        <g fill="#FAF9F5" fillOpacity="0.65" stroke="#10283B" strokeWidth="0.55" opacity="0.7">
          <rect x="52" y="48" width="32" height="20" />
          <rect x="92" y="48" width="36" height="20" />
          <rect x="52" y="74" width="32" height="22" />
          <rect x="182" y="46" width="42" height="22" />
          <rect x="232" y="46" width="46" height="22" />
          <rect x="182" y="74" width="42" height="20" />
          <rect x="72" y="134" width="45" height="22" />
          <rect x="125" y="134" width="48" height="22" />
          <rect x="238" y="138" width="54" height="26" />
        </g>

        {/* Primary Water Transmission Trunk Mains & Distribution Loops */}
        <g opacity="0.9">
          <path
            d="M 28 114 L 96 114 L 158 68 L 254 68 L 328 114"
            stroke="#10283B"
            strokeWidth="2.1"
            strokeLinecap="round"
          />
          <path
            d="M 96 114 L 96 168 L 195 168 L 254 114 L 254 68"
            stroke="#657762"
            strokeWidth="1.6"
            strokeDasharray="5 3"
          />
          <path d="M 158 68 L 158 168" stroke="#10283B" strokeWidth="1.1" opacity="0.65" />
          <path d="M 254 114 L 315 168" stroke="#657762" strokeWidth="1.3" />
        </g>

        {/* Elevated Service Reservoirs (ESR) & Hydraulic Junction Nodes */}
        {[
          { x: 28, y: 114, r: 6.5, primary: true },
          { x: 96, y: 114, r: 5, primary: false },
          { x: 158, y: 68, r: 6, primary: true },
          { x: 254, y: 68, r: 5.5, primary: true },
          { x: 328, y: 114, r: 5, primary: false },
          { x: 96, y: 168, r: 4.5, primary: false },
          { x: 195, y: 168, r: 5.5, primary: true },
          { x: 254, y: 114, r: 4.5, primary: false },
        ].map((n, i) => (
          <g key={i}>
            <circle cx={n.x} cy={n.y} r={n.r} fill="#FAF9F5" stroke="#10283B" strokeWidth="1.4" />
            <circle cx={n.x} cy={n.y} r={n.primary ? 2.6 : 1.8} fill={n.primary ? "#657762" : "#10283B"} />
          </g>
        ))}
      </svg>
    </MapPlateWrapper>
  );
}

export function WaterwayRejuvenationGraphic({ className = "" }: { className?: string }) {
  return (
    <MapPlateWrapper
      bgUrl="/maps/urban-street-network.svg"
      bgPosition="30% 60%"
      bgSize="540px auto"
      bgOpacity={0.38}
      className={className}
    >
      <svg viewBox="0 0 360 220" fill="none" className="w-full h-full relative" aria-hidden="true">
        <defs>
          <pattern id="ww-riparian" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(40)">
            <line x1="0" y1="0" x2="0" y2="5" stroke="#657762" strokeWidth="0.7" opacity="0.6" />
          </pattern>
          <pattern id="ww-urban" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(-45)">
            <line x1="0" y1="0" x2="0" y2="5" stroke="#10283B" strokeWidth="0.45" opacity="0.38" />
          </pattern>
        </defs>

        {/* Wide Vegetated Riparian Buffer Corridor */}
        <path
          d="M -10 92 C 75 68, 155 138, 245 102 C 295 82, 330 96, 370 88 L 370 138 C 330 146, 295 132, 245 152 C 155 188, 75 118, -10 142 Z"
          fill="#81907A"
          fillOpacity="0.25"
        />
        <path
          d="M -10 96 C 75 72, 155 142, 245 106 C 295 86, 330 100, 370 92 L 370 134 C 330 142, 295 128, 245 148 C 155 184, 75 114, -10 138 Z"
          fill="url(#ww-riparian)"
        />

        {/* Secondary Branching Canal */}
        <path d="M 125 116 C 165 65, 225 42, 315 24" stroke="url(#ww-riparian)" strokeWidth="22" />
        <path d="M 125 116 C 165 65, 225 42, 315 24" stroke="#81907A" strokeWidth="9" opacity="0.45" />
        <path d="M 125 116 C 165 65, 225 42, 315 24" stroke="#10283B" strokeWidth="1.1" opacity="0.65" />

        {/* Main Canal Channel */}
        <path
          d="M -10 116 C 75 92, 155 162, 245 126 C 295 106, 330 120, 370 112"
          stroke="#FAF9F5"
          strokeWidth="18"
          opacity="0.92"
        />
        <path
          d="M -10 116 C 75 92, 155 162, 245 126 C 295 106, 330 120, 370 112"
          stroke="#81907A"
          strokeWidth="14"
          opacity="0.45"
        />
        <path
          d="M -10 116 C 75 92, 155 162, 245 126 C 295 106, 330 120, 370 112"
          stroke="#10283B"
          strokeWidth="1.4"
          opacity="0.7"
        />

        {/* Adjoining Urban Fabric & Waterfront Blocks */}
        <g opacity="0.78">
          <rect x="22" y="28" width="38" height="28" fill="url(#ww-urban)" stroke="#10283B" strokeWidth="0.7" />
          <rect x="66" y="24" width="44" height="30" fill="#FAF9F5" fillOpacity="0.6" stroke="#10283B" strokeWidth="0.7" />
          <rect x="116" y="28" width="34" height="26" fill="#81907A" fillOpacity="0.22" stroke="#657762" strokeWidth="0.7" />
          <rect x="220" y="54" width="46" height="28" fill="url(#ww-urban)" stroke="#10283B" strokeWidth="0.7" />
          <rect x="274" y="46" width="52" height="30" fill="#FAF9F5" fillOpacity="0.6" stroke="#10283B" strokeWidth="0.7" />

          <rect x="28" y="148" width="46" height="34" fill="#FAF9F5" fillOpacity="0.6" stroke="#10283B" strokeWidth="0.7" />
          <rect x="82" y="156" width="42" height="32" fill="url(#ww-urban)" stroke="#10283B" strokeWidth="0.7" />
          <rect x="132" y="166" width="48" height="28" fill="#81907A" fillOpacity="0.22" stroke="#657762" strokeWidth="0.7" />
          <rect x="190" y="164" width="46" height="30" fill="#FAF9F5" fillOpacity="0.6" stroke="#10283B" strokeWidth="0.7" />
          <rect x="246" y="152" width="44" height="34" fill="url(#ww-urban)" stroke="#10283B" strokeWidth="0.7" />
          <rect x="298" y="146" width="40" height="34" fill="#FAF9F5" fillOpacity="0.6" stroke="#10283B" strokeWidth="0.7" />
        </g>

        {/* Canal Bridges */}
        <g stroke="#10283B" strokeWidth="2.2" opacity="0.75">
          <line x1="78" y1="86" x2="78" y2="132" />
          <line x1="188" y1="108" x2="188" y2="156" />
          <line x1="286" y1="90" x2="286" y2="136" />
        </g>
      </svg>
    </MapPlateWrapper>
  );
}

export function RegionalPlanningGraphic({ className = "" }: { className?: string }) {
  return (
    <MapPlateWrapper
      bgUrl="/maps/gis-spatial-boundaries.svg"
      bgPosition="center"
      bgSize="520px auto"
      bgOpacity={0.42}
      className={className}
    >
      <svg viewBox="0 0 360 220" fill="none" className="w-full h-full relative" aria-hidden="true">
        <polygon
          points="28,38 190,18 326,44 336,174 185,202 38,168"
          stroke="#10283B"
          strokeWidth="1.2"
          strokeDasharray="8 4"
          fill="#FAF9F5"
          fillOpacity="0.35"
        />
        <polyline
          points="180,18 172,106 185,202"
          stroke="#657762"
          strokeWidth="0.85"
          strokeDasharray="4 3"
          opacity="0.7"
        />
        <polyline
          points="33,104 172,106 331,112"
          stroke="#657762"
          strokeWidth="0.85"
          strokeDasharray="4 3"
          opacity="0.7"
        />

        <g opacity="0.82">
          <line x1="64" y1="142" x2="172" y2="106" stroke="#657762" strokeWidth="2.1" />
          <line x1="172" y1="106" x2="288" y2="72" stroke="#657762" strokeWidth="2.1" />
          <line x1="172" y1="106" x2="108" y2="48" stroke="#10283B" strokeWidth="1.4" />
          <line x1="172" y1="106" x2="224" y2="168" stroke="#10283B" strokeWidth="1.4" />
          <line x1="64" y1="142" x2="108" y2="48" stroke="#10283B" strokeWidth="0.8" strokeDasharray="4 3" />
          <line x1="288" y1="72" x2="224" y2="168" stroke="#10283B" strokeWidth="0.8" strokeDasharray="4 3" />
        </g>

        <circle cx="172" cy="106" r="36" stroke="#657762" strokeWidth="0.75" strokeDasharray="4 3" opacity="0.6" />
        <circle cx="172" cy="106" r="68" stroke="#10283B" strokeWidth="0.6" strokeDasharray="3 3" opacity="0.45" />

        <circle cx="172" cy="106" r="9.5" fill="#FAF9F5" stroke="#10283B" strokeWidth="2" />
        <circle cx="172" cy="106" r="4.5" fill="#657762" />

        {[
          [64, 142, 6],
          [288, 72, 6],
          [108, 48, 5],
          [224, 168, 5],
        ].map(([cx, cy, r], idx) => (
          <g key={idx}>
            <circle cx={cx} cy={cy} r={r} fill="#FAF9F5" stroke="#10283B" strokeWidth="1.4" />
            <circle cx={cx} cy={cy} r={2.2} fill="#657762" />
          </g>
        ))}
      </svg>
    </MapPlateWrapper>
  );
}

export function HousingPlanningGraphic({ className = "" }: { className?: string }) {
  return (
    <MapPlateWrapper
      bgUrl="/maps/neighbourhood-layout.svg"
      bgPosition="center"
      bgSize="540px auto"
      bgOpacity={0.48}
      className={className}
    >
      <svg viewBox="0 0 360 220" fill="none" className="w-full h-full relative" aria-hidden="true">
        <defs>
          <pattern id="hp-park" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="5" stroke="#657762" strokeWidth="0.65" opacity="0.6" />
          </pattern>
        </defs>

        <rect
          x="24"
          y="18"
          width="312"
          height="184"
          stroke="#10283B"
          strokeWidth="1.1"
          strokeDasharray="6 3"
          fill="#FAF9F5"
          fillOpacity="0.42"
        />

        <rect x="48" y="38" width="264" height="144" rx="4" stroke="#10283B" strokeWidth="1.5" opacity="0.6" />
        <line x1="180" y1="18" x2="180" y2="202" stroke="#10283B" strokeWidth="1.4" opacity="0.55" />
        <line x1="24" y1="110" x2="336" y2="110" stroke="#10283B" strokeWidth="1.4" opacity="0.55" />

        <rect
          x="136"
          y="80"
          width="88"
          height="60"
          rx="2"
          fill="#81907A"
          fillOpacity="0.28"
          stroke="#657762"
          strokeWidth="1"
        />
        <rect x="140" y="84" width="80" height="52" fill="url(#hp-park)" />
        <circle cx="180" cy="110" r="12" fill="#FAF9F5" stroke="#657762" strokeWidth="0.9" />
        <circle cx="180" cy="110" r="4" fill="#657762" />

        {[
          { x: 58, y: 48, w: 68, h: 24 },
          { x: 58, y: 78, w: 68, h: 24 },
          { x: 58, y: 118, w: 68, h: 24 },
          { x: 58, y: 148, w: 68, h: 24 },
          { x: 234, y: 48, w: 68, h: 24 },
          { x: 234, y: 78, w: 68, h: 24 },
          { x: 234, y: 118, w: 68, h: 24 },
          { x: 234, y: 148, w: 68, h: 24 },
        ].map((row, idx) => (
          <g key={idx} opacity="0.78">
            <rect
              x={row.x}
              y={row.y}
              width={row.w}
              height={row.h}
              fill="#FAF9F5"
              fillOpacity="0.65"
              stroke="#10283B"
              strokeWidth="0.7"
            />
            <line
              x1={row.x}
              y1={row.y + row.h / 2}
              x2={row.x + row.w}
              y2={row.y + row.h / 2}
              stroke="#10283B"
              strokeWidth="0.45"
            />
            {[1, 2, 3, 4, 5].map((col) => (
              <line
                key={col}
                x1={row.x + (col * row.w) / 6}
                y1={row.y}
                x2={row.x + (col * row.w) / 6}
                y2={row.y + row.h}
                stroke="#10283B"
                strokeWidth="0.45"
              />
            ))}
          </g>
        ))}

        <rect x="142" y="48" width="76" height="22" fill="#81907A" fillOpacity="0.22" stroke="#657762" strokeWidth="0.75" />
        <rect x="142" y="150" width="76" height="22" fill="#81907A" fillOpacity="0.22" stroke="#657762" strokeWidth="0.75" />
      </svg>
    </MapPlateWrapper>
  );
}

export function TownshipLayoutGraphic({ className = "" }: { className?: string }) {
  return (
    <MapPlateWrapper
      bgUrl="/maps/topographic-contours.svg"
      bgPosition="25% 35%"
      bgSize="520px auto"
      bgOpacity={0.48}
      className={className}
    >
      <svg viewBox="0 0 360 220" fill="none" className="w-full h-full relative" aria-hidden="true">
        <defs>
          <pattern id="tw-hatch" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="5" stroke="#657762" strokeWidth="0.6" opacity="0.55" />
          </pattern>
        </defs>

        <g opacity="0.4" stroke="#657762" strokeWidth="0.65" fill="none">
          <path d="M 10 45 Q 110 22, 210 55 T 350 38" />
          <path d="M 10 80 Q 110 57, 210 90 T 350 73" />
          <path d="M 10 115 Q 110 92, 210 125 T 350 108" />
          <path d="M 10 150 Q 110 127, 210 160 T 350 143" />
          <path d="M 10 185 Q 110 162, 210 195 T 350 178" />
        </g>

        <rect
          x="38"
          y="26"
          width="284"
          height="168"
          rx="2"
          stroke="#10283B"
          strokeWidth="1.2"
          fill="#FAF9F5"
          fillOpacity="0.42"
        />
        <line x1="180" y1="26" x2="180" y2="194" stroke="#10283B" strokeWidth="1.6" opacity="0.7" />
        <line x1="38" y1="110" x2="322" y2="110" stroke="#10283B" strokeWidth="1.6" opacity="0.7" />

        {[
          { x: 50, y: 38, w: 118, h: 60, green: true },
          { x: 192, y: 38, w: 118, h: 60, green: false },
          { x: 50, y: 122, w: 118, h: 60, green: false },
          { x: 192, y: 122, w: 118, h: 60, green: true },
        ].map((sec, idx) => (
          <g key={idx} opacity="0.82">
            <rect
              x={sec.x}
              y={sec.y}
              width={sec.w}
              height={sec.h}
              fill={sec.green ? "url(#tw-hatch)" : "#FAF9F5"}
              fillOpacity={sec.green ? 1 : 0.6}
              stroke={sec.green ? "#657762" : "#10283B"}
              strokeWidth="0.8"
            />
            <line x1={sec.x} y1={sec.y + 30} x2={sec.x + sec.w} y2={sec.y + 30} stroke="#10283B" strokeWidth="0.45" opacity="0.55" />
            <line x1={sec.x + 39} y1={sec.y} x2={sec.x + 39} y2={sec.y + sec.h} stroke="#10283B" strokeWidth="0.45" opacity="0.55" />
            <line x1={sec.x + 78} y1={sec.y} x2={sec.x + 78} y2={sec.y + sec.h} stroke="#10283B" strokeWidth="0.45" opacity="0.55" />
            {sec.green && (
              <ellipse
                cx={sec.x + sec.w / 2}
                cy={sec.y + sec.h / 2}
                rx="22"
                ry="12"
                fill="#81907A"
                fillOpacity="0.35"
                stroke="#657762"
                strokeWidth="0.75"
              />
            )}
          </g>
        ))}

        <g transform="translate(180, 110)">
          <circle cx="0" cy="0" r="8" fill="#FAF9F5" stroke="#10283B" strokeWidth="1.3" />
          <circle cx="0" cy="0" r="3" fill="#657762" />
          <line x1="-12" y1="0" x2="12" y2="0" stroke="#10283B" strokeWidth="0.8" />
          <line x1="0" y1="-12" x2="0" y2="12" stroke="#10283B" strokeWidth="0.8" />
        </g>
      </svg>
    </MapPlateWrapper>
  );
}

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

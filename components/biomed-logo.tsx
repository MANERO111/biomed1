import React from "react";

interface BioMedLogoProps {
  className?: string;
  variant?: "light" | "dark"; // 'light' is for dark backgrounds (white text), 'dark' is for light backgrounds (navy text)
  showTagline?: boolean;
}

export default function BioMedLogo({
  className = "",
  variant = "light",
  showTagline = true,
}: BioMedLogoProps) {
  const isWhite = variant === "light";
  const textColor = isWhite ? "#FFFFFF" : "#0B2C6B";
  const leafColor1 = "#22C55E"; // vibrant emerald/leaf green
  const leafColor2 = "#15803D"; // deeper green

  return (
    <div className={`inline-flex flex-col select-none ${className}`}>
      <div className="flex items-baseline font-black tracking-tight leading-none text-2xl sm:text-3xl">
        <span style={{ color: textColor }}>B</span>
        
        {/* Letter 'i' with organic green leaf accent */}
        <span className="relative inline-flex flex-col items-center mx-[0.5px]">
          <svg
            className="absolute -top-[13px] left-1/2 -translate-x-1/2 w-4 h-4 overflow-visible"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Left leaf */}
            <path
              d="M11 15C11 15 7.5 10.5 7.5 5.5C7.5 5.5 12 6.5 12 11.5C12 13 11.5 14.2 11 15Z"
              fill={leafColor1}
            />
            {/* Right leaf */}
            <path
              d="M12 15C12.5 12.8 14.2 9.5 19 7.5C19 7.5 18 12.5 13 14.8C12.6 15 12.3 15 12 15Z"
              fill={leafColor2}
            />
          </svg>
          <span style={{ color: textColor }}>i</span>
        </span>

        <span style={{ color: textColor }}>o</span>
        <span style={{ color: textColor }} className="ml-[1px]">MED</span>
      </div>

      {showTagline && (
        <span
          className="text-[7.5px] sm:text-[8px] font-bold tracking-[0.28em] uppercase mt-1"
          style={{ color: isWhite ? "rgba(255, 255, 255, 0.85)" : "#0B2C6B" }}
        >
          PHARMACEUTICALS
        </span>
      )}
    </div>
  );
}

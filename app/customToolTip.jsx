import React, { useState } from "react";

export default function CustomTooltipLink({ href, children }) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <>
      <a
      
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        style={{
          position: "relative",
          color: "var(--color-light)",
          
        }}
      >
        {children}
      </a>

      {showTooltip && (
  <div
    style={{
      position: "fixed",
      bottom: 0,
      left: 10,
      backgroundColor: "var(--color-light)",
      color: "var(--color-dark)",
      padding: "4px 8px",
      fontSize: "0.75rem",
      borderRadius: "4px",
      whiteSpace: "nowrap",
      zIndex: 1000,
      fontFamily: "Space Mono, monospace",
      opacity: 0.9,
      transition: "opacity 0.2s ease",
      pointerEvents: "none",
      transform: "translateY(100%)", // pushes tooltip *below* bottom edge
    }}
  >
    {href}
  </div>
)}

    </>
  );
}

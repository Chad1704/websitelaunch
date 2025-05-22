import React, { useState, useEffect } from "react";

const colorThemes = [
  {
    light: "#ADEFD1FF",
    dark: "#00203FFF",
    border: "173, 239, 209",
    name: "Night Time Sea",
  },
  {
    light: "#2BAE66FF",
    dark: "#fcf6f5ff",
    border: "43 , 174 , 102 ",
    name: "Crisp Mint",
  },
  {
    light: "#FFE6F0",
    dark: "#5C1A72",
    border: "255, 230, 240",
    name: "Lavender",
  },
  {
    light: "#131200",
    dark: "#78BC61",
    border: "19, 18, 0",
    name: "Marsh Lily",
  },
  {
    light: "#ffffff",
    dark: "#000000",
    border: "225, 225, 225",
    name: "B&W",
  },
];

export default function ColorTester() {
  const [themeIndex, setThemeIndex] = useState(0);
  const [isSwapped, setIsSwapped] = useState(false);
  const [rotations, setRotations] = useState(
    Array(colorThemes.length).fill(false)
  );
  const [hovered, setHovered] = useState(null); // Track hover

  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setThemeIndex(prefersDark ? 0 : 1);
  }, []);

  useEffect(() => {
    const theme = colorThemes[themeIndex];
    const root = document.documentElement;

    if (isSwapped) {
      root.style.setProperty("--color-light", theme.dark);
      root.style.setProperty("--color-dark", theme.light);
      root.style.setProperty("--color-border", convertHexToRGB(theme.dark));
    } else {
      root.style.setProperty("--color-light", theme.light);
      root.style.setProperty("--color-dark", theme.dark);
      root.style.setProperty("--color-border", theme.border);
    }
  }, [themeIndex, isSwapped]);

  function convertHexToRGB(hex) {
    let cleaned = hex.slice(0, 7);
    if (!cleaned.startsWith("#")) return "0, 0, 0";

    const r = parseInt(cleaned.substring(1, 3), 16);
    const g = parseInt(cleaned.substring(3, 5), 16);
    const b = parseInt(cleaned.substring(5, 7), 16);
    return `${r}, ${g}, ${b}`;
  }

  const theme = colorThemes[themeIndex];

  return (
    <div className="transition duration-400 ease-in-out" style={{ padding: 20 }}>
      <div
        style={{
          marginBottom: 15,
          display: "flex",
          justifyContent: "center",
          gap: 12,
        }}
        className="w-fill"
      >
        {colorThemes.map((t, i) => (
          <div
            key={i}
            style={{ position: "relative", display: "inline-block" }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            <button
              onClick={() => {
                if (i === themeIndex) {
                  setIsSwapped(!isSwapped);
                  setRotations((prev) =>
                    prev.map((val, index) => (index === i ? !val : val))
                  );
                } else {
                  setThemeIndex(i);
                  setIsSwapped(false);
                  setRotations(Array(colorThemes.length).fill(false));
                }
              }}
              style={{
                width: 12,
                height: 12,
                transform: `rotate(${rotations[i] ? 225 : 45}deg)`,
                transition: "transform 0.4s ease-in-out",
                borderRadius: 70,
                border:
                  i === themeIndex
                    ? `2px solid ${theme.light}`
                    : "1px solid #ccc",
                cursor: "pointer",
                background: `linear-gradient(to right, ${t.dark} 50%, ${t.light} 50%)`,
              }}
            />
            {hovered === i && (
              <div
                style={{
                  position: "absolute",
                  bottom: "-150%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  backgroundColor: `${t.dark}`,
                  color: `${t.light}`,
                  padding: "4px 8px",
                  borderRadius: "4px",
                  fontSize: "0.75rem",
                  whiteSpace: "nowrap",
                  pointerEvents: "none",
                  opacity: 1,
                  zIndex: 10,
                  
                }}
                className="font-mono"
              >
                {t.name}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/*
	jsrepo 1.28.1
	Installed from https://reactbits.dev/default/
	22-1-2025
*/

import { useEffect, useRef, useState, useCallback } from "react";

const TextPressure = ({
  text = "Compressa",
  fontFamily = "Compressa VF",
  // This font is just an example, you should not use it in commercial projects.
  fontUrl = "https://res.cloudinary.com/dr6lvwubh/raw/upload/v1529908256/CompressaPRO-GX.woff2",

  width = true,
  weight = true,
  italic = true,
  alpha = false,

  flex = true,
  stroke = false,
  scale = false,

  textColor = "#FFFFFF",
  strokeColor = "#FF0000",
  className = "",

  minFontSize = 24,
}) => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const spansRef = useRef([]);

  const mouseRef = useRef({ x: 0, y: 0 });
  const cursorRef = useRef({ x: 0, y: 0 });

  const [fontSize, setFontSize] = useState(minFontSize);
  const [scaleY, setScaleY] = useState(1);
  const [lineHeight, setLineHeight] = useState(1);

  const chars = text.split("");

  const dist = (a, b) => {
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    return Math.sqrt(dx * dx + dy * dy);
  };

  // Debounce mouse movement
  const debounceRAF = useCallback((callback) => {
    let rAFId = null;
    return (...args) => {
      if (rAFId) {
        cancelAnimationFrame(rAFId);
      }
      rAFId = requestAnimationFrame(() => callback(...args));
    };
  }, []);

  // Throttle span updates
  const updateSpans = useCallback((mousePos, maxDist) => {
    spansRef.current.forEach((span, index) => {
      if (!span) return;

      // Only update every other frame for better performance
      if (index % 2 !== frameCount % 2) return;

      const rect = span.getBoundingClientRect();
      const charCenter = {
        x: rect.x + rect.width / 2,
        y: rect.y + rect.height / 2,
      };

      const d = dist(mousePos, charCenter);

      // Cache calculations
      const distanceRatio = Math.abs(d / maxDist);
      const baseValue = Math.max(0, 1 - distanceRatio);

      // Batch style updates
      const styles = {
        opacity: alpha ? baseValue.toFixed(2) : 1,
        fontVariationSettings: `'wght' ${weight ? Math.floor(100 + baseValue * 800) : 400}, 
                              'wdth' ${width ? Math.floor(5 + baseValue * 195) : 100}, 
                              'ital' ${italic ? (baseValue).toFixed(2) : 0}`
      };

      Object.assign(span.style, styles);
    });
  }, [alpha, width, weight, italic]);

  // Optimize animation frame
  let frameCount = 0;
  useEffect(() => {
    let rafId;
    let lastUpdate = 0;
    const FRAME_RATE = 1000 / 30; // 30fps

    const animate = (timestamp) => {
      if (timestamp - lastUpdate >= FRAME_RATE) {
        frameCount++;
        
        // Smooth mouse movement
        mouseRef.current.x += (cursorRef.current.x - mouseRef.current.x) * 0.1;
        mouseRef.current.y += (cursorRef.current.y - mouseRef.current.y) * 0.1;

        if (titleRef.current) {
          const titleRect = titleRef.current.getBoundingClientRect();
          const maxDist = titleRect.width / 2;
          
          updateSpans(mouseRef.current, maxDist);
        }

        lastUpdate = timestamp;
      }

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(rafId);
    };
  }, [updateSpans]);

  // Optimize mouse/touch event handlers
  useEffect(() => {
    const handleMouseMove = debounceRAF((e) => {
      cursorRef.current.x = e.clientX;
      cursorRef.current.y = e.clientY;
    });

    const handleTouchMove = debounceRAF((e) => {
      const t = e.touches[0];
      cursorRef.current.x = t.clientX;
      cursorRef.current.y = t.clientY;
      e.preventDefault();
    });

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove, { passive: false });

    // Initialize mouse near center of container if it exists
    if (containerRef.current) {
      const { left, top, width, height } =
        containerRef.current.getBoundingClientRect();
      mouseRef.current.x = left + width / 2;
      mouseRef.current.y = top + height / 2;
      cursorRef.current.x = mouseRef.current.x;
      cursorRef.current.y = mouseRef.current.y;
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [debounceRAF]);

  const setSize = () => {
    if (!containerRef.current || !titleRef.current) return;

    const { width: containerW, height: containerH } =
      containerRef.current.getBoundingClientRect();

    let newFontSize = containerW / (chars.length / 2);
    newFontSize = Math.max(newFontSize, minFontSize);

    setFontSize(newFontSize);
    setScaleY(1);
    setLineHeight(1);

    requestAnimationFrame(() => {
      if (!titleRef.current) return;
      const textRect = titleRef.current.getBoundingClientRect();

      if (scale && textRect.height > 0) {
        const yRatio = containerH / textRect.height;
        setScaleY(yRatio);
        setLineHeight(yRatio);
      }
    });
  };

  useEffect(() => {
    setSize();
    window.addEventListener("resize", setSize);
    return () => window.removeEventListener("resize", setSize);
    // eslint-disable-next-line
  }, [scale, text]);

  const dynamicClassName = [
    className,
    flex ? "flex" : "",
    stroke ? "stroke" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        width: "100%",
        height: "70%",
        background: "transparent",
      }}
    >
      <style>{`
        /* Font face if needed */
        @font-face {
          font-family: '${fontFamily}';
          src: url('${fontUrl}');
          font-style: normal;
        }

        /* If flex=true => space out each character span */
        .flex {
          display: flex;
        }

        /* Stroke class toggles "stroke" effect on each character */
        .stroke span {
          position: relative;
          color: ${textColor}; /* normal text color */
        }
        /* The stroke layer sits behind with text-stroke */
        .stroke span::after {
          content: attr(data-char);
          position: absolute;
          left: 0;
          top: 0;
          color: transparent;
          z-index: -1;
          /* If you'd like to shift the stroke up/down, you can add transform here */
          -webkit-text-stroke-width: 3px;
          -webkit-text-stroke-color: ${strokeColor};
        }

        /* If stroke=false => no stroke class => normal text color */
        .text-pressure-title {
          color: ${textColor};
        }
      `}</style>

      <h1
        ref={titleRef}
        className={`text-pressure-title ${dynamicClassName}`}
        style={{
          fontFamily,
          textTransform: "uppercase",
          fontSize: fontSize,
          lineHeight,
          transform: `scale(1, ${scaleY})`,
          transformOrigin: "center top",
          margin: 0,
          textAlign: "center",
          userSelect: "none",
          whiteSpace: "nowrap",
          fontWeight: 100,
          width: "100%",
        }}
      >
        {chars.map((char, i) => (
          <span
            key={i}
            ref={(el) => (spansRef.current[i] = el)}
            data-char={char}
            style={{
              display: "inline-block",
              color: stroke ? undefined : textColor,
            }}
          >
            {char}
          </span>
        ))}
      </h1>
    </div>
  );
};

export default TextPressure;

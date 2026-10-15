
"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;

    if (!dot || !ring) return;

    const pointerQuery = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    );
    const reducedMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    if (!pointerQuery.matches) return;

    let targetX = -100;
    let targetY = -100;
    let ringX = -100;
    let ringY = -100;
    let frameId = 0;
    let visible = false;

    const interactiveSelector =
      'a, button, [role="button"], input, textarea, select, label, summary';

    const render = () => {
      const easing = reducedMotionQuery.matches ? 1 : 0.16;

      ringX += (targetX - ringX) * easing;
      ringY += (targetY - ringY) * easing;

      dot.style.transform =
        `translate3d(${targetX}px, ${targetY}px, 0) translate(-50%, -50%)`;

      ring.style.transform =
        `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;

      const closeEnough =
        Math.abs(targetX - ringX) < 0.1 &&
        Math.abs(targetY - ringY) < 0.1;

      if (!closeEnough) {
        frameId = window.requestAnimationFrame(render);
      } else {
        frameId = 0;
      }
    };

    const requestAnimation = () => {
      if (!frameId) {
        frameId = window.requestAnimationFrame(render);
      }
    };

    const handlePointerMove = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;

      if (!visible) {
        visible = true;
        ringX = targetX;
        ringY = targetY;
        dot.classList.add("hope-cursor-visible");
        ring.classList.add("hope-cursor-visible");
      }

      requestAnimation();
    };

    const handlePointerOver = (event: PointerEvent) => {
      if (!(event.target instanceof Element)) return;

      const interactive = event.target.closest(interactiveSelector);
      ring.classList.toggle("hope-cursor-hover", Boolean(interactive));
    };

    const handlePointerOut = (event: PointerEvent) => {
      if (!(event.target instanceof Element)) return;

      const previous = event.target.closest(interactiveSelector);
      const next =
        event.relatedTarget instanceof Element
          ? event.relatedTarget.closest(interactiveSelector)
          : null;

      if (previous && !next) {
        ring.classList.remove("hope-cursor-hover");
      }
    };

    const handlePointerDown = () => {
      ring.classList.add("hope-cursor-click");
    };

    const handlePointerUp = () => {
      ring.classList.remove("hope-cursor-click");
    };

    const handleAnimationEnd = (event: AnimationEvent) => {
      if (event.animationName === "hope-cursor-pulse") {
        ring.classList.remove("hope-cursor-click");
      }
    };

    const handlePointerLeave = () => {
      visible = false;
      dot.classList.remove("hope-cursor-visible");
      ring.classList.remove(
        "hope-cursor-visible",
        "hope-cursor-hover",
        "hope-cursor-click"
      );
    };

    const handleVisibilityChange = () => {
      if (document.hidden) handlePointerLeave();
    };

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });
    window.addEventListener("pointerover", handlePointerOver);
    window.addEventListener("pointerout", handlePointerOut);
    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointerup", handlePointerUp);
    window.addEventListener("blur", handlePointerLeave);
    document.addEventListener("pointerleave", handlePointerLeave);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    ring.addEventListener("animationend", handleAnimationEnd);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerover", handlePointerOver);
      window.removeEventListener("pointerout", handlePointerOut);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("blur", handlePointerLeave);
      document.removeEventListener("pointerleave", handlePointerLeave);
      document.removeEventListener(
        "visibilitychange",
        handleVisibilityChange
      );
      ring.removeEventListener("animationend", handleAnimationEnd);

      if (frameId) window.cancelAnimationFrame(frameId);

      dot.classList.remove("hope-cursor-visible");
      ring.classList.remove(
        "hope-cursor-visible",
        "hope-cursor-hover",
        "hope-cursor-click"
      );
    };
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        aria-hidden="true"
        className="hope-cursor-ring"
      />
      <div
        ref={dotRef}
        aria-hidden="true"
        className="hope-cursor-dot"
      />

      <style jsx global>{`
        .hope-cursor-ring,
        .hope-cursor-dot {
          position: fixed;
          top: 0;
          left: 0;
          z-index: 99999;
          pointer-events: none;
          border-radius: 50%;
          opacity: 0;
          visibility: hidden;
          will-change: transform;
        }

        .hope-cursor-ring {
          width: 38px;
          height: 38px;
          border: 1.5px solid #bf4c21;
          background: rgba(191, 76, 33, 0.035);
          box-shadow: 0 0 16px rgba(191, 76, 33, 0.12);
          transition:
            width 220ms cubic-bezier(0.2, 0.8, 0.2, 1),
            height 220ms cubic-bezier(0.2, 0.8, 0.2, 1),
            border-color 220ms ease,
            background-color 220ms ease,
            box-shadow 220ms ease,
            opacity 160ms ease;
        }

        .hope-cursor-ring::before {
          content: "";
          position: absolute;
          inset: -7px;
          border: 1px solid rgba(85, 91, 70, 0.18);
          border-radius: inherit;
          opacity: 0;
          transform: scale(0.8);
          transition:
            opacity 220ms ease,
            transform 220ms ease;
        }

        .hope-cursor-dot {
          width: 7px;
          height: 7px;
          background: #555b46;
          box-shadow: 0 0 0 3px rgba(85, 91, 70, 0.12);
          transition:
            width 160ms ease,
            height 160ms ease,
            background-color 160ms ease,
            opacity 160ms ease;
        }

        .hope-cursor-ring.hope-cursor-visible,
        .hope-cursor-dot.hope-cursor-visible {
          opacity: 1;
          visibility: visible;
        }

        .hope-cursor-ring.hope-cursor-hover {
          width: 52px;
          height: 52px;
          border-color: #555b46;
          background: rgba(85, 91, 70, 0.08);
          box-shadow: 0 0 24px rgba(85, 91, 70, 0.18);
        }

        .hope-cursor-ring.hope-cursor-hover::before {
          opacity: 1;
          transform: scale(1);
        }

        .hope-cursor-dot.hope-cursor-visible {
          background: #bf4c21;
        }

        .hope-cursor-ring.hope-cursor-click {
          animation: hope-cursor-pulse 260ms ease-out;
        }

        @keyframes hope-cursor-pulse {
          0% {
            transform: translate3d(var(--unused-x, 0), var(--unused-y, 0), 0);
          }
          50% {
            opacity: 0.65;
          }
          100% {
            opacity: 1;
          }
        }

        @media (hover: hover) and (pointer: fine) {
          body,
          a,
          button,
          [role="button"],
          input,
          textarea,
          select,
          label,
          summary {
            cursor: none !important;
          }
        }

        @media (hover: none), (pointer: coarse) {
          .hope-cursor-ring,
          .hope-cursor-dot {
            display: none !important;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hope-cursor-ring,
          .hope-cursor-dot,
          .hope-cursor-ring::before {
            transition: none !important;
            animation: none !important;
          }
        }
      `}</style>
    </>
  );
}

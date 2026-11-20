import { useEffect, useRef } from "react";

export default function CursorGlow() {
    const glowRef = useRef(null);

    useEffect(() => {
        if (window.matchMedia("(pointer: coarse), (prefers-reduced-motion: reduce)").matches) {
            return;
        }
        const element = glowRef.current;
        let rafId = null;
        let x = window.innerWidth / 2;
        let y = window.innerHeight / 2;
        let targetX = x;
        let targetY = y;

        const animate = () => {
            x += (targetX - x) * 0.09;
            y += (targetY - y) * 0.09;
            element.style.transform = `translate3d(${x - 320}px, ${y - 320}px, 0)`;
            rafId = requestAnimationFrame(animate);
        };
        const onPointerMove = (event) => {
            targetX = event.clientX;
            targetY = event.clientY;
            element.style.opacity = "1";
            if (rafId === null) rafId = requestAnimationFrame(animate);
        };
        const onPointerLeave = () => { element.style.opacity = "0"; };
        window.addEventListener("pointermove", onPointerMove, { passive: true });
        document.addEventListener("mouseleave", onPointerLeave);
        return () => {
            window.removeEventListener("pointermove", onPointerMove);
            document.removeEventListener("mouseleave", onPointerLeave);
            if (rafId !== null) cancelAnimationFrame(rafId);
        };
    }, []);

    return <div ref={glowRef} className="cursor-glow" aria-hidden="true" />;
}

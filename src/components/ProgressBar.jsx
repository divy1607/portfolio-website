import { useEffect, useRef, useState } from "react";

export default function ProgressBar() {
    const [progress, setProgress] = useState(0);
    const trackRef = useRef(null);

    useEffect(() => {
        let rafId = null;
        const update = () => {
            const range = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
            setProgress(Math.min(1, Math.max(0, window.scrollY / range)));
            rafId = null;
        };
        const requestUpdate = () => {
            if (rafId === null) rafId = requestAnimationFrame(update);
        };
        update();
        window.addEventListener("scroll", requestUpdate, { passive: true });
        window.addEventListener("resize", requestUpdate);
        return () => {
            window.removeEventListener("scroll", requestUpdate);
            window.removeEventListener("resize", requestUpdate);
            if (rafId !== null) cancelAnimationFrame(rafId);
        };
    }, []);

    const scrollTo = (event) => {
        const rect = trackRef.current.getBoundingClientRect();
        const ratio = Math.min(1, Math.max(0, (event.clientX - rect.left) / rect.width));
        const range = document.documentElement.scrollHeight - window.innerHeight;
        window.scrollTo({
            top: ratio * range,
            behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
                ? "auto"
                : "smooth",
        });
    };

    return (
        <button
            ref={trackRef}
            type="button"
            className="progress-track"
            onClick={scrollTo}
            aria-label={`Jump through page. ${Math.round(progress * 100)}% read.`}
            title="Click to navigate the page"
        >
            <span className="progress-value" style={{ transform: `scaleX(${progress})` }} />
        </button>
    );
}

import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";

export default function Reveal({ children, className = "", delay = 0 }) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element || !("IntersectionObserver" in window)) {
            setVisible(true);
            return;
        }
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.12, rootMargin: "0px 0px -5%" },
        );
        observer.observe(element);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`reveal ${visible ? "is-visible" : ""} ${className}`}
            style={{ "--reveal-delay": `${delay}ms` }}
        >
            {children}
        </div>
    );
}

Reveal.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    delay: PropTypes.number,
};

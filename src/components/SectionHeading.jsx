import PropTypes from "prop-types";

export default function SectionHeading({ eyebrow, title, description, align = "left" }) {
    return (
        <header className={`section-heading align-${align}`}>
            <p className="eyebrow">{eyebrow}</p>
            <h2>{title}</h2>
            {description && <p className="section-description">{description}</p>}
        </header>
    );
}

SectionHeading.propTypes = {
    eyebrow: PropTypes.string.isRequired,
    title: PropTypes.node.isRequired,
    description: PropTypes.string,
    align: PropTypes.oneOf(["left", "center"]),
};

const SVGComponent = ({ dash = 0, ...props }) => (
    <svg height="100%" width="100%" {...props}>
        <rect
            x="10"
            y="10"
            width="100%"
            height="100%"
            fill="var(--background-lightbox)"
            stroke="var(--glow)"
            strokeWidth="2"
            strokeDasharray="18 20"
            // strokeLinecap="square"
            strokeDashoffset={dash}
        />
    </svg>
);
export default SVGComponent;

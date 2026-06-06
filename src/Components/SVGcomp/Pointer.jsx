const SVGComponent = ({ size = 48, ...props }) => (
    <svg height={size} width={size} viewBox="0 0 800 800" {...props}>
        <path
            d="M188.5,188.5l-58.2-58.2M498.8,188.5l58.2-58.2M130.3,557l58.2-58.2M343.7,110.9V33.3M110.9,343.7H33.3M582.6,576l151-59.1c16.4-6.4,16.4-29.7,0-36.1l-362.8-141.8c-15.7-6.2-31.3,9.4-25.1,25.1l141.8,362.8c6.4,16.4,29.7,16.5,36.1,0l59.1-151Z"
            stroke="currentColor"
            strokeWidth={50}
        />
    </svg>
);
export default SVGComponent;

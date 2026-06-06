import * as React from "react";

const SVGComponent = ({ size = 48, ...props }) => (
    <svg height={size} width={size} viewBox="0 0 800 800" {...props}>
        <path fill="#ffd900" id="start-favorite" d="M400,605.3V107.8l93,200.1,215.5,30.6-158.3,161.6,33.1,210.1-183.4-104.9ZM800,306.1l-275.9-42.1L400,0l-124.1,264L0,306.1l199.6,204.4-47.2,289.5,247.6-136.7,247.6,136.7-47.2-289.5,199.6-204.4h0Z" />
    </svg>
);

export default SVGComponent;

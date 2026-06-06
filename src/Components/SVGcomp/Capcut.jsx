const SVGComponent = ({ size = 48, ...props }) => (
    <svg height={size} width={size} viewBox="0 0 800 800" {...props}>
        <path fill="#f8f8f8" d="M628.1,800H171.9C77,800,0,723,0,628.1V171.9C0,77,77,0,171.9,0H628C723,0,800,77,800,171.9V628C800,723,723,800,628.1,800z" />
        <g transform="translate(44, 44) scale(0.9)">
            <path fill="none" stroke="#080808" d="M708.3,175L91.7,516.7V575c0,27.6,22.4,50,50,50h325c27.6,0,50-22.4,50-50v-39.6" strokeWidth="85" />
            <path fill="none" stroke="#080808" d="M708.3,625L91.7,283.3V225c0-27.6,22.4-50,50-50h325c27.6,0,50,22.4,50,50v39.6" strokeWidth="85" />
        </g>
    </svg>
);

export default SVGComponent;
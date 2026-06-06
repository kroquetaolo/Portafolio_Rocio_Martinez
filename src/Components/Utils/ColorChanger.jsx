import config from '../../color_config.json'
export default function ColorChanger({color = "purple"}) {
        Object.entries(config[color]).map(([key, item]) => (
            document.documentElement.style.setProperty(`--${key}`, item)
        ))
}
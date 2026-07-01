import SVGselector from '../SVGcomp/SVGselector'

export default function Rating({ value, max = 5, size = 16 }) {
    const normalized = Number.isInteger(value)
        ? value
        : Math.floor(value) + 0.5

    const full = Math.floor(normalized)
    const half = normalized % 1 !== 0 ? 1 : 0
    const empty = max - full - half

    return (
        <>
            {Array.from(
                { length: full },
                (_, i) => <SVGselector key={`f-${i}`} type="fullstart" size={size} />
            )}

            {Array.from(
                { length: half },
                (_, i) => <SVGselector key={`h-${i}`} type="halfstart" size={size} />
            )}

            {Array.from(
                { length: empty },
                (_, i) => <SVGselector key={`e-${i}`} type="start" size={size} />
            )}
        </>
    )
}

export function RatingToString({ level }) {
    const levels = [
        "Inexperta",
        "Principiante",
        "Básica",
        "Intermedia",
        "Avanzada",
        "Experta"
    ];

    const clamped = Math.max(0, Math.min(5, level));
    const base = Math.floor(clamped);
    const decimal = clamped - base;

    if (decimal > 0.4 && base < 5) {
        return `Semi-${levels[base + 1]}`;
    }

    return levels[base];
}
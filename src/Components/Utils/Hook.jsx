import { useEffect, useState } from "react";

function getBrightness(data) {
    let total = 0;

    for (let i = 0; i < data.length; i += 4) {
        total += (data[i] * 299 + data[i + 1] * 587 + data[i + 2] * 114) / 1000;
    }

    return total / (data.length / 4);
}

export function useAutoIconColor(imgRef) {
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        const img = imgRef.current;
        if (!img) return;

        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        const analyze = () => {
            canvas.width = img.width;
            canvas.height = img.height;

            ctx.drawImage(img, 0, 0);

            const data = ctx.getImageData(
                0,
                0,
                canvas.width,
                canvas.height
            ).data;

            const brightness = getBrightness(data);

            setIsDark(brightness < 140);
        };

        if (img.complete) analyze();
        else img.onload = analyze;
    }, [imgRef]);

    return isDark;
}
import After from './After'
import Capcut from './Capcut'
import ClipStudio from './ClipStudio'
import Ilustrator from './Ilustrator'
import Indesign from './Indesign'
import Lightroom from './Lightroom'
import Photoshop from './Photoshop'
import Start from './Start'
import FullStart from './FullStart'
import HalfStart from './HalfStart'
import Pointer from './Pointer'
import Palette from './Palette'
import Splash from './Splash'
import Background from './Background'
import Dashes from './Dashes'

const SVGselector = ({ type, size = 96, ...props }) => {
    const components = {
        after: After,
        capcut: Capcut,
        csp: ClipStudio,
        ilustrator: Ilustrator,
        indesign: Indesign,
        lightroom: Lightroom,
        photoshop: Photoshop,
        start: Start,
        fullstart: FullStart,
        halfstart: HalfStart,
        pointer: Pointer,
        palette: Palette,
        splash: Splash,
        background: Background,
        dashes: Dashes
    };

    const SelectedComponent = components[type];

    return SelectedComponent ? <SelectedComponent size={size} {...props} /> : null;
};

export default SVGselector;
import Highway from '@dogstudio/highway'
import Fade from './trans1'


const H = new Highway.Core({
    transitions: {
        default:Fade
    }
});


//npm i @material-ui/styles
//https://material-ui.com/customization/theming/#createmuitheme-options-args-theme
//https://material-ui.com/customization/default-theme/

import {createMuiTheme} from '@material-ui/core/styles';

const arcBlue = '#0B72B9';
const arcOrange = '#ffba60';
export default createMuiTheme({
    palette: {
        common: {
            arcBlue: `${arcBlue}`,
            arcOrange:  `${arcOrange}`
        },
        primary:{
            main: `${arcBlue}`
        },
        secondary: {
            main: `${arcOrange}`
        },
    },
    typography:{
        h3:{}
    }
});
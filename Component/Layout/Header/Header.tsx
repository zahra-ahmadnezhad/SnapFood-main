import { Grid, useMediaQuery, useTheme } from '@mui/material';
import DesktopHeader from './DesktopHeader';
import MobileHeader from './MobileHeader';
import {theme} from "../../../Theme/Theme";


const Header = () => {

    const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));

    return(
        <Grid xs={12}>
            {isDesktop? (<DesktopHeader/>):(<MobileHeader/>)}
        </Grid>
    )

}

export default Header;
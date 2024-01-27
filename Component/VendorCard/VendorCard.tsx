import { Grid, useTheme, useMediaQuery } from "@mui/material";
import MobileCard from "./MobileVendorCard";
import DesktopCard from "./DesktopVendorCard";
import {theme} from "../../Theme/Theme";



const VendorCard = () => {

    const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));

    return(
        <Grid>
            {isDesktop? (<DesktopCard/>):(<MobileCard/>)}
        </Grid>
    )

}

export default VendorCard;
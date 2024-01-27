import { Grid, useMediaQuery, useTheme } from "@mui/material";
import FooterDesktop from "./FooterDesktop";
import FooterMobile from "./FooterMobile";
import {theme} from "../../../Theme/Theme";

const Footer = () => {
  const isDesktop=useMediaQuery(theme.breakpoints.up('sm'))
    return (
       <Grid>
        {isDesktop?
          <FooterDesktop/>:<FooterMobile/>
        }
       </Grid>
      );
}
 
export default Footer;
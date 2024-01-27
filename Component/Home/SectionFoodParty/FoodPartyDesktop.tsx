import Grid from "@mui/material/Grid"
import { SwiperSlide } from "swiper/react";
import CardPartyDesktop from "./CardPartyDesktop";
import SwipperContainer from "../../Swiper/SwipperContainer";
import TimerFoodPartyDesktop from "./TimerFoodPartyDesktop";

const FoodPartyDesktop = () => {
  const m:number[]=[0,1,3,4,5,6,7,8]
    return ( 
        <Grid container xs={12} width={'100%'} style={{"backgroundImage":'radial-gradient(100% 100% at 0% 0%, rgb(252, 95, 153) 0%, rgb(225, 36, 146) 100%)'}} borderRadius={"0.25rem 0.25rem 7.5rem "} p={3} sx={{ mx:'auto', display: { xs: "none",sm:'flex' }}}   >
              <TimerFoodPartyDesktop />
              <Grid xs={9} item>
                <SwipperContainer>
                  {m.map((item:any,index:any)=>(
                    <SwiperSlide key={index}><CardPartyDesktop/></SwiperSlide>
                  ))}
                </SwipperContainer>
              </Grid>
              
         </Grid>
     );
}
 
export default FoodPartyDesktop;
import { Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid"
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Image from "next/image";
import pic from '../../../Assets/Images/placeholder.png'
import pic1 from '../../../Assets/Images/foodparty.png'
import { Unstable_Grid } from "@mui/system";
const TimerFoodPartyDesktop = () => {
    return ( 
     <Grid
        // width={"200px"}
        borderRadius={"0.5rem"}
       
        item
        xs={3}
      >
        <Grid
          height={"20rem"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"space-between"}
          m={2}
        >
          <Grid display={'flex'} color={'common.white'}>
            <Typography>2:45</Typography>
            <Typography><AccessTimeIcon/></Typography>
          </Grid> 
          <Grid>
            <Image src={pic} alt={''}/>
          </Grid>
          <Grid>
            <Image src={pic1} alt={''} />
          </Grid>
          <Grid>
            <Typography variant="body2" color={'common.white'}>{'تخفیفات لحظه ای ویژه شما'}</Typography>
          </Grid>
          <Grid width={'100%'}   >
            <Button  sx={{borderRadius:'2rem',backgroundColor:'common.white',color:'common.black',width:'90%'}} >
              <Grid display={'flex'} alignItems="center" justifyContent={'space-evenly'} width={'100%'} color={'rgb(24, 27, 31)'}>
              <Grid  mb={0.70}>          
                 <Typography variant={'subtitle1'} color={'rgb(24, 27, 31)'}>{"مشاهده همه"}</Typography>
              </Grid>
              <Grid>
              <Typography variant={'subtitle1'} color={'rgb(24, 27, 31)'} fontWeight={300}><ArrowBackIosRoundedIcon/></Typography>
              </Grid>
              </Grid>
            </Button>
          </Grid>
        </Grid>
    </Grid>
     );
}
 
export default TimerFoodPartyDesktop;
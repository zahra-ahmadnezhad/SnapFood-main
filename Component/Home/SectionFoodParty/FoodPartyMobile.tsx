import { Button, Grid, Typography } from "@mui/material";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';


import Image from "next/image";

import foodParty from '../../../Assets/Svgs/foodParty.svg'
import seeallParty from '../../../Assets/Images/seeallparty.svg'
import CardPartyMobile from "./CardPartyMobile";

const FoodPartyMobile = () => {
    return ( 
        <Grid  mt={20} >
            <Grid display={'flex'} justifyContent={'space-between'} xs={12}>
                <Grid display={'flex'}>
                    <Grid><Image src={foodParty} alt={'foodparty'} /></Grid>
                    <Grid><Typography variant={'h2'} color={'primary.dark'}>{"فودپارتی"}</Typography></Grid>
                </Grid>
                <Grid width={128} bgcolor={'primary.dark'} borderRadius={6} display={'flex'} color={'common.white'} alignItems={'center'} justifyContent={'space-around'} >
                    <Typography variant={'h6'}><AccessTimeIcon/></Typography>
                    <Typography variant={'h6'}>3:44:23</Typography>
                    <Typography variant={'h6'}>{"تا پایان"}</Typography>
                </Grid>
            </Grid>
            <Grid display={'flex'} sx={{overflow:'scroll'}} gap={1} mt={2} p={1}>
              <Grid display={'flex'} flexDirection={'column'} gap={1} mb={1}>
                <Grid><CardPartyMobile/></Grid>
                <Grid><CardPartyMobile/></Grid>
              </Grid>
              <Grid display={'flex'} flexDirection={'column'} gap={1} mb={1}>
                <Grid><CardPartyMobile/></Grid>
                <Grid><CardPartyMobile/></Grid>
              </Grid>
              <Grid display={'flex'} flexDirection={'column'} gap={1} mb={1}>
                <Grid><CardPartyMobile/></Grid>
                <Grid><CardPartyMobile/></Grid>
              </Grid>
              <Grid display={'flex'} flexDirection={'column'} gap={1}>
                <Grid><CardPartyMobile/></Grid>
                <Grid><CardPartyMobile/></Grid>
              </Grid>
              <Grid height={325} width={'50vw'} minWidth={200} boxShadow={'0 2px 12px 0 rgba(0, 0, 0, 0.1)'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                <Grid width={150} height={194}>
                <Image src={seeallParty} alt={'cart'} style={{width:'100%',height:'100%'}}/>
                </Grid>
                <Grid textAlign={'center'} color={'primary.main'} display={'flex'} px={1} pt={1} borderRadius={1} sx={{border:'1px solid ',borderColor:"primary.main"}} justifyContent={'center'}>
                    <Typography> {"مشاهده همه"}</Typography>
                    <Typography><ArrowBackIosRoundedIcon/></Typography>
                </Grid>
            </Grid>
            </Grid>
 
        </Grid>
     );
}
 
export default FoodPartyMobile;
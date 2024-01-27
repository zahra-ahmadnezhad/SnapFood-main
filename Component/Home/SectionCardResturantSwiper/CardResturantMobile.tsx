import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import MobileVendorCard from "../../VendorCard/MobileVendorCard";
import { Cardtitleresturant } from "../../../Data/CardResturant/CardResturant";
import HeaderCardResturant from "./HeaderCardResturant";
import Cardimg from '../../../Assets/Images/HomeImages/CardResturant/cardresturant.jpg'
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';

import Image from "next/image";
const CardResturantMobile =()=>{
    const m:number[]=[1,2,3,4,5]
    return(
        <>
        {Cardtitleresturant.map((item,index)=>(
            <>
            <HeaderCardResturant {...item}/>
            <Grid display={'flex'} xs={11} p={2} sx={{overflow:'scroll'}} ml={1} key={index}>
                <Grid display={'flex'}  gap={1}>
                    {m.map((item:any,index:any)=>(
                        <MobileVendorCard key={index}/>
                    ))}
                    <Grid width={'11rem'} borderRadius={2} boxShadow={1}>
                        <Grid  height={'50%'} bgcolor='green' borderRadius={'6px 6px 0 0'} position={'relative'} zIndex={100000}>
                            <Image src={Cardimg} alt='' style={{width:'100%',height:'100%',objectFit:'cover',borderRadius:'6px 6px 0 0'}}/>
                        </Grid>
                        <Grid height={'40%'} display={'flex'} mt={1} flexDirection={'column'} alignItems={'center'} justifyContent={'space-evenly'}>
                            <Typography variant="h3" fontSize={'1rem'} color={'success.main'}>نمایش همه</Typography>
                            <Grid borderRadius={60} bgcolor={'success.main'} p={0.5} sx={{cursor:'pointer'}} width={30} textAlign={'center'}>
                                <ArrowBackIosRoundedIcon sx={{color:'common.white',fontSize:15}}/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid> 
                              
            </Grid>
            
            </>
        ))}
        </>
    )
}

export default CardResturantMobile;
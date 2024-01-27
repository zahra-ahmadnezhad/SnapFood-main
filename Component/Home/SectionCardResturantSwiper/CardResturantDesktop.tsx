import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'
import { SwiperSlide } from 'swiper/react';
import SwipperContainer from '../../Swiper/SwipperContainer';
import DesktopVendor from '../../VendorCard/DesktopVendorCard';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import { Cardtitleresturant } from '../../../Data/CardResturant/CardResturant';
import { useTheme } from '@emotion/react';
import { useMediaQuery } from '@mui/material';
import MobileVendorCard from '../../VendorCard/MobileVendorCard';
import CardResturantMobile from './CardResturantMobile';
import HeaderCardResturant from './HeaderCardResturant';
import { MainData } from '../../../Data/Main/MainData';

const CardResturantDesktop =()=>{
  const m:number[]=[0,1,3,4,5,6,7,8];
    return(
        <Grid>
        {Cardtitleresturant.map((item:any,index:any)=>(
            <Grid container  m={4} p={2} width={'100%'} flexShrink={0}  gap={2} key={index}>
                <HeaderCardResturant {...item}/>
                <Grid xs={11.5}>
                    <SwipperContainer>
                        {MainData.filter(res=>!res.coupon).map((item)=>(
                            <SwiperSlide key={index}><DesktopVendor {...item}/></SwiperSlide>
                        ))}
                    </SwipperContainer>
                </Grid>
            </Grid>
         ))}
        </Grid>
    )
}

export default CardResturantDesktop;
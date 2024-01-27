import React, { useCallback, useEffect, useRef, useState } from "react";
import { ReactNode } from "react";

// Import Swiper React components
import { Swiper} from "swiper/react";
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper";
import { Grid } from "@mui/material";
import DesktopVendor from "../VendorCard/DesktopVendorCard";
interface SwiperPropsType{
  children:ReactNode,
}
const SwipperContainer = ({children}:SwiperPropsType) => {
  const [page, setPage] = useState(0)
  const swiperRef = useRef<any>(null)

  const handleNextSlide = useCallback(() => {
      page ===  8 ? setPage(prev => 0) : setPage(prev => prev + 1)
  }, [page])

  const handlePrevSlide = useCallback(() => {
      page === 0 ? setPage(prev => 8) : setPage(prev => prev - 1)
  }, [page])


  useEffect(() => {
      swiperRef.current.swiper.slideTo(page)
  }, [page])
    return ( 
       <Grid  position={'relative'} display={'flex'} >
        <Grid onClick={handleNextSlide} bgcolor={'common.white'} width={40} height={40} display={{xs:'none',md:'flex'}}  sx={{cursor:'pointer',zIndex:100,top:'45%'}} borderRadius={'50%'}  alignItems={'center'} justifyContent={'center'} position={'absolute'}  boxShadow={'rgb(58 61 66 / 6%) 0px 1px 0px, rgb(0 0 0 / 20%) 0px 4px 16px -8px'}  >
         <ArrowForwardIosRoundedIcon color={'primary'}/>
        </Grid>
        <Swiper
          modules={[Pagination, Navigation]}
          className="mySwiper"
          ref={swiperRef}
          breakpoints={{
            // when window width is >= 640px
            600: {
            
              slidesPerView: 2,
            },
            // when window width is >= 768px
            900: {
              
              slidesPerView: 3,
            },
            1200: {
            
              slidesPerView: 4,
            },
          }}
        >
          {children}
        </Swiper>
        <Grid onClick={handlePrevSlide}  bgcolor={'common.white'} width={40} height={40} sx={{cursor:'pointer',zIndex:100,left:0,top:'45%'}}  borderRadius={'50%'} display={{xs:'none',md:'flex'}} alignItems={'center'} justifyContent={'center'} position={'absolute'} boxShadow={'rgb(58 61 66 / 6%) 0px 1px 0px, rgb(0 0 0 / 20%) 0px 4px 16px -8px'}>
          <ArrowBackIosRoundedIcon color={'primary'}/>
        </Grid> 
        </Grid>
    
     );
}
 
export default SwipperContainer;

 
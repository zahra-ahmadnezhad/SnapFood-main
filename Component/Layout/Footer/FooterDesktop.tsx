import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import snap from '../../../Assets/Svgs/snap.svg'
import pic1 from "../../../Assets/Images/namad.png"
import pic2 from "../../../Assets/Images/senf.png"
import { footerItems1, footerItems2 } from "../../../Data/Footer/FooterItems.data";
import { SocialMediaItems } from "../../../Data/Footer/SocialMedia.data";

const FooterDesktop = () => {
    return (
        <Grid bgcolor={'rgb(249, 250, 251)'} width={'100%'}   p={4}>
            <Grid container display={'flex'} flexWrap={'wrap'} spacing={3} >
                <Grid item display={'flex'}  md={5} xs={8} >
                   <Grid marginLeft={1} sx={{cursor:'pointer'}}>
                     <Image src={snap} alt={''}/>
                   </Grid>
                   <Grid display={'flex'} flexDirection={'column'}>
                     <Grid><Typography variant="h3" color={'primary.main'}> اسنپ فود</Typography></Grid>
                     <Grid marginBottom={4}><Typography variant="subtitle1" color={'#3A3D42'}>تجربه سفارش غذا، از زودفود تا اسنپ‌فود</Typography></Grid>
                     <Grid display={'flex'} gap={1}>
                        {SocialMediaItems.map(item=>(
                        <Grid key={item.id}  boxShadow={' rgb(58 61 66 / 6%) 0px 1px 0px, rgb(0 0 0 / 20%) 0px 4px 16px -8px;'} bgcolor={'common.white'} display={'flex'} alignItems={'center'} justifyContent={'center'} width={'fit-content'} p={1.5} borderRadius={'50%'} sx={{cursor:'pointer'}}><Image src={item.icon} alt={"tel"}/></Grid>
                        ))}
                     </Grid>
                   </Grid>
                </Grid>
                <Grid item display={'flex'} flexDirection={'column'}   md={2} xs={4}>
                    {
                    footerItems1.map((item,index)=>(
                        <Grid key={index} p={1} sx={{cursor:'pointer'}}><Typography color={'#3A3D42'} variant="subtitle1">{item.title}</Typography></Grid>
                    ))
                }
                </Grid>
                <Grid item display={'flex'} flexDirection={'column'}   md={2} xs={6}>
                    {
                    footerItems2.map((item,index)=>(
                        <Grid key={index} p={1} sx={{cursor:'pointer'}} ><Typography variant="subtitle1" color={'#3A3D42'}>{item.title}</Typography></Grid>
                    ))
                }
                </Grid>
                <Grid item display={'flex'} justifyContent={{md:"flex-end",xs:'center'}} md={3} xs={6} spacing={1} >
                    <Grid><Image src={pic1} alt={""} width={70}/></Grid>
                    <Grid><Image src={pic2} alt={""}/></Grid>
                </Grid>
             
            </Grid>
        </Grid>
      );
}
 
export default FooterDesktop;
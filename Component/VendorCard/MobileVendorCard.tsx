import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Image from "next/image";
import Background from "../../Assets/Images/shila.jpg"
import Logo from "../../Assets/Images/shila_logo.jpg"
import { Typography } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';



const MobileVendorCard = () => {

    return(

        <Card sx={{
            width:'20rem',
            height:'15.5rem',
            borderRadius:'0.4rem',
            flexShrink:0
        }}>

            <Grid sx={{
                width:'100%',
                height:'50%'
            }}>
                <Image style={{ width:'100%', height:'100%', objectFit:'cover'}} src={Background} alt='' />
            </Grid>

            <Grid sx={{position:'relative', width:'20rem', py:3.5, px:2}}>
                <Grid sx={{position:'absolute', right:10, top:-50}} >
                    <Image src={Logo} alt="" style={{ 
                        width:'4.5rem',
                        height: '4.5rem',
                        border: '1px solid rgba(58, 61, 66, 0.06)',
                        borderRadius: '0.75rem',
                        }}/>
                </Grid>
                <Grid  display={'flex'} justifyContent={'space-between'}>
                        <Typography variant="h3" sx={{fontSize:'0.8rem'}}>پیتزا شیلا (سعادت آباد)</Typography>

                        <Grid display={'flex'} alignItems={'center'} gap={1}>
                            <Typography variant="subtitle1" sx={{fontSize:'0.7rem'}}>(۲۳,۳۰۲ )</Typography>
                            <Grid display={'flex'} alignItems={'center'} sx={{backgroundColor:'rgba(91, 168, 41, 0.08)', color:'#5ba839'}}>
                                <Typography variant="subtitle1" sx={{fontSize:'0.7rem'}}>۴.۵</Typography>
                                <StarIcon sx={{width:12, height:12}} />
                            </Grid>
                        </Grid>
                </Grid>
                <Grid mt={1}>
                    <Typography variant="subtitle1" sx={{color:'black'}}>فست‌فود، پیتزا، ساندویچ</Typography>
                    <Typography sx={{mt:2}} variant="subtitle1">پیک فروشنده ۱۵,۰۰۰ تومان</Typography>
                </Grid>
            </Grid>

        </Card>

    )

}

export default MobileVendorCard;
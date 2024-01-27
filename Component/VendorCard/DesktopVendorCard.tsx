import Image from 'next/image';
import { Grid, Box } from '@mui/material';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Logo from "../../Assets/Images/shila_logo.jpg";
import Background from "../../Assets/Images/shila.jpg";
import CourierLogo from "../../Assets/Icons/CourierIcon.svg";
import StarIcon from '@mui/icons-material/Star';
import Link from 'next/link';
interface DesktopVendorType{
  name:string
  star:number,
  score:number,
  delivery:number,
  logo:HTMLImageElement,
  picture:HTMLImageElement,
}
const DesktopVendor = ({name,star,score,delivery,logo,picture}:any) => {

    return(
      <Link href={`/Market/${name}`}>
    <Card  sx={{height:'21.3125rem', width:'21rem',my:2,cursor:'pointer'}}>
      
      <Grid sx={{height:'40%'}}>
        <img src={picture} width={25} height={25} alt="" style={{height: '100%',width:'100%', objectFit:'cover'}} />
      </Grid>
      <Grid sx={{position:'relative', height:'%60'}} display={'flex'} justifyContent={'center'}>
        <Grid sx={{position:'absolute', right:100, top:-66}} boxShadow={2} >
          <img src={logo} alt="" width={25} height={25} style={{
            width:'5.5rem',
            height: '5.5rem',
            border: '1px solid rgba(58, 61, 66, 0.06)',
            borderRadius: '0.75rem',
            }}/>
        </Grid>
        <Grid alignItems={'center'} justifyContent={'center'} display={'flex'} flexDirection={'column'} sx={{mt:'2.5rem'}}>
          <Grid>
            <Typography variant='h3'>{name}</Typography>
          </Grid>
          <Grid>
            <Grid display={'flex'} justifyContent={'center'} gap={1} sx={{mt:'0.5rem'}}>
              <Grid display={'flex'} textAlign={'center'}>
                <StarIcon sx={{ color:'orange', width:12, height:12 }} />
                <Typography variant='subtitle1'>{star}</Typography>
              </Grid>
              <Typography variant='subtitle1'>( {score} )</Typography>
            </Grid>
            <Typography  variant='subtitle1' textAlign={'center'} sx={{mt:'0.5rem'}}>فست‌فود، پیتزا، ساندویچ</Typography>
          </Grid>
          <Grid>
              <Grid display={'flex'} justifyContent={'center'} alignItems={'center'}  sx={{
                mt:'1.5rem',
                backgroundColor:'rgb(255, 255, 255)',
                borderRadius:'4.5rem',
                width:'210px',
                height:'40px',
                boxShadow: 'rgb(58 61 66 / 16%) 0px 1px 0px'
              }}>
                <Grid display={'flex'} gap={1} >
                  <img src={CourierLogo} alt="" />
                  <Typography variant='subtitle1'>پیک فروشنده</Typography>
                  <Typography variant='subtitle1'> {delivery} </Typography>
                  <Typography variant='subtitle1'>تومان</Typography>
                </Grid>
              </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Card>
    </Link>
    )

}

export default DesktopVendor;

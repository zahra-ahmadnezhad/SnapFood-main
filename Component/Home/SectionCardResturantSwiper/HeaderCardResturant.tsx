import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import { Cardtitleresturant, CardtitleresturantType } from "../../../Data/CardResturant/CardResturant"
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';

const HeaderCardResturant =({title}:CardtitleresturantType)=>{
    return(
            <Grid display={'flex'} alignItems={'center'} width={'95%'} justifyContent={'space-between'} mr={{md:2,sm:0,xs:2}}>
                <Typography variant='h2' fontSize={{xs:'1rem',sm:'1.5rem'}}>{title}</Typography>
                <Grid display={'flex'} alignItems={'center'} sx={{cursor:'pointer'}}>
                    <Typography variant='h3' fontSize={{xs:'0.9rem',sm:'1.5rem'}} color={'success.main'} ml={1}>مشاهده همه </Typography>
                    <ArrowBackIosRoundedIcon color={'success'} sx={{ fontSize:{xs:15,sm:20} }}/>
                </Grid>
            </Grid>
    )
}

export default HeaderCardResturant;
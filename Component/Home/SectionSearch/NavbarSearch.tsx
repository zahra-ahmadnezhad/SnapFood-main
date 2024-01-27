import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';

interface NavbarSearchDataTypeProps{
    title:string,
    num:number,
}

const NavbarSearch = ({num,title}:NavbarSearchDataTypeProps) =>{
    return(
        <Grid display={'flex'} justifyContent={'space-between'} alignItems={'center'} width={'100%'}>
            <Grid>
                <Typography variant={'subtitle1'} fontSize={'0.8rem'} color={'rgb(58, 61, 66)'}>{title}</Typography>
            </Grid>
            <Grid display={'flex'} alignItems={'center'}>
                <Typography variant={'subtitle1'} fontSize={'0.8rem'} color={'success.main'}>تعداد ({num})</Typography>
                <KeyboardArrowLeftRoundedIcon color="success"/>
            </Grid>
        </Grid>
    )
}

export default NavbarSearch;
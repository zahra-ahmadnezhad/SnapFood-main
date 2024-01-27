import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';

const HeaderSearch =()=>{
    return(
        <Grid display={'flex'} p={2} alignItems={'center'}>
            <GridViewOutlinedIcon fontSize="small"/>
            <Typography mr={2} variant={'subtitle1'} fontSize={'0.8rem'} color={'rgb(58,61,66)'}>دسته‌بندی</Typography>
        </Grid>
    )
}

export default HeaderSearch;
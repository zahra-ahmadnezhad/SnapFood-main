import { Box, Divider, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import { ProfileMobileData } from "../../../Data/ProfileMobile/ProfileMobile.data";
import ProfileMobileRow from "./ProfileMobileRow";


const ProfileMobile =()=>{
    return(
        <Box sx={{width:'100%',height:'100%',bgcolor:'white',overflowY:'scroll'}}>
            <Grid width={'100%'} height={45} position={'fixed'} bgcolor={'#F9FAFB'}></Grid>
            <Grid xs={12} mt={4} sx={{overflowY:'scroll'}}>
                <Grid p={2} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                    <Grid>
                        <Typography variant="h3">مریم کهن</Typography>
                        <Typography variant="subtitle1" color={'rgb(58,61,66)'}>نمایش اطلاعات کاربری</Typography>
                    </Grid>
                    <Grid>
                        <ArrowBackIosOutlinedIcon fontSize="small" sx={{color:"rgb(58,61,66)"}}/>
                    </Grid>
                </Grid>
                <Divider/>
                {ProfileMobileData.map((item,index)=>(
                    <ProfileMobileRow key={index} {...item}/>
                ))}
                <Grid display={'flex'} flexDirection={'row-reverse'} p={2}>
                    <Typography variant="body2">نسخه 5.6.6</Typography>
                </Grid>
                <Grid height={65}></Grid>
            </Grid>
        </Box>
    )
}

export default ProfileMobile;
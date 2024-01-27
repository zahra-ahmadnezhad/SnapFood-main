import Grid from "@mui/material/Grid"
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React from "react";
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import RedeemIcon from '@mui/icons-material/Redeem';
import LogoutIcon from '@mui/icons-material/Logout';

const ProfileDesktop =()=>{
  return (
        <Box sx={{  transform: 'translate(-50%, -50%)',width: 260,height:'auto',bgcolor: 'background.paper',boxShadow: 1,}} position={'absolute'} top={170}  zIndex={100} left={{sm:80,md:10}} py={1} borderRadius={2}>
            <Grid display={'flex'} alignItems={'center'} mb={2} p={1}>
                <PersonOutlinedIcon/>
                <Grid display={'flex'} flexDirection={'column'} alignItems={'flex-start'} mr={1}>
                    <Typography variant="subtitle2" fontSize={'0.875rem'}>مریم کهن</Typography>
                    <Typography variant="body2" color={'success.main'}>مشاهده حساب کاربری</Typography>
                </Grid>
            </Grid>
            <Grid display={'flex'} justifyContent={'space-between'} alignItems={'center'} p={2}  borderRadius={2} sx={{'&:hover':{backgroundColor:'#EDEFF0'}}}>
                <Grid display={'flex'} alignItems={'center'} >
                    <AccountBalanceWalletOutlinedIcon/>
                    <Typography mr={'8px'}  variant="h3" fontSize={'0.875rem'} fontWeight={400}>کیف پول</Typography>
                </Grid>
                <Grid>
                    <Typography variant="subtitle1">93 تومان</Typography>
                </Grid>
            </Grid>
            <Grid display={'flex'} alignItems={'center'} p={2}  borderRadius={2} sx={{'&:hover':{backgroundColor:'#EDEFF0'}}}>
                <RedeemIcon/>
                <Typography mr={1}  variant="h3" fontSize={'0.875rem'} fontWeight={400}>دعوت از دوستان</Typography>
            </Grid>
            <Grid display={'flex'} p={2} alignItems={'center'}  borderRadius={2} sx={{'&:hover':{backgroundColor:'#EDEFF0'}}}>
                <LogoutIcon/>
                <Typography mr={1}  variant="h3" fontSize={'0.875rem'} fontWeight={400}>خروج</Typography>
            </Grid>
        </Box>
  );
}

export default ProfileDesktop;

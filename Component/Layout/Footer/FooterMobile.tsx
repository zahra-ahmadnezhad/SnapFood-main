import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentitySharpIcon from '@mui/icons-material/PermIdentitySharp';
// import { useNavigate } from 'react-router-dom';

import Modal from '@mui/material/Modal';

import ProfileMobile from "../../Home/SectionProfile/ProfileMobile";
import SectionOrdersCard from "../../Home/SectionOrders/SectionOrdersCard";

import { useState } from "react";

const FooterMobile = () => {
  const [value, setValue] = React.useState(0);
  const [openprofile, setOpenProfile] = React.useState(false)
  const [openOrders, setOpenOrders] = React.useState(false)
  const handleOpenOrders = () => setOpenOrders(true);
  const handleOpenProfile = () => setOpenProfile(true);
  const handleCloseProfile = () => setOpenProfile(false);
  const [open, setOpen] = useState<boolean>(false)
  // const navigate=useNavigate()
  // const handleChangePageCurrent=()=>{
  //     navigate('/CurrentPrice')
  // }
  // const handleChangePageHome=()=>{
  //     navigate('/')
  // }
  return (

    <Box sx={{ width: "100%" }} position={"fixed"} zIndex={12000} bottom={0} boxShadow={'0 -1px 0  rgba(0, 0, 0, 0.1)'}>

      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="خانه"
          value={"1"}
          icon={<HomeIcon />}
          //icon={<Image src={Home} alt={''}/>}
          //   onClick={handleChangePageHome}
          onClick={handleCloseProfile}
        />
        <BottomNavigationAction
          label="  سفارش ها"
          value={"2"}
          icon={<ListAltIcon />}
          onClick={handleOpenOrders}

        />
        <Modal open={openOrders} >
          <Grid  mb={30} width={"100%"} overflow={"scroll"}  height={"100%"} pt={6} bgcolor={"#fff"} display={{ xs: "block", sm: "none" }}>
            <Grid ><Typography fontSize={"15px"} fontWeight={700} mr={2} color={"#404040"} >{"سفارش‌های پیشین "}</Typography></Grid> 
              <SectionOrdersCard setOpen={setOpen} open={open} />
              <SectionOrdersCard setOpen={setOpen} open={open} />
              <SectionOrdersCard setOpen={setOpen} open={open} />
              <SectionOrdersCard setOpen={setOpen} open={open} />
          </Grid>
          {/* <SectionOrdersCart /> */}
        </Modal>
        <BottomNavigationAction
          label="حساب من"
          value={"3"}
          icon={<PermIdentitySharpIcon />}
          //   onClick={handleChangePageCurrent}
          onClick={handleOpenProfile}
        />
        <Modal
          open={openprofile}
        // onClose={handleClose}
        >
          <ProfileMobile />
        </Modal>
      </BottomNavigation>
    </Box>
  );
};
export default FooterMobile;

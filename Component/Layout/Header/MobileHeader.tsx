import { Grid, IconButton, Typography, Modal, Box, Button } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import Image from "next/image";
import HamMenu from "../../../Assets/Icons/HamMenuIcon.svg";
import AddressArrow from "../../../Assets/Icons/AddressArrowIcon.svg";
import Cart from "../../../Assets/Icons/CartIcon.svg";
import { useState } from "react";
import SearchBar from "../../Home/SectionSearch/SearchBar";
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';


const MobileHeader = () => {

    const [open,setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return(
        <Grid>
            <Grid item display={'flex'} alignItems={'center'} justifyContent={'space-between'} sx={{ bgcolor:'#F9FAFB', height:'50px', width:'100%'}}>
                <Grid zIndex={12000}>
                    <IconButton>
                        <Image src={HamMenu} alt="" />
                    </IconButton>
                </Grid>
                <Grid>
                    <Grid item display={'flex'} gap={1} justifyContent={'center'} alignItems={'center'}>
                        <Typography variant="subtitle1" style={{color:'black'}}>
                        موقعیت انتخابی
                        </Typography>
                        <Image src={AddressArrow} alt="" />
                    </Grid>
                    <Grid>
                        <Typography variant="subtitle1" style={{color:'black'}}>
                            تهران،سعادت آباد، بلوار ...
                        </Typography>
                    </Grid>
                </Grid>
                <Grid zIndex={12000}>
                <IconButton>
                        <Image src={Cart} alt="" />
                    </IconButton>
                </Grid>
            </Grid>
            <Grid item xs={12} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <Grid p={2} width={'100%'}>
                <Button onClick={handleOpen}
                style={{ justifyContent:'space-between', color:'rgb(166, 170, 173)', backgroundColor:'rgb(235, 237, 240)', width: '100%', height: '3rem', borderRadius: '0.625rem' }}>
                    <Grid>جست‌وجو در اسنپ‌فود</Grid>
                    <Grid>
                        <SearchIcon/>
                    </Grid>
                </Button>
                <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={{bgcolor:'#fff'}}
                hideBackdrop={true}
                >
                    <>
                        <IconButton onClick={handleClose} >
                            <ArrowForwardIosRoundedIcon sx={{ color:'#404040' }}/>
                        </IconButton>
                        <SearchBar/>
                    </>
                    {/* <Box >
                        <Typography>
                            search
                        </Typography>
                    </Box> */}
                </Modal>
                </Grid>
            </Grid>
        </Grid>
    )

}

export default MobileHeader;
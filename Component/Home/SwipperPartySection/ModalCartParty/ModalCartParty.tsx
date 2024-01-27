import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Typography from "@mui/material/Typography";
import { Grid, IconButton, Button } from "@mui/material";
import Image from "next/image";
import Header from "./HeaderCartParty";
import sun from "../../../../Assets/Images/sun.jpeg";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import StarIcon from "@mui/icons-material/Star";
import CommentsCartParty from "./CommentsCartParty";


const style = {

    position: "absolute",
    top: { sm: "50%", xs: "45%" },
    width: { md: "50%",sm:"60%" , xs: "100%" },
    left: "50%",
    borderRadius:{sm:"16px" , xs:"0px"},
    boxShadow: "rgb(0 0 0 / 8%) 0px 2px 8px, rgb(0 0 0 / 16%) 0px 8px 32px",
    maxHeight: "90%",
    transform: "translate(-50%, -50%)",
    height: "90vh",
    // width: "55%",
    bgcolor: {sm:"#EF4296" , xs:"#fff"},
    zIndex:"5000"
    
};

export interface ModalBoxProps {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const ModalCartParty = ({ setOpen, open }: ModalBoxProps): JSX.Element => {
    const handleClose = () => setOpen(false);
console.log(open)
    return (
        <>         
            <Modal
                keepMounted
                open={open}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <Box sx={style} overflow={"hidden"} zIndex={60000}  >
                    <Header />
                    <Grid container borderRadius={{sm:"16px" , xs:"0px"}}  bgcolor={"#fff"} height={"100%"}  display={"flex"}>
                        <Grid width={"100%"} display={"flex"} alignItems={"center"}  pr={0.8} item position={"fixed"}>
                            <IconButton  >
                                <CloseIcon sx={{ color: "rgb(103, 106, 112)" , display:{sm:"flex" , xs:"none"} }} />
                                <CloseIcon sx={{ color: "rgb(103, 106, 112)" , display:{sm:"none" , xs:"flex"} }} />
                            </IconButton>
                                <Typography pr={23} fontSize={"1rem"} fontWeight={900} sx={{ color: "rgb(103, 106, 112)" , display:{sm:"none" , xs:"flex"} }} >فود پارتی</Typography>
                        </Grid>
                        <Grid
                            sx={{ height: "100vh", maxHeight: "530px", overflowY: "auto", width: "100%",  }}
                            gap={2}
                            display={"flex"}
                            flexDirection={"column"}
                            mt={5}
                            p={2} >
                            <Grid item xs={12} display={"flex"} gap={3} flexDirection={{ xs: "column", md: "row" }}>
                                <Grid item xs={12}  md={10} lg={5} >
                                    <Image src={sun} alt={"sun"} style={{ height: "100%", width: "100%", borderRadius: "0.75rem", objectFit: "cover", }} />
                                </Grid>
                                <Grid item xs={12} md={7} display={"flex"} flexDirection={"column"}>
                                    <Grid display={"flex"}>
                                        <Grid item xs={9} >
                                            <Grid item xs={12}>
                                                <Typography fontWeight={700} fontSize={"1.10rem"} color={"#3a3d42"}>چیز برگر</Typography>
                                            </Grid>
                                            <Grid item xs={12} pt={1.5} pb={2}>
                                                <Typography fontWeight={400} fontSize={"0.777rem"} color={"#53565c"}>
                                                    یک عدد برگر دست ساز گوشت مخلوط گوساله و گوسفندی ۱۵۰
                                                    گرمی، قارچ، پنیر پیتزا، کاهو، گوجه، خیارشور، نان باگت
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12} pb={2} borderBottom={"2px solid rgb(166, 170, 173)"}>
                                                <Typography fontWeight={400} fontSize={"0.825rem"} color={"#3a3d42"}>7 عدد باقی مانده است</Typography>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={3} borderBottom={"2px solid rgb(166, 170, 173)"}>
                                            <Typography ml={3} mr={2}  justifyContent={"center"} alignItems={"center"} display={"flex"} gap={1} borderRadius={1} fontSize={"14px"} border={"0.0625rem solid rgb(235, 237, 240)"} ><StarIcon sx={{ color: "#FFCE00", width: "14px" }} />3.6</Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} display={"flex"} justifyContent={"space-between"}>
                                        <Grid item mt={2} display={"flex"} gap={1}>
                                            <Grid item display={"flex"} alignItems={"center"}>
                                                <Typography p={"8px 4px"} fontWeight={600} borderRadius={2} color={"#FF08A9"} bgcolor={"#FFF0FA"} >40%</Typography>
                                            </Grid>
                                            <Grid item mt={1.4}>
                                                <Typography fontSize={"12px"} color={"#a6aaad"}><del>166,000</del></Typography>
                                                <Typography fontSize={"15px"}><strong>91,000 </strong> <span style={{color:"#53565c" , fontSize:"0.75rem "}}>تومان</span></Typography>
                                          </Grid>
                                        </Grid>
                                        <Grid mt={3}>
                                            <Button variant="outlined">افزودن</Button>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} display={"flex"} justifyContent={"space-between"} >
                                        <Typography fontSize={"0.75rem"} color={"#3a3d42"} mt={4}>ارسال اکسپرس</Typography>
                                      
                                        <Typography mt={4} fontSize={"14px"} fontWeight={700} display={"flex"} color={"#37C784"}> براگراتور<ArrowBackIosIcon sx={{ width: "18px" }} /></Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item display={"flex"} flexDirection={"column"} xs={12} >
                                <Grid item xs={12} p={1} pt={3}>
                                    <Typography display={{xs:"flex" , sm:"none"}} fontWeight={700} fontSize={"0.875rem"} color={"#53565c"}> نظرات</Typography>
                                    <Typography display={{sm:"flex" , xs:"none"}} fontWeight={700} fontSize={"0.875rem"} color={"#53565c"}>نظرات کاربران  </Typography>
                                </Grid>
                                <CommentsCartParty />
                                <CommentsCartParty />
                                <CommentsCartParty />
                                <CommentsCartParty />
                            </Grid>
                        </Grid>

                    </Grid>
                </Box>
            </Modal>
        </>
    );
};

export default ModalCartParty;

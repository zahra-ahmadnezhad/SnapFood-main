import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import Modal from '@mui/material/Modal';
import { Grid, Typography, Button, IconButton } from '@mui/material'


const style = {
    position: 'absolute' , top:{sm:"50%" , xs:"40%"}, left: { xs: "0", sm: "50%" }, borderRadius: '0.75rem',
    boxShadow: "rgb(0 0 0 / 8%) 0px 2px 8px, rgb(0 0 0 / 16%) 0px 8px 32px",
    height: "auto",
    p: 2, width: '100%', maxWidth: { xs: "100%", sm: "25rem" }, bgcolor: 'rgb(255, 255, 255)', transform: { sm: "translate(-50%, -50%)", xs: "translate3d(0, 0, 0)" }
};
export interface ModalBoxProps {
    open: boolean,
    setOpen:(arg0: boolean)=> boolean
}

const SectionOrdersModal = ({ setOpen, open }: ModalBoxProps): JSX.Element => {
    const handleClose = () => {
        setOpen(false);
    };
  
    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Grid  sx={style} dir={"rtl"}>
                    <Grid item display={{xs:"none" , sm:"block"}}>
                        <IconButton onClick={handleClose} >
                            <CloseIcon sx={{ color: 'rgb(103, 106, 112)' , width:27 }} />
                        </IconButton>
                    </Grid>
                    <Grid p={1} mt={1} justifyContent={"space-between"} display={{xs:"flex" , sm:"block"}}>
                        <Typography fontWeight={700} fontSize={"1.4rem"} color={"#3a3d42"}>
                            {"فاکتور سفارش"}
                        </Typography>
                        <Grid item display={{xs:"black" , sm:"none"}}>
                        <IconButton onClick={handleClose}  >
                            <CloseIcon sx={{ color: 'rgb(103, 106, 112)', width:25 }} />
                        </IconButton>
                    </Grid>
                        <Typography  mt={1} color={"#53565c"} fontSize={"0.875rem"} fontWeight={400} display={{xs:"none" , sm:"block"}} component="h2">
                            {"رستوران و کترینک  بزرگان"}
                        </Typography>
                    </Grid>
                    <Grid mt={1} display={"flex"} justifyContent={"space-between"} p={1} pb={1} borderBottom={"0.0625rem solid rgba(58, 61, 66, 0.06)"}>
                        <Typography fontSize={"0.775rem"} fontWeight={400} color={"#3a3d42"}>
                            {" چلو جوجه کباب "}
                        </Typography>
                        <Typography fontSize={"0.775rem"} fontWeight={700} color={"#3a3d42"} >
                            {"69,000  تومان"}
                        </Typography>
                    </Grid>
                    <Grid mt={1} display={"flex"} flexDirection={"column"} justifyContent={"space-between"} p={1} pb={1} borderBottom={"0.0625rem solid rgba(58, 61, 66, 0.06)"}>
                        <Grid display={"flex"} justifyContent={"space-between"}>
                            <Typography fontSize={"0.875rem"} mb={1.25} lineHeight={"1.5rem"} fontWeight={400} color={"#3a3d42"}>
                                {"جمع کل :"}
                            </Typography>
                            <Typography fontSize={"0.875rem"} lineHeight={"1.5rem"} fontWeight={700} color={"#3a3d42"}>
                                <strong>140,000</strong>{"تومان"}
                            </Typography>
                        </Grid>
                        <Grid  display={{xs:"none" , sm:"Flex"}} justifyContent={"space-between"}>
                            <Typography fontSize={"0.775rem"} lineHeight={"1.5rem"} fontWeight={400} color={"#3a3d42"}>
                                {" هزینه ارسال "}
                            </Typography>
                            <Typography  fontSize={"0.775rem"} lineHeight={"1.5rem"} fontWeight={400} color={"#3a3d42"}>
                                {"رایگان "}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid display={"flex"} justifyContent={"space-between"} p={1} pb={1} mb={4}>
                        <Typography fontSize={"0.875rem"} lineHeight={"1.5rem"} fontWeight={700}>
                            {"مجموع  "}
                        </Typography>
                        <Typography fontSize={"0.875rem"} lineHeight={"1.5rem"} fontWeight={700}>
                            {"140,000 تومان"}
                        </Typography>
                    </Grid>
                    <Grid display={{xs:"none" , sm:"flex"}} justifyContent={"space-between"} p={2} mt={1} xs={12} borderRadius={"0.25rem"} bgcolor={"rgba(0, 133, 66, 0.06)"}>
                        <Typography variant='subtitle1' display={"flex"} color={"#3a3d42"} alignItems={"center"} gap={1}><Typography fontWeight={700}>340</Typography>{" امتیاز دریافت کرده اید "}</Typography>
                        <Typography fontWeight={700} color={"rgb(0, 184, 98)"}>{" club "}</Typography>
                    </Grid>
                </Grid>
            </Modal>
        </>
    )
}

export default SectionOrdersModal
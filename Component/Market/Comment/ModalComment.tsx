import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { Grid, IconButton, Button } from "@mui/material";
import CommentHeaderModal from "./CommentHeaderModal";
import Comments from "./Comments";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const style = {
    position: "absolute",
    top: { sm: "50%", xs: "45%" },
    width: { md: "80%", lg: "50%", sm: "95%" },
    left: "50%",
    borderRadius: { sm: "16px", xs: "0px" },
    boxShadow: "rgb(0 0 0 / 8%) 0px 2px 8px, rgb(0 0 0 / 16%) 0px 8px 32px",
    maxHeight: "90%",
    transform: "translate(-50%, -50%)",
    height: "auto",
    bgcolor: { sm: "#EF4296", xs: "#fff" },
    zIndex: "5000",

};

export interface ModalBoxProps {
    open: boolean,
    setOpen: (arg0: boolean) => boolean,
    handleClose: boolean
}
const ModalComment = ({ setOpen, open }: any): JSX.Element => {
    const handleClose = () => setOpen(false);
    // console.log(open)

    const [alignment, setAlignment] = React.useState('web');

    const handleChange = (event: React.MouseEvent<HTMLElement>,
        newAlignment: string,
    ) => {
        setAlignment(newAlignment);
    };
    return (
        <>
            <Modal
                keepMounted
                open={open}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <Box sx={style} overflow={"hidden"} zIndex={60000} dir={"rtl"}  >
                    {/* <Header /> */}
                    <Grid container borderRadius={{ sm: "16px", xs: "0px" }} bgcolor={"#fff"} height={"100%"} display={"flex"}>
                        <Grid pr={3} pt={2}><CloseIcon /></Grid>
                        <CommentHeaderModal />
                        <Grid
                            sx={{ maxHeight: "430px", overflowY: "auto", width: "100%", }}
                            gap={2}
                            display={"flex"}
                            flexDirection={"column"}
                            mt={1}
                            p={2} >
                            <Grid display={"flex"} xs={12}>
                                <Grid display={"flex"} alignItems={"center"} xs={5}>{"نظرات کاربران "}</Grid>
                                <Grid display={"flex"} alignItems={"center"} gap={2} xs={7} >
                                    <Typography>{"به ترتیب "}</Typography>
                                    <ToggleButtonGroup
                                        color="success"
                                        fullWidth={true}
                                        value={alignment}
                                        exclusive
                                        onChange={handleChange}
                                        aria-label="Platform"
                                        sx={{ width: "75%", bgcolor: "#F3F4F4", p: "4px", borderRadius: "0.75rem" }}

                                    >
                                        <ToggleButton sx={{ border: "none", height: "40px", borderRadius: "0.75rem" }} value="web">{"جدیدترین"}</ToggleButton>

                                        <ToggleButton sx={{ border: "none", height: "40px", borderRadius: "0.75rem" }} value="ios">{"مرتبط ترین"}</ToggleButton>
                                    </ToggleButtonGroup>

                                </Grid>
                            </Grid>
                            <Comments />
                            <Comments />
                            <Comments />
                        </Grid>
                    </Grid>
                </Box>
            </Modal>
        </>
    );
};

export default ModalComment;

import { Grid, Typography } from '@mui/material'
import React from 'react'
import Image from 'next/image'
// import Pic from "../../../assets/images/food.jpg"
import RoomIcon from '@mui/icons-material/Room';
// import Loc from "../../../assets/images/loction.png"
const CommentInformation = () => {
    return (
        <>
            <Grid display={"flex"} dir={"rtl"} mt={2} flexDirection={"column"}>
                <Grid display={"flex"} width={"100%"} borderBottom={"1px solid #f4f3f3"} justifyContent={"space-between"} pb={2}>
                    <Grid display={"flex"} flexDirection={"column"} width={"70%"}  >
                        <Typography mb={2}>{"پیتزا شیلا (میدان ولیعصر)"}</Typography>
                        <Grid display={"flex"} gap={4}>
                            <Typography fontSize={"12px"} fontWeight={600}>{"نوع محصول :"}</Typography>
                            <Typography fontSize={"12px"} >{"فست فود ,  برگر , ساندویچ"}</Typography>
                        </Grid>
                        <Grid display={"flex"} gap={3}>
                            <Typography fontSize={"12px"} fontWeight={600}>{"حداقل سبد خرید:"}</Typography>
                            <Typography fontSize={"12px"}>{"4000 تومان "}</Typography>
                        </Grid>
                        <Grid display={"flex"} gap={4}>
                            <Typography fontSize={"12px"} fontWeight={600}>{"روش پرداخت: "}</Typography>
                            <Typography fontSize={"12px"} >{"آنلاین"}</Typography>
                        </Grid>


                    </Grid>
                    <Grid display={"flex"} width={"30%"} justifyContent={"flex-end"} >
                        {/*<Image src={Pic} alt="" style={{ border: "1px solid rgba(58, 61, 66, 0.06)", borderRadius: "8px", width: "5.5rem", height: "5.5rem" }} />*/}
                    </Grid>
                </Grid>
                <Grid display={"flex"} width={"100%"}>
                <Grid display={"flex"} width={"60%"} dir={"rtl"} mt={2} gap={2}>
                    <RoomIcon />
                    <Typography fontSize={"15px"}>
                        {"ضلع جنوب شرقی میدان ولیعصر، نبش کوچه شقایق، پلاک ۴۶، پیتزا شیلا (میدان ولی عصر)"}
                    </Typography>
                </Grid>
                <Grid display={"flex"} width={"40%"} justifyContent={"flex-end"} mt={2} >
                    {/*<Image src={Loc} alt="" style={{ border: "1px solid rgba(58, 61, 66, 0.06)", borderRadius: "8px", width: "6.5rem", height: "6.5rem" }} />*/}
                </Grid>
                </Grid>
                
            </Grid>


        </>
    )
}

export default CommentInformation
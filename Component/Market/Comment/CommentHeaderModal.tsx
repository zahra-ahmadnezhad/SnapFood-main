import React from 'react'
import { Grid, Typography } from '@mui/material'
import Image from 'next/image'
import pic from "../../../Assets/Images/sun.jpeg"
import pic1 from "../../../Assets/Images/map.png"
import MnueComment from './MnueComment';
const CommentHeaderModal = () => {
    return (
        <Grid item xs={12} display={"flex"} flexDirection={"column"} dir={"rtl"} p={2}>
            <Grid item xs={12} display={"flex"}>
                <Grid xs={2}  display={"flex"} justifyContent={"center"}>
                    <Image src={pic} alt="" style={{ border: "1px solid rgba(58, 61, 66, 0.06)", borderRadius: "0.75rem", width: "7rem", height: "7.5rem"}} />
                </Grid>
                <Grid item md={6}  sm={10} pr={{sm:10 , md:0}} flexDirection={"column"} display={"flex"} justifyContent={"space-between"}  >
                    <Typography fontWeight={700} fontSize={"25px"} color={"000"}>{"P.S (فیلیپر)"}</Typography>
                    <Typography fontWeight={400} fontSize={"15px"} color={"#53565c"}>{"ایرانی, کباب, سنتی"}</Typography>
                    <Typography fontWeight={400} fontSize={"15px"} color={"#53565c"}>{"خیابان جویبار، خیابان زرشت غربی، روبرو بانک سپه، پلاک۹، فیلیپر"}</Typography>
                </Grid>

                <Grid xs={4} display={{md:"flex" , sm:"none"}} justifyContent={"center"}>
                    <Image src={pic1} alt="" style={{ border: "1px solid rgba(58, 61, 66, 0.06)", borderRadius: "0.35rem" }} />

                </Grid>
            </Grid>
            <MnueComment />

        </Grid>
    )
}

export default CommentHeaderModal
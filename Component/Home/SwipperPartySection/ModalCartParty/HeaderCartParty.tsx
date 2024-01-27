import React from 'react'
import Image from "next/image";

import food from "../../../../Assets/Svgs/food.svg";

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Typography from "@mui/material/Typography";
import  Grid  from "@mui/material/Grid";
const Header = () => {
    return (
        <>
            <Grid display={{sm:"flex" , xs:"none"}} justifyContent={"space-between"} p={"15px 21px"}>

                <Grid display={"flex"} gap={1} alignItems={"center"} >
                    <Typography>
                        <Image src={food} alt="" />
                    </Typography>
                    <Typography color={"#fff"} >
                        فودپارتی
                    </Typography>
                </Grid>
                <Grid display={"flex"} gap={1} alignItems={"center"} >
                    <Typography color={"#fff"} >
                        20:58
                    </Typography>
                    <Typography color={"#fff"}>
                        <AccessTimeIcon />
                    </Typography>
                </Grid>
            </Grid>
        </>
    )
}

export default Header
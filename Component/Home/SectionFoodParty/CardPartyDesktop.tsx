import { Divider, Grid, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import Image from "next/image";
import disi from "../../../Assets/Images/disi.jpeg";
import ModalCartParty from "../SwipperPartySection/ModalCartParty/ModalCartParty";
import React, { useState } from "react";


export interface ModalBoxProps {
  open: boolean,
  // setOpen:(arg0: boolean)=> boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}
// console.log(handleOpen)
import star from "../../../Assets/Svgs/star.svg";
const CardPartyDesktop = () => {
  const [open, setOpen] = useState<boolean>(false)

  const handleOpen = () => setOpen(!open);

  return (
    <Grid
      minWidth={'90%'}
      xs={6}
      md={4}
      lg={3}
      mx={1}
      bgcolor={'common.white'}
      borderRadius={"0.5rem"}
      sx={{ cursor: "pointer" }}
      // boxShadow={"0px 2px 8px rgba(0,0,0,0.08),0px 8px 32px rgba(0,0,0,0.16)"}
      onClick={handleOpen}
    >
      <ModalCartParty setOpen={setOpen} open={open}/>
      <Grid
        height={"20rem"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"space-between"}
        m={2}
        //  width={'100%'}
      >
        <Grid>
          <Typography variant="body2" color={'rgb(58, 61, 66)'} mb={1}>
            {"غذای اصیل ایرانی (اکباتان)"}
          </Typography>
          <Typography variant="body2" color={'rgb(58, 61, 66)'}>{"پیک فروشنده 10,000 تومان"}</Typography>
        </Grid>
        <Grid width={"7.125rem"} height={"7.125rem"}>
          <Image
            src={disi}
            alt={"disi"}
            style={{ width: "100%", height: "100%", borderRadius: "0.5rem" }}
          />
        </Grid>
        <Grid width={"100%"} textAlign={"center"}>
          <Typography variant="subtitle2">
            زبان سلطانی مزه بازار (سرویس س...
          </Typography>
        </Grid>
        <Grid display={"flex"} width={"100%"} alignItems={"center"}>
          <Grid width={"50%"} display={"flex"} flexDirection={"column"}>
            <Grid display={"flex"} alignItems={"center"}>
              <Typography
                fontWeight={700}
                variant="subtitle1"
                color={"rgb(58, 61, 66)"}
              >
                4.1
              </Typography>
              <StarIcon sx={{ color: "#FFCE00", width: "10px" }} />
            </Grid>
            <Grid display={"flex"} alignItems={"center"}>
              <Typography
                fontWeight={700}
                variant="subtitle1"
                color={"rgb(58, 61, 66)"}
              >
                7
              </Typography>
              <Typography
                fontWeight={300}
                variant="body2"
                color={"rgb(58, 61, 66)"}
              >
                
                {"عدد باقی مانده"}
              </Typography>
            </Grid>
          </Grid>
          <Grid
            width={"50%"}
            display={"flex"}
            alignItems={"flex-end"}
            flexDirection={"column"}
          >
            <Grid display={"flex"} alignItems={"center"} mb={1}>
            <Typography  sx={{textDecoration: 'line-through'}}   fontWeight={300}
                variant="subtitle1">259,000</Typography>
              <Grid
                bgcolor={"primary.main"}
                width={"30px"}
                textAlign={"center"}
                borderRadius={"5px"}
                mr={1}
              >
                <Typography
                  fontWeight={700}
                  variant="subtitle1"
                  color={"common.white"}
                >
                  %35
                </Typography>
              </Grid>
      
            </Grid>
            <Grid display={"flex"} alignItems={"center"}>
              <Typography
                fontWeight={700}
                variant="subtitle1"
                color={"rgb(58, 61, 66)"}
                
              >
                168,870
              </Typography>
              <Typography
                fontWeight={300}
                variant="body2"
                color={"rgb(58, 61, 66)"}
              >
              
                {" تومان "}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid width={"100%"} height={2} alignSelf={"flex-start"}>
          <Divider variant="middle" sx={{ borderWidth: 1 ,backgroundColor:'rgb(166, 170, 173)'}} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CardPartyDesktop;

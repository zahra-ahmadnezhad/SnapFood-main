import * as React from 'react';
import { Grid, Typography } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

const MnueComment = () => {
  const [arow, setArow] = React.useState(false)

  const handleClick = () => {
    setArow(!arow)
  }

  return (
    <>
      <Grid display={"flex"} justifyContent={"space-around"} pt={3} >
        <Grid display={"flex"} position={"relative"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"}>
          <AccessTimeIcon style={{ fontSize: "20px", fill: "rgb(103, 106, 112)" }} />
          <Typography color={"#3a3d42"} fontSize={"13px"} >ساعت کاری </Typography>
          <Grid display={"flex"}>
            <Typography color={"#3a3d42"} fontWeight={700} display={"flex"} alignItems={"center"} gap={2} onClick={handleClick}>باز از ساعت 11:30 تا
              23:00
              {arow ?
                <>
                  <ArrowDropUpIcon />
                  {/* <Grid position={"absolute"} gap={7} display={"flex"} alignItems={"center"} justifyContent={"center"} bgcolor={"#fff"} top={75} border={1} borderRadius={2} width={"620px"} height={"80px"}>
                    <Grid display={"flex"} flexDirection={"column"}>
                      <Grid>{"شنبه"}</Grid>
                      <Grid>{"شنبه"}</Grid>
                      <Grid>{"شنبه"}</Grid>
                    </Grid>
                    <Grid display={"flex"} flexDirection={"column"}>
                      <Grid>{"یکشنبه"}</Grid>
                      <Grid>{"شنبه"}</Grid>
                      <Grid>{"شنبه"}</Grid>
                    </Grid>
                    <Grid display={"flex"} flexDirection={"column"}>
                      <Grid>{"دوشنبه"}</Grid>
                      <Grid>{"شنبه"}</Grid>
                      <Grid>{"شنبه"}</Grid>
                    </Grid>
                    <Grid display={"flex"} flexDirection={"column"}>
                      <Grid>{"سهشنبه"}</Grid>
                      <Grid>{"شنبه"}</Grid>
                      <Grid>{"شنبه"}</Grid>
                    </Grid>
                    <Grid display={"flex"} flexDirection={"column"}>
                      <Grid>{"چهارشنبه"}</Grid>
                      <Grid>{"شنبه"}</Grid>
                      <Grid>{"شنبه"}</Grid>
                    </Grid>
                    <Grid display={"flex"} flexDirection={"column"}>
                      <Grid>{"پنجشنبه"}</Grid>
                      <Grid>{"شنبه"}</Grid>
                      <Grid>{"شنبه"}</Grid>
                    </Grid >
                    <Grid display={"flex"} flexDirection={"column"}>
                    <Grid>{"جمعه"}</Grid>
                    <Grid>{"شنبه"}</Grid>
                    <Grid>{"شنبه"}</Grid>
                    </Grid>
                    
                  </Grid> */}
                </>
                :
                <ArrowDropDownIcon />}
            </Typography>
          </Grid>

        </Grid >

        <Grid display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"}>

          <CreditScoreIcon style={{ fontSize: "20px", fill: "rgb(103, 106, 112)" }} />
          <Typography fontSize={"13px"} color={"#3a3d42"} >شیوه پرداخت</Typography>
          <Typography color={"#3a3d42"} fontWeight={700} >آنلاین</Typography>
        </Grid>
        <Grid display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"}>
          <AddShoppingCartIcon style={{ fontSize: "20px", fill: "rgb(103, 106, 112)" }} />
          <Typography color={"#3a3d42"} fontSize={"13px"} >حداقل سبد خرید</Typography>
          <Typography color={"#3a3d42"} fontWeight={700} >55،400 تومان </Typography>
        </Grid>
      </Grid >

    </>

  );
}
export default MnueComment
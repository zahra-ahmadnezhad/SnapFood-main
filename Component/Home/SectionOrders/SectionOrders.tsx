import * as React from 'react';
import Box from '@mui/material/Box';
import { Grid, Typography, Button, IconButton } from '@mui/material'
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import {useState } from 'react';
import AvTimerIcon from '@mui/icons-material/AvTimer';
import SectionOrdersCard from './SectionOrdersCard';


export interface MenuBarProps {
    state: boolean,
    toggleDrawer: (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void,
}
const SectionOrders = ({ state, toggleDrawer }: MenuBarProps): JSX.Element => {
    const [open, setOpen] = useState<boolean>(false)
   
    return (
        <>
            <SwipeableDrawer open={state}  sx={{ left:0 , height:"100%" , overflowY:"scroll"}} onClose={toggleDrawer(false)}  onOpen={toggleDrawer(true)}  >
                <Box p={"0 16px"} width={430} role="presentation"   >
                        <Grid m={"0.8rem 0"} ><Typography variant='subtitle1' fontSize={"0.67rem"} color={"#53565c"} fontWeight={700} >{"سفارش‌های پیشین"}</Typography></Grid>
                        <Grid border={"1px solid #e6e6e6"} borderRadius={3} minHeight={550} height={"auto"}>
                          
                            <>
                                <Grid item borderBottom={"0.0625rem solid rgba(58, 61, 66, 0.06)"}>
                                    <SectionOrdersCard setOpen={setOpen} open={open} />
                                </Grid>
                                <Grid item borderBottom={"0.0625rem solid rgba(58, 61, 66, 0.06)"}>
                                    <SectionOrdersCard setOpen={setOpen} open={open} />
                                </Grid>
                                <Grid item borderBottom={"0.0625rem solid rgba(58, 61, 66, 0.06)"}>
                                    <SectionOrdersCard setOpen={setOpen} open={open} />
                                </Grid>
                              
                          
                            </>
                        </Grid>
                        <Grid  display={"flex"} justifyContent={"center"} alignItems={"center"}mt={1}>
                            <Button sx={{height: "3.75rem", boxShadow: "rgb(58 61 66 / 6%) 0px 1px 0px, rgb(0 0 0 / 20%) 0px 4px 16px -8px", border: "0.09375rem solid rgba(0, 133, 66, 0.06)", color: "rgb(0, 184, 98)",gap:0.5, borderRadius: "50px" }}>
                                <AvTimerIcon/>
                                <Typography fontWeight={700} fontSize={"0.875rem"} lineHeight={"1.25rem"}>{"مشاهده همه سفارش‌ها"}</Typography>
                            </Button>
                        </Grid>
                </Box>
            </SwipeableDrawer>
        </>
    );
}
export default SectionOrders
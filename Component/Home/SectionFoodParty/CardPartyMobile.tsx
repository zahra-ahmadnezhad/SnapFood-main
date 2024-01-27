import { Grid, Typography } from "@mui/material";
import Divider from '@mui/material/Divider';
import AddIcon from '@mui/icons-material/Add';

import Image from "next/image";
import food from '../../../Assets/Images/food2.jpeg'
import peik from '../../../Assets/Svgs/peik.svg'


import { useState } from "react";
import ModalCartParty from "../SwipperPartySection/ModalCartParty/ModalCartParty";

export interface ModalBoxProps {
    open: boolean,
    // setOpen:(arg0: boolean)=> boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
  }
const CardPartyMobile = () => {

   
        const [open, setOpen] = useState<boolean>(false)
      
        const handleOpen = () => setOpen(!open);
    return ( 
        <Grid  boxShadow={'0 2px 12px 0 rgba(0, 0, 0, 0.1)'} minWidth={272} width={'70vw'}  p={1} sx={{cursor:'pointer'}}    onClick={handleOpen}>
            <Grid  mb={1.5} display={'flex'} gap={1.5}>
                <Grid >
                    <Image src={food} alt={'food'} style={{width:'82px',height:'82px',border:'1px solid rgb(166, 179, 199)',borderRadius:5}}  />
                </Grid>
                <Grid display={'flex'} flexDirection={'column'} gap={1}>
                    <Grid>
                        <Typography variant="subtitle2" color={"rgb(58, 61, 66)"} fontWeight={700} >{'نودل تایلندی با مرغ'}</Typography>
                    </Grid>
                    <Grid>
                    <Typography variant="subtitle1"  color={"rgb(58, 61, 66)"}>{"رستوران آسیـایی وک اند رول"}</Typography>
                    </Grid>
                    <Grid display={'flex'} height={'32px'} gap={1}>
                        <Grid width={'32px'} display={'flex'} alignItems={'center'} sx={{borderColor:'primary.main'}} border={'1px solid'} borderRadius={'5px'}>
                            <Typography color={'primary.main'}>{'45%'}</Typography>
                        </Grid>
                        <Grid>
                            <Typography variant="subtitle1"  sx={{textDecoration: 'line-through'}}  >{'330,000'}</Typography>
                           <Grid display={'flex'} alignItems={'center'}>
                            <Typography variant="subtitle2" color={"rgb(58, 61, 66)"} display={'inline-block'}>{'138000'}</Typography>
                            <Typography variant="subtitle1"  color={"rgb(58, 61, 66)"}  display={'inline-block'}>{'تومان'}</Typography>

                           </Grid>
                            
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Divider variant="middle" />
            <Grid width={'100%'} display={'flex'} justifyContent={'space-between'} mt={1.5}>
                <Grid display={'flex'}  bgcolor={'#f2f2f2'} borderRadius={1} alignItems={'center'} gap={1} p={0.3}>
                    <Grid mb={0.5}>
                        <Image src={peik} alt={'peik'} width={15} height={15}/>
                    </Grid>
                    <Grid>
                        <Typography variant="subtitle1"  color={"rgb(58, 61, 66)"}>{'12,000تومان'}</Typography>
                    </Grid>
                </Grid>
                <Grid display={'flex'} alignItems={'center'} gap={1} >
                    <Typography variant="subtitle1"  color={"rgb(58, 61, 66)"}>{'موجودی:'}</Typography>
                    <Typography  variant="subtitle2"  color={"rgb(58, 61, 66)"}>{"10"}</Typography>
                    <Grid width={25} height={25} bgcolor={'primary.main'} display={'flex'} alignItems={'center'} justifyContent={'center'} borderRadius={1.5}>
                       <AddIcon sx={{color:'common.white'}}/>
                    </Grid>
                </Grid>
            </Grid>
            <ModalCartParty setOpen={setOpen} open={open}/>
        </Grid>
     );
}
 
export default CardPartyMobile;
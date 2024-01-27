import Grid from '@mui/material/Grid'

import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CommentInformation from './CommentInformation';
import UserComments from './UserComments';
import Comments from './Comments';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box >
                    {children}
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

// const BasicTabs = () => {
//     const [value, setValue] = React.useState(0);

//     const handleChange = (event: React.SyntheticEvent, newValue: number) => {
//         setValue(newValue);
//     };

//     return (
//         <Box sx={{ width: '100%' }}>
//             <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
//                 <Tabs value={value} onChange={handleChange} sx={{ width: '100%' }}>
//                     <Tab label="نظرات " {...a11yProps(0)} sx={{width: "50%"  }} />
//                     <Tab label="اطلاعات " {...a11yProps(1)} sx={{width: "50%" }} />
//                 </Tabs>
//             </Box>
//             <TabPanel value={value} index={0}>
//             <Comments/>
//             <Comments/>
//             <Comments/>
//             <Comments/>
//             <Comments/>
//             </TabPanel>
//             <TabPanel value={value} index={1}>
//             <CommentInformation/>
//             </TabPanel>
//         </Box>
//     );
// }

// export default BasicTabs




import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
// import { Box } from '@mui/material';
// import React from 'react';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width:"100%",
  height:"100%",
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  // boxShadow: 24,
  
};

const CommentDes = ({open , setOpen}:any) => {
  const [value, setValue] = React.useState(0);

      const handleChange = (event: React.SyntheticEvent, newValue: number) => {
          setValue(newValue);
      };
  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(!open);

  return (
    <Grid>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        
        <Box sx={style}>
             <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                 <Tabs value={value} onChange={handleChange} sx={{ width: '100%' }}>
                     <Tab label="نظرات " {...a11yProps(0)} sx={{width: "50%"  }} />
                     <Tab label="اطلاعات " {...a11yProps(1)} sx={{width: "50%" }} />
                 </Tabs>
             </Box>
             <Grid
             sx={{
              height: "100%",
              maxHeight: "400px",
              overflowY: "auto",
              width: "100%",
              p:2
            }}
             >
             <TabPanel value={value} index={0}>
             <Comments/>
             <Comments/>
             <Comments/>
             <Comments/>
             <Comments/>
             </TabPanel>
             <TabPanel value={value} index={1}>
             <CommentInformation/>
             </TabPanel>
             </Grid>
             
         </Box>
        
      </Modal>
    </Grid>
  );
}

export default CommentDes
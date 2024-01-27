import {styled} from "@mui/material";
import TextField  from "@mui/material/TextField";

export const StyledTextField = styled(TextField)(({theme}) => ({
    width: '100%',
    background: 'white',
    borderRadius:8,
    // 'label.Mui-focused': {
    //     color: 'black',
    //     marginLeft: 0
    // },
    // 'MuiInputBase-colorPrimary':{
    //     borderColor:'red'
    // },
    '& .MuiOutlinedInput-root': {
        height: 50,
        '& fieldset': {
            border: '1px solid black',
            borderRadius: '8px',
        },
        '&.Mui-focused':{
            background:'#F9FAFB',
            borderRadius: '8px',
        },
    },
}))
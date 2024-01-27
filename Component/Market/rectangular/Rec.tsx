import { Grid } from "@mui/material";

const Rec=()=>{
 return(
    <Grid item xs={12} sm={6} md={3}>
       <Grid width={'100%'} height={200} bgcolor={'red'}>
        <Grid >{' غذاها'}</Grid>
        <Grid >{' پیش غذا'}</Grid>
        <Grid >{' نوشیدنی'}</Grid>
      </Grid>
    </Grid>
 )
}
export default Rec;
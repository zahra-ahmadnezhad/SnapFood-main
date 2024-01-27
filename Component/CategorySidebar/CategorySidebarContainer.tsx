import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import CategorySidebarItem from "./CategorySidebarItem";
import { CategorySidebarData } from "../../Data/CategorySection/CategorySidebar.data";


const CategorySidebarContainer = () => {

    return(
        <Grid sx={{
            maxWidth:'25%',
            p:'1rem',
            borderRadius:'0.75rem',
            bgcolor:'white'
        }} >

            <Grid display={'flex'} alignItems={'center'} sx={{
                width:'90%',
                height:'3rem',
                bgcolor:'rgba(58, 61, 66, 0.06)',
                borderRadius:'0.75rem',
                pr:'1rem'
            }} >
                <Typography variant="subtitle2">همه دسته‌بندی‌ها</Typography>
            </Grid>
            <Grid>
                {CategorySidebarData.map((item:any,index:any) => (<CategorySidebarItem key={index}{...item}/>))}
            </Grid>

            

        </Grid>
    )

}

export default CategorySidebarContainer;
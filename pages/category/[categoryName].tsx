// import { PanoramaSharp } from "@mui/icons-material";
import { Grid } from "@mui/material";
import { GetStaticPropsContext } from "next";
import { getMarkets } from "../../API/getMarkets";
// import CategorySidebarContainer from "../../Component/CategorySidebar/CategorySidebarContainer";
import SortingDropDown from "../../Component/SortingDropDown/SortingDropDown";
import DesktopVendor from "../../Component/VendorCard/DesktopVendorCard";
// import VendorCard from "../../Component/VendorCard/VendorCard";
import { categoryData } from "../../Data/Main/categoryData";
interface CategoryNameProps {
    markets:[]
}


const CategoryName = ({markets}:CategoryNameProps) => {
    // console.log(markets)
    return(
    
        <Grid>
            <SortingDropDown/>
            <Grid marginY={2} p={4}>
                {markets.map((market:{},index)=>
                    <DesktopVendor key={index} {...market}/>
                )}
            </Grid>
            {/*<CategorySidebarContainer/>*/}
        </Grid>
    )

}

export async function getStaticProps(context:GetStaticPropsContext) {

    const markets = await getMarkets(context.params?.categoryName)  

    return {
      props: {
        markets,
      },
    }
  }
  

  export async function getStaticPaths() {
    return {
      paths: categoryData.map(item => ({params:{categoryName:item}})) ,
      fallback: 'blocking',
    }
  }
  
export default CategoryName;


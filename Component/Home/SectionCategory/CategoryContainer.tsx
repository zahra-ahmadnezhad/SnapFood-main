import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CategoryCard from "./CategoryCard";
import { categorydata } from "../../../Data/CategorySection/CategorySection.data";

const CategoryContainer = () => {
  return (
    <Grid container xs={11} my={6}>
      <Grid p={3} mr={{ md: 1 }}>
        <Typography variant="subtitle2" sx={{ color: "rgb(83, 86, 92)" }}>
          دسته‌ بندی‌ ها
        </Typography>
      </Grid>
      <Grid
        display={"flex"}
        height={{ md: 200 }}
        xs={12}
        sx={{
          flexWrap: { xs: "nowrap", sm: "wrap" },
          overflow: { xs: "scroll", sm: "hidden" },
          mr: { md: 4 },
        }}
        gap={{xs:2,sm:4}}
      >
        {categorydata.map((item:any,index:any) => (
          <CategoryCard key={index} {...item} />
        ))}
      </Grid>
    </Grid>
  );
};

export default CategoryContainer;

import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import { CategoryTypes } from "../../../Data/CategorySection/CategorySection.data";

const CategoryCard = ({ pic, title }: CategoryTypes) => {
  return (
    <Grid
      item
      xs={4}
      sm={3.5}
      md={1.7}
      alignItems={"center"}
      flexShrink={0}
      p={1}
      height={"fit-content"}
      borderRadius={'0.75rem'}
      boxShadow={{xs:'none',sm:1}}
      sx={{cursor:'pointer'}}
    >
      <Grid display={"flex"} flexShrink={0}  sx={{ position: "relative" }} height={{xs:120, sm: 100 }}>
        <Image 
          style={{
            height: "100%",
            width: "100%",
            borderRadius:'0.75rem',
            objectFit: "cover",
            
          }}
          src={pic}
          alt=""
        />
        <Grid
          container
          sx={{ position: "absolute", display: { xs: "none", sm: "flex" } }}
          bottom={0}
          right={0}
        >
          <Grid
            display={"flex"}
            alignItems={"center"}
            bgcolor={"white"}
            p={"3px"}
            borderRadius={"4px 0 4px 0"}
            sx={{ cursor: "pointer"}}
          >
            <Typography variant="subtitle2" mr={1} sx={{ fontWeight: 400,'&:hover':{pl:1} }}>
              {title}
            </Typography>
            <ArrowBackIosRoundedIcon
              sx={{ fontSize: 15, mr: 2, color: "primary.main" }}
            />
          </Grid>
        </Grid>
        <Grid
          display={{ xs: "flex", sm: "none" }}
          alignItems={'center'}
          justifyContent={'center'}
          position={"absolute"}
          right={'25%'}
          top={'30%'}

        >
          <Typography variant="subtitle2" sx={{ color: "white" }}>
            {title}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CategoryCard;

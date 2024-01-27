import Grid from "@mui/material/Grid";
import NavbarSection from "../Component/Home/NavbarSection/NavbarSection";
import RegistrationSeller from "../Component/Home/RegistrationSeller";
import SectionApp from "../Component/Home/SectionApp";
import CardResturantContainer from "../Component/Home/SectionCardResturantSwiper/CardResturantDesktop";
import SectionCardResturant from "../Component/Home/SectionCardResturantSwiper/SectionCardResturant";
import CategoryContainer from "../Component/Home/SectionCategory/CategoryContainer";
import SectionCities from "../Component/Home/SectionCities";
import SectionFoodParty from "../Component/Home/SectionFoodParty/SectionFoodParty";
import SectionPopular from "../Component/Market/SectionPopular/SectionPopular";

export default function Home() {
  return (
    <>
      <NavbarSection />
      <Grid
        container
        xs={12}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <CategoryContainer /> 
        <SectionFoodParty/>
        <SectionCardResturant/>
        <SectionApp />
        <RegistrationSeller />
        <SectionCities />
      </Grid>
    </>
  );
}

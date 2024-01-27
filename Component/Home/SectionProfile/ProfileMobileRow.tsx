import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import { ProfileMobileTypes } from "../../../Data/ProfileMobile/ProfileMobile.data";
import Divider from "@mui/material/Divider";

const ProfileMobileRow = ({ icon, title }: ProfileMobileTypes) => {
  return (
    <>
      <Grid
        p={2}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        sx={{ cursor: "pointer" }}
      >
        <Grid display={"flex"} alignItems={"center"}>
          <Image src={icon} alt="" />
          <Typography mr={"8px"} variant={"subtitle2"} fontWeight={300}>
            {title}
          </Typography>
        </Grid>
        <Grid>
          <ArrowBackIosOutlinedIcon
            fontSize="small"
            sx={{ color: "rgb(58,61,66)" }}
          />
        </Grid>
      </Grid>
      <Divider />
    </>
  );
};

export default ProfileMobileRow;

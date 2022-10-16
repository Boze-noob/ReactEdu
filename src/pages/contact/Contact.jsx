import PageTitle from "../../components/ui/header/PageTitle.jsx";
import NavBar from "../../components/ui/navBar/NavBar.jsx";
import { Box, Typography, Button } from "@mui/material";

export default function Contact() {
  return (
    <>
      <NavBar primaryColor={"black"} secondaryColor={"black"} />
      <PageTitle title={"CONTACT"} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Image />
        <Typography
          sx={{ mt: { xs: "15%", sm: "5%" } }}
          variant="h3"
          whiteSpace={"pre-wrap"}
        >
          {"BOOKINGS & \n PARTNERSHIPS"}
        </Typography>
        <Typography sx={{ mt: { xs: "5%", sm: "2%" } }}>
          {
            "For booking inquiries & partnerships, please contact Jennifer Powell or Meghan Durtschi:"
          }
        </Typography>
        <Box display={"flex"} flexDirection={"row"}>
          <TextButton text={"mine@gmail.com"} />
          <TextButton text={"his@gmail.com"} />
        </Box>
      </Box>
    </>
  );
}

function Image() {
  return (
    <Box
      component="img"
      src={
        "https://sincerelyjules.com/wp-content/themes/sincerely/assets/img/pages/sj_contact_image_01.png"
      }
      sx={{
        objectFit: "fill",
        mt: { xs: "13%", sm: "6%" },
        width: { xs: "80%", sm: "50%" },
      }}
    />
  );
}

function TextButton({ text }) {
  return (
    <Button variant="text" sx={{ textTransform: "none" }}>
      <Typography sx={{ fontWeight: "bold", fontFamily: "Work Sans" }}>
        {text}
      </Typography>
    </Button>
  );
}

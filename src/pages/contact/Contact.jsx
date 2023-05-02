import PageTitle from "../../components/ui/header/PageTitle.jsx";
import { Box, Typography, Button } from "@mui/material";
import { MultiLineInput } from "../../components/ui/forms/MultiLineInput.jsx";
import CustomButton from "../../components/ui/buttons/CustomButton";
import { useState } from "react";
import { isEmail } from "../../utils/utils.js";
import { toast } from "react-hot-toast";

export default function Contact() {
  //TODO use some package like FORMIK to do all those validations and etc.
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [isEmailError, setIsEmailError] = useState(false);

  const sendMessage = () => {
    if (!isEmail(email)) {
      setIsEmailError(true);
    } else {
      setIsEmailError(false);
      toast.success("Your message is successfully sent!");
      setEmail("");
      setName("");
      setComment("");
    }
  };

  return (
    <>
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
          sx={{
            mt: { xs: "10%", sm: "5%" },
            typography: { xs: "h4", sm: "h3" },
          }}
          whiteSpace={"pre-wrap"}
        >
          {"BOOKINGS & \n PARTNERSHIPS"}
        </Typography>
        <Typography
          sx={{
            mt: { xs: "5%", sm: "2%" },
            pl: 10,
            pl: 10,
            textAlign: "center",
          }}
        >
          {
            "For booking inquiries & partnerships, please contact Jennifer Owen or Meghan Rossi:"
          }
        </Typography>
        <Box display={"flex"} flexDirection={"row"}>
          <TextButton text={"jennifer@gmail.com"} />
          <TextButton text={"meghan@gmail.com"} />
        </Box>
        <Typography
          fontFamily={"Oooh Baby"}
          sx={{ fontSize: { xs: 25, sm: 40 }, mt: "5%" }}
        >
          Say hi to me on this form !
        </Typography>
        <MultiLineInput
          initVal={name}
          label={"Name"}
          rows={1}
          marginTop={30}
          width={{ xs: "70%", sm: "40%" }}
          onValueChange={(value) => {
            setName(value);
          }}
          isError={false}
        />
        <MultiLineInput
          initVal={email}
          label={"Email"}
          rows={1}
          marginTop={15}
          width={{ xs: "70%", sm: "40%" }}
          isError={isEmailError}
          onValueChange={(value) => {
            setEmail(value);
          }}
          helperText={isEmailError ? "Invalid email address!" : null}
        />
        <MultiLineInput
          initVal={comment}
          label={"Comment"}
          rows={6}
          marginTop={15}
          width={{ xs: "70%", sm: "40%" }}
          onValueChange={(value) => {
            setComment(value);
          }}
          isError={false}
        />
        <CustomButton
          txt={"SEND MESSAGE"}
          margin={30}
          onClick={() => sendMessage()}
        />
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

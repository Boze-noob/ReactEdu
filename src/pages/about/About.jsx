import NavBar from "../../components/ui/navBar/NavBar";
import PageTitle from "../../components/ui/header/PageTitle";
import Intro from "../about/components/Intro";
import { Box } from "@mui/system";

export default function About() {
  return (
    <>
      <NavBar primaryColor={"black"} secondaryColor={"black"} />
      <PageTitle title={"CONTACT"} />

      <Intro />
    </>
  );
}

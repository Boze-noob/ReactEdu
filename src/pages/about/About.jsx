import NavBar from "../../components/ui/navBar/NavBar";
import PageTitle from "../../components/ui/header/PageTitle";
import Intro from "../about/components/Intro";
import Content from "../about/components/Content";
import Testimonials from "./components/Testimonials";

export default function About() {
  return (
    <>
      <PageTitle title={"CONTACT"} />
      <Intro />
      <Content />
      <Testimonials />
    </>
  );
}

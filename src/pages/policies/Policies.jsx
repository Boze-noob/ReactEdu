import PageTitle from "../../components/ui/header/PageTitle.jsx";
import NavBar from "../../components/ui/navBar/NavBar.jsx";
import {
  description,
  posts,
  affiliateLinks,
  gifting,
  bookings,
  blogFAQ,
} from "../../components/data/PoliciesData.js";
import PolicieItem from "./components/PolicieItem";

export default function Policies() {
  return (
    <>
      <NavBar primaryColor={"black"} secondaryColor={"black"} />
      <PageTitle title={"Policies"} />
      <PolicieItem title={""} paragraphs={description} />
      <PolicieItem title={"POSTS and COLLABS"} paragraphs={posts} />
      <PolicieItem title={"AFFILIATE LINKS"} paragraphs={affiliateLinks} />
      <PolicieItem title={"GIFTING + SPONSORED"} paragraphs={gifting} />
      <PolicieItem title={"BOOKINGS AND PARTNERSHIPS"} paragraphs={bookings} />
      <PolicieItem title={"BLOG FAQ & INQUIRIES"} paragraphs={blogFAQ} />
    </>
  );
}

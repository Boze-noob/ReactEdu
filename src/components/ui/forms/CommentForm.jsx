import { Divider, Box, Typography, TextField } from "@mui/material";
import React from "react";
import SouthIcon from "@mui/icons-material/South";
import { MultiLineInput } from "./MultiLineInput";
import CustomButton from "../buttons/CustomButton";

export default function CommentForm() {
  return (
    <>
      <Divider />
      <Box display="flex" flexDirection={"row"}>
        <Typography>10 Comments</Typography>
        <SouthIcon />
        <Typography>Show all</Typography>
      </Box>
      <Divider />
      <Typography>Leave a comment</Typography>
      <Typography>Your email address will not be published</Typography>
      <MultiLineInput />
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <TextField label={"Name"} defaultValue={""} size={"small"} />
        <TextField label={"Email"} defaultValue={""} size={"small"} />
      </Box>
      <CustomButton text="SEND MESSAGE" />
    </>
  );
}

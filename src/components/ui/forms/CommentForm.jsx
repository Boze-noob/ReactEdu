import { Box, Typography, TextField } from "@mui/material";
import React from "react";
import SouthIcon from "@mui/icons-material/South";
import { MultiLineInput } from "./MultiLineInput";
import CustomButton from "../buttons/CustomButton";
import { DividerLightGrey } from "../dividers/DividerLightGrey";

export default function CommentForm({ marginTop }) {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: marginTop,
      }}
    >
      <DividerLightGrey />
      <Box sx={{ display: "flex", flexDirection: "row", my: "2%" }}>
        <Typography
          sx={{
            fontWeight: 600,
            fontFamily: "Work Sans",
            fontSize: { xs: 10, sm: 13 },
          }}
        >
          10 COMMENTS
        </Typography>
        <SouthIcon fontSize="small" sx={{ mx: 10 }} />
        <Typography
          sx={{
            fontWeight: 600,
            fontFamily: "Work Sans",
            fontSize: { xs: 10, sm: 13 },
          }}
        >
          SHOW ALL
        </Typography>
      </Box>
      <DividerLightGrey />
      <Typography
        sx={{
          fontFamily: "Work Sans",
          fontWeight: 600,
          fontSize: { xs: 9, sm: 13 },
          mt: "3%",
        }}
      >
        LEAVE A COMMENT
      </Typography>
      <Typography sx={{ fontSize: { xs: 9, sm: 13 }, mt: "1.5%" }}>
        Your email address will not be published.
      </Typography>
      <MultiLineInput
        label={"Your Comment"}
        width={"60%"}
        rows={10}
        marginTop={"3%"}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "60%",
          mt: "1%",
        }}
      >
        <TextField fullWidth label={"Name"} defaultValue={""} size={"small"} />
        <Box width={"3%"} />
        <TextField fullWidth label={"Email"} defaultValue={""} size={"small"} />
      </Box>
      <CustomButton txt="SEND MESSAGE" margin={"2%"} />
    </Box>
  );
}

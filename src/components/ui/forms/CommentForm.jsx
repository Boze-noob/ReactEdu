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
            fontSize: 13,
          }}
        >
          10 COMMENTS
        </Typography>
        <SouthIcon fontSize="small" sx={{ mx: 10 }} />
        <Typography
          sx={{
            fontWeight: 600,
            fontFamily: "Work Sans",
            fontSize: 13,
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
          fontSize: 13,
          mt: { xs: "6%", sm: "3%" },
        }}
      >
        LEAVE A COMMENT
      </Typography>
      <Typography sx={{ fontSize: 13, mt: { xs: "3%", sm: "1.5%" } }}>
        Your email address will not be published.
      </Typography>
      <MultiLineInput
        label={"Your Comment"}
        width={{ xs: "80%", sm: "60%" }}
        rows={10}
        marginTop={{ xs: "6%", sm: "3%" }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          width: { xs: "80%", sm: "60%" },
          mt: { xs: "4%", sm: "1%" },
        }}
      >
        <TextField fullWidth label={"Name"} defaultValue={""} size={"small"} />
        <Box width={"3%"} />
        <TextField
          fullWidth
          label={"Email"}
          defaultValue={""}
          size={"small"}
          sx={{ mt: { xs: "3%", sm: "0%" } }}
        />
      </Box>
      <CustomButton txt="SEND MESSAGE" margin={"2%"} />
    </Box>
  );
}

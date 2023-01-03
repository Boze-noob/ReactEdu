import { Box, Typography, TextField } from "@mui/material";
import React from "react";
import SouthIcon from "@mui/icons-material/South";
import { MultiLineInput } from "./MultiLineInput";
import CustomButton from "../buttons/CustomButton";
import { DividerLightGrey } from "../dividers/DividerLightGrey";
import { useState } from "react";
import { timestampToDate } from "../../../utils/utils";
import { fakeComments } from "../../../fakeData/comments";
import { CommentModel } from "../../../domain/models/CommentModel";

export default function CommentForm({ marginTop }) {
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState(fakeComments);

  const [comment, setComment] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [webSite, setWebSite] = useState("");

  const submitComment = () => {
    console.log(Date.now());
    setComments((oldArray) => [
      ...oldArray,
      new CommentModel(2, name, comment, Date.now(), email, webSite),
    ]);
  };

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
      <Box
        sx={{ display: "flex", flexDirection: "row", my: "2%" }}
        onClick={() => {
          setShowComments(!showComments);
        }}
      >
        <Typography
          sx={{
            fontWeight: 600,
            fontFamily: "Work Sans",
            fontSize: 13,
          }}
        >
          {comments.length + " COMMENTS"}
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
      {showComments && (
        <>
          {comments.map((comment) => {
            return <Comment commentModel={comment} />;
          })}
        </>
      )}

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
      <Box
        sx={{
          width: { xs: "80%", sm: "60%" },
        }}
      >
        <MultiLineInput
          width={1}
          label={"Your Comment"}
          rows={10}
          marginTop={{ xs: "6%", sm: "3%" }}
          onValueChange={(value) => {
            setComment(value);
          }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            mt: { xs: "4%", sm: "2%" },
          }}
        >
          <TextField
            fullWidth
            label={"Name"}
            defaultValue={""}
            size={"small"}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <Box width={"3%"} />
          <TextField
            fullWidth
            label={"Email"}
            defaultValue={""}
            size={"small"}
            sx={{ mt: { xs: "3%", sm: "0%" } }}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </Box>
        <TextField
          fullWidth
          label={"Website"}
          defaultValue={""}
          size={"small"}
          sx={{ mt: { xs: "4%", sm: "2%" } }}
          onChange={(event) => {
            setWebSite(event.target.value);
          }}
        />
      </Box>

      <CustomButton
        txt="SEND MESSAGE"
        margin={"2%"}
        onClick={() => submitComment()}
      />
    </Box>
  );
}

const Comment = ({ commentModel }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: 1 / 2,
        mt: "2%",
        borderTop: 1,
        borderBottom: 1,
        borderColor: "grey.200",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "row", p: 5 }}>
        <Typography
          sx={{ fontSize: 13, fontWeight: "bold", fontFamily: "work sans" }}
        >
          {commentModel.name}
        </Typography>
        <Typography sx={{ fontSize: 13, pl: 5 }}>{" says:"} </Typography>
      </Box>
      <Typography
        sx={{
          fontSize: 13,
          p: 5,
          fontWeight: "light",
          lineHeight: 2,
          fontFamily: "work sans",
        }}
      >
        {commentModel.comment}
      </Typography>
      <Typography
        sx={{
          fontSize: 10,
          color: "gray",
          fontWeight: "light",
          fontFamily: "work sans",
          p: 5,
        }}
      >
        {timestampToDate(commentModel.timestamp)}
      </Typography>
    </Box>
  );
};

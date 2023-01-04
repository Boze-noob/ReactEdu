import { Box, Typography, TextField } from "@mui/material";
import React from "react";
import SouthIcon from "@mui/icons-material/South";
import { MultiLineInput } from "./MultiLineInput";
import CustomButton from "../buttons/CustomButton";
import { DividerLightGrey } from "../dividers/DividerLightGrey";
import { useState } from "react";
import { isEmail, timestampToDate } from "../../../utils/utils";
import { fakeComments } from "../../../fakeData/comments";
import { CommentModel } from "../../../domain/models/CommentModel";

export default function CommentForm({ marginTop }) {
  //TODO refactor validation(use form)

  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState(fakeComments);

  const [comment, setComment] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setwebsite] = useState("");

  const [isNameErr, setIsNameErr] = useState(false);
  const [isEmailErr, setIsEmailErr] = useState(false);
  const [iswebsiteErr, setIswebsiteErr] = useState(false);
  const [isCommentErr, setIsCommentErr] = useState(false);

  const submitComment = () => {
    if (name.length === 0) setIsNameErr(true);
    else setIsNameErr(false);
    if (email.length === 0 || isEmail(email) === false) setIsEmailErr(true);
    else setIsEmailErr(false);
    if (website.length === 0) setIswebsiteErr(true);
    else setIswebsiteErr(false);
    if (comment.length === 0) setIsCommentErr(true);
    else setIsCommentErr(false);

    if (!isNameErr && !isEmailErr && !iswebsiteErr && !isCommentErr) {
      if (isEmailErr) setIsEmailErr(false);
      if (isNameErr) setIsNameErr(false);
      if (iswebsiteErr) setIswebsiteErr(false);
      if (isCommentErr) setIsCommentErr(false);

      setComment("");
      setName("");
      setEmail("");
      setwebsite("");

      setComments((oldArray) => [
        ...oldArray,
        new CommentModel(2, name, comment, Date.now(), email, website),
      ]);
    }
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
          initVal={comment}
          isError={isCommentErr}
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
            error={isNameErr}
            fullWidth
            label={"Name"}
            defaultValue={""}
            size={"small"}
            onChange={(event) => {
              setName(event.target.value);
            }}
            value={name}
            helperText={isNameErr ? "This field is required!" : null}
          />
          <Box width={"3%"} />
          <TextField
            error={isEmailErr}
            fullWidth
            label={"Email"}
            defaultValue={""}
            size={"small"}
            sx={{ mt: { xs: "3%", sm: "0%" } }}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            value={email}
            helperText={
              isEmailErr
                ? isEmail(email) == false
                  ? "Incorrect email"
                  : "This field is required!"
                : null
            }
          />
        </Box>
        <TextField
          error={iswebsiteErr}
          fullWidth
          label={"website"}
          defaultValue={""}
          size={"small"}
          sx={{ mt: { xs: "4%", sm: "2%" } }}
          onChange={(event) => {
            setwebsite(event.target.value);
          }}
          value={website}
          helperText={iswebsiteErr ? "This field is required!" : null}
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

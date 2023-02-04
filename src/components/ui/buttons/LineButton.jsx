import { Typography, Divider, Box, Link } from "@mui/material";

export default function LineButton({ btnTxt, width, url, onClick }) {
  return (
    <Link
      underline="none"
      href={url}
      onClick={() => {
        onClick();
      }}
    >
      <Box
        alignItems="center"
        sx={{
          display: "flex",
          flexDirection: "row",
          "&:hover": {
            cursor: "pointer",
            "& .divider": {
              bgcolor: "black",
            },
            "& .typography": {
              color: "black",
            },
          },
          transition: "0.7s",
        }}
      >
        <Divider
          className="divider"
          sx={{
            height: 2,
            width: width,
            bgcolor: "white",
            transition: "0.7s",
          }}
        ></Divider>
        <Typography
          className="typography"
          color={"white"}
          sx={{
            pl: 15,
            fontSize: { xs: 8, sm: 16 },
            transition: "0.7s",
          }}
          style={{
            fontFamily: "Work Sans",
            fontWeight: "bold",
          }}
        >
          {btnTxt.toUpperCase()}
        </Typography>
      </Box>
    </Link>
  );
}

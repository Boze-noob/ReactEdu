import { Button, Typography } from "@mui/material";

export default function CustomButton({ onClick, margin, txt }) {
  return (
    <Button
      variant="contained"
      onClick={onClick}
      sx={{
        m: { margin },
        borderRadius: 0,
        "&:hover": {
          cursor: "pointer",
          bgcolor: "#404040",
        },
        transition: "0.7s",
      }}
    >
      <Typography
        style={{ padding: 3, fontFamily: "Work Sans", fontWeight: "500" }}
      >
        {txt}
      </Typography>
    </Button>
  );
}

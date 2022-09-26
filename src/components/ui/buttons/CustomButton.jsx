import { Button } from "@mui/material";

export default function CustomButton({ onClick, margin, txt }) {
  return (
    <Button variant="contained" onClick={onClick} sx={{ m: { margin } }}>
      {txt}
    </Button>
  );
}

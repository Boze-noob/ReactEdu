import { Button } from "@mui/material";

export default function CustomButton({ onClick, margin }) {
  return (
    <Button variant="contained" onClick={onClick} sx={{ m: { margin } }}>
      Contained
    </Button>
  );
}

import { ExpandLess } from "@mui/icons-material";
import { Box } from "@mui/system";

export const ScrollBtn = ({ onClick }) => {
  return (
    <Box
      sx={{
        width: 35,
        height: 35,
        position: "fixed",
        bottom: "25px",
        right: "25px",
        backgroundColor: "white",
        borderRadius: "50%",
        zIndex: 1,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        "&:hover": {
          cursor: "pointer",
          boxShadow: 15,
        },
        transition: "0.7s",
      }}
    >
      <ExpandLess
        sx={{
          width: "100",
          height: "100%",
        }}
        onClick={() => {
          onClick();
        }}
      />
    </Box>
  );
};

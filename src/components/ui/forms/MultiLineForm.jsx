import { TextField } from "@mui/material";

export function MultiLineForm({
  rows,
  label,
  defaultValue,
  marginTop,
  size,
  width,
}) {
  return (
    <TextField
      label={label ?? "Label"}
      multiline
      rows={rows ?? 4}
      defaultValue={defaultValue ?? ""}
      sx={{ mt: marginTop ?? 10, width: width ?? "40%" }}
      size={size ?? "small"}
    />
  );
}

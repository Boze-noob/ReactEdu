import { TextField } from "@mui/material";

export function MultiLineInput({
  rows,
  label,
  defaultValue,
  marginTop,
  size,
  width,
  initVal,
  onValueChange,
  isError = false,
  helperText,
}) {
  return (
    <TextField
      error={isError}
      label={label ?? "Label"}
      multiline
      rows={rows ?? 4}
      defaultValue={defaultValue ?? ""}
      sx={{
        mt: marginTop ?? 10,
        width: width ?? "40%",
      }}
      size={size ?? "small"}
      onChange={(event) => {
        onValueChange(event.target.value);
      }}
      value={initVal}
      helperText={helperText ?? null}
    />
  );
}

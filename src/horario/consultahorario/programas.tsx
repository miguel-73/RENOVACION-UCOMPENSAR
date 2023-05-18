import * as React from "react";
import { Theme, useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Box, Typography } from "@mui/material";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 520,
    },
  },
};

const names = [
  "tecnica profesional en operacion y mantenimiento de bases de datos",
  "Virginia Andrews",
  "Kelly Snyder",
];

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function SelectorDePrograma() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <Box sx={{ border: 3, width: "100%", margin: 0, height: "auto" }}>
      <Typography
        variant="button"
        display="block"
        gutterBottom
        style={{ fontWeight: "bold" }}
      >
        programas
      </Typography>
      <div>
        <FormControl sx={{ m: 0, width: "100%", mt: 0 }}>
          <Select
            multiple
            displayEmpty
            value={personName}
            onChange={handleChange}
            input={<OutlinedInput />}
            renderValue={(selected) => {
              if (selected.length === 0) {
                return;
              }

              return selected.join(", ");
            }}
            MenuProps={MenuProps}
            inputProps={{ "aria-label": "Without label" }}
          >
            {names.map((name) => (
              <MenuItem
                key={name}
                value={name}
                style={getStyles(name, personName, theme)}
              >
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </Box>
  );
}

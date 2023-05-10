import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import * as React from 'react';
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const names = [
  'Miguel angel',
  'German Andres',
  'jhon fredy',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];
export default function Entrada() {
  const [personName, setPersonName] = React.useState<string[]>([]);
  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  return (
    <>
      <FormControl
      // style={{
      //   left: '79%',
      //   top: '-77px',
      // }}
      >
        <InputLabel
          style={{
            // flexGrow: 1,
            // left: '79%',
            top: '-7px',

          }}
          id="demo-multiple-name-label">Seleccione</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
          style={{ width: 200, height: 39, }} // establece el ancho del componente Select
          required
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
            // style={{ width: '100%' }} // establece el ancho del elemento MenuItem al 100%
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
}


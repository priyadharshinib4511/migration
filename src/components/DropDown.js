import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function Dropdown({ id, label, menus, formik }) {
    console.log("dropdown", label)
    const [option, setOption] = React.useState(menus[0]);

    const handleChange = (event) => {
        setOption(event.target.value);
        formik.handleChange()
    };

    return (
        <FormControl fullWidth>
            <InputLabel id={id}>{label}</InputLabel>
            <Select
                labelId={id}
                id={id}
                name={id}
                value={option}
                label={label}
                onChange={handleChange}
            >
                {
                    menus.map((menu) => {
                        return (<MenuItem value={menu}>{menu}</MenuItem>)
                    })
                }
            </Select>
        </FormControl>
    )
}
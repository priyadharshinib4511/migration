import { TextField } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { getValue } from '@testing-library/user-event/dist/utils';

export default function TextInput({ id, label, formik, value }) {

    return (
        <TextField id={id}
            name={id}
            label={label}
            onChange={formik.handleChange} 
            defaultValue=''
            
            fullWidth/>
    )
}
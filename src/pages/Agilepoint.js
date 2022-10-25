import React from 'react';
import ReactDOM from 'react-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button, Box } from '@mui/material';
import { AgilepointMigration } from '../constants/AgilepointMigration';
import Dropdown from '../components/DropDown';
import TextInput from '../components/TextField';
import { getValue } from '@mui/system';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

export default function Agilepoint() {

  const formik = useFormik({
    initialValues: {
      projectName: '',
      businessOwner: '',
      technicalOwner: '',
      supportContact: '',
      appName: '',
      internalAppName: '',
      permissions: '',
      sharedVariable: '',
      globalAccessToken: '',
      dataEntities: '',
      pickList: ''
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
    enableReinitialize: false
  });

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Paper elevation={3} >
              <ol>
                <li>Click Manage.</li>
                <li>In the Manage Center, click Runtime Management > Processes.</li>
                <li>On the Processes screen, click Expand. to expand a process.</li>
                <li>On the process detail screen, click Migrate.</li>
                <li>On the Migrate Process Model To A Different Version screen, click Ok.</li>
              </ol>
            

              </Paper>

          </Grid>
          <Grid item xs={6}>
            <form onSubmit={formik.handleSubmit}>
              <Box sx={{ flexDirection: 'column' }}>
                {AgilepointMigration.map((item) => {
                  if (item.type === 'text')
                    return <div className='field'><TextInput id={item.name} label={item.label} formik={formik} /></div>
                  return <div className='field'><Dropdown id={item.name} label={item.label} menus={item.menu} formik={formik} /></div>
                })}

              </Box>



              <Button color="primary" variant="contained" fullWidth type="submit">
                Submit
              </Button>
            </form>
          </Grid>
        </Grid>
      </Box>

    </div>
  );
};
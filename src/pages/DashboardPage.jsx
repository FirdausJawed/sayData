import { Grid,Typography } from '@mui/material';
import React from 'react';
import SummaryGrid from '../components/common/SummaryGrid';
import SearchAppBar from '../components/common/searchbar';
import Button from '@mui/material/Button';
const DashboardPage = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <SearchAppBar />
      </Grid>
      <Grid item xs={12} lg={8}>
        <Typography variant="h4" fontWeight="bold">
          Hello, Shakirat
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          upload your file here
         </Typography>
      <Button variant="contained">Transcribe</Button>
     </Grid>
      <Grid item xs={12}>
        <SummaryGrid />
      </Grid>
    </Grid>
  );
};

export default DashboardPage;
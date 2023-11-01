import React from 'react';
import { Box, Grid, Stack, Typography, colors } from '@mui/material';
import Animate from "./Animate";
import MPaper from './MPaper';
import FolderIcon from '@mui/icons-material/Folder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import TitleIcon from '@mui/icons-material/Title';
const summaryData = [
      {
            title: "Uploaded files",
            value: "100",
            icon: <FolderIcon/>
      },
      {
            title: "Transcribed",
            value: "50",
            icon: <BookmarkIcon/>
      },
      {
            title: "Saved",
            value: "20",
            icon: <TitleIcon/>
      }
];

const SummaryGrid = () => {
      return (
            <Grid container spacing={3}>
                  {summaryData.map((summary, index) => (
                        <Grid key={index} item xs={12} lg={4}>
                              <Animate type="fade" delay={(index + 1) / 3}>
                                    <MPaper >
                                          <Stack direction="row" alignItems="center" justifyContent="space-between">
                                                <Stack spacing={1}>
                                                      <Typography variant="h4" fontWeight="bold">
                                                            {summary.value}
                                                      </Typography>
                                                      <Typography variant="body2" fontWeight="bold" color={colors.grey[600]}>
                                                            {summary.title}
                                                      </Typography>
                                                </Stack>
                                                <Box sx={{
                                                      height: "100px",
                                                      width: "100px",
                                                      "& img": { width: "100%" }
                                                }}>
                                                <Typography variant="body2" fontWeight="bold" color={colors.grey[600]}>
                                                      {summary.icon}
                                                </Typography>
                                                </Box>
                                          </Stack>
                                    </MPaper>
                              </Animate>
                        </Grid>
                  ))}
            </Grid>
      );
};
export default SummaryGrid;
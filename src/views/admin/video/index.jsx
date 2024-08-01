/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___   
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _| 
 | |_| | | | | |_) || |  / / | | |  \| | | | | || | 
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___|
                                                                                                                                                                                                                                                                                                                                       
=========================================================
* Horizon UI - v1.1.0
=========================================================

* Product Page: https://www.horizon-ui.com/
* Copyright 2023 Horizon UI (https://www.horizon-ui.com/)

* Designed and Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// Chakra imports
import { Box, Grid } from "@chakra-ui/react";

// Custom components
import Information from "views/admin/profile/components/Information";

// Assets
import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Overview() {

  const { videoId } = useParams();
  const [videoData, setVideoData] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:3001/videos/${videoId}`)
      .then(response => {
        setVideoData(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the video data!', error);
      });
  }, [videoId]);


  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      {/* Main Fields */}
      <Grid
        mb='20px'
        templateColumns={{
          base: "1fr",
          md: "1fr",
          lg: "repeat(2, 1fr)",
        }}
        templateRows={{
          base: "repeat(3, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(2, 1fr)",
        }}
        gap={{ base: "20px", xl: "20px" }}
      >
        <Information
          gridArea={{
            base: "4 / 1 / 5 / 2",
            md: "4 / 1 / 5 / 2",
            lg: "2 / 2 / 3 / 3",
          }}
          title='Timestamped Summaries'
          value={videoData.summaries}
        />

        <Information
          gridArea={{
            base: "3 / 1 / 4 / 2",
            md: "3 / 1 / 4 / 2",
            lg: "2 / 1 / 3 / 2",
          }}
          title='Key insights'
          value={videoData.mainpoints}
        />
      </Grid>
    </Box>
  );
}
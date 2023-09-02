import React from "react";
import { Box, useMediaQuery } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import Navbar from "scenes/navbar";
import FindFriendWidget from "scenes/widgets/FindFriendWidget";

const FindFriends = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");

  console.log("Find Friends Page");
  return (
    <Box>
      <Navbar />
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="2rem"
        justifyContent="center"
      >
      <Box
      flexBasis={isNonMobileScreens ? "42%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
      >
      
      <FindFriendWidget/>
      </Box>
      </Box>
      </Box>
      );
    };
    
    export default FindFriends;
    // <UsersList/>
    
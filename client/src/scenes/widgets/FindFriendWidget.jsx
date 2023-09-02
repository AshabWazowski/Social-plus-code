import {
  EditOutlined,
  DeleteOutlined,
  AttachFileOutlined,
  GifBoxOutlined,
  ImageOutlined,
  MicOutlined,
  MoreHorizOutlined,
} from "@mui/icons-material";
import {
  Box,
  Divider,
  Typography,
  InputBase,
  useTheme,
  Button,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import FlexBetween from "components/FlexBetween";
import Dropzone from "react-dropzone";
import UserImage from "components/UserImage";
import WidgetWrapper from "components/WidgetWrapper";
import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAllUsers } from "state";
import Friend from "components/Friend";





const FindFriendWidget = () => {

  const dispatch = useDispatch();
  const [post, setPost] = useState("");
  const { palette } = useTheme();
  const token = useSelector((state) => state.token);
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const mediumMain = palette.neutral.mediumMain;
  const medium = palette.neutral.medium;
  const {picturePath} = useSelector((state)=> state.user)
  const friends = useSelector((state) => state.user.friends);
  const allUsers = useSelector((state)=> state.allUsers)

  

  const getAllUsers = async ()=>{
    
      const response =  await fetch(`https://social-plus-master.onrender.com/users/findfriends`, {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });
          const data = await response.json();
          dispatch(setAllUsers({allUsers: data}));    

     
  }

  useEffect(()=>{
    getAllUsers();
  }, [])

  return (
    <Fragment>
    <WidgetWrapper>
    
    {/*
    
    <UserImage image={picturePath} />
  */}
  <Typography color={medium} fontSize="25px" fontWeight="500" gutterBottom>Find Friends</Typography>
  <FlexBetween gap="1.5rem">
 {/* <InputBase
  placeholder="What's on your mind..."
  onChange={(e) => setPost(e.target.value)}
  value={post}
  sx={{
    width: "100%",
    backgroundColor: palette.neutral.light,
    borderRadius: "2rem",
    padding: "1rem 2rem",
  }}
/>*/}
  </FlexBetween>
  
  
  <Divider sx={{ margin: "1.25rem 0" }} /> 
  </WidgetWrapper>


  <WidgetWrapper m="2rem 0rem">
  <FlexBetween gap="1.5rem">
  <Box display="flex" flexDirection="column" gap="1.5rem">
        {allUsers.map((user) => (
          <Friend
            key={user._id}
            friendId={user._id}
            name={`${user.firstName} ${user.lastName}`}
            subtitle={user.occupation}
            userPicturePath={user.picturePath}
          />
        ))}
      </Box>
  </FlexBetween>
  </WidgetWrapper>

  </Fragment>
        );
      };
    
      
      export default FindFriendWidget;
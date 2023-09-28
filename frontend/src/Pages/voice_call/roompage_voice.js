import React from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { Button, Input, Box, Flex } from '@chakra-ui/react'
const dotenv = require("dotenv");
dotenv.config();

//Creates a voice call using zegocloud at that room
const Roompage_voice = () => {
    const {roomId} = useParams();

    const myMeeting = async (element) => {
        const appID = parseInt(process.env.REACT_APP_APP_ID);
        const serverSecret = process.env.REACT_APP_SERVER_SECRET;
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID,
            serverSecret,
            roomId,
            Date.now().toString(),
            "User"
        );
        const zc = ZegoUIKitPrebuilt.create(kitToken);
        zc.joinRoom({
            container: document.querySelector("#root"),
            turnOnCameraWhenJoining: false,
            showMyCameraToggleButton: false,
            sharedLinks: [
                {
                    name: 'Copy Link',
                    url: `http://localhost:3001/room1/${roomId}`,
                }
            ],
            scenario: {
              mode: ZegoUIKitPrebuilt.OneONoneCall,
            } 
        });


    };
  return (
    <div style={{ width: "100%" }}>
        <Box w='400px' h='2'></Box>
        <div ref={myMeeting}/>
    </div>
  );
  
};

export default Roompage_voice;

import { Box } from "@chakra-ui/layout";
import { useState } from "react";
import Chatbox from "../components/Chatbox";
import MyChats from "../components/MyChats";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import { ChatState } from "../Context/ChatProvider";
import { Button, ButtonGroup, BeatLoader, Flex } from '@chakra-ui/react';
import { useHistory } from "react-router-dom";



const Chatpage = () => {
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = ChatState();
  const history = useHistory();

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box d="flex" justifyContent="space-between"  bg='#E0B0FF' w="100%" h="91.5vh" p="10px">
        <Flex flexDirection="column">
          <Button style={{ marginBottom: "10px", marginRight: "10px" }} onClick={() => history.push("/AIBot")}>AI Bot &#129302;</Button>
          <Button style={{ marginBottom: "10px", marginRight: "10px" }} onClick={() => history.push("/video")}>Video Call &#x1F4BB;</Button>
          <Button style={{ marginBottom: "10px", marginRight: "10px" }} onClick={() => history.push("/voice")}>Voice Call &#128222;</Button>
        </Flex>
        {user && <MyChats fetchAgain={fetchAgain} style={{ marginRight: "10px" }} />}
        {user && (
          <Chatbox
            fetchAgain={fetchAgain}
            setFetchAgain={setFetchAgain}
            style={{ marginLeft: "10px" }}
          />
        )}
      </Box>
    </div>
  );
};

export default Chatpage;

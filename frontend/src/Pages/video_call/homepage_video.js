import React, {useState, useCallback} from "react";
import {useHistory} from "react-router-dom";
import { Heading, Button, Input, Box, Flex } from '@chakra-ui/react';
import { useToast } from "@chakra-ui/toast";

const Homepage_video = () => {
    const toast = useToast();
    const [value, setValue] = useState();
    const history = useHistory();
    const handleJoinRoom = useCallback(() => {
        history.push(`/room/${value}`)
        toast({
            title: "Room formed",
            description: "Successful, Please refresh if not redirected automatically!",
            status: "success",
            duration: 5000,
            isClosable: true,
            position: "bottom-left",
        });
    }, [history, value]);
    return(
    <div>
        
        <Flex flexDir="column">
            <Box w='350px' h='190' />
        </Flex>
            <Flex w="100%">
            <Box w='340px' h='10'/>
            <Heading size='lg' position="center">
            &#128125; Create your Room code or Enter if you already have one &#129302;
            </Heading>
            <Box w='500px' h='10' />
        </Flex>
        <Flex w="100%">
            <Box w='470px' h='10'/>
            <Input
                style={{ marginTop: "50px" }}
                color='blue'
                placeholder='Enter Room Code'
                _placeholder={{ opacity: 1, color: 'inherit' }}
                value = {value}
                onChange={(e) => setValue(e.target.value)}
                w='400px' h='55px'
            />
            <Button style={{ marginLeft: "10px", marginTop: "50px" }} colorScheme='teal' w='200px' h='55px' onClick={handleJoinRoom}>
                Submit
            </Button>
            <Box w='650px' h='10' />
        </Flex>
        
    </div>
    );
};

export default Homepage_video;



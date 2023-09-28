import { useState } from "react";
import { Spacer, Box, Center } from '@chakra-ui/react';
import { Heading, Input, Button, ButtonGroup, BeatLoader, Flex } from '@chakra-ui/react';

function AIpage() {
  const [message, setMessage] = useState("");
  const [chats, setChats] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  const chat = async (e, message) => {
    e.preventDefault();

    if (!message) return;
    setIsTyping(true);
    window.scrollTo(0, 1e10);

    let msgs = chats;
    msgs.push({ role: "user", content: message });
    setChats(msgs);

    setMessage("");

    fetch("http://localhost:3000/text", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chats,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        msgs.push(data.output);
        setChats(msgs);
        setIsTyping(false);
        window.scrollTo(0, 1e10);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    
    <main>
      <Flex>
        <Box w='580px' h='10' bg='white.500' />
        <Heading size='lg' position="center">
        &#128125; Talk to our AI Bot &#129302;
        </Heading>
        <Box w='550px' h='10' bg='white.500' />
      </Flex>

      <Flex>
      <Box w='220px' h='10' bg='white.500' />
      <Spacer />
      <Flex w="40%" h="90%" flexDirection="column">
      <section>
        {chats && chats.length
          ? chats.map((chat, index) => (
              <p key={index} style={chat.role === "user" ? { marginLeft: "300px" } : { marginRight: "10px" }}>
                    <br>                    
                    </br>
                    <Box
                    alignItems="center"
                    flexDir="column"
                    p={3}
                    //bg='#FFDAB9'
                    bg= {chat.role === "user" ? '#add8e6' : '#f08080 '}
                    color='black'
                    w={{ base: "100%", md: "68%" }}
                    borderRadius="lg"
                    borderWidth="1px"
                  >
                    <span>
                      <b>{chat.role.toUpperCase()}</b>
                    </span>
                    <span>:</span>
                    <span>{chat.content}</span>
                  </Box>

              </p>
            ))
          : ""}
      </section>

      <div className={isTyping ? "" : "hide"}>
        <p>
          <i>{isTyping ? "Typing" : ""}</i>
        </p>
      </div>
      
      <form action="" onSubmit={(e) => chat(e, message)}>
        <br>
        </br>
      <Input focusBorderColor='lime' color='#4b0082' 
                placeholder='Type a message here and hit Enter...' 
                _placeholder={{ opacity: 1, color: 'inherit' }}
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
      />
      
      </form>
      
      </Flex>
      <Spacer />
      <Box w='180px' h='10' bg='white.500' />
      </Flex>
    </main>
   
  );
}

export default AIpage;

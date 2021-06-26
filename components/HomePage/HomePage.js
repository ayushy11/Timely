import React, { useContext } from "react";
import { useRouter } from "next/router";
import {
  Box,
  Button,
  Typography,
  Heading,
  Container,
  Form,
  Input,
  PrimaryButton,
} from "../library/index";
import { MeetingContext } from "../Providers/MeetingProvider";

export default function HomePage() {
  const router = useRouter();
  // const { meetings } = useContext(MeetingContext);
  // console.log("NEW", meetings);

  // function displayListOfMeetings() {
  //   return meetings.map((meeting) => (
  //     <>
  //       <Box
  //         mx="200px"
  //         marginTop="50px"
  //         border="2px solid black"
  //         p="1rem"
  //         display="flex"
  //         justifyContent="space-between"
  //         key={meeting.id}
  //       >
  //         <Heading>{meeting.text.meetingName}</Heading>
  //         <PrimaryButton
  //           width="10%"
  //           height="40px"
  //           fontSize="1.1rem"
  //           display="block"
  //         >
  //           Open
  //         </PrimaryButton>
  //       </Box>
  //     </>
  //   ));
  // }

  return (
    <>
      <Container
        borderBottom="2px solid black"
        height="100px"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        px="50px"
        backgroundImage="url('home-background.png')"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
      >
        <Box>
          <Heading color="white">Timely</Heading>
        </Box>

        <Box
          display="flex"
          alignItems="flex-end"
          //   justifyContent="flex-end"
          maxWidth="100%"
        >
          <PrimaryButton
            px="15px"
            mx="15px"
            width="100%"
            height="30px"
            onClick={() => router.push("/meeting")}
            fontSize="1.1rem"
            display="block"
            pointer="cursor"
            backgroundImage= "linear-gradient(to right, #314755 0%, #26a0da  51%, #314755  100%)"   
            backgroundSize= "200% auto"     
          >
            New Meeting
          </PrimaryButton>
        </Box>
      </Container>
      {/* {displayListOfMeetings} */}
      <Container
        border="1px solid black"
        height="100vh"
        // backgroundImage= "linear-gradient( 76.3deg,  rgba(44,62,78,1) 12.6%, rgba(69,103,131,1) 82.8% )"
        // backgroundImage="linear-gradient( 110.3deg,  rgba(73,93,109,1) 4.3%, rgba(49,55,82,1) 96.7% )"
        // background="#2b5876"
        // background="-webkit-linear-gradient(to right, #4e4376, #2b5876)"
        // background="linear-gradient(to right, #4e4376, #2b5876)"
        backgroundImage="url('home-background.png')"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
      >
        <Box
          mx="200px"
          marginTop="50px"
          border="1px solid white"
          borderRadius="40px"
          p="1rem"
          display="flex"
          justifyContent="space-between"
        >
          <Heading color="white">Title</Heading>
          <PrimaryButton
            width="10%"
            height="30px"
            fontSize="1.1rem"
            display="block"
            mt="15px"
            pointer="cursor"
            backgroundImage= "linear-gradient(to right, #314755 0%, #26a0da  51%, #314755  100%)"   
            backgroundSize= "200% auto" 
          >
            Open
          </PrimaryButton>
        </Box>
        <Box
          mx="200px"
          marginTop="50px"
          border="1px solid white"
          borderRadius="40px"
          p="1rem"
          display="flex"
          justifyContent="space-between"
        >
          <Heading color="white">Title</Heading>
          <PrimaryButton
            width="10%"
            height="30px"
            fontSize="1.1rem"
            display="block"
            mt="15px"
            pointer="cursor"
            backgroundImage= "linear-gradient(to right, #314755 0%, #26a0da  51%, #314755  100%)"   
            backgroundSize= "200% auto" 
          >
            Open
          </PrimaryButton>
        </Box>
      </Container>
    </>
  );
}

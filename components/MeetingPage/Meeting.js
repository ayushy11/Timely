import React, { useContext } from "react";
import { MeetingContext } from "../Providers/MeetingProvider";
import { CSVLink } from "react-csv";
import {
  Box,
  Typography,
  Heading,
  Container,
  Form,
  Input,
  Select,
  Option,
  PrimaryButton,
} from "../library/index";
import { useMeeting } from "../Providers/MeetingProvider";

export default function Meeting() {
  // const { meetings, removeMeeting } = useContext(MeetingContext);
  const { meetings, removeMeeting } = useMeeting(MeetingContext);
  const data = meetings;
  // console.log("--->>",meetings[0].text);
  // const headers = meetings.text
  // console.log(data[0].text);

  function getListItems() {
    return meetings.map((meeting) => (
      <>
        <Container
          key={meeting.id}
          border="2px solid black"
          width={{ xs: "620px", sm: "100%" }}
        >
          <Container
            height="100px"
            backgroundColor="#A9C9FF"
            backgroundImage="linear-gradient(180deg, #A9C9FF 0%, #FFBBEC 100%)"
            borderBottom="1px solid black"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            px="50px"
          >
            <Box>
              <Heading
                color="black"
                fontSize={{ xs: "3rem", sm: "2.5rem" }}
                fontWeight={{ xs: "750", sm: "600" }}
                textAlign={{ xs: "center", sm: "left" }}
              >
                {meeting.text.meetingName}
              </Heading>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              flexDirection="row"
              maxWidth="100%"
            >
              <PrimaryButton
                px="15px"
                mx="15px"
                width="50%"
                height="30px"
                fontSize="1.1rem"
                backgroundImage="linear-gradient(to right, #314755 0%, #26a0da  51%, #314755  100%)"
                backgroundSize="200% auto"
              >
                <CSVLink data={data}>Download</CSVLink>
              </PrimaryButton>
              <PrimaryButton
                px="15px"
                mx="15px"
                width="50%"
                height="30px"
                onClick={() => removeMeeting(meeting.id)}
                fontSize="1.1rem"
                backgroundImage="linear-gradient(to right, #314755 0%, #26a0da  51%, #314755  100%)"
                backgroundSize="200% auto"
                pointer="cursor"
              >
                Delete
              </PrimaryButton>
            </Box>
          </Container>

          <Container
            backgroundColor=" #FFDEE9"
            backgroundImage=" linear-gradient(0deg, #FFDEE9 0%, #B5FFFC 100%)"
          >
            <Container
              // border="2px solid red"

              display="flex"
              flexDirection="column"
              py="10px"
              px="50px"
              width={{ xs: "620px", sm: "100%" }}
            >
              <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                justifyContent="space-between"
                width={{ sm: "30%" }}
              >
                <Heading
                  fontSize={{ sm: "1.4rem" }}
                  fontWeight="500"
                  fontFamily="Didact Gothic"
                  p="5px"
                  m="5px"
                  // border="1px solid red"
                  width={{ xs: "100%" }}
                >
                  Started at:
                </Heading>
                <Typography
                  py="10px"
                  px={{ xs: "20px", sm: "10px" }}
                  fontWeight="600"
                  borderBottom="1px solid purple"
                  fontSize={{ xs: "1.3rem", sm: "1.1rem" }}
                  width={{ xs: "100%" }}
                >
                  {meeting.text.startedAt}
                </Typography>
              </Box>

              <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                justifyContent="space-between"
                width={{ sm: "30%" }}
              >
                <Heading
                  fontSize={{ sm: "1.4rem" }}
                  fontWeight="500"
                  fontFamily="Didact Gothic"
                  p="5px"
                  m="5px"
                  // border="1px solid red"
                  width={{ xs: "100%" }}
                >
                  Ends at:
                </Heading>

                <Typography
                  py="10px"
                  fontWeight="600"
                  borderBottom="1px solid purple"
                  fontSize={{ xs: "1.3rem", sm: "1.1rem" }}
                  width={{ xs: "100%" }}
                >
                  {meeting.text.endedAt}
                </Typography>
              </Box>
            </Container>

            <Container
              // border="2px solid blue"
              display="flex"
              flexDirection="column"
              py="15px"
              px="50px"
              width={{ xs: "620px", sm: "100%" }}
            >
              <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                justifyContent="space-between"
                width={{ sm: "40%" }}
              >
                <Heading
                  p="5px"
                  m="5px"
                  fontSize={{ sm: "1.4rem" }}
                  fontWeight="500"
                  fontFamily="Didact Gothic"
                  flex="0.4"
                  width={{ xs: "100%" }}
                >
                  Minutes Taker:
                </Heading>

                <Typography
                  flex="0.8"
                  py="10px"
                  fontWeight="600"
                  textTransform="uppercase"
                  borderBottom="1px solid purple"
                  px={{ xs: "20px", sm: "10px" }}
                  fontSize={{ xs: "1.3rem", sm: "1.2rem" }}
                >
                  {meeting.text.minuteTaker}
                </Typography>
              </Box>

              <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                justifyContent="space-between"
                width={{ sm: "60%" }}
              >
                <Heading
                  fontSize={{ sm: "1.4rem" }}
                  fontWeight="500"
                  fontFamily="Didact Gothic"
                  flex={{ xs: "0.4", sm: "0.2" }}
                  p="5px"
                  m="5px"
                  width={{ xs: "100%" }}
                >
                  Attendees:
                </Heading>

                <Typography
                  flex="0.8"
                  py="10px"
                  fontWeight="600"
                  textTransform="uppercase"
                  borderBottom="1px solid purple"
                  px={{ xs: "20px", sm: "10px" }}
                  fontSize={{ xs: "1.3rem", sm: "1.2rem" }}
                >
                  {meeting.text.attendees}
                </Typography>
              </Box>
              <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                justifyContent="space-between"
                width={{ sm: "60%" }}
              >
                <Heading
                  fontSize={{ sm: "1.4rem" }}
                  fontWeight="500"
                  fontFamily="Didact Gothic"
                  flex={{ xs: "0.4", sm: "0.2" }}
                  p="5px"
                  m="5px"
                  width={{ xs: "100%" }}
                >
                  About:
                </Heading>

                <Typography
                  flex="0.8"
                  py="10px"
                  fontWeight="600"
                  textTransform="uppercase"
                  borderBottom="1px solid purple"
                  fontSize={{ xs: "1.3rem", sm: "1.2rem" }}
                  px={{ xs: "20px", sm: "10px" }}
                >
                  {meeting.text.about}
                </Typography>
              </Box>
            </Container>

            <Container
              // border="2px solid green"
              height="100vh"
              display="flex"
              flexDirection="column"
              px="50px"
              width={{ xs: "620px", sm: "100%" }}
            >
              <Box
                borderBottom="1px solid black"
                display="flex"
                mx={{ xs: "5px", sm: "130px" }}
                alignItems="center"
                justifyContent="center"
                flex="1"
                marginTop="20px"
                width={{ xs: "100%", sm: "80%" }}
              >
                <Heading fontSize="1.3rem" flex="0.2" marginLeft="15px">
                  Topic
                </Heading>
                <Heading fontSize="1.3rem" flex="0.1">
                  Type
                </Heading>
                <Heading fontSize="1.3rem" flex="0.5">
                  Note
                </Heading>
                <Heading fontSize="1.3rem" flex="0.1">
                  Owner
                </Heading>
              </Box>
              <Box
                border="1px solid purple"
                borderRadius="20px"
                display="flex"
                flexDirection={{ xs: "column", sm: "row" }}
                mx={{ sm: "130px" }}
                width={{ xs: "100%", sm: "80%" }}
                alignItems="center"
                justifyContent="center"
                flex="1"
                p="1rem"
                marginTop="50px"
                marginBottom="350px"
              >
                <Form flex="0.2" m="5px" p="5px" width={{ xs: "100%" }}>
                  <Typography
                    width="80%"
                    fontWeight="600"
                    borderBottom="1px solid purple"
                    fontSize={{ xs: "1.3rem", sm: "1.2rem" }}
                  >
                    {meeting.text.topic}
                  </Typography>
                </Form>

                <Form flex="0.1" m="5px" p="5px">
                  <Select name="options" id="options">
                    <Option value="ToDo">ToDo</Option>
                    <Option value="Info">Info</Option>
                    <Option value="Idea">Idea</Option>
                    <Option value="Done">Done</Option>
                  </Select>
                  <Input
                    type="submit"
                    value="submit"
                    maxWidth="0"
                    opacity="0"
                  />
                </Form>

                <Form flex="0.5" m="5px" p="5px" width={{ xs: "100%" }}>
                  <Typography
                    width="95%"
                    fontWeight="600"
                    borderBottom="1px solid purple"
                    fontSize={{ xs: "1.3rem", sm: "1.2rem" }}
                  >
                    {meeting.text.note}
                  </Typography>
                </Form>

                <Form flex="0.1" m="5px" p="5px">
                  <Select name="owner" id="owner" marginLeft="15px">
                    <Option value="ToDo">ay</Option>
                    <Option value="Info">sk</Option>
                    <Option value="Idea">zh</Option>
                  </Select>
                  <Input
                    type="submit"
                    value="submit"
                    maxWidth="0"
                    opacity="0"
                  />
                </Form>
              </Box>
            </Container>
          </Container>
        </Container>
      </>
    ));
  }
  function getMeetings() {
    if (meetings.length > 0) {
      return <ul>{getListItems()}</ul>;
    }
  }
  return <>{getMeetings()}</>;
}

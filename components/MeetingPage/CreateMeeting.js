import React, { useContext } from "react";
import { MeetingContext } from "../Providers/MeetingProvider";
import {
  Box,
  Heading,
  Container,
  Form,
  Input,
  Select,
  Option,
  PrimaryButton,
} from "../library/index";
import { nanoid } from "nanoid";
import { useMeeting } from "../Providers/MeetingProvider";

export function CreateMeeting() {
  // const { addMeeting, inputMeeting, setInputMeeting } =
  //   useContext(MeetingContext);

  const { addMeeting, inputMeeting, setInputMeeting } =
    useMeeting(MeetingContext);

  const inputEvent = (event) => {
    // const value = event.target.value;
    // const name = event.target.name;
    const { name, value } = event.target;
    setInputMeeting((prevData) => {
      return {
        ...prevData,
        [name]: value, // [meetingName]:meeting.meetingName
      };
    });
    console.log(inputMeeting);
  };

  const addEvent = () => {
    addMeeting({ id: nanoid(), text: inputMeeting });
    setInputMeeting({
      meetingName: "",
      minuteTaker: "",
      startedAt: "",
      endedAt: "",
      attendees: "",
      about: "",
      topic: "",
      category: "",
      note: "",
      owner: "",
    });
  };

  // const [expand, setExpand] = useState(false);
  // const expandIt = () => {
  //   setExpand(true);
  // };

  return (
    <>
      <Container
        borderBottom="1px solid black"
        height={{ xs: "90px", sm: "100px" }}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        px="50px"
        // backgroundColor="#00DBDE"
        // backgroundImage="linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%)"
        // backgroundColor="#8EC5FC"
        // backgroundImage="linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)"
        // backgroundColor=" #FFDEE9"
        // backgroundImage=" linear-gradient(0deg, #FFDEE9 0%, #B5FFFC 100%)"
        backgroundImage="url('home-background.png')"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        width={{ xs: "620px", sm: "100%" }}
      >
        <Box>
          <Input
            placeholder="Meeting Title"
            color="white"
            fontSize={{ xs: "2rem", sm: "2.5rem" }}
            fontWeight={{ xs: "750", sm: "600" }}
            textAlign={{ xs: "center", sm: "left" }}
            name="meetingName"
            value={inputMeeting.meetingName}
            onChange={inputEvent}
            borderRadius="10px"
            background="none"
            border="none"
            outline="none"
            
            borderBottom="1px solid white"
          />
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
            mx="30px"
            width="100%"
            height="30px"
            onClick={addEvent}
            fontSize="1.1rem"
            backgroundImage="linear-gradient(to right, #314755 0%, #26a0da  51%, #314755  100%)"
            backgroundSize="200% auto"
          >
            Export
          </PrimaryButton>
        </Box>
      </Container>

      <Container
        // backgroundColor="#4158D0"
        // backgroundImage="linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)"
        // backgroundColor="#0093E9"
        // backgroundImage="linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)"
        // backgroundColor=" #85FFBD"
        // backgroundImage=" linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%)"
        background="#141e30"
        background="-webkit-linear-gradient(to right, #141e30, #243b55)"
        background="linear-gradient(to right, #141e30, #243b55)"
        // background="#bdc3c7"
        // background="-webkit-linear-gradient(to right, #bdc3c7, #2c3e50)"
        // background="linear-gradient(to right, #bdc3c7, #2c3e50)"
        width={{ xs: "620px", sm: "100%" }}
      >
        <Container
          // border="2px solid red"
          backgroundImage="linear-gradient(to right, #16222A 0%, #3A6073  51%, #16222A  100%)"
          display="flex"
          flexDirection="column"
          py="10px"
          px="50px"
          width={{ xs: "620px", sm: "100%" }}
        >
          <Box
            // border="2px solid purple"
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            width={{ sm: "40%" }}
          >
            <Heading
              fontSize={{ sm: "1.4rem" }}
              fontWeight="500"
              fontFamily="Didact Gothic"
              p="5px"
              m="5px"
              // border="1px solid red"
              width={{ xs: "100%" }}
              color="white"
            >
              Started at:
            </Heading>
            <Form py="10px" px={{ xs: "20px", sm: "10px" }}>
              <Input
                placeholder="input"
                type="datetime-local"
                value={inputMeeting.startedAt}
                name="startedAt"
                onChange={inputEvent}
                background="none"
                border="none"
                outline="none"
                borderBottom="1px solid white"
                height="30px"
                color="white"
              />
            </Form>
          </Box>

          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            width={{ sm: "40%" }}
          >
            <Heading
              fontSize={{ sm: "1.4rem" }}
              fontWeight="500"
              fontFamily="Didact Gothic"
              p="5px"
              m="5px"
              width={{ xs: "100%" }}
              color="white"
            >
              Ends at:
            </Heading>
            <Form py="10px" px={{ xs: "20px", sm: "10px" }}>
              <Input
                height="30px"
                placeholder="input"
                type="datetime-local"
                value={inputMeeting.endedAt}
                name="endedAt"
                onChange={inputEvent}
                background="none"
                border="none"
                outline="none"
                borderBottom="1px solid  white"
                color="white"
              ></Input>
            </Form>
          </Box>
        </Container>

        <Container
          // border="2px solid blue"
          backgroundImage="linear-gradient(to right, #16222A 0%, #3A6073  51%, #16222A  100%)"
          display="flex"
          flexDirection="column"
          py="15px"
          px="50px"
          width={{ xs: "620px", sm: "100%" }}
        >
          <Box
            // border="2px solid brown"
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            width={{ sm: "40%" }}
          >
            <Heading
              // border="1px solid red"
              p="5px"
              m="5px"
              fontSize={{ sm: "1.4rem" }}
              fontWeight="500"
              fontFamily="Didact Gothic"
              flex="0.4"
              width={{ xs: "100%" }}
              color="white"
            >
              Minutes Taker
            </Heading>
            <Form flex="0.8" py="10px" px={{ xs: "20px", sm: "10px" }}>
              <Input
                placeholder="input"
                value={inputMeeting.minuteTaker}
                name="minuteTaker"
                onChange={inputEvent}
                background="none"
                border="none"
                outline="none"
                borderBottom="1px solid  white"
                height="40px"
                color="white"
              />
            </Form>
          </Box>

          <Box
            // border="2px solid brown"
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            width={{ sm: "40%" }}
          >
            <Heading
              fontSize={{ sm: "1.4rem" }}
              fontWeight="500"
              fontFamily="Didact Gothic"
              flex="0.4"
              p="5px"
              m="5px"
              width={{ xs: "100%" }}
              color="white"
            >
              Attendees
            </Heading>
            <Form flex="0.8" py="10px" px={{ xs: "20px", sm: "10px" }}>
              <Input
                placeholder="input"
                value={inputMeeting.attendees}
                name="attendees"
                onChange={inputEvent}
                background="none"
                border="none"
                outline="none"
                borderBottom="1px solid  white"
                height="40px"
                color="white"
              ></Input>
            </Form>
          </Box>
          <Box
            // border="2px solid brown"
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            width={{ sm: "40%" }}
          >
            <Heading
              fontSize={{ sm: "1.4rem" }}
              fontWeight="500"
              fontFamily="Didact Gothic"
              flex="0.4"
              p="5px"
              m="5px"
              width={{ xs: "100%" }}
              color="white"
            >
              About
            </Heading>
            <Form flex="0.8" py="10px" px={{ xs: "20px", sm: "10px" }}>
              <Input
                placeholder="input"
                value={inputMeeting.about}
                name="about"
                onChange={inputEvent}
                background="none"
                border="none"
                outline="none"
                borderBottom="1px solid  white"
                height="40px"
                color="white"
              ></Input>
            </Form>
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
            display="flex"
            mx={{ xs: "5px", sm: "130px" }}
            alignItems="center"
            justifyContent="center"
            flex="1"
            marginTop="20px"
            borderBottom="1px solid black"
            // border="2px solid green"
            width={{ xs: "100%", sm: "80%" }}
          >
            <Heading
              color="white"
              fontSize="1.3rem"
              flex="0.2"
              marginLeft="15px"
            >
              Topic
            </Heading>
            <Heading color="white" fontSize="1.3rem" flex="0.1">
              Type
            </Heading>
            <Heading color="white" fontSize="1.3rem" flex="0.5">
              Note
            </Heading>
            <Heading color="white" fontSize="1.3rem" flex="0.1">
              Owner
            </Heading>
          </Box>

          <Box
            // border="1px solid purple"
            backgroundImage="linear-gradient(to right, #16222A 0%, #3A6073  51%, #16222A  100%)"
            borderRadius="10px"
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
            // onDoubleClick={expandIt}
            // maxWidth={{ xs: "100%" }}
          >
            <Form flex="0.2" m="5px" p="5px" width={{ xs: "100%" }}>
              <Input
                placeholder="Topic"
                width="80%"
                value={inputMeeting.topic}
                name="topic"
                onChange={inputEvent}
                background="none"
                border="none"
                outline="none"
                borderBottom="1px solid  white"
                height="30px"
                color="white"
              />
            </Form>

            <Form flex="0.1" m="5px" p="5px">
              <Select
                id="options"
                value={inputMeeting.category}
                name="category"
                onChange={inputEvent}
              >
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
                color="white"
              />
            </Form>

            <Form flex="0.5" m="5px" p="5px" width={{ xs: "100%" }}>
              <Input
                placeholder="Note"
                width="95%"
                value={inputMeeting.note}
                name="note"
                onChange={inputEvent}
                background="none"
                border="none"
                outline="none"
                borderBottom="1px solid  white"
                height="30px"
                color="white"
              />
            </Form>

            <Form flex="0.1" m="5px" p="5px">
              <Select
                id="options"
                value={inputMeeting.owner}
                name="owner"
                onChange={inputEvent}
                marginLeft="15px"
              >
                <Option value="ay">ay</Option>
                <Option value="sk">sk</Option>
                <Option value="zh">zh</Option>
              </Select>
              <Input
                type="submit"
                value="submit"
                maxWidth="0"
                opacity="0"
                color="white"
              />
            </Form>
          </Box>
        </Container>

        {/* {
          expand ? (
            <Box
          border="2px solid purple"
          display="flex"
          mx="130px"
          alignItems="center"
          justifyContent="center"
          flex="1"
          p="1rem"
          marginTop="50px"
          marginBottom="350px"
          onDoubleClick={expandIt}
        >
          
          <Form flex="0.2">
            <Input
              placeholder="topic"
              width="80%"
              value={meeting.meetingContent.topic}
              name="topic"
              onChange={inputEvent}
            ></Input>
          </Form>
          
          <Form flex="0.1">
            <Select
              id="options"
              value={meeting.meetingContent.category}
              name="category"
              onChange={inputEvent}
            >
              <Option value="ToDo">ToDo</Option>
              <Option value="Info">Info</Option>
              <Option value="Idea">Idea</Option>
              <Option value="Done">Done</Option>
            </Select>
            <Input type="submit" value="submit" maxWidth="0" opacity="0" />
          </Form>
          
          <Form flex="0.5">
            <Input
              placeholder="note"
              width="95%"
              value={meeting.meetingContent.note}
              name="note"
              onChange={inputEvent}              
            />
          </Form>
          
          <Form flex="0.1">
            <Select
              id="options"
              value={meeting.meetingContent.owner}
              name="owner"
              onChange={inputEvent}
            >
              <Option value="ay">ay</Option>
              <Option value="sk">sk</Option>
              <Option value="zh">zh</Option>
            </Select>
            <Input type="submit" value="submit" maxWidth="0" opacity="0" />
          </Form>
          
          <Form flex="0.1" maxWidth="80px">
            <Input
              placeholder="duedate"
              type="datetime-local"
              value={meeting.meetingContent.dueDate}
              name="dueDate"
              onChange={inputEvent}
            ></Input>
          </Form>
        </Box>
          ) : null
        } */}
      </Container>
    </>
  );
}

export default CreateMeeting;

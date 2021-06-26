import React from "react";
import Meeting from "@/components/MeetingPage/Meeting";
import CreateMeeting from "@/components/MeetingPage/CreateMeeting";
import { Container } from "@/components/library/index";

// import { MeetingProvider } from "../components/contexts/MeetingContext";
import { MeetingProvider } from "components/Providers/MeetingProvider";

function meeting() {
  return (
    <MeetingProvider>
      <Container>
        <CreateMeeting />
        <Meeting />
      </Container>
    </MeetingProvider>
  );
}

export default meeting;

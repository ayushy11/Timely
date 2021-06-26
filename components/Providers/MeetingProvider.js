import React, {
  useReducer,
  useContext,
  createContext,
  useEffect,
  useState,
} from "react";

export const MeetingContext = createContext();

export function MeetingProvider({ children }) {
  const [meetings, setMeetings] = useState(
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("meetings")) ?? []
      : true
  );

  const [inputMeeting, setInputMeeting] = useState({
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

  function addMeeting(meeting) {
    setMeetings((prev) => [meeting, ...prev]);
  }

  function removeMeeting(id) {
    setMeetings(meetings.filter((meeting) => meeting.id !== id));
  }

  useEffect(() => {
    typeof window !== "undefined"
      ? localStorage.setItem("meetings", JSON.stringify(meetings))
      : true;
    console.log(meetings);
  }, [meetings]);

  return (
    <MeetingContext.Provider
      value={{
        meetings,
        addMeeting,
        removeMeeting,
        inputMeeting,
        setInputMeeting,
      }}
    >
      {children}
    </MeetingContext.Provider>
  );
}

export const useMeeting = () => {
    return useContext(MeetingContext);
  };

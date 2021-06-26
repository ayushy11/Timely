import "../styles/globals.css";
import { theme } from "../lib/theme";
import { ThemeProvider } from "@emotion/react";
import { MeetingProvider } from "components/Providers/MeetingProvider";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <MeetingProvider>
        <Component {...pageProps} />
      </MeetingProvider>
    </ThemeProvider>
  );
}

export default MyApp;

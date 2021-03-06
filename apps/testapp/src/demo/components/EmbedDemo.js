import { Box, Divider } from "jag-ui-react";
import React from "react";
import { Heading } from "../../components/Heading";
export default function EmbedDemo() {
  return (
    <Box>
      <Heading>Embed Demo</Heading>
      <Divider />
      <Box p={4} boxShadow="default" bg="bg.card">
        {/* <Embed src="https://www.youtube.com/embed/gjnrtCKZqYg" allowFullScreen /> */}
        <Box
          borderRadius={6}
          sx={{
            width: "100%",
            height: 0,
            paddingBottom: 900 / 16 + "%",
            position: "relative",
            overflow: "hidden",
            "& > iframe": {
              position: "absolute",
              width: "100%",
              height: "100%",
              top: 0,
              bottom: 0,
              left: 0,
              border: 0,
            },
          }}>
          <iframe
            title="Youtube"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/gjnrtCKZqYg"
            frameBorder="0"
            allowFullScreen
          />
        </Box>
      </Box>
    </Box>
  );
}

import React from "react";
import videoBG from "../Assests/videoBG.mp4";
import videoplayback from "../Assests/videoplayback.mp4";
import videocss from "../Assests/videocss.css";
import { Text, Box, Button } from "@chakra-ui/react";

const BackgroundVideo = () => {
  return (
    <div className="bgVideo">
      <video style={videocss} src={videoplayback} autoPlay loop muted />
      <Box style={videocss} className="content">
        <Text fontSize="6xl">BAD SISTERS</Text>
        <Text>
          Drama{" "}
          <Button size="xs" variant="outline">
            TV-MA
          </Button>
        </Text>
        <Text fontSize="3xl">
          FIve sisters are suspected <br /> of murdering one of their husbands.
          <br />
          Watch new episodes Fridays.
        </Text>
        <Button colorScheme="gray" color="black" variant="solid">
          Start Free Trial
        </Button>
        <Text>7 days free, then $4.99/month</Text>
      </Box>
    </div>
  );
};
export default BackgroundVideo;

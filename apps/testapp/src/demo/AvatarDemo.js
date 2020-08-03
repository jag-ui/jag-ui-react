import React from "react";
import { Box, Flex } from "@jag-ui-react/core";
import { Heading, Image, Divider } from "@jag-ui-react/components";

const AVATAR = "http://jagadeeshpalaniappan.github.io/assets/img/jag/hero1.jpg";
const IMG = "https://via.placeholder.com/800/f2f2f2/fff.png";

const RoundedImgDemo = () => {
  return (
    <Flex flexWrap="wrap" alignItems="center">
      <Image
        src="http://jagadeeshpalaniappan.github.io/assets/img/jag/hero1.jpg"
        mx={2}
        sx={{
          width: 40,
          height: 40,
          borderRadius: 9999,
        }}
      />
      <Image
        src="http://jagadeeshpalaniappan.github.io/assets/img/jag/hero1.jpg"
        mx={2}
        sx={{
          width: 60,
          height: 60,
          borderRadius: 9999,
        }}
      />
      <Image
        src="http://jagadeeshpalaniappan.github.io/assets/img/jag/hero1.jpg"
        mx={2}
        sx={{
          width: 80,
          height: 80,
          borderRadius: 9999,
        }}
      />
      <Image
        src="http://jagadeeshpalaniappan.github.io/assets/img/jag/hero1.jpg"
        mx={2}
        sx={{
          width: 100,
          height: 100,
          borderRadius: 9999,
        }}
      />
      <Image
        src="http://jagadeeshpalaniappan.github.io/assets/img/jag/hero1.jpg"
        mx={2}
        sx={{
          width: 120,
          height: 120,
          borderRadius: 9999,
        }}
      />
    </Flex>
  );
};

export default function AvatarDemo() {
  return (
    <Box>
      <Heading>Avatar / Image Demo</Heading>
      <Divider />
      <Box my={10} p={4}>
        <Box>
          <Image src={AVATAR} variant="avatar" />
          <Image src={AVATAR} variant="avatar" />
          <Image src={AVATAR} variant="avatar" />
        </Box>

        <RoundedImgDemo />
        <Box>
          <Image src={IMG} />
        </Box>
      </Box>
    </Box>
  );
}

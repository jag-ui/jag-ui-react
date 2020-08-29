import { Divider, Heading, Image } from "jag-ui-react";
import { Box, Flex } from "@jag-ui-react/box";
import React from "react";

const AVATAR = "http://jagadeeshpalaniappan.github.io/assets/img/jag/hero1.jpg";
// const IMG = "https://via.placeholder.com/800/f2f2f2/fff.png";

const RoundedImgDemo = () => {
  return (
    <Flex flexWrap="wrap" alignItems="center">
      <Image
        src="http://jagadeeshpalaniappan.github.io/assets/img/jag/hero1.jpg"
        mx={2}
        sx={{
          width: 30,
          height: 30,
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
      <Heading>Image / Avatar Demo</Heading>
      <Divider />
      <Box p={4} boxShadow="default" bg="bg2">
        <RoundedImgDemo />
        <Flex flexWrap="wrap" alignItems="center">
          <Image src={AVATAR} variant="avatar" size="2rem" mr={2} />
          <Image src={AVATAR} variant="avatar" size="4rem" mr={2} />
          <Image src={AVATAR} variant="avatar" size="6rem" mr={2} />
        </Flex>
        <Flex flexWrap="wrap" alignItems="center" mt={3}>
          <Image src={AVATAR} variant="avatar" size="2rem" borderRadius={6} mr={2} />
          <Image src={AVATAR} variant="avatar" size="4rem" borderRadius={6} mr={2} />
          <Image src={AVATAR} variant="avatar" size="6rem" borderRadius={6} mr={2} />
        </Flex>
        <Box mt={3}>
          <Image src="https://source.unsplash.com/random?sky" boxShadow="default" borderRadius={6} />
        </Box>
      </Box>
    </Box>
  );
}

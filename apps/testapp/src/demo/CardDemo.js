import { Button } from "@jag-ui-react/button";
import { Box, Flex, Divider, Grid, Heading, Icon, Image, Text } from "jag-ui-react";
import React from "react";
import { FaChartBar, FaChartLine, FaEllipsisH } from "react-icons/fa";

// const IMG = "https://via.placeholder.com/800/f2f2f2/fff.png";
/* 
const ImgCard = ({ title }) => {
  return (
    <Box
      sx={{
        px: 4,
        py: 6,
        backgroundImage: "url(https://source.unsplash.com/random/1024x768)",
        backgroundSize: "cover",
        borderRadius: 8,
        color: "light",
        bg: "gray",
      }}>
      <Heading textAlign="center" fontSize={[5, 6]}>
        {title}
      </Heading>
    </Box>
  );
};
 */
const MyCustomCard = ({ icon, ...props }) => {
  return (
    <Box boxShadow="default" bg="bg2" mb={3} {...props}>
      <Flex px={3} py={2}>
        <Box flexGrow={1}>
          <Heading>Card Title</Heading>
          <Text>Card Description</Text>
        </Box>
        <Button>
          <FaEllipsisH />
        </Button>
      </Flex>
      <Divider />
      <Flex justifyContent="center">{icon}</Flex>
    </Box>
  );
};
const MyCustomCard2 = ({ icon, ...props }) => {
  return (
    <Box boxShadow="default" bg="bg1" mb={3} {...props}>
      <Flex justifyContent="center">{icon}</Flex>
      <Flex px={3} py={2}>
        <Box flexGrow={1}>
          <Heading>Card Title</Heading>
          <Text>Card Description</Text>
        </Box>
        <Button>
          <FaEllipsisH />
        </Button>
      </Flex>
    </Box>
  );
};

const MyImageCard = ({ icon, image }) => {
  return (
    <Box boxShadow="default" bg="bg2" mb={3}>
      {image && <Flex justifyContent="center">{image}</Flex>}
      {icon && <Flex justifyContent="center">{icon}</Flex>}
      <Flex px={3} py={2}>
        <Box flexGrow={1}>
          <Heading>Card Title</Heading>
          <Text>Card Description</Text>
        </Box>
        <Button variant="icon">
          <FaEllipsisH />
        </Button>
      </Flex>
    </Box>
  );
};

const MyCustomImageCard = ({ imageUrl }) => {
  return (
    <Box
      mb={3}
      sx={{
        display: "flex",
        height: "20rem",
        backgroundImage: `url(${imageUrl})`,
        boxShadow: 3,
        borderRadius: 6,
      }}>
      {/* {image && <Flex justifyContent="center">{image}</Flex>} */}
      {/* {icon && <Flex justifyContent="center">{icon}</Flex>} */}
      <Flex px={3} py={2} mt="auto" flexGrow={1}>
        <Box flexGrow={1}>
          <Heading color="white">Card Title</Heading>
          <Text color="white">Card Description</Text>
        </Box>
        <Button variant="icon" color="white">
          <FaEllipsisH />
        </Button>
      </Flex>
    </Box>
  );
};

export default function CardDemo() {
  return (
    <>
      <Heading mt={5}>Button Demo</Heading>
      <Divider />

      <Box my={3}>
        <MyCustomCard icon={<Icon icon={<FaChartBar size={"32rem"} />} />} />
        <MyCustomCard icon={<Icon icon={<FaChartLine size={"32rem"} />} />} />

        <Grid columns={[1, 2, 3, 4]}>
          <MyCustomCard icon={<Icon icon={<FaChartBar size={"12rem"} />} />} />
          <MyCustomCard icon={<Icon icon={<FaChartLine size={"12rem"} />} />} />
          <MyCustomCard icon={<Icon icon={<FaChartLine size={"12rem"} />} />} />
          <MyCustomCard icon={<Icon icon={<FaChartBar size={"12rem"} />} />} />
          <MyCustomCard2 icon={<Icon icon={<FaChartLine size={"12rem"} />} />} />
          <MyCustomCard2 icon={<Icon icon={<FaChartBar size={"12rem"} />} />} />
          <MyCustomCard2 icon={<Icon icon={<FaChartLine size={"12rem"} />} />} />
          <MyCustomCard2 icon={<Icon icon={<FaChartLine size={"12rem"} />} />} />
          <MyCustomCard icon={<Icon icon={<FaChartLine size={"12rem"} />} />} />
          <MyCustomCard icon={<Icon icon={<FaChartLine size={"12rem"} />} />} />
          <MyCustomCard icon={<Icon icon={<FaChartBar size={"12rem"} />} />} />
          <MyCustomCard icon={<Icon icon={<FaChartLine size={"12rem"} />} />} />
        </Grid>

        <Grid columns={[1, 2, 3, 4]}>
          <MyImageCard image={<Image src="https://source.unsplash.com/random?space" width="full" height={"15rem"} />} />
          <MyImageCard image={<Image src="https://source.unsplash.com/random" width="full" height={"15rem"} />} />
          <MyImageCard image={<Image src="https://source.unsplash.com/random?sky" width="full" height={"15rem"} />} />
          <MyImageCard image={<Image src="https://source.unsplash.com/random?space" width="full" height={"15rem"} />} />
          <MyImageCard image={<Image src="https://source.unsplash.com/random" width="full" height={"15rem"} />} />
          <MyImageCard image={<Image src="https://source.unsplash.com/random?sky" width="full" height={"15rem"} />} />
        </Grid>

        <Grid columns={[1, 2, 3, 4]}>
          <MyCustomImageCard imageUrl="https://source.unsplash.com/random?space" />
          <MyCustomImageCard imageUrl="https://source.unsplash.com/random?house" />
          <MyCustomImageCard imageUrl="https://source.unsplash.com/random?sky" />
          <MyCustomImageCard imageUrl="https://source.unsplash.com/random?space" />
          <MyCustomImageCard imageUrl="https://source.unsplash.com/random" />
          <MyCustomImageCard imageUrl="https://source.unsplash.com/random?sky" />
        </Grid>

        <Heading variant="styles.h5" mt={4} mb={3}>
          Responsive Widths
        </Heading>

        <Box>
          <MyCustomCard width={[300, 450, 800]} mx="auto" icon={<Icon icon={<FaChartLine size={"12rem"} />} />} />
          <MyCustomCard width={[300, 450, 800]} mx="auto" icon={<Icon icon={<FaChartLine size={"12rem"} />} />} />
          <MyCustomCard width={[300, 450, 800]} mx="auto" icon={<Icon icon={<FaChartBar size={"12rem"} />} />} />
        </Box>
      </Box>
    </>
  );
}

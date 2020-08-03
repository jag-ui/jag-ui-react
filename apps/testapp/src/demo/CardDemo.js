import React from "react";
import { Box } from "@jag-ui-react/core";
import { Heading, Divider, Card, Image, Text, Grid } from "@jag-ui-react/components";

const IMG = "https://via.placeholder.com/800/f2f2f2/fff.png";

const ImgCard = ({ title }) => {
  return (
    <Box
      sx={{
        px: 4,
        py: 6,
        backgroundImage: "url(https://source.unsplash.com/random/1024x768)",
        backgroundSize: "cover",
        borderRadius: 8,
        color: "white",
        bg: "gray",
      }}>
      <Heading textAlign="center" fontSize={[5, 6]}>
        {title}
      </Heading>
    </Box>
  );
};

export default function CardDemo() {
  return (
    <Box>
      <Heading>Card Demo</Heading>
      <Divider />
      <Box my={10} p={4}>
        <Card
          sx={{
            maxWidth: 256,
          }}>
          <Image src={IMG} />
          <Text>Card</Text>
        </Card>

        <Box>
          <Card mb={3} variant="primary">
            <Heading>Sample Card</Heading>
            <Text>Sample Card</Text>
          </Card>
          <Card width={[256, 320]}>
            <Image src="https://source.unsplash.com/random?space" />
            <Text>Image Card</Text>
          </Card>
          <Card width={[256, 320]} mx="auto">
            <Image src="https://source.unsplash.com/random?space" />
            <Text>Image Card</Text>
          </Card>
          <Card width={[256, 320]} ml="auto">
            <Image src="https://source.unsplash.com/random?space" />
            <Text>Image Card</Text>
          </Card>
        </Box>

        <Grid columns={[1, 2, 3, 4]}>
          <Card width={1}>
            <Image src={IMG} />
            <Heading>Card1</Heading>
          </Card>
          <ImgCard width={1} title="Card2"></ImgCard>
          <Card width={1}>
            <Image src={IMG} />
            <Heading>Card3</Heading>
          </Card>
          <ImgCard width={1} title="Card4"></ImgCard>
          <Card width={1}>
            <Image src={IMG} />
            <Heading>Card5</Heading>
          </Card>
          <Card width={1}>
            <Image src={IMG} />
            <Heading>Card6</Heading>
          </Card>
          <Card width={1}>
            <Image src={IMG} />
            <Heading>Card7</Heading>
          </Card>
        </Grid>
      </Box>
    </Box>
  );
}

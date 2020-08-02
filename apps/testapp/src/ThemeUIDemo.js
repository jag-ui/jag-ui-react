import React from 'react';
import {
  Box,
  Button,
  Card,
  Checkbox,
  Donut,
  Field,
  Flex,
  Grid,
  Heading,
  Image,
  Input,
  Label,
  Link,
  Progress,
  Radio,
  Select,
  Slider,
  Text,
  Textarea,
  Spinner,
  Badge,
  Avatar,
  Alert,
  Close,
  Divider,
  Embed,
  AspectRatio,
  Container,
  NavLink,
  Message,
  IconButton,
  MenuButton,
  Styled,
} from 'theme-ui';

const IMG = 'https://via.placeholder.com/800/f2f2f2/fff.png';

const Form = () => {
  return (
    <Box as="form" onSubmit={e => e.preventDefault()}>
      <Label htmlFor="username">Username</Label>
      <Input name="username" id="username" mb={3} />
      <Label htmlFor="password">Password</Label>
      <Input type="password" name="password" id="password" mb={3} />
      <Box>
        <Label mb={3}>
          <Checkbox />
          Remember me
        </Label>
      </Box>
      <Label htmlFor="sound">Sound</Label>
      <Select name="sound" id="sound" mb={3}>
        <option>Beep</option>
        <option>Boop</option>
        <option>Blip</option>
      </Select>
      <Label htmlFor="comment">Comment</Label>
      <Textarea name="comment" id="comment" rows="6" mb={3} />
      <Flex mb={3}>
        <Label>
          <Radio name="letter" /> Alpha
        </Label>
        <Label>
          <Radio name="letter" /> Bravo
        </Label>
        <Label>
          <Radio name="letter" /> Charlie
        </Label>
      </Flex>

      <Field label="Email" name="email" defaultValue="" />

      <Label>Slider</Label>
      <Slider mb={3} />
      <Button>Submit</Button>
    </Box>
  );
};

const ThemeUIDemo = () => {
  return (
    <Box variant="styles.root" m={5}>
      <Styled.h1 sx={{ color: 'primary', mb: 3 }}>Hello Theme UI</Styled.h1>
      <Styled.p>Start editing to see some magic happen!</Styled.p>

      <Text
        sx={{
          fontSize: 4,
          fontWeight: 'bold',
        }}
      >
        Hello
      </Text>
      <Text variant="caps">Hello</Text>

      <Heading>Hello</Heading>
      <Heading as="h3">Subhead</Heading>

      <Box p={4} my={3} color="white" bg="primary">
        Beep
      </Box>
      <Flex my={3}>
        <Box p={2} bg="primary" sx={{ flex: '1 1 auto' }}>
          Flex
        </Box>
        <Box p={2} bg="muted">
          Box
        </Box>
      </Flex>
      <Grid width={[128, null, 192]} my={5}>
        <Box bg="primary">Box</Box>
        <Box bg="muted">Box</Box>
        <Box bg="primary">Box</Box>
        <Box bg="muted">Box</Box>
      </Grid>
      <Grid gap={2} columns={[2, null, 4]} my={5}>
        <Box bg="primary">Box</Box>
        <Box bg="muted">Box</Box>
        <Box bg="primary">Box</Box>
        <Box bg="muted">Box</Box>
      </Grid>
      <Grid gap={2} columns={[2, '1fr 2fr']} my={5}>
        <Box bg="primary">Box</Box>
        <Box bg="muted">Box</Box>
        <Box bg="primary">Box</Box>
        <Box bg="muted">Box</Box>
      </Grid>

      <Box my={3}>
        <Button mr={2} variant="primary">
          Beep
        </Button>
        <Button variant="secondary">Boop</Button>
      </Box>

      <Link href="#!">Hello</Link>

      <Image src={IMG} />

      <Image src={IMG} variant="avatar" />

      <Card
        sx={{
          maxWidth: 256,
        }}
      >
        <Image src={IMG} />
        <Text>Card</Text>
      </Card>

      <Progress max={1} value={1 / 2}>
        50%
      </Progress>

      <Donut value={1 / 2} />

      <Spinner />

      <Badge>Badge</Badge>

      <Heading>
        Components
        <Badge variant="accent">New</Badge>
        <Badge variant="outline" ml={1}>
          Cool
        </Badge>
      </Heading>

      <Avatar src={IMG} />
      <Badge variant="circle" ml={-3} mt={-3}>
        16
      </Badge>

      <Alert mb={3}>
        Beep boop, this is an alert!
        <Close ml="auto" mr={-2} />
      </Alert>

      <Alert variant="secondary" mb={2}>
        Secondary
      </Alert>
      <Alert variant="accent" mb={2}>
        Accent
      </Alert>
      <Alert variant="muted" mb={2}>
        muted
      </Alert>

      <Divider />

      <Embed src="https://www.youtube.com/embed/GNCd_ERZvZM" />

      <AspectRatio
        ratio={16 / 9}
        sx={{
          p: 4,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'background',
          bg: 'primary',
        }}
      >
        <Heading>Aspect Ratio</Heading>
      </AspectRatio>

      <AspectRatio ratio={16 / 9}>
        <Image
          src={IMG}
          sx={{
            objectFit: 'cover',
          }}
        />
      </AspectRatio>

      <Container p={4} bg="muted">
        Centered container
      </Container>

      <Flex as="nav">
        <NavLink href="#!" p={2}>
          Home
        </NavLink>
        <NavLink href="#!" p={2}>
          Blog
        </NavLink>
        <NavLink href="#!" p={2}>
          About
        </NavLink>
      </Flex>

      <Message>This is just a message for someone to read</Message>

      <IconButton aria-label="Toggle dark mode">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentcolor">
          <circle r={11} cx={12} cy={12} fill="none" stroke="currentcolor" strokeWidth={2} />
        </svg>
      </IconButton>

      <MenuButton aria-label="Toggle Menu" />

      <Form />
    </Box>
  );
};

export default ThemeUIDemo;

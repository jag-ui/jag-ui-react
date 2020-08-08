import { Button, Divider, Heading } from "@jag-ui-react/components";
import { Box, Flex } from "@jag-ui-react/core";
import { Checkbox, Field, Input, Label, Radio, Select, Slider, Switch, Textarea } from "@jag-ui-react/form";
import React, { useState } from "react";

function FormDemo1() {
  const [gender, setGender] = useState("male");
  const [switch1Val, setSwitch1Val] = useState(true);
  const [switch2Val, setSwitch2Val] = useState(true);
  return (
    <Box my={10} p={4}>
      <Heading mb={3}>Form1</Heading>
      <Box as="form" onSubmit={(e) => e.preventDefault()}>
        <Flex flexWrap="wrap">
          <Box pr={2} py={2} width={[1, 1 / 2]}>
            <Label htmlFor="firstName">First Name</Label>
            <Input id="firstName" name="firstName" defaultValue="Jagadeesh" />
          </Box>
          <Box pl={2} py={2} width={[1, 1 / 2]}>
            <Label htmlFor="lastName">Last Name</Label>
            <Input id="lastName" name="lastName" defaultValue="Palaniappan" />
          </Box>
        </Flex>

        <Flex mb={3}>
          <Box width={1}>
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" name="description" sx={{ height: "150px" }} />
          </Box>
        </Flex>
        <Flex flexWrap="wrap">
          <Box pr={2} py={2} width={[1, 1 / 2]}>
            <Label htmlFor="location">Location</Label>
            <Select id="location" name="location" defaultValue="NYC">
              <option>NYC</option>
              <option>DC</option>
              <option>ATX</option>
              <option>SF</option>
              <option>LA</option>
            </Select>
          </Box>
          <Box pl={2} py={2} width={[1, 1 / 2]}>
            <Label mr={3}>Gender:</Label>
            <Flex mb={3} py={2}>
              <Label htmlFor="male" mr={3}>
                <Radio
                  id="male"
                  name="sex"
                  value="male"
                  checked={gender === "male"}
                  onClick={() => setGender("male")}
                />
                Male
              </Label>
              <Label htmlFor="female">
                <Radio
                  id="female"
                  name="sex"
                  value="female"
                  checked={gender === "female"}
                  onClick={() => setGender("female")}
                />
                Female
              </Label>
            </Flex>
          </Box>
        </Flex>

        <Field label="Email" name="email" defaultValue="" mb={3} />

        <Box>
          <Label mr={3}>Checkbox:</Label>
          <Flex mb={3} py={2} flexWrap="wrap">
            <Label htmlFor="option1" mr={3}>
              <Checkbox id="option1" name="option1" />
              Option1
            </Label>
            <Label htmlFor="option2" mr={3}>
              <Checkbox id="option2" name="option2" />
              Option2
            </Label>
            <Label htmlFor="option3" mr={3}>
              <Checkbox id="option3" name="option3" />
              Option3
            </Label>
            <Label htmlFor="option4" mr={3}>
              <Checkbox id="option4" name="option4" />
              Option4
            </Label>
          </Flex>
        </Box>

        <Flex mb={3}>
          <Box width={1} mr={3}>
            <Label htmlFor="percent">Slider (input range) </Label>
            <Slider id="percent" name="percent" defaultValue={25} />
          </Box>
          <Box width={1}>
            <Label htmlFor="switch1">Switch1</Label>
            <Switch id="switch1" checked={switch1Val} onClick={() => setSwitch1Val(!switch1Val)} />
          </Box>
          <Box width={1}>
            <Label htmlFor="switch2">Switch2</Label>
            <Switch id="switch2" checked={switch2Val} onClick={() => setSwitch2Val(!switch2Val)} />
          </Box>
        </Flex>

        <Flex mb={3}>
          <Box ml="auto">
            <Button variant="secondary" mr={2}>
              Cancel
            </Button>
            <Button variant="primary">Save</Button>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

function FormDemo2() {
  const [gender, setGender] = useState("male");
  const [switch1Val, setSwitch1Val] = useState(true);
  const [switch2Val, setSwitch2Val] = useState(true);

  return (
    <Box my={10} p={4} bg={"#f7fafc"}>
      <Heading mb={3}>Form1</Heading>
      <Box as="form" onSubmit={(e) => e.preventDefault()}>
        <Flex flexWrap="wrap">
          <Box pr={2} py={2} width={[1, 1 / 2]}>
            <Label htmlFor="firstName">First Name</Label>
            <Input id="firstName" name="firstName" defaultValue="Jagadeesh" variant="shadowInput" />
          </Box>
          <Box pl={2} py={2} width={[1, 1 / 2]}>
            <Label htmlFor="lastName">Last Name</Label>
            <Input id="lastName" name="lastName" defaultValue="Palaniappan" variant="shadowInput" />
          </Box>
        </Flex>
        <Flex mb={3}>
          <Box width={1}>
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" name="description" variant="shadowTextarea" sx={{ height: "150px" }} />
          </Box>
        </Flex>

        <Flex flexWrap="wrap">
          <Box pr={2} py={2} width={[1, 1 / 2]}>
            <Label htmlFor="location">Location</Label>
            <Select id="location" name="location" defaultValue="NYC" variant="shadowSelect">
              <option>NYC</option>
              <option>DC</option>
              <option>ATX</option>
              <option>SF</option>
              <option>LA</option>
            </Select>
          </Box>
          <Box pl={2} py={2} width={[1, 1 / 2]}>
            <Label mr={3}>Gender: </Label>
            <Flex mb={3} py={2}>
              <Label htmlFor="male2" mr={3}>
                <Radio
                  id="male2"
                  name="sex"
                  value="male"
                  checked={gender === "male"}
                  onClick={() => setGender("male")}
                />
                Male
              </Label>
              <Label htmlFor="female2">
                <Radio
                  id="female2"
                  name="sex"
                  value="female"
                  checked={gender === "female"}
                  onClick={() => setGender("female")}
                />
                Female
              </Label>
            </Flex>
          </Box>
        </Flex>

        <Field label="Email" name="email" defaultValue="" mb={3} />

        <Box>
          <Label mr={3}>Checkbox:</Label>
          <Flex mb={3} py={2} flexWrap="wrap">
            <Label htmlFor="option1" mr={3}>
              <Checkbox id="option1" name="option1" />
              Option1
            </Label>
            <Label htmlFor="option2" mr={3}>
              <Checkbox id="option2" name="option2" />
              Option2
            </Label>
            <Label htmlFor="option3" mr={3}>
              <Checkbox id="option3" name="option3" />
              Option3
            </Label>
            <Label htmlFor="option4" mr={3}>
              <Checkbox id="option4" name="option4" />
              Option4
            </Label>
          </Flex>
        </Box>

        <Flex mb={3}>
          <Box width={1} mr={3}>
            <Label htmlFor="percent">Slider (input range) </Label>
            <Slider id="percent" name="percent" defaultValue={25} />
          </Box>
          <Box width={1}>
            <Label htmlFor="switch1">Switch1</Label>
            <Switch id="switch1" checked={switch1Val} onClick={() => setSwitch1Val(!switch1Val)} />
          </Box>
          <Box width={1}>
            <Label htmlFor="switch2">Switch2</Label>
            <Switch id="switch2" checked={switch2Val} onClick={() => setSwitch2Val(!switch2Val)} />
          </Box>
        </Flex>

        <Flex mb={3}>
          <Box ml="auto">
            <Button variant="secondary" mr={2}>
              Cancel
            </Button>
            <Button variant="primary">Save</Button>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default function FormDemo() {
  return (
    <Box>
      <Heading>Form Demo</Heading>
      <Divider />
      <FormDemo1 />
      <FormDemo2 />
    </Box>
  );
}

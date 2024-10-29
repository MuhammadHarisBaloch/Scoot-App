import { Accordion, Box, Group, Stack, Text, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import clasess from "/app/page.module.css";
const items1 = [
  {
    heading: "How do I download the app?",
    description:
      "To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page.",
  },
  {
    heading: "Can I find a nearby Scoots?",
    description:
      "To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page.",
  },
  {
    heading: "Do I need a license to ride?",
    description:
      "To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page.",
  },
];

const items2 = [
  {
    heading: "Should I wear a helmet?",
    description:
      "To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page.",
  },
  {
    heading: "How about the rules & regulations?",
    description:
      "To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page.",
  },
  {
    heading: "What if I damage my Scoot?",
    description:
      "To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page.",
  },
];

export default function FAQPortion() {
  const isMobile = useMediaQuery("(max-width:768px)");

  const faq1 = () => (
    <>
      <Group align="start" justify={isMobile ? "center" : "space-between"}>
        <Text fz={{ sm: 40, base: 24 }} fw="bold" ff="monospace " c="#495567">
          How it works
        </Text>
        <Accordion w={{ sm: "60%", base: "100%" }} variant="separated">
          {items1.map((item) => (
            <Accordion.Item key={item.heading} value={item.heading}>
              <Accordion.Control className={clasess.accordian}>
                <Title
                  fz={{ sm: 24, base: 18 }}
                  fw="bold"
                  ff="monospace"
                  c="#495567"
                >
                  {item.heading}
                </Title>
              </Accordion.Control>
              <Accordion.Panel>
                <Text fz={15} fw="normal" ff="monospace" c="#495567">
                  {item.description}
                </Text>
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </Group>
    </>
  );

  const faq2 = () => (
    <>
      <Group align="start" justify={isMobile ? "center" : "space-between"}>
        <Text fz={{ sm: 40, base: 24 }} fw="bold" ff="monospace " c="#495567">
          Safe driving
        </Text>
        <Accordion w={{ sm: "60%", base: "100%" }} c="blue" variant="separated">
          {items2.map((item) => (
            <Accordion.Item key={item.heading} value={item.heading}>
              <Accordion.Control className={clasess.accordian}>
                <Title
                  fz={{ sm: 24, base: 18 }}
                  fw="bold"
                  ff="monospace"
                  c="#495567"
                >
                  {item.heading}
                </Title>
              </Accordion.Control>
              <Accordion.Panel>
                <Text fz={15} fw="normal" ff="monospace" c="#495567">
                  {item.description}
                </Text>
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </Group>
    </>
  );

  return (
    <>
      <Box px={{ sm: "10rem", base: 32 }} mb="5rem">
        <Stack gap="4rem" align="center">
          <Text fz={{ sm: 48, base: 32 }} fw="bold" ff="monospace " c="#495567">
            FAQs
          </Text>
          <Box w="100%">
            <Stack gap="3rem">
              {faq1()}
              {faq2()}
            </Stack>
          </Box>
        </Stack>
      </Box>
    </>
  );
}

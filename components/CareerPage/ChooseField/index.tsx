import { Box, Button, Card, Group, Stack, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import clasess from "/app/page.module.css";
export default function ChooseField() {
  const isMobile = useMediaQuery("(max-width:768px)");
  const fieldCard = (field: string, location: string) => (
    <>
      <Card bg="#F2F5F9">
        <Group
          align={isMobile ? "center" : "start"}
          justify={isMobile ? "center" : "space-between"}
          px={{ sm: "3rem", base: "xs" }}
        >
          <Stack gap={0} align={isMobile ? "center" : "start"}>
            <Text
              fz={24}
              fw="bold"
              ff="monospace"
              c="#495567"
              ta={{ sm: "start", base: "center" }}
            >
              {field}
            </Text>
            <Text fz={15} fw="normal" ff="monospace" c="#495567">
              {location}
            </Text>
          </Stack>
          <Button className={clasess.defaultBtn}>Apply</Button>
        </Group>
      </Card>
    </>
  );

  return (
    <>
      <Box px={{ sm: "10rem", base: 32 }} pt={{ sm: "6rem", base: 30 }}>
        <Stack gap="2rem">
          {fieldCard("General Manager", "Jakarta, Indonesia")}
          {fieldCard("UI/UX Designer", "Yokohama, Japan")}
          {fieldCard("Blog Content Copywriter", "New York, United States")}
          {fieldCard("Graphic Designer", "New York, United States")}
          {fieldCard("Fleet Supervisor", "Jakarta, Indonesia")}
          {fieldCard("UX Analyst", "London, United Kingdom")}
        </Stack>
      </Box>
    </>
  );
}

"use client";
import Images from "@/constants/Images";
import { Box, Grid, Stack, Image, Text, Button } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import clasess from "/app/page.module.css";
export default function AboutMission() {
  const isMobile = useMediaQuery("(max-width:768px)");
  return (
    <>
      <Box>
        <Grid gutter={0} py={{ sm: "8rem", base: 70 }} align="center">
          <Grid.Col pl="2rem" span={12} hiddenFrom="sm">
            <Image src={Images.mobManTakingMeeting}></Image>
          </Grid.Col>
          <Grid.Col
            mt={{ sm: "", base: 56 }}
            span={{ sm: 6, base: 12 }}
            pl={{ sm: "7rem" }}
          >
            <Stack
              gap={isMobile ? "xl" : "md"}
              px={{ sm: "", base: "lg" }}
              align={isMobile ? "center" : "start"}
            >
              <Text
                ta={{ sm: "start", base: "center" }}
                fz={{ sm: 48, base: 32 }}
                fw="bold"
                ff="monospace"
                c="#495567"
                style={{ lineHeight: 1 }}
              >
                Care to join our <br />
                mission?
              </Text>
              <Text
                fz={15}
                fw="normal"
                ff="monospace"
                c="#939CAA"
                ta={{ sm: "start", base: "center" }}
              >
                We’re always looking for ambitious individuals to help us on our
                journey. If you’re passionate about our mission to provide
                clean, accessible transport to improve urban living we want to
                hear from you!
              </Text>
              <Button className={clasess.defaultBtn}>Say Hello</Button>
            </Stack>
          </Grid.Col>
          <Grid.Col pl="5rem" span={6} visibleFrom="sm">
            <Image src={Images.manTakingMeeting}></Image>
          </Grid.Col>
        </Grid>
      </Box>
    </>
  );
}

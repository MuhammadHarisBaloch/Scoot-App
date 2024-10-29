"use client";
import ArrowImages from "@/constants/Arrow";
import LogoImages from "@/constants/LogoImages";
import { Box, Grid, Image, Stack, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

export default function AppFlowPortion() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const appFlows = (image: string, title: string, description: string) => (
    <>
      <Grid.Col span={{ sm: 4, base: 12 }}>
        <Stack gap="lg" align={isMobile ? "center" : "start"}>
          <Image w={96} src={image}></Image>
          <Text
            ta={{ sm: "start", base: "center" }}
            fw="bold"
            fz={24}
            ff="monospace"
            c="#495567"
          >
            {title}
          </Text>
          <Text
            ta={{ sm: "start", base: "center" }}
            fw="normal"
            fz={15}
            ff="monospace"
            c="#939CAA"
            style={{ lineHeight: 1.2 }}
          >
            {description}
          </Text>
        </Stack>
      </Grid.Col>
    </>
  );

  return (
    <>
      <Box w="100%" my="13rem">
        <Image
          visibleFrom="sm"
          w="70%"
          mb="5rem"
          src={ArrowImages.whiteLine}
        ></Image>
        <Grid
          px={{ sm: "7rem", base: 32 }}
          mt="-9.5rem"
          gutter={{ sm: "xl", base: "3rem" }}
        >
          {appFlows(
            LogoImages.circleMobileLogo,
            "Locate with app",
            "Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with most demand, so one should never be too far away. "
          )}
          {appFlows(
            LogoImages.circleBikeLogo,
            "Pick your scooter",
            "We show the most important info for the scooters closest to you. So you know how much charge they have left and can see roughly how much it will cost."
          )}
          {appFlows(
            LogoImages.circleBikeWithManLogo,
            "Enjoy the ride",
            "Scan the QR code and the bike will unlock. Retract the cable lock, put on a helmet, and you’re off! Always lock bikes away from walkways and accessibility ramps."
          )}
        </Grid>
      </Box>
    </>
  );
}

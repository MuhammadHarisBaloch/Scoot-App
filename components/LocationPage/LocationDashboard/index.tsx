import Images from "@/constants/Images";
import { BackgroundImage, Box, Text, Image, Stack } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

export default function LocationDashboard() {
  const isMobile = useMediaQuery("(max-width:768px)");
  return (
    <>
      <Box w="100%">
        <BackgroundImage
          py="4rem"
          px={{ sm: "9rem", base: "0" }}
          w="100%"
          h="auto"
          src={
            isMobile
              ? "/BackgroundImage/location-mob-background.png"
              : "/BackgroundImage/location-dashboard-background.png"
          }
        >
          <Text
            fz={{ sm: 50, base: 40 }}
            ta={{ sm: "start", base: "center" }}
            fw="bold"
            ff="monospace"
            c="white"
          >
            Locations
          </Text>
        </BackgroundImage>
        <Box py={{ sm: 120, base: 70 }} px={{ sm: 165, base: 32 }}>
          <Image visibleFrom="sm" src={Images.googleMap} />
          <Stack hiddenFrom="sm" gap="5rem">
            <Image src={Images.mobGoogleMap} />
            <Image src={Images.cityNames} />
          </Stack>
        </Box>
      </Box>
    </>
  );
}

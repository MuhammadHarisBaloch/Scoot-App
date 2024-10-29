import Images from "@/constants/Images";
import { Box, BackgroundImage, Text, Image, Stack } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

export default function CareersDashboard() {
  const isMobile = useMediaQuery("(max-width:768px)");
  return (
    <>
      <Box w="100%">
        <BackgroundImage
          py="4rem"
          px="8rem"
          w="100%"
          h={200}
          src={
            isMobile
              ? "/BackgroundImage/location-mob-background.png"
              : "/BackgroundImage/location-dashboard-background.png"
          }
        >
          <Text
            visibleFrom="sm"
            fz={{ sm: 50, base: 40 }}
            fw="bold"
            ff="monospace"
            c="white"
          >
            Careers
          </Text>
          <Stack align="center">
            <Text
              hiddenFrom="sm"
              fz={{ sm: 50, base: 40 }}
              fw="bold"
              ff="monospace"
              c="white"
            >
              Careers
            </Text>
          </Stack>
        </BackgroundImage>
      </Box>
    </>
  );
}

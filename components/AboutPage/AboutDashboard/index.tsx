import { BackgroundImage, Box, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

export default function AboutDashboard() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <>
      <Box w="100%">
        <BackgroundImage
          py="4rem"
          px="9rem"
          w="100%"
          h={200}
          src={
            isMobile
              ? "/BackgroundImage/about-mob-background.jpg"
              : "/BackgroundImage/about-background.png"
          }
        >
          <Text fz={{ sm: 50, base: 40 }} fw="bold" ff="monospace" c="white">
            About
          </Text>
        </BackgroundImage>
      </Box>
    </>
  );
}

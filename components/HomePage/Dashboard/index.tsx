"use client";
import ArrowImages from "@/constants/Arrow";
import {
  BackgroundImage,
  Flex,
  Stack,
  Text,
  Image,
  Box,
  Button,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import clasess from "/app/page.module.css";
export default function Dashboard() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <>
      <Box w={{ sm: "100%", base: "auto" }} h="100vh">
        <BackgroundImage
          w="100%"
          h="100vh"
          src={
            isMobile
              ? "/BackgroundImage/mob-dashboard-background.png"
              : "/BackgroundImage/dashboard-background.png"
          }
        >
          <Stack
            pt={{ sm: "4rem", base: "7rem" }}
            px={{ base: "31", sm: 0 }}
            align={isMobile ? "center" : "start"}
            gap={isMobile ? "xl" : "xs"}
          >
            <Text
              ml={{ sm: "8rem" }}
              fw="bold"
              ff="monospace"
              c="white"
              ta={{ sm: "start", base: "center" }}
              fz={{ sm: "56", base: "40" }}
              style={{ lineHeight: 1 }}
            >
              {isMobile ? (
                <>
                  Scooter <br /> sharing made
                  <br /> simple
                </>
              ) : (
                <>
                  Scooter sharing <br /> made simple
                </>
              )}
            </Text>
            <Flex align="center" w="100%">
              <Image
                visibleFrom="sm"
                src={ArrowImages.yellowArrowBackPart}
                w="auto"
                h="auto"
              />
              <Stack
                align={isMobile ? "center" : "start"}
                pt={{ sm: "5rem", base: "xs" }}
                px={{ sm: "4rem" }}
              >
                <Text
                  ta={{ sm: "start", base: "center" }}
                  fw="normal"
                  fz={{ sm: "h4", base: "15" }}
                  ff="monospace"
                  c="white"
                >
                  Scoot takes the hassle out of urban mobility. Our bikes are
                  placed in convenient locations in each of our cities. Use our
                  app to locate the nearest bike, unlock it with a tap, and
                  you’re away!
                </Text>
                <Button mt="2rem" className={clasess.defaultBtn}>
                  Get Scootin
                </Button>
              </Stack>
              <Image
                mt="6rem"
                visibleFrom="sm"
                src={ArrowImages.yellowArrowFrontPart}
                w="auto"
                h="auto"
              />
            </Flex>
          </Stack>
          <Image
            hiddenFrom="sm"
            w="9rem"
            src={ArrowImages.mobYellowArrowHalfFrontPart}
          />
        </BackgroundImage>
      </Box>
    </>
  );
}

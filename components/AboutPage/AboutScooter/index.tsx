import Images from "@/constants/Images";
import { Box, Grid, Stack, Image, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { isMobile } from "react-device-detect";

export default function AboutScooter() {
  const isMobile = useMediaQuery("(max-width:768px)");
  return (
    <>
      <Box>
        <Grid gutter={0} py={{ sm: "8rem", base: "4rem" }} align="center">
          <Grid.Col span={6} hiddenFrom="sm">
            <Image w="auto" h="20rem" src={Images.mobCircleTrain}></Image>
          </Grid.Col>
          <Grid.Col pr="10rem" span={6} visibleFrom="sm">
            <Image src={Images.circleTrain}></Image>
          </Grid.Col>
          <Grid.Col
            span={{ sm: 6, base: 12 }}
            px={{ sm: "0", base: "lg" }}
            pt={{ sm: 0, base: 70 }}
          >
            <Stack
              align={isMobile ? "center" : "start"}
              pr={{ sm: "8rem", base: "0" }}
            >
              <Text
                ta={{ sm: "start", base: "center" }}
                fz={{ sm: 48, base: 32 }}
                fw="bold"
                ff="monospace"
                c="#495567"
                style={{ lineHeight: 1 }}
              >
                Better urban <br />
                living
              </Text>
              <Text
                fz={15}
                fw="normal"
                ff="monospace"
                c="#939CAA"
                ta={{ sm: "start", base: "center" }}
              >
                We’re helping connect cities and bring people closer together.
                Our scooters are also fully-electric and we offset the minimal
                carbon footprint for each ride.
              </Text>
            </Stack>
          </Grid.Col>
        </Grid>
      </Box>
    </>
  );
}

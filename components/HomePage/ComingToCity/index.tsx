import Images from "@/constants/Images";
import { Box, Button, Center, Grid, Image, Stack, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import clasess from "/app/page.module.css";

export default function ComingToCity() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <>
      <Box mt={{ sm: "10rem", base: 120 }} w="100%">
        <Grid align="center" gutter={{ sm: 0, base: 0 }}>
          <Grid.Col span={6} visibleFrom="sm">
            <Image h="20rem" w="auto" src={Images.circleCity}></Image>
          </Grid.Col>
          <Grid.Col span={12} hiddenFrom="sm">
            <Image h="20rem" w="auto" src={Images.mobCircleCity}></Image>
          </Grid.Col>
          <Grid.Col pt={{ sm: "0", base: "4rem" }} span={{ sm: 6, base: 12 }}>
            <Center>
              <Stack
                align={isMobile ? "center" : "start"}
                gap="lg"
                px={{ sm: 0, base: "xl" }}
              >
                <Text
                  ta={{ sm: "start", base: "center" }}
                  fz={{ sm: 48, base: 32 }}
                  fw="bold"
                  ff="monospace"
                  c="#495567"
                  style={{ lineHeight: 1 }}
                >
                  Coming to a city <br />
                  near you
                </Text>
                <Text
                  ta={{ sm: "start", base: "center" }}
                  fz={15}
                  fw="normal"
                  ff="monospace"
                  c="#939CAA"
                  style={{ lineHeight: 1.2 }}
                >
                  {isMobile ? (
                    <>
                      Scoot is available in 4 major cities so far. We’re
                      expanding rapidly, so be sure to let us know if you want
                      to see us in your hometown. We’re aiming to let our
                      scooters loose on 23 cities over the coming year.
                    </>
                  ) : (
                    <>
                      Scoot is available in 4 major cities so far. We’re
                      expanding <br /> rapidly, so be sure to let us know if you
                      want to see us in <br /> your hometown. We’re aiming to
                      let our scooters loose on 23 <br /> cities over the coming
                      year.
                    </>
                  )}
                </Text>
                <Button className={clasess.defaultBtn}>Learn More</Button>
              </Stack>
            </Center>
          </Grid.Col>
        </Grid>
      </Box>
    </>
  );
}

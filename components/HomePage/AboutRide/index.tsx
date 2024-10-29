import Images from "@/constants/Images";
import { Box, Button, Grid, Stack, Text, Image } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import clasess from "/app/page.module.css";
export default function AboutRide() {
  const isMobile = useMediaQuery("(max-width:768px)");
  return (
    <>
      <Box mt={{ sm: "10rem", base: -80 }}>
        <Grid gutter={0} pl={{ sm: "7.5rem" }} align="center">
          <Grid.Col hiddenFrom="sm" span={12} mb={56}>
            <Stack w="100%" align="end">
              <Image h={340} w={340} src={Images.mobBoyUsingPhone} />
            </Stack>
          </Grid.Col>
          <Grid.Col span={{ sm: 6, base: 12 }}>
            <Stack
              gap={isMobile ? "xl" : "lg"}
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
                Easy to use <br /> riding telemetry
              </Text>
              <Text
                ta={{ sm: "start", base: "center" }}
                fz={15}
                px={{ sm: "0", base: "lg" }}
                fw="normal"
                ff="monospace"
                c="#939CAA"
                style={{ lineHeight: 1.2 }}
              >
                {isMobile ? (
                  <>
                    The Scoot app is available with riding telemetry. This means
                    it can show you your average speed, how long you've been
                    using the scooter, your traveling distance, and many more
                    things all in an easy to use app.
                  </>
                ) : (
                  <>
                    The Scoot app is available with riding telemetry. <br />
                    This means it can show you your average speed, how <br />{" "}
                    long you've been using the scooter, your traveling <br />{" "}
                    distance, and many more things all in an easy to <br /> use
                    app.
                  </>
                )}
              </Text>
              <Button className={clasess.defaultBtn}>Learn More</Button>
            </Stack>
          </Grid.Col>
          <Grid.Col span={6} visibleFrom="sm">
            <Image src={Images.boyUsingPhone} />
          </Grid.Col>
        </Grid>
      </Box>
    </>
  );
}

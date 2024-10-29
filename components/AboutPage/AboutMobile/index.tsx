import Images from "@/constants/Images";
import { Box, Grid, Stack, Text, Image } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

export default function AboutMobile() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <>
      <Box>
        <Grid gutter={0} py={{ sm: "8rem", base: "4rem" }} align="center">
          <Grid.Col span={12} hiddenFrom="sm">
            <Stack>
              <Image w="auto" ml="lg" src={Images.mobGirlUsingPhone}></Image>
            </Stack>
          </Grid.Col>
          <Grid.Col
            mt={{ base: 56 }}
            span={{ sm: 6, base: 12 }}
            pl={{ sm: "8rem" }}
          >
            <Stack align={isMobile ? "center" : "start"}>
              <Text
                ta={{ sm: "start", base: "center" }}
                fz={{ sm: 48, base: 32 }}
                fw="bold"
                ff="monospace"
                c="#495567"
                style={{ lineHeight: 1 }}
              >
                Mobility for the
                <br /> digital era
              </Text>
              <Text
                fz={15}
                fw="normal"
                ff="monospace"
                c="#939CAA"
                px={{ sm: "0", base: "lg" }}
                ta={{ sm: "start", base: "center" }}
              >
                Getting around should be simple (and even fun!) for everyone. We
                embrace technology to provide low cost, smart access to scooters
                at your fingertips.
              </Text>
            </Stack>
          </Grid.Col>
          <Grid.Col pl="5rem" span={6} visibleFrom="sm">
            <Stack>
              <Image src={Images.girlUsingPhone}></Image>
            </Stack>
          </Grid.Col>
        </Grid>
      </Box>
    </>
  );
}

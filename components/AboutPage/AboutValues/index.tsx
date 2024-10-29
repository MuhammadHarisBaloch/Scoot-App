import Banner from "@/constants/Banners";
import { Box, Grid, Stack, Text, Image } from "@mantine/core";

type AboutValuesProps = {
  heading: string;
};
export default function AboutValues({ heading }: AboutValuesProps) {
  const valueBox = (image: string, title: string, description: string) => {
    return (
      <Grid.Col span={{ sm: 4, base: 12 }} px={{ sm: "4rem", base: 32 }}>
        <Stack align="center">
          <Image w="15rem" h="15rem" src={image}></Image>
          <Text fz={24} fw="bold" ff="monospace" c="#495567">
            {title}
          </Text>
          <Text fz={15} fw="normal" ff="monospace" c="#939CAA" ta="center">
            {description}
          </Text>
        </Stack>
      </Grid.Col>
    );
  };

  return (
    <>
      <Box py={{ sm: 0, base: "8rem" }} pb={{ sm: "8rem", base: 0 }}>
        <Stack align="center">
          <Text fz={{ sm: 48, base: 32 }} c="#495567" fw="bold" ff="monospace">
            {heading}
          </Text>
          <Grid gutter={0}>
            {valueBox(
              Banner.banner1,
              "Our tech",
              "We’re using cutting edge technology to drive accessible urban transportation forward. Our fully electric scooters are a joy to ride!"
            )}
            {valueBox(
              Banner.banner2,
              "Our integrity",
              "We are fully committed to deliver a great yet safe, sustainable micro-mobility experience in every city we serve."
            )}
            {valueBox(
              Banner.banner3,
              "Our community",
              "We support every community we serve. All workers are paid a living wage based on their location and are Scoot employees."
            )}
          </Grid>
        </Stack>
      </Box>
    </>
  );
}

import Images from "@/constants/Images";
import { Box, Grid, Stack, Button, Image, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import clasess from "/app/page.module.css";
export default function AboutPayment() {
  const isMobile = useMediaQuery("(max-width:768px)");
  return (
    <>
      <Box mt={{ sm: "10rem", base: 120 }}>
        <Grid pl={{ sm: "7.5rem" }} align="center" gutter={0}>
          <Grid.Col hiddenFrom="sm" span={12} mb={56}>
            <Stack w="100%" align="end">
              <Image w="21rem" h="auto" src={Images.mobCirclePayment} />
            </Stack>
          </Grid.Col>
          <Grid.Col span={{ sm: 6, base: 12 }}>
            <Stack
              align={isMobile ? "center" : "start"}
              gap="lg"
              px={{ sm: 0, base: "lg" }}
            >
              <Text
                ta={{ sm: "start", base: "center" }}
                fz={{ sm: 48, base: 32 }}
                fw="bold"
                ff="monospace"
                c="#495567"
                style={{ lineHeight: 1 }}
              >
                Zero hassle
                <br /> payments
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
                    Our payment is as easy as one two three. We accept most
                    credit cards and debit cards. You can also link your PayPal
                    account inside the app. Need to pay later? No worries! You
                    can defer payment for up to a month.
                  </>
                ) : (
                  <>
                    Our payment is as easy as one two three. We accept <br />
                    most credit cards and debit cards. You can also <br />
                    link your PayPal account inside the app. Need to
                    <br /> pay later? No worries! You can defer payment for
                    <br />
                    up to a month.
                  </>
                )}
              </Text>
              <Button className={clasess.defaultBtn}>Learn More</Button>
            </Stack>
          </Grid.Col>
          <Grid.Col span={6} visibleFrom="sm">
            <Stack w="100%" justify="flex-end">
              <Image src={Images.circlePayment} />
            </Stack>
          </Grid.Col>
        </Grid>
      </Box>
    </>
  );
}

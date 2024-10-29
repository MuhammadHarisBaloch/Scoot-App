import Icons from "@/constants/Icons";
import LogoImages from "@/constants/LogoImages";
import {
  BackgroundImage,
  Box,
  Grid,
  Group,
  Text,
  Image,
  Flex,
  Stack,
  UnstyledButton,
  Center,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import Link from "next/link";
import clasess from "/app/page.module.css";

export default function Footer() {
  const isMobile = useMediaQuery("(max-width:768px)");
  return (
    <>
      <Box mt={200}>
        <BackgroundImage
          w="100%"
          src={
            isMobile
              ? "/BackgroundImage/mob-footer.png"
              : "/BackgroundImage/footer.png"
          }
        >
          <Grid
            pl={{ sm: "8rem", base: 0 }}
            py="5rem"
            gutter={{ sm: "0", base: "0" }}
            align="center"
            justify="space-between"
          >
            <Grid.Col span={{ sm: 6, base: 12 }}>
              <Text
                fz={{ sm: 46, base: 32 }}
                fw="bold"
                ff="monospace"
                c="white"
                ta={{ sm: "start", base: "center" }}
                style={{ lineHeight: 1.2 }}
              >
                {isMobile ? (
                  <>
                    Sign up and Scoot
                    <br /> off today
                  </>
                ) : (
                  <>
                    Sign up and <br />
                    Scoot off today
                  </>
                )}
              </Text>
            </Grid.Col>
            <Grid.Col span={{ sm: 6, base: 12 }}>
              <Center>
                <Flex
                  pt={{ sm: "0", base: "2rem" }}
                  w="100%"
                  gap="lg"
                  justify={{ base: "center" }}
                >
                  <Image
                    w={{ base: 113.57 }}
                    h={{ base: 40 }}
                    src={LogoImages.appStoreLogo}
                  ></Image>
                  <Image
                    w={{ base: 113.57 }}
                    h={{ base: 40 }}
                    src={LogoImages.googlePlayLogo}
                  ></Image>
                </Flex>
              </Center>
            </Grid.Col>
          </Grid>
        </BackgroundImage>
        <Box bg="#333A44" py="2rem" px="8rem" visibleFrom="sm">
          <Group justify="space-between">
            <Group gap="4rem" align="center">
              <Link href="/">
                <Image src={LogoImages.whiteLogo}></Image>
              </Link>
              <UnstyledButton
                component={Link}
                href="/about"
                className={clasess.unstyleBtn}
              >
                About
              </UnstyledButton>
              <UnstyledButton
                component={Link}
                href="/location"
                className={clasess.unstyleBtn}
              >
                Location
              </UnstyledButton>
              <UnstyledButton
                component={Link}
                href="/careers"
                className={clasess.unstyleBtn}
              >
                Careers
              </UnstyledButton>
            </Group>
            <Group>
              <Image src={Icons.yellowFacebookIcon}></Image>
              <Image src={Icons.yellowTwitterIcon}></Image>
              <Image src={Icons.yellowInstagramIcon}></Image>
            </Group>
          </Group>
        </Box>
        <Box bg="#333A44" py="4rem" hiddenFrom="sm">
          <Stack gap="5rem" align="center" justify="center">
            <Stack gap="lg" align="center" justify="center">
              <Link href="/">
                <Image w={107.82} h={28.56} src={LogoImages.whiteLogo}></Image>
              </Link>
              <Text
                component={Link}
                href="/about"
                fz="h4"
                fw="bold"
                ff="monospace"
                c="#939CAA"
                mt="md"
              >
                About
              </Text>
              <Text
                component={Link}
                href="/location"
                fz="h4"
                fw="bold"
                ff="monospace"
                c="#939CAA"
              >
                Location
              </Text>
              <Text
                component={Link}
                href="/careers"
                fz="h4"
                fw="bold"
                ff="monospace"
                c="#939CAA"
              >
                Careers
              </Text>
            </Stack>
            <Group>
              <Image src={Icons.yellowFacebookIcon}></Image>
              <Image src={Icons.yellowTwitterIcon}></Image>
              <Image src={Icons.yellowInstagramIcon}></Image>
            </Group>
          </Stack>
        </Box>
      </Box>
    </>
  );
}

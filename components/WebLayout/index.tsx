"use client";
import LogoImages from "@/constants/LogoImages";
import {
  AppShell,
  Group,
  Burger,
  UnstyledButton,
  Image,
  Button,
  Stack,
  Center,
} from "@mantine/core";
import clasess from "/app/page.module.css";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import { PropsWithChildren } from "react";

export default function WebsiteLayout({ children }: PropsWithChildren) {
  const [opened, { toggle }] = useDisclosure();
  return (
    <>
      <AppShell
        header={{ height: 80 }}
        navbar={{
          width: 2000,
          breakpoint: "sm",
          collapsed: { desktop: true, mobile: !opened },
        }}
      >
        <AppShell.Header>
          <Group h="100%" px="md">
            <Group hiddenFrom="sm" gap={100}>
              <Burger
                opened={opened}
                onClick={toggle}
                size="sm"
                color="#FCB72B"
                lineSize={3}
              />
              <Center>
                <Link href="/">
                  <Image w="75.5" h="20" src={LogoImages.greyLogo}></Image>
                </Link>
              </Center>
            </Group>
            <Group
              px="5rem"
              justify="space-between"
              w="100%"
              visibleFrom="sm"
              align="center"
            >
              <Group ml="xl" gap={58}>
                <Link href="/">
                  <Image src={LogoImages.greyLogo}></Image>
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
              <Button className={clasess.headerBtn}>Get Scootin</Button>
            </Group>
          </Group>
        </AppShell.Header>

        <AppShell.Navbar
          pb={24}
          pt={64}
          px={32}
          w={{ base: "80%" }}
          bg="#333A44"
        >
          <Stack justify="space-between" h="100vh">
            <Stack gap={24}>
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
            </Stack>
            <Button className={clasess.headerBtn}>Get Scootin</Button>
          </Stack>
        </AppShell.Navbar>

        <AppShell.Main>{children}</AppShell.Main>
      </AppShell>
    </>
  );
}

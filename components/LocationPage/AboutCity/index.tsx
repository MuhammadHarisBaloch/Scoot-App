import { Button, Group, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import clasess from "/app/page.module.css";
export default function AboutCity() {
  const isMobile = useMediaQuery("(max-width:768px)");
  return (
    <>
      <Group
        px={{ sm: "6rem", base: "2rem" }}
        gap="2rem"
        justify="center"
        align="center"
      >
        <Text
          fz={{ sm: 48, base: 32 }}
          fw="bold"
          ff="monospace"
          c="#495567"
          style={{ lineHeight: 1 }}
          ta={{ sm: "start", base: "center" }}
        >
          Your city
          <br /> not listed?
        </Text>
        <Text
          ta={{ sm: "start", base: "center" }}
          fz={15}
          fw="normal"
          ff="monospace"
          c="#939CAA"
        >
          {isMobile ? (
            <>
              If you’d like to see Scoot in your hometown, be sure to let us
              know. We track requests and plan launches based on demand. Feel
              free to message us by clicking the link or messaging us on social.
            </>
          ) : (
            <>
              If you’d like to see Scoot in your hometown, be sure to let us
              <br /> know. We track requests and plan launches based on <br />
              demand. Feel free to message us by clicking the link or <br />
              messaging us on social.
            </>
          )}
        </Text>
        <Button className={clasess.defaultBtn}>Message Us</Button>
      </Group>
    </>
  );
}

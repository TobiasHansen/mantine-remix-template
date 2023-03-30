import { Text, Button, Stack } from "@mantine/core";
import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <Stack align="center" mt={50}>
      <Text size="xl" weight={500}>
        Welcome to Mantine!
      </Text>
      <Button component={Link} to="page-with-error">Go to page with error</Button>
    </Stack>
  );
}

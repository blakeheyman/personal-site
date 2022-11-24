import { Grid, Text } from "@nextui-org/react";

export default function Resume() {
  return (
    <div style={{ margin: "0 20px" }}>
      <Text h1 style={{ textAlign: "center" }}>
        My Resume
      </Text>

      <Grid.Container justify="center">
        <Grid xs={12} md={8}>
          <iframe
            width="100%"
            src="BlakeHeymanResume.pdf#toolbar=0&view=FitH"
            style={{ aspectRatio: 8.5 / 11 }}
          />
        </Grid>
      </Grid.Container>
    </div>
  );
}

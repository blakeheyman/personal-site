import styles from "../styles/Home.module.css";
import { Text, Spacer, Grid, Button, Link } from "@nextui-org/react";
import HomePortrait from "../assets/homeportrait.svg";

export default function Home() {
  return (
    <div style={{ margin: 20 }}>
      <Spacer y={2} />
      <Grid.Container gap={4} justify="center" alignItems="center">
        <Grid xs={12} md={4}>
          <div>
            <Text className={styles.heading}>Hi, I’m Blake</Text>
            <Spacer y={0.5} />
            <Text color="primary" className={styles.subheading}>
              Mobile Developer
            </Text>
            <Spacer y={2} />
            <Link href="mailto:blake.heyman@gmail.com">
              <Button size="xl" css={{ bc: "Black" }}>
                <Text color="white" className={styles.buttonText}>
                  Contact
                </Text>
              </Button>
            </Link>
          </div>
        </Grid>
        <Grid xs={12} md={6}>
          <HomePortrait />
        </Grid>
      </Grid.Container>
    </div>
  );
}

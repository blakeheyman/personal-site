import styles from "../styles/Home.module.css";
import { Text, Spacer, Grid, Button, Link, Image } from "@nextui-org/react";
import HomePortrait from "../assets/homeportrait.png";

export default function Home() {
  return (
    <div style={{ margin: 20 }}>
      <Grid xs={0} md={12}>
        <Spacer y={4} />
      </Grid>
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
          <Image
            src={HomePortrait.src}
            alt="I’m a mobile developer based out of Boston, who intersects humility and empathy in coding."
          />
        </Grid>
      </Grid.Container>
    </div>
  );
}

import { Text, Grid, Image } from "@nextui-org/react";
import styles from "../../styles/About.module.css";
import Portrait from "../../assets/aboutportrait.jpg";

export default function About() {
  return (
    <Grid.Container direction="row-reverse">
      <Grid xs={0} md={5}>
        <Image
          src={Portrait.src}
          objectFit="cover"
          width="100%"
          height="calc(100vh - 100px)"
          css={{ objectPosition: "50% 30%" }}
          alt="Portrait of Blake"
        />
      </Grid>

      <Grid xs={12} md={0}>
        <Image
          src={Portrait.src}
          objectFit="cover"
          width="100%"
          height={400}
          css={{ objectPosition: "50% 30%" }}
          alt="Portrait of Blake"
        />
      </Grid>
      <Grid xs={0} md={1} />
      <Grid xs={12} md={5}>
        <div className={styles.container}>
          <Text h1>About Me</Text>
          <Text className={styles.text}>
            I am currently a senior at Northeastern University majoring in
            computer science. My concentration is human-centered computing, and
            I bring these humanistic values into the work I do.
            <br />
            <br />
            I am a problem-solver with a passion for coding as a form of
            empowerment. I am drawn to opportunities that leverage mobile and
            web technology to benefit people in need.
            <br />
            <br />
            Outside of work, you’ll find me rock climbing, thrifting, or playing
            Pokémon GO. I am always looking for new restaurants to try in
            Boston.
          </Text>
        </div>
      </Grid>
      <Grid xs={0} md={1} />
    </Grid.Container>
  );
}

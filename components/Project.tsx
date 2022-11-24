import {
  Button,
  Card,
  Grid,
  Text,
  Image,
  Spacer,
  Link,
} from "@nextui-org/react";
import styles from "../styles/Project.module.css";

type ProjectProps = {
  imageSrc: string;
  title: string;
  subtitle: string;
  caption: string;
  buttonIcon: JSX.Element;
  buttonText: string;
  buttonHref: string;
};

export default function Project(props: ProjectProps) {
  return (
    <Card css={{ w: "100%", h: "700px", dropShadow: "none", boxShadow: "$lg" }}>
      <Card.Body css={{ p: 0 }}>
        <Card.Image
          src={props.imageSrc}
          objectFit="cover"
          width="100%"
          height="100%"
          css={{ objectPosition: "50% 0%" }}
        />
      </Card.Body>
      <Card.Footer
        css={{
          bgBlur: "#000000aa",
          position: "absolute",
          borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
          bottom: 0,
        }}
      >
        <Grid.Container justify="center">
          <Grid xs={11}>
            <Text className={styles.title} color="white">
              {props.title}
            </Text>
          </Grid>
          <Grid xs={11}>
            <Text className={styles.subtitle} color="primary">
              {props.subtitle}
            </Text>
          </Grid>
          <Grid xs={11}>
            <Text className={styles.caption} color="white">
              {props.caption}
            </Text>
          </Grid>
          <Grid>
            <Link href={props.buttonHref}>
              <Button
                auto
                color="default"
                icon={props.buttonIcon}
                css={{ p: 25, background: "$white", mt: 30, mb: 20 }}
              >
                <Text className={styles.buttonText}>{props.buttonText}</Text>
              </Button>
            </Link>
          </Grid>
        </Grid.Container>
      </Card.Footer>
      {/* <Card.Footer css={{ justifyItems: "flex-start" }}>
        <Row wrap="wrap" justify="space-between" align="center">
          <Text b>Test</Text>
          <Text
            css={{
              color: "$accents7",
              fontWeight: "$semibold",
              fontSize: "$sm",
            }}
          >
            Test
          </Text>
        </Row>
      </Card.Footer> */}
    </Card>
  );
}

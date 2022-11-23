import { Link, Navbar, Spacer, Text } from "@nextui-org/react";
import LinkedIn from "../assets/linkedin.svg";
import GitHub from "../assets/github.svg";
import Mail from "../assets/mail.svg";
import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <Navbar height={100} disableShadow>
      <Navbar.Toggle aria-label="Toggle navigation" showIn="sm" />
      <Navbar.Brand>
        <Link href="/">
          <Text color="primary" className={styles.brand}>
            Blake Heyman
          </Text>
        </Link>
      </Navbar.Brand>

      <Navbar.Content gap={100} hideIn="sm">
        <Navbar.Link color="inherit" href="about">
          <Text className={styles.tab}>About</Text>
        </Navbar.Link>
        <Navbar.Link color="inherit" href="projects">
          <Text className={styles.tab}>Projects</Text>
        </Navbar.Link>
        <Navbar.Link color="inherit" href="resume">
          <Text className={styles.tab}>Resume</Text>
        </Navbar.Link>
      </Navbar.Content>

      <Navbar.Content gap={45} hideIn="xs">
        <Navbar.Link href="https://www.linkedin.com/in/blakeheyman/">
          <LinkedIn />
        </Navbar.Link>
        <Navbar.Link href="https://github.com/blakeheyman">
          <GitHub />
        </Navbar.Link>
        <Navbar.Link href="mailto:blake.heyman@gmail.com">
          <Mail />
        </Navbar.Link>
      </Navbar.Content>
      <Navbar.Content showIn="xs" />

      <Navbar.Collapse>
        <Navbar.CollapseItem>
          <CollapseContent title="About" href="about" />
        </Navbar.CollapseItem>
        <Navbar.CollapseItem>
          <CollapseContent title="Projects" href="projects" />
        </Navbar.CollapseItem>
        <Navbar.CollapseItem>
          <CollapseContent title="Resume" href="resume" />
        </Navbar.CollapseItem>
        <Navbar.CollapseItem>
          <CollapseContent
            icon={<LinkedIn />}
            title="LinkedIn"
            href="https://www.linkedin.com/in/blakeheyman/"
          />
        </Navbar.CollapseItem>
        <Navbar.CollapseItem>
          <CollapseContent
            icon={<GitHub />}
            title="GitHub"
            href="https://github.com/blakeheyman"
          />
        </Navbar.CollapseItem>
        <Navbar.CollapseItem>
          <CollapseContent
            icon={<Mail />}
            title="Email"
            href="mailto:blake.heyman@gmail.com"
          />
        </Navbar.CollapseItem>
      </Navbar.Collapse>
    </Navbar>
  );
}

type CollapseContentProps = {
  icon?: JSX.Element;
  title?: string;
  href: string;
};

function CollapseContent(props: CollapseContentProps) {
  return (
    <Link href={props.href}>
      {props.icon && (
        <>
          {props.icon}
          <Spacer x={0.5} />
        </>
      )}
      <Text className={styles.tab}>{props.title}</Text>
    </Link>
  );
}

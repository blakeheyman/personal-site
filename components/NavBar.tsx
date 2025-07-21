import {
  Navbar,
  Link,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/react";
import LinkedIn from "../assets/linkedin.svg";
import GitHub from "../assets/github.svg";
import Mail from "../assets/mail.svg";
import { JSX } from "react";
import React from "react";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar
      maxWidth="xl"
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent>
        <NavbarBrand>
          <Link href="/">
            <h1 className="font-bold text-3xl text-primary">
              Blake Heyman
            </h1>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      {/* To align the brand to the center on smaller screens */}
      <NavbarContent justify="end" className="sm:hidden" />

      <NavbarContent justify="center" className="hidden sm:flex gap-20">
        <NavbarItem>
          <Link
            href="/about"
            className="text-inherit font-normal text-2xl"
          >
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="/projects"
            className="text-inherit font-normal text-2xl"
          >
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="/resume"
            className="text-inherit font-normal text-2xl"
          >
            Resume
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end" className="hidden lg:flex gap-8">
        <NavbarItem>
          <Link
            href="https://www.linkedin.com/in/blakeheyman/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn />
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="https://github.com/blakeheyman"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHub />
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="mailto:blake.heyman@gmail.com">
            <Mail />
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        <NavbarMenuItem className="mb-2">
          <CollapseContent title="About" href="about" />
        </NavbarMenuItem>
        <NavbarMenuItem className="mb-2">
          <CollapseContent title="Projects" href="projects" />
        </NavbarMenuItem>
        <NavbarMenuItem className="mb-2">
          <CollapseContent title="Resume" href="resume" />
        </NavbarMenuItem>
        <NavbarMenuItem>
          <CollapseContent
            icon={<LinkedIn />}
            title="LinkedIn"
            href="https://www.linkedin.com/in/blakeheyman/"
          />
        </NavbarMenuItem>
        <NavbarMenuItem>
          <CollapseContent
            icon={<GitHub />}
            title="GitHub"
            href="https://github.com/blakeheyman"
          />
        </NavbarMenuItem>
        <NavbarMenuItem>
          <CollapseContent
            icon={<Mail />}
            title="Email"
            href="mailto:blake.heyman@gmail.com"
          />
        </NavbarMenuItem>
      </NavbarMenu>
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
      <a className="flex items-center font-normal text-2xl">
        {props.icon && <span className="mr-2 ">{props.icon}</span>}
        {props.title}
      </a>
    </Link>
  );
}

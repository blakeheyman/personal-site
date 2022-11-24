import { Grid, Text } from "@nextui-org/react";
import Project from "../../components/Project";
import Raidbot from "../../assets/raidbot.png";
import Website from "../../assets/personalwebsite.png";
import Lotus from "../../assets/lotus.png";
import GitHub from "../../assets/githubsmall.svg";
import Discord from "../../assets/discord.svg";

export default function Projects() {
  return (
    <div style={{ margin: "0 20px" }}>
      <Text h1 style={{ textAlign: "center" }}>
        My Projects
      </Text>
      <Grid.Container gap={4} justify="center">
        <Grid xs={12} sm={6} md={3.75}>
          <Project
            imageSrc={Raidbot.src}
            title={"Raidbot"}
            subtitle={"Node, TypeScript, PostgreSQL, Heroku"}
            caption={
              "Discord bot to automate Pokémon GO remote raiding with over 200,000 users"
            }
            buttonIcon={<Discord />}
            buttonText={"View on Discord"}
            buttonHref={"https://discord.gg/pogoraiders"}
          />
        </Grid>
        <Grid xs={12} sm={6} md={3.75}>
          <Project
            imageSrc={Website.src}
            title={"Personal Website"}
            subtitle={"React, TypeScript, NextUI"}
            caption={
              "The page you’re looking at right now was designed and built from scratch by me"
            }
            buttonIcon={<GitHub />}
            buttonText={"View on GitHub"}
            buttonHref={"https://github.com/blakeheyman/personal-site"}
          />
        </Grid>
        <Grid xs={12} sm={6} md={3.75}>
          <Project
            imageSrc={Lotus.src}
            title={"Lotus (WIP)"}
            subtitle={"Swift/SwiftUI"}
            caption={
              "iOS app to browse Magic: the Gathering cards using the Scryfall REST API"
            }
            buttonIcon={<GitHub />}
            buttonText={"View on GitHub"}
            buttonHref={"https://github.com/blakeheyman/Lotus"}
          />
        </Grid>
      </Grid.Container>
    </div>
  );
}

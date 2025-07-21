import Project from "../../components/Project";
import Raidbot from "../../assets/raidbot.png";
import Website from "../../assets/personalwebsite.png";
import Lotus from "../../assets/lotus.png";
import GitHub from "../../assets/githubsmall.svg";
import Discord from "../../assets/discord.svg";

export default function Projects() {
  return (
    <div className="m-5">
      <h1 className="text-center text-4xl font-bold mb-8">My Projects</h1>

      <div className="grid grid-cols-12 justify-center gap-6">
        <Project
          imageSrc={Raidbot.src}
          title="Raidbot"
          subtitle="Node, TypeScript, PostgreSQL, Heroku"
          caption="Discord bot to automate Pokémon GO remote raiding with over 200,000 users"
          buttonIcon={<Discord />}
          buttonText="View on Discord"
          buttonHref="https://discord.gg/pogoraiders"
          className="col-span-12 md:col-span-6 lg:col-span-4"
        />

        <Project
          imageSrc={Website.src}
          title="Personal Website"
          subtitle="React, TypeScript, HeroUI, Tailwind CSS"
          caption="The page you’re looking at right now was designed and built from scratch by me"
          buttonIcon={<GitHub />}
          buttonText="View on GitHub"
          buttonHref="https://github.com/blakeheyman/personal-site"
          className="col-span-12 md:col-span-6 lg:col-span-4"
        />

        <Project
          imageSrc={Lotus.src}
          title="Lotus (WIP)"
          subtitle="Swift/SwiftUI"
          caption="iOS app to browse Magic: the Gathering cards using the Scryfall REST API"
          buttonIcon={<GitHub />}
          buttonText="View on GitHub"
          buttonHref="https://github.com/blakeheyman/Lotus"
          className="col-span-12 md:col-span-6 lg:col-span-4"
        />
      </div>
    </div>
  );
}

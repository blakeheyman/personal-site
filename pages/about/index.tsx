import { Image } from "@heroui/react";
import Portrait from "../../assets/aboutportrait.jpg";

export default function About() {
  return (
    <div className="flex flex-col lg:flex-row-reverse h-[calc(100vh-64px)]">
      <Image
        src={Portrait.src}
        radius="none"
        removeWrapper
        className="object-cover object-[50%_30%] flex-none w-full h-100 lg:h-full lg:w-2/5"
        alt="Portrait of Blake"
      />

      {/* Text content */}
      <div className="flex flex-col flex-[2] p-16 lg:p-40">
        <h1 className="font-bold text-4xl mb-6">About Me</h1>
        <p className="font-normal text-xl leading-relaxed">
          I am currently a senior at Northeastern University majoring in
          computer science. My concentration is human-centered computing, and I
          bring these humanistic values into the work I do.
          <br />
          <br />
          I am a problem-solver with a passion for coding as a form of
          empowerment. I am drawn to opportunities that leverage mobile and web
          technology to benefit people in need.
          <br />
          <br />
          Outside of work, you’ll find me rock climbing, thrifting, or playing
          Pokémon GO. I am always looking for new restaurants to try in Boston.
        </p>
      </div>
    </div>
  );
}

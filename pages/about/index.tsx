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
          I'm currently a web and mobile developer at Wellframe, where I've been
          building tools that help people navigate their healthcare more easily
          and effectively. I graduated from Northeastern University in 2023 with
          a degree in computer science, concentrating in human-centered
          computing, an approach I bring to work every day.
          <br />
          <br />
          I'm a problem-solver at heart, and I see coding as a powerful way to
          support and empower others. I'm especially passionate about creating
          intuitive, accessible experiences through thoughtful design and
          technology.
          <br />
          <br />
          Outside of work, you'll usually find me baking, thrifting, or playing
          on my 3DS. I also love exploring new restaurants around Boston.
        </p>
      </div>
    </div>
  );
}

import { Image, Button, Link } from "@heroui/react";
import HomePortrait from "../assets/homeportrait.png";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row gap-4 justify-center items-center m-8">
      {/* Text block */}
      <div className="w-full md:w-1/3">
        <h1 className="font-bold text-6xl mb-2">Hi, I’m Blake</h1>
        <h2 className="font-medium text-6xl text-primary mb-6">
          Mobile Developer
        </h2>
        <Link href="mailto:blake.heyman@gmail.com">
          <Button
            size="lg"
            className="bg-black text-white font-medium text-3xl px-16 py-8"
          >
            Contact
          </Button>
        </Link>
      </div>

      {/* Image */}
      <Image
        src={HomePortrait.src}
        className="w-full md:w-3/5"
        alt="I'm a mobile developer based out of Boston, who intersects humility and empathy in coding."
        removeWrapper
      />
    </div>
  );
}

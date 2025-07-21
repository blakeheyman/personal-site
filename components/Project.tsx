import {
  Card,
  Button,
  Link,
  Image,
  CardFooter,
  CardHeader,
} from "@heroui/react";
import { JSX } from "react";

type ProjectProps = {
  imageSrc: string;
  title: string;
  subtitle: string;
  caption: string;
  buttonIcon: JSX.Element;
  buttonText: string;
  buttonHref: string;
  className?: string;
};

export default function Project(props: ProjectProps) {
  return (
    <Card
      isFooterBlurred
      className={`w-full h-[400px] lg:h-[600px] bg-black/80 ${props.className}`}
    >
      <CardHeader className="absolute z-11 top-1 flex-col items-start">
        <h3 className="font-bold text-sm text-primary uppercase">
          {props.subtitle}
        </h3>
        <h4 className="font-bold text-4xl text-white">{props.title}</h4>
      </CardHeader>
      <Image
        src={props.imageSrc}
        className="object-cover my-24 mx-16"
        alt={props.title}
        removeWrapper
      />
      <CardFooter className="absolute bg-black/70 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
        <div className="flex flex-col grow">
          <p className="font-medium text-lg text-white">{props.caption}</p>
          <Link href={props.buttonHref} className="self-center mt-2">
            <Button className="bg-white py-6">
              {props.buttonIcon}
              <span className="font-medium text-lg">{props.buttonText}</span>
            </Button>
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}

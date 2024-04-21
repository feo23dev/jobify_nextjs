import Image from "next/image";
import Logo from "../assets/logo.svg";
import LandingImgfrom from "../assets/main.svg";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Home() {
  return (
    <main className="max-w-6xl max-auto px-4 sm:px-8 py-6">
      <header>
        <Image src={Logo} alt="logo"></Image>
      </header>
      <section className="max-w-6xl mx-auto px-4 sm:px-8 h-screen -mt-20 grid lg:grid-cols-[1fr,400px] items-center">
        <div>
          <h1 className="capitalize text-4xl md:text-7xl font-bold">
            job <span className="text-primary"> tracking</span>
          </h1>
          <p className="leading-loose max-w-md mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis corrupti eum assumenda cumque distinctio. Minima earum,
            maxime corrupti sapiente dolores perspiciatis repudiandae animi,
            nemo iste labore reprehenderit. Atque, provident voluptate?
          </p>
          <Button asChild className="mt-4">
            <Link href="/add-job">Get Started</Link>
          </Button>
        </div>
        <Image
          src={LandingImgfrom}
          alt="landing"
          className="hidden lg:block"
        ></Image>
      </section>
    </main>
  );
}

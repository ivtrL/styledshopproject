import Image from "next/image";
import Navbar from "./Navbar/Navbar";
import Link from "next/link";
import { buttonVariants } from "./Button";

export default function Header() {
  return (
    <header className="overflow-hidden relative w-full h-full">
      <Navbar />
      <div className="sm:pt-24 sm:pb-40 pt-16 pb-80 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl sm:px-6 sm:static px-4 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="sm:text-6xl dark:text-white text-gray-900 tracking-tight font-bold text-4xl mix-blend-soft-light drop-shadow-xl transition-all duration-500">
              Novos Estilos.
            </h1>
            <p className="dark:text-gray-300 text-gray-500 text-xl mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              recusandae molestiae, eligendi ut praesentium incidunt quia quas
              veniam laboriosam possimus, quod laudantium nam, est deleniti. Sed
              hic commodi et recusandae?
            </p>
          </div>
          <div>
            <div className="mt-10">
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:top-0 lg:bottom-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <Image
                          width={352}
                          height={512}
                          src="/home-page-03-hero-image-tile-01.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Image
                          width={352}
                          height={512}
                          src="/home-page-03-hero-image-tile-02.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Image
                          width={352}
                          height={512}
                          src="/home-page-03-hero-image-tile-03.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Image
                          width={352}
                          height={512}
                          src="/home-page-03-hero-image-tile-04.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Image
                          width={352}
                          height={512}
                          src="/home-page-03-hero-image-tile-05.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Image
                          width={352}
                          height={512}
                          src="/home-page-03-hero-image-tile-06.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Image
                          width={352}
                          height={512}
                          src="/home-page-03-hero-image-tile-07.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Link href="/#" className={buttonVariants()}>
                Olhar coleção
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

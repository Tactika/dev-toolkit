import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="my-6 mx-auto max-w-7xl px-4 sm:mt-6 md:mt-20 text-center ">
      <h1 className="font-extrabold text-gray-900">
        <p className="text-xl sm:text-3xl md:text-4xl text-orange-400">
          <Image src="/JoBox Tool Co-logos_transparent.png" alt="JoBox Tool Company Logo" height="400" width="400" />
        </p>
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-700 to-orange-400 text-4xl sm:text-6xl md:text-7xl">
          Tools For Every Project
        </p>
      </h1>
      <div className="mt-5 max-w-md mx-auto flex justify-center items-center md:mt-8">
        <Link href="#">
          <a className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium py-3 border-transparent rounded-md text-white bg-gray-900 hover:bg-orange-400">
            Tool Up Now
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Hero;

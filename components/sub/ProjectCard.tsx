import Image from "next/image";
import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface Props {
  imgUrls: [];
  title: string;
  description: string;
  gitUrl: string;
  previewUrl: string;
}

const ProjectCard: React.FC<Props> = ({ imgUrls, title, description, gitUrl, previewUrl }) => {
  return (
    <div className="z-50 relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] group">
      <Carousel showArrows={false} showIndicators={false} showStatus={false} transitionTime={880} interval={4000} infiniteLoop={true}  autoPlay={true} stopOnHover={true} showThumbs={false} >
        {imgUrls.map((imgUrl: string, index: number) => (
          <div key={index}>
            <Image src={imgUrl} alt={`Slide ${index}`} width={1000} height={1000} className="w-full h-[250px] object-cover" />
          </div>
        ))}
      </Carousel>
      <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
        <a
          href={gitUrl}
          className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
        >
          <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
        </a>
        <a
          href={previewUrl}
          className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
        >
          <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
        </a>
      </div>
      <div className="p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
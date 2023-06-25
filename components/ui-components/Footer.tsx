import { Icons } from '@/assets';
import Image from 'next/image';
import React from 'react';
import Button from '../atom-components/Button';

interface FooterProps {}

const Footer = ({}: FooterProps) => {
  return (
    <footer className="max-w-[1024px] mx-auto px-12 h-[100px]">
      <div className=" flex justify-center items-center flex-col">
        <Button>
          <a href="https://github.com/XionWCFM" target="_blank">
            <Image
              src={Icons.GitHubIcon.src}
              alt={Icons.GitHubIcon.alt}
              width={Icons.GitHubIcon.width}
              height={Icons.GitHubIcon.height}
            />
          </a>
        </Button>
        <Button className=" mt-2">
          <a
            href="https://xionwcfm.tistory.com/"
            target="_blank"
            className=" text-gray-500 dark:text-gray-200 font-thin"
          >
            visit my tistory blog
          </a>
        </Button>
      </div>

      <p className=" py-2 mt-2 px-2"></p>
    </footer>
  );
};

export default Footer;

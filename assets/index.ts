import FaceBook from '@/public/icons/facebook.svg';
import GitHub from '@/public/icons/github.svg';
import Insta from '@/public/icons/insta.svg';
import Moon from '@/public/icons/moon.svg';
import Search from '@/public/icons/search.svg';
import Sun from '@/public/icons/sun.svg';

interface IconType {
  src: typeof FaceBook;
  alt: string;
  width: number;
  height: number;
}

const size = {
  width: 50,
  height: 50,
};

const FaceBookIcon: IconType = {
  src: FaceBook,
  alt: 'facebook',
  ...size,
};
const GitHubIcon: IconType = {
  src: GitHub,
  alt: 'github',
  ...size,
};

const InstaIcon: IconType = {
  src: Insta,
  alt: 'insta',
  ...size,
};
const SunIcon: IconType = {
  src: Sun,
  alt: 'sun',
  ...size,
};
const MoonIcon: IconType = {
  src: Moon,
  alt: 'moon',
  ...size,
};
const SearchIcon: IconType = {
  src: Search,
  alt: 'moon',
  ...size,
};

export const Icons = {
  FaceBookIcon,
  InstaIcon,
  MoonIcon,
  SunIcon,
  SearchIcon,
  GitHubIcon,
};

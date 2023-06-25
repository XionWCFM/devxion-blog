'use client';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Button from '../atom-components/Button';
import { Icons } from '@/assets';
import React from 'react';

interface DarkModeToggleBtnProps {}

const DarkModeToggleBtn = ({}: DarkModeToggleBtnProps) => {
  const { setTheme, theme, systemTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  return (
    <Button>
      {mounted && theme === 'dark' ? (
        <Image
          src={Icons.SunIcon.src}
          alt={Icons.SunIcon.alt}
          width={Icons.SunIcon.width}
          height={Icons.SunIcon.height}
          onClick={() => setTheme('light')}
        />
      ) : (
        <Image
          src={Icons.MoonIcon.src}
          alt={Icons.MoonIcon.alt}
          width={Icons.MoonIcon.width}
          height={Icons.MoonIcon.height}
          onClick={() => setTheme('dark')}
        />
      )}
    </Button>
  );
};

export default DarkModeToggleBtn;

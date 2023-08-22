'use client';
import { Icons } from '@/assets';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import React from 'react';
import Button from '../atom-components/Button';

interface DarkModeToggleBtnProps {}

const DarkModeToggleBtn = ({}: DarkModeToggleBtnProps) => {
  const { setTheme, theme, systemTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  return (
    <Button>
      {mounted && theme === 'dark' ? (
        <Image
          priority
          src={Icons.SunIcon.src}
          alt={Icons.SunIcon.alt}
          width={Icons.SunIcon.width}
          height={Icons.SunIcon.height}
          onClick={() => setTheme('light')}
        />
      ) : (
        <Image
          priority
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

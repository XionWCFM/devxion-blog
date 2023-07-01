import { cn } from '@/utils';
import { cva, VariantProps } from 'class-variance-authority';
import React, { ComponentPropsWithoutRef } from 'react';

const HeadingVariants = cva(
  `
  font-extrabold text-yellow-500 mb-4 smooth
`,
  {
    variants: {
      size: {
        default: ' text-2xl md:text-4xl lg:text-5xl',
        sm: 'text-lg sm:text-xl md:text-3xl lg:text-4xl',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  },
);

interface HeadingParagraphProps
  extends ComponentPropsWithoutRef<'h2'>,
    VariantProps<typeof HeadingVariants> {
  children: React.ReactNode;
  className?: string;
}

const HeadingParagraph = ({
  children,
  className,
  size,
}: HeadingParagraphProps) => {
  return (
    <h2 className={cn(HeadingVariants({ size }), className)}>{children}</h2>
  );
};

export default HeadingParagraph;

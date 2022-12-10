import { IAnimatedSymbolsText } from '@/components/AnimatedSymbolsText';

export type LinkProps = {
  text: string;
  to: string;
  animate: boolean;
  props?: Partial<IAnimatedSymbolsText>;
};

export const links: LinkProps[] = [
  {
    text: 'new Terminaate()',
    to: '/',
    animate: true,
    props: {
      delay: 25,
      clearDelay: 25,
    },
  },
  {
    text: '.works()',
    to: '/works',
    animate: false,
  },
  {
    text: '.contacts()',
    to: '/contacts',
    animate: false,
  },
];

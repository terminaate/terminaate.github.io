import { IAnimatedSymbolsText } from '@/components/AnimatedSymbolsText';
export type LinkProps = {
  text: string;
  to: string;
  animate: boolean;
  props?: Partial<IAnimatedSymbolsText>;
  homeLink?: boolean;
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
    homeLink: true,
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

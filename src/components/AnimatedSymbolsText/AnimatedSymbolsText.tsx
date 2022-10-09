import React, { FC, MouseEventHandler, useEffect, useState } from 'react';
import TextService from '@/services/TextService';


interface IAnimatedSymbolsText {
  className?: string;
  delay?: number;
  clearDelay?: number;
  infinite?: boolean;
  text: string;
  onClick?: MouseEventHandler;
}

const AnimatedSymbolsText: FC<IAnimatedSymbolsText> = ({
                                                         className = '',
                                                         delay = 200,
                                                         clearDelay = delay,
                                                         infinite = false,
                                                         text,
                                                         onClick,
                                                       }) => {
  const [renderText, setRenderText] = useState<string[]>([...text]);
  const [animate, setAnimate] = useState<boolean>(false);

  const updateSymbol = (index: number, newValue: string) => {
    setRenderText(values => values.map((value, i) => i === index ? newValue : value));
  };

  const animation = () => {
    setAnimate(true);
    const oldText = [...renderText];

    for (let i = 0; i < text.length; i++) {
      setTimeout(() => {
        updateSymbol(i, TextService.utf8ToHex(oldText[i]));
      }, delay * i);
      setTimeout(() => {
        updateSymbol(i, oldText[i]);
        if (i === text.length - 1 && infinite) {
          setAnimate(false);
        }
      }, (delay + clearDelay) * i);
    }
  };


  useEffect(() => {
    animation();
  }, [animate]);

  return (
    <span onClick={onClick} className={className}>
			{renderText.join('')}
		</span>
  );
};

export default AnimatedSymbolsText;
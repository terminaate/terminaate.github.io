import React, { FC, HTMLAttributes, useEffect, useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';

export interface IAnimatedSymbolsText extends HTMLAttributes<any> {
  delay?: number;
  clearDelay?: number;
  animate?: boolean;
  setAnimate?: (
    newState: boolean,
  ) => void | React.Dispatch<React.SetStateAction<boolean>>;
  tag?: keyof JSX.IntrinsicElements;
  delayAnim?: number;
  animateOnVisible?: boolean;
  infinite?: boolean;
  text: string;
}

const AnimatedSymbolsText: FC<IAnimatedSymbolsText> = ({
  delay = 50,
  delayAnim = 0,
  clearDelay = delay,
  animate = true,
  setAnimate,
  text,
  tag = 'span',
  animateOnVisible = false,
  infinite = false,
  ...props
}) => {
  const [formattedText, setFormattedText] = useState<string[]>([...text]);
  const [animationIsOn, setAnimationIsOn] = useState<boolean>(false);

  const updateSymbol = (index: number, newValue: string) => {
    setFormattedText((values) =>
      values.map((value, i) => (i === index ? newValue : value)),
    );
  };

  const animation = () => {
    setAnimationIsOn(true);

    setTimeout(() => {
      const oldText = [...formattedText];

      for (let i = 0; i < formattedText.length; i++) {
        setTimeout(() => {
          updateSymbol(i, '#');
        }, delay * i);
        setTimeout(() => {
          updateSymbol(i, oldText[i]);
          if (i === formattedText.length - 1) {
            setAnimationIsOn(false);
            if (setAnimate) {
              setAnimate(false);
            }
          }
        }, (delay + clearDelay) * i);
      }
    }, delayAnim);
  };


  useEffect(() => {
    if (animate && !animationIsOn) {
      animation();
    }
  }, [animate, infinite ? animationIsOn : null]);

  const Component = tag;
  const container = <Component {...props}>{formattedText.join('')}</Component>;

  const onVisibilityChange = (visible: boolean) => {
    if (visible && animateOnVisible && !animationIsOn) {
      animation();
    }
  };

  return animateOnVisible ? (
    <VisibilitySensor partialVisibility={true} onChange={onVisibilityChange}>
      {container}
    </VisibilitySensor>
  ) : (
    container
  );
};

export default AnimatedSymbolsText;

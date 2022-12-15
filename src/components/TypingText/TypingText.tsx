import React, { FC, HTMLAttributes, useEffect, useRef, useState } from 'react';
import cl from './TypingText.module.scss';
import parseText from '@/utils/parseText';
import classNames from 'classnames';
import { motion } from 'framer-motion';

interface ITypingText extends HTMLAttributes<HTMLSpanElement> {
  onStart?: () => void;
  onEnd?: () => void;
  text: string | string[];
  containerClassName?: string;
  defaultDelay?: number;
}

const TypingText: FC<ITypingText> = ({
  text,
  containerClassName,
  onStart = () => {},
  onEnd = () => {},
  defaultDelay = 500,
  ...props
}) => {
  const [renderedWords, setRenderedWords] = useState<string[]>([]);
  const oldText = useRef<ReturnType<typeof parseText>>(parseText(text));
  const [animationIsOn, setAnimationIsOn] = useState<boolean>(false);

  const animate = async () => {
    if (!animationIsOn) {
      setAnimationIsOn(true);
      const parsedText = parseText(text);
      onStart();

      for (let i = 0; i < parsedText.length; i++) {
        const item = parsedText[i];
        const timeoutId = setTimeout(() => {
          setRenderedWords((prevState) =>
            item.text ? [...prevState, item.text] : prevState,
          );
          if (i === parsedText.length - 1) {
            setAnimationIsOn(false);
            onEnd();
          }
          clearTimeout(timeoutId);
        }, (item.delay ? item.delay : defaultDelay) * i);
      }
    }
  };

  useEffect(() => {
    setRenderedWords([]);
    animate();
  }, []);

  useEffect(() => {
    const parsedText = parseText(text);
    if (
      JSON.stringify(parsedText) !== JSON.stringify(oldText.current) &&
      !animationIsOn
    ) {
      setRenderedWords([]);
      animate();
      oldText.current = parsedText;
    }
  }, [text]);

  return (
    <motion.div
      layout={'position'}
      className={classNames(cl.typingTextContainer, containerClassName)}
    >
      {renderedWords.map((word, key) => (
        <span {...props} key={key}>
          {word}
        </span>
      ))}
    </motion.div>
  );
};

export default TypingText;

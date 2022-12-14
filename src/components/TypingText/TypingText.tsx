import React, { FC, HTMLAttributes, useEffect, useState } from 'react';
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
  defaultDelay = 300,
  ...props
}) => {
  const [renderedWords, setRenderedWords] = useState<string[]>([]);

  const animate = () => {
    const parsedText = parseText(text);
    // onStart();

    for (const i of parsedText) {
      setTimeout(() => {
        setRenderedWords((prevState) =>
          i.text ? [...prevState, i.text] : prevState,
        );
      }, (i.delay ? i.delay : defaultDelay) * parsedText.indexOf(i));
    }
  };

  useEffect(() => {
    animate();
  }, []);

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

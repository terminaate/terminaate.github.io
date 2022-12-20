import React, { FC, HTMLAttributes, useEffect, useState } from 'react';
import cl from './TypingText.module.scss';
import classNames from 'classnames';
import { motion } from 'framer-motion';

interface ITypingText extends HTMLAttributes<HTMLSpanElement> {
  text: string | (string | number)[];
  defaultDelay?: number;
  containerClassName?: string;
  onEnd: () => void;
}

const TypingText: FC<ITypingText> = ({
  text,
  defaultDelay = 500,
  containerClassName = '',
  onEnd = () => {},
  ...props
}) => {
  const [renderedWords, setRenderedWords] = useState<string[]>([]);

  useEffect(() => {
    setRenderedWords([]);
  }, []);

  useEffect(() => {
    if (!Array.isArray(text)) {
      text = text.split(' ').map((obj) => (Number(obj) ? Number(obj) : obj));
    }

    const formattedText: any[] = [];

    for (let i = 0; i < text.length; i++) {
      if (typeof text[i] === 'number' && typeof text[i + 1] === 'string') {
        formattedText.push({ text: text[i + 1], delay: text[i] });
      } else if (
        typeof text[i] === 'string' &&
        typeof text[i - 1] !== 'number'
      ) {
        formattedText.push({ text: text[i] });
      } else if (
        typeof text[i] === 'number' &&
        typeof text[i + 1] !== 'string'
      ) {
        formattedText.push({ delay: text[i] });
      }
    }

    let i = -1;

    function delayLoop() {
      i++;
      if (i >= formattedText.length || formattedText[i] === undefined) {
        return onEnd();
      }

      setRenderedWords((prevState) => [
        ...prevState,
        formattedText[i]?.text ? formattedText[i].text : '',
      ]);
      setTimeout(
        delayLoop,
        formattedText[i]?.delay ? formattedText[i].delay : defaultDelay,
      );
    }

    delayLoop();

    // for (const i in formattedText) {
    //   setTimeout(() => {
    //     setRenderedWords((words: string[]) => [
    //       ...words,
    //       formattedText[i].text,
    //     ]);
    //   }, (formattedText[i].delay ? formattedText[i].delay : defaultDelay) * Number(i));
    // }
  }, []);

  return (
    <motion.div
      layout={'position'}
      className={classNames(cl.typingTextContainer, containerClassName)}
    >
      {renderedWords.map((obj, key) => (
        <span {...props} key={key}>
          {obj}
        </span>
      ))}
    </motion.div>
  );
};

export default TypingText;

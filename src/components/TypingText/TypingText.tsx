import React, { FC, HTMLAttributes, useEffect, useRef, useState } from 'react';
import cl from './TypingText.module.scss';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import classNames from 'classnames';

interface ITypingText extends HTMLAttributes<HTMLSpanElement> {
  text: string | (string | number)[];
  defaultDelay?: number;
  animateOnVisible?: boolean;
  containerClassName?: string;
}

const TypingText: FC<ITypingText> = ({
                                       text,
                                       defaultDelay = 300,
                                       animateOnVisible = false,
                                       containerClassName,
                                       ...props
                                     }) => {
  const [renderedWords, setRenderedWords] = useState<string[]>([]);
  const parsedText = useRef<Array<Record<string, any>>>([]);
  const containerRef = useIntersectionObserver(() => {
    if (animateOnVisible && parsedText.current.length) {
      animate();
    }
  });
  const oldText = useRef<ITypingText['text']>(text);
  const [animationIsOn, setAnimationIsOn] = useState<boolean>(false);

  const parseText = () => {
    parsedText.current = [];
    let textArray: (string | number)[];

    if (Array.isArray(text)) {
      textArray = text;
    } else {
      textArray = text.split(' ').map((obj) => (Number(obj) ? Number(obj) : obj));
    }

    for (let i = 0; i < textArray.length; i++) {
      if (typeof textArray[i] === 'number' && typeof textArray[i + 1] === 'string') {
        parsedText.current.push({ text: textArray[i + 1], delay: textArray[i] });
      } else if (
        typeof textArray[i] === 'string' &&
        typeof textArray[i - 1] !== 'number'
      ) {
        parsedText.current.push({ text: textArray[i] });
      } else if (
        typeof textArray[i] === 'number' &&
        typeof textArray[i + 1] !== 'string'
      ) {
        parsedText.current.push({ delay: textArray[i] });
      }
    }
  };

  const animate = () => {
    setAnimationIsOn(true);
    return new Promise(resolve => {
      for (const i in parsedText.current) {
        const timeout = setTimeout(() => {
          const isLastIndex = Number(i) === parsedText.current.length - 1;
          if (isLastIndex) {
            setAnimationIsOn(false);
            clearTimeout(timeout);
            return resolve(0);
          }
          setRenderedWords((words: string[]) => [
            ...words,
            parsedText.current[i].text,
          ]);
        }, (parsedText.current[i].delay ? parsedText.current[i].delay : defaultDelay) * Number(i));
      }
    });
  };

  useEffect(() => {
    parseText();
    if (!animateOnVisible) {
      animate();
    }
  }, []);

  useEffect(() => {
    if (text !== oldText.current && !animationIsOn) {
      // setNewTextDetected();
      setRenderedWords([]);
      parseText();
      if (!animateOnVisible) {
        animate();
      }
      oldText.current = text;
    }
  }, [text, animationIsOn]);

  return (
    <div
      ref={containerRef}
      className={classNames(cl.typingTextContainer, containerClassName!)}
    >
      {renderedWords.map((obj, key) => (
        <span key={key} {...props}>
          {obj}
        </span>
      ))}
    </div>
  );
};

export default TypingText;

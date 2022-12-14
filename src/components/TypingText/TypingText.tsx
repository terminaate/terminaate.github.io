import React, { FC, HTMLAttributes, useEffect, useState } from 'react';

const parseText = (text: string | string[]) => {
  const parsedText: { text?: string; delay?: number }[] = [];
  let textArray: (string | number)[];

  if (Array.isArray(text)) {
    textArray = text;
  } else {
    textArray = text.split(' ').map((obj) => (Number(obj) ? Number(obj) : obj));
  }

  for (let i = 0; i < textArray.length; i++) {
    if (
      typeof textArray[i] === 'number' &&
      typeof textArray[i + 1] === 'string'
    ) {
      parsedText.push({
        text: textArray[i + 1] as string,
        delay: textArray[i] as number,
      });
    } else if (
      typeof textArray[i] === 'string' &&
      typeof textArray[i - 1] !== 'number'
    ) {
      parsedText.push({ text: textArray[i] as string });
    } else if (
      typeof textArray[i] === 'number' &&
      typeof textArray[i + 1] !== 'string'
    ) {
      parsedText.push({ delay: textArray[i] as number });
    }
  }

  return parsedText;
};

interface ITypingText extends HTMLAttributes<HTMLSpanElement> {
  onStart?: () => void;
  onEnd?: () => void;
  text: string | string[];
  containerClassName?: string;
  defaultDelay?: number;
}

const TypingText: FC<ITypingText> = ({
  text,
  onStart = () => {},
  onEnd = () => {},
  containerClassName = '',
  defaultDelay = 300,
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
    <div>
      {renderedWords.map((word, key) => (
        <span key={key}>{word}</span>
      ))}
    </div>
  );
};

export default TypingText;

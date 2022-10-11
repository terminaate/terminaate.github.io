import React, { FC, MouseEventHandler, useEffect, useState } from 'react';
import cl from './TypingText.module.scss';

interface ITypingText {
  text: string | (string | number)[];
  defaultDelay?: number;
  className?: string;
  onClick?: MouseEventHandler;
}

const TypingText: FC<ITypingText> = ({
  text,
  defaultDelay = 300,
  className = '',
  onClick,
}) => {
  const [renderedWords, setRenderedWords] = useState<string[]>([]);

  useEffect(() => {
    if (!Array.isArray(text)) {
      text = text.split(' ').map((obj) => (Number(obj) ? Number(obj) : obj));
    }

    const formattedText: Array<Record<string, any>> = [];

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

    for (const i in formattedText) {
      setTimeout(() => {
        setRenderedWords((words: string[]) => [
          ...words,
          formattedText[i].text,
        ]);
      }, (formattedText[i].delay ? formattedText[i].delay : defaultDelay) * Number(i));
    }
  }, []);

  return (
    <div className={cl.typingTextContainer}>
      {renderedWords.map((obj, key) => (
        <>
          <span onClick={onClick} className={className} key={key}>
            {obj}
          </span>
        </>
      ))}
    </div>
  );
};

export default TypingText;

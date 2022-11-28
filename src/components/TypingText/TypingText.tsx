import React, { FC, HTMLAttributes, useEffect, useRef, useState } from 'react';
import cl from './TypingText.module.scss';
import classNames from 'classnames';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

interface ITypingText extends HTMLAttributes<HTMLSpanElement> {
  text: string | (string | number)[];
  defaultDelay?: number;
  animateOnVisible?: boolean;
  visibleProps?: HTMLAttributes<HTMLSpanElement>;
  containerClassName?: string;
}

const TypingText: FC<ITypingText> = ({
  text,
  defaultDelay = 300,
  animateOnVisible = false,
  visibleProps = {},
  containerClassName,
  ...props
}) => {
  const [parsedText, setParsedText] = useState<Array<Record<string, any>>>([]);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const parsedTextRef = useRef<typeof parsedText>([]);
  const containerRef = useIntersectionObserver(
    () => {
      if (animateOnVisible && parsedTextRef.current.length) {
        animate(true);
        setIsVisible(true);
      }
    },
    () => {
      if (animateOnVisible && parsedTextRef.current.length) {
        animate(false);
        setIsVisible(false);
      }
    },
  );
  const oldText = useRef<ITypingText['text']>(text);

  const pushParsedText = (newObj: Record<string, any>) => {
    setParsedText((words) => [...words, newObj]);
  };

  const parseText = () => {
    setParsedText([]);
    let textArray: (string | number)[];

    if (Array.isArray(text)) {
      textArray = text;
    } else {
      textArray = text
        .split(' ')
        .map((obj) => (Number(obj) ? Number(obj) : obj));
    }

    for (let i = 0; i < textArray.length; i++) {
      if (
        typeof textArray[i] === 'number' &&
        typeof textArray[i + 1] === 'string'
      ) {
        pushParsedText({
          text: textArray[i + 1],
          delay: textArray[i],
          visible: !animateOnVisible,
        });
      } else if (
        typeof textArray[i] === 'string' &&
        typeof textArray[i - 1] !== 'number'
      ) {
        pushParsedText({ text: textArray[i], visible: !animateOnVisible });
      } else if (
        typeof textArray[i] === 'number' &&
        typeof textArray[i + 1] !== 'string'
      ) {
        pushParsedText({ delay: textArray[i], visible: !animateOnVisible });
      }
    }
  };

  useEffect(() => {
    if (parsedText.length) {
      parsedTextRef.current = parsedText;
    }
  }, [parsedText]);

  useEffect(() => {
    parseText();
  }, []);

  const animate = (state: boolean) => {
    if (parsedText.length) {
      setParsedText((prevState) =>
        prevState.map((o) => ({ ...o, visible: state })),
      );
    } else if (parsedTextRef.current.length) {
      parsedTextRef.current = parsedTextRef.current.map((o) => ({
        ...o,
        visible: state,
      }));
      setParsedText(parsedTextRef.current);
    }
  };

  useEffect(() => {
    if (text !== oldText.current) {
      parseText();
      if (animateOnVisible && isVisible) {
        animate(true);
      }
      oldText.current = text;
    }
  }, [text]);

  const classes = classNames([
    props.className,
    { [visibleProps?.className ?? '']: animateOnVisible && isVisible },
  ]);
  const mergedProps = {
    ...props,
    ...(animateOnVisible && isVisible ? visibleProps : {}),
  };
  return (
    <div
      ref={containerRef}
      className={classNames(cl.typingTextContainer, containerClassName!)}
    >
      {parsedText.map((obj, key) => (
        <span
          data-visible={obj.visible}
          style={{
            animationDelay:
              (obj.delay ? obj.delay : defaultDelay) * Number(key) + 'ms',
          }}
          key={key}
          {...mergedProps}
          className={classes}
        >
          {obj.text}
        </span>
      ))}
    </div>
  );
};

export default TypingText;
